define([
  'angular',
  'lodash',
  'config'
],
function (angular, _, config) {
  'use strict';

  var module = angular.module('grafana.controllers');
  var targetLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

  module.controller('HistogramTargetCtrl', function($scope, $sce, templateSrv) {

    $scope.init = function() {
      $scope.target.target = $scope.target.target || '';
      $scope.targetLetters = targetLetters;

      //parseTarget();
    };

    $scope.getAltSegments = function (index) {
      $scope.altSegments = [];

      var query = index === 0 ?  '*' : getSegmentPathUpTo(index) + '.*';

      return $scope.datasource.metricFindQuery(query)
        .then(function(segments) {
          $scope.altSegments = _.map(segments, function(segment) {
            return new MetricSegment({ value: segment.text, expandable: segment.expandable });
          });

          if ($scope.altSegments.length === 0) {
            return;
          }

          // add template variables
          _.each(templateSrv.variables, function(variable) {
            $scope.altSegments.unshift(new MetricSegment({
              type: 'template',
              value: '$' + variable.name,
              expandable: true,
            }));
          });

          // add wildcard option
          $scope.altSegments.unshift(new MetricSegment('*'));
        })
        .then(null, function(err) {
          $scope.parserError = err.message || 'Failed to issue metric query';
        });
    };

    $scope.segmentValueChanged = function (segment, segmentIndex) {
      delete $scope.parserError;

      if ($scope.functions.length > 0 && $scope.functions[0].def.fake) {
        $scope.functions = [];
      }

      if (segment.expandable) {
        return checkOtherSegments(segmentIndex + 1)
          .then(function () {
            setSegmentFocus(segmentIndex + 1);
            $scope.targetChanged();
          });
      }
      else {
        $scope.segments = $scope.segments.splice(0, segmentIndex + 1);
      }

      setSegmentFocus(segmentIndex + 1);
      $scope.targetChanged();
    };

    $scope.targetTextChanged = function() {
      //parseTarget();
      $scope.get_data();
    };

    $scope.targetChanged = function() {
      if ($scope.parserError) {
        return;
      }

      var oldTarget = $scope.target.target;

      var target = getSegmentPathUpTo($scope.segments.length);
      $scope.target.target = _.reduce($scope.functions, wrapFunction, target);

      if ($scope.target.target !== oldTarget) {
        $scope.$parent.get_data();
      }
    };

    $scope.removeFunction = function(func) {
      $scope.functions = _.without($scope.functions, func);
      $scope.targetChanged();
    };

    $scope.addFunction = function(funcDef) {
      var newFunc = gfunc.createFuncInstance(funcDef, { withDefaultParams: true });
      newFunc.added = true;
      $scope.functions.push(newFunc);

      $scope.moveAliasFuncLast();
      $scope.smartlyHandleNewAliasByNode(newFunc);

      if ($scope.segments.length === 1 && $scope.segments[0].value === 'select metric') {
        $scope.segments = [];
      }

      if (!newFunc.params.length && newFunc.added) {
        $scope.targetChanged();
      }
    };

    $scope.moveAliasFuncLast = function() {
      var aliasFunc = _.find($scope.functions, function(func) {
        return func.def.name === 'alias' ||
               func.def.name === 'aliasByNode' ||
               func.def.name === 'aliasByMetric';
      });

      if (aliasFunc) {
        $scope.functions = _.without($scope.functions, aliasFunc);
        $scope.functions.push(aliasFunc);
      }
    };

    $scope.smartlyHandleNewAliasByNode = function(func) {
      if (func.def.name !== 'aliasByNode') {
        return;
      }
      for(var i = 0; i < $scope.segments.length; i++) {
        if ($scope.segments[i].value.indexOf('*') >= 0)  {
          func.params[0] = i;
          func.added = false;
          $scope.targetChanged();
          return;
        }
      }
    };

    $scope.toggleMetricOptions = function() {
      $scope.panel.metricOptionsEnabled = !$scope.panel.metricOptionsEnabled;
      if (!$scope.panel.metricOptionsEnabled) {
        delete $scope.panel.cacheTimeout;
      }
    };

    $scope.moveMetricQuery = function(fromIndex, toIndex) {
      _.move($scope.panel.targets, fromIndex, toIndex);
    };

    $scope.duplicate = function() {
      var clone = angular.copy($scope.target);
      $scope.panel.targets.push(clone);
    };

    function MetricSegment(options) {
      if (options === '*' || options.value === '*') {
        this.value = '*';
        this.html = $sce.trustAsHtml('<i class="icon-asterisk"><i>');
        this.expandable = true;
        return;
      }

      if (_.isString(options)) {
        this.value = options;
        this.html = $sce.trustAsHtml(this.value);
        return;
      }

      this.value = options.value;
      this.type = options.type;
      this.expandable = options.expandable;
      this.html = $sce.trustAsHtml(templateSrv.highlightVariablesAsHtml(this.value));
    }

  });

  module.directive('focusMe', function($timeout, $parse) {
    return {
      //scope: true,   // optionally create a child scope
      link: function(scope, element, attrs) {
        var model = $parse(attrs.focusMe);
        scope.$watch(model, function(value) {
          if(value === true) {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
      }
    };
  });

});
