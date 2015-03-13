define([
  'angular',
  'lodash',
  'kbn',
  'hdrhistogram',
  'moment'
],
function (angular, _, kbn, HdrHistogram) {
  'use strict';

  var module = angular.module('grafana.services');

  module.factory('HDRHistogramDatasource', function($q, $http, templateSrv) {

    // the datasource object passed to constructor
    // is the same defined in config.js
    function HDRHistogram(datasource) {
      this.name = datasource.name;
      this.supportMetrics = true;
      this.url = datasource.url;

      this.type = 'hdrhistogram';
      this.url = datasource.url;
      this.editorSrc = 'app/partials/histogram/editor.html';
      this.name = datasource.name;
      //this.render_method = datasource.render_method || 'POST';
      this.supportAnnotations = false;
      this.supportMetrics = true;
      this.highestTrackableValue =
          datasource.highestTrackableValue || this.highestTrackableValue;
      this.numberOfSignificantValueDigits =
          datasource.numberOfSignificantValueDigits || this.numberOfSignificantValueDigits;
      //this.annotationEditorSrc = 'app/partials/graphite/annotation_editor.html';
      //this.cacheTimeout = datasource.cacheTimeout;
      //this.withCredentials = datasource.withCredentials;
    }
    HDRHistogram.prototype = {
      highestTrackableValue: 60 * 1000 * 1000, // e.g. for 60s in usec units
      numberOfSignificantValueDigits: 3
    };

    function renderGroupName(queryString, groupString) {
      var queryParts = queryString.split(".");
      var groupParts = groupString.split(".");

      var outParts = [];

      for(var i in groupParts) {
        var groupPart = groupParts[i];
        groupParts[i] = groupPart.split("_");
      }

      for(var i in queryParts) {
        var queryPart = queryParts[i];

        if(!queryPart.length) continue;

        if(queryPart == '_' || queryPart[0] != '_') {
          outParts.push(queryPart);
          continue;
        }

        var n = parseInt(queryPart[1]) - 1;
        var part = groupParts[n][0];
        groupParts[n] = groupParts[n].slice(1);

        outParts.push(part);
      }

      return outParts.join(".");
    };

    HDRHistogram.prototype.convertDataPointsToMs = function(result) {
      result = result.data;

      if (!result || !result.rows) { return []; }

      var allSeries = [];
      var yMin = 1e10;
      var xMin = 1e10;
      var yMax = 0;
      var xMax = 0;
      for(var j in result.rows) {
        var row = result.rows[j];
        var key = row.key;
        var value = row.value;

        var groups = {};
        for(var group in value.data) {
          var groupValue = value.data[group];
          console.log(groupValue)

          var theData;// = value.inflatedData || Base64.decode(value.data);
          if(typeof groupValue.data == "string")
            theData = HdrHistogram.Base64.decode(groupValue.data);
          else if(groupValue.slice) theData = groupValue.data; //array
          else {
            throw new Error("unknown data type!")
            //console.error("unknown data type!");
            //continue;
          }

          var buffer = HdrHistogram.ByteBuffer.wrap(theData);
          var ctor = HdrHistogram[groupValue.histogramType].decodeFromCompressedByteBuffer;
          var histogram = ctor(buffer, this.highestTrackableValue);

          var fullGroup = key[0] + "-" + group;
          groups[fullGroup] = histogram;

          var datapoints = [];
          for(var i = 0 ; i <= 1000 ; i++) {
            var j = i / 10;//98 + i / 50.0;
            var pValue = histogram.getValueAtPercentile(j);// + Math.random();
            pValue = pValue / 1000.0;

            if(j < xMin) xMin = j;
            if(pValue < yMin) yMin = pValue;
            if(j > xMax) xMax = j;
            if(pValue > yMax) yMax = pValue;
            datapoints.push([j, pValue]);
          }

          allSeries.push({
            target: renderGroupName(key[0], group),
            datapoints: datapoints
          });
        }
      }
      var out = {
        data: allSeries,
        xRange: [xMin, xMax],
        yRange: [yMin, yMax]
      };

console.log(result, out)
      return out;
    };

    HDRHistogram.prototype.doCouchbaseRequest = function(options) {
      if (this.basicAuth || this.withCredentials) {
        options.withCredentials = true;
      }
      if (this.basicAuth) {
        options.headers = options.headers || {};
        options.headers.Authorization = 'Basic ' + this.basicAuth;
      }

      //options.url = this.url + options.url;
      //options.inspect = { type: 'graphite' };

      return $http(options);
    };

    HDRHistogram.prototype.query = function(options) {
      // get from & to in seconds
      var from = kbn.parseDate(options.range.from).getTime() / 1000;
      var to = kbn.parseDate(options.range.to).getTime() / 1000;

      var queryString = "com.mediamath._._1._1._2.time";

      var args = {
        group_level: 1,
        reduce: true,
        stale: false,
        inclusive_end: true,
        skip: 0,
        startkey: JSON.stringify([queryString, parseInt(from)]),
        endkey: JSON.stringify([queryString, parseInt(to)]),
        connection_timeout: 60000
      };
      var encodedArgs = [];
      for(var i in args) {
        var arg = encodeURIComponent(i) + "=" + encodeURIComponent(args[i]);
        encodedArgs.push(arg);
      }

      var argString = "";
      if(encodedArgs.length) argString = "?" + encodedArgs.join("&");

console.log(options)
      var httpOptions = { method: "GET", url: this.url + argString };
console.log(httpOptions.url)
      return this.doCouchbaseRequest(httpOptions).then(this.convertDataPointsToMs.bind(this))

    };

    return HDRHistogram;

  });

});
