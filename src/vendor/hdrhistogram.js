function __hdrhistogramoutput__() {


  var window = window || undefined;
  var global = global || window || this || undefined;

  var $gwt_version = "2.5.1";
  var module = module || {};
  var $wnd = global;//parent;
  var $doc = $wnd.document = $wnd.document || {};
  var $moduleName, $moduleBase;
  var $strongName = '';
  var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null,
      $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
  $stats && $stats({moduleName:'HdrHistogram',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});

  var goog = goog || {};
  goog.exportProperty = goog.exportProperty || function(a, b, c) {};
  goog.exportSymbol = goog.exportSymbol || function(a, b) {};


  function makeUnsigned(bytes) {
    var arr = new Array(bytes.length);
    for(var i in bytes) {
      var intVal = bytes[i] & 0xFF;
      arr[i] = intVal;
    }

    return arr;
  }

  function makeSigned(bytes) {
    var arr = new Array(bytes.length);
    for(var i in bytes) {
      var intVal = bytes[i] & 0xFF;
      if(intVal > 127) arr[i] = intVal - 256;
      else arr[i] = intVal;
    }

    return arr;
  }



  var _, N8000000000000000_longLit = {l:0, m:0, h:524288}, N10000000000000_longLit = {l:0, m:0, h:1048320}, N80000000_longLit = {l:0, m:4193792, h:1048575}, N81_longLit = {l:4194175, m:4194303, h:1048575}, P0_longLit = {l:0, m:0, h:0}, P1_longLit = {l:1, m:0, h:0}, P2_longLit = {l:2, m:0, h:0}, P4_longLit = {l:4, m:0, h:0}, P8_longLit = {l:8, m:0, h:0}, P80_longLit = {l:128, m:0, h:0}, Pff_longLit = {l:255, m:0, h:0}, P7ff_longLit = {l:2047, m:0, h:0}, P7fff_longLit = {l:32767, m:0, h:0}, P30d40_longLit = {l:200000, m:0, h:0}, Pfffff_longLit = {l:1048575, m:0, h:0}, P7fffffff_longLit = {l:4194303, m:511, h:0}, P80000000_longLit = {l:0, m:512, h:0}, Pffffffff_longLit = {l:4194303, m:1023, h:0}, P100000000_longLit = {l:0, m:1024, h:0}, P3fffffffffffffff_longLit = {l:4194303, m:4194303, h:262143}, P7ff0000000000000_longLit = {l:0, m:0, h:524032}, P7ff8000000000000_longLit = {l:0, m:0, h:524160}, P7fffffffffffffff_longLit = {l:4194303, m:4194303, h:524287}, seedTable = {}, Q$Object = 0, Q$String = 1, Q$LongLibBase$LongEmul = 2, Q$Serializable = 3, Q$ArrayIndexOutOfBoundsException = 4, Q$Boolean = 5, Q$CharSequence = 6, Q$Class = 7, Q$Comparable = 8, Q$Double = 9, Q$Exception = 10, Q$IllegalArgumentException = 11, Q$IllegalStateException = 12, Q$IndexOutOfBoundsException = 13, Q$Integer = 14, Q$Long = 15, Q$NoSuchMethodException = 16, Q$Number = 17, Q$StackTraceElement = 18, Q$Throwable = 19, Q$AnnotatedElement = 20, Q$Constructor = 21, Q$Field = 22, Q$GenericDeclaration = 23, Q$Method = 24, Q$Type = 25, Q$ByteBuffer = 26, Q$IntBuffer = 27, Q$LongBuffer = 28, Q$ShortBuffer = 29, Q$List = 30, Q$Locale = 31, Q$Map = 32, Q$Map$Entry = 33, Q$Set = 34, Q$DataFormatException = 35, Q$AbstractHistogram = 36, Q$AbstractHistogramBase = 37, Q$AllValuesIterator = 38, Q$ByteBufferLike = 39, Q$DoubleHistogram = 40, Q$DoubleHistogramIterationValue = 41, Q$DoubleLinearIterator = 42, Q$DoubleLogarithmicIterator = 43, Q$DoublePercentileIterator = 44, Q$DoubleRecordedValuesIterator = 45, Q$DoubleRecorder = 46, Q$DoubleRecorder$InternalDoubleHistogram = 47, Q$Histogram = 48, Q$HistogramIterationValue = 49, Q$IntCountsHistogram = 50, Q$LinearIterator = 51, Q$LogarithmicIterator = 52, Q$PercentileIterator = 53, Q$RecordedValuesIterator = 54, Q$ShortCountsHistogram = 55, Q$WriterReaderPhaser = 56, Q$Exportable = 57, CM$ = {};
  function newSeed(id){
    return new seedTable[id];
  }

  function defineSeed(id, superSeed, castableTypeMap){
    var seed = seedTable[id];
    if (seed && !seed.___clazz$) {
      _ = seed.prototype;
    }
    else {
      !seed && (seed = seedTable[id] = function(){
      }
      );
      _ = seed.prototype = superSeed < 0?{}:newSeed(superSeed);
      _.castableTypeMap$ = castableTypeMap;
    }
    for (var i_0 = 3; i_0 < arguments.length; ++i_0) {
      arguments[i_0].prototype = _;
    }
    if (seed.___clazz$) {
      _.___clazz$ = seed.___clazz$;
      seed.___clazz$ = null;
    }
  }

  function makeCastMap(a){
    var result = {};
    for (var i_0 = 0, c = a.length; i_0 < c; ++i_0) {
      result[a[i_0]] = 1;
    }
    return result;
  }

  function nullMethod(){
  }

  defineSeed(1, -1, CM$);
  _.equals$ = function equals(other){
    return this === other;
  }
  ;
  _.getClass$ = function getClass_0(){
    return this.___clazz$;
  }
  ;
  _.hashCode$ = function hashCode_0(){
    return getHashCode(this);
  }
  ;
  _.toString$ = function toString_0(){
    return $getName(this.___clazz$) + '@' + toPowerOfTwoString(this.hashCode$());
  }
  ;
  _.toString = function(){
    return this.toString$();
  }
  ;
  _.typeMarker$ = nullMethod;
  function $setStackTrace(stackTrace){
    var c, copy, i_0;
    copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stackTrace.length, 0);
    for (i_0 = 0 , c = stackTrace.length; i_0 < c; ++i_0) {
      if (!stackTrace[i_0]) {
        throw new NullPointerException_0;
      }
      copy[i_0] = stackTrace[i_0];
    }
  }

  function $toString(this$static){
    var className, msg;
    className = $getName(this$static.___clazz$);
    msg = this$static.getMessage_0();
    return msg != null?className + ': ' + msg:className;
  }

  function Throwable_0(){
    $fillInStackTrace();
  }

  function Throwable_1(message){
    $fillInStackTrace();
    this.detailMessage = message;
  }

  defineSeed(8, 1, makeCastMap([Q$Serializable, Q$Throwable]), Throwable_0);
  _.getCause_0 = function getCause(){
    return this.cause;
  }
  ;
  _.getMessage_0 = function getMessage(){
    return this.detailMessage;
  }
  ;
  _.toString$ = function toString_1(){
    return $toString(this);
  }
  ;
  _.cause = null;
  _.detailMessage = null;
  function Exception_0(message){
    Throwable_1.call(this, message);
  }

  function Exception_1(cause){
    $fillInStackTrace();
    this.detailMessage = !cause?null:$toString(cause);
    this.cause = cause;
  }

  defineSeed(7, 8, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]));
  function RuntimeException_0(message){
    Exception_0.call(this, message);
  }

  function RuntimeException_1(cause){
    Exception_1.call(this, cause);
  }

  defineSeed(6, 7, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), RuntimeException_0, RuntimeException_1);
  function JavaScriptException_0(e){
    $fillInStackTrace();
    this.e = e;
    this.description = '';
    $createStackTrace(this);
  }

  function getExceptionDescription(e){
    return instanceOfJso(e)?e == null?null:e.message:e + '';
  }

  function getExceptionName(e){
    return e == null?'null':instanceOfJso(e)?e == null?null:e.name:instanceOf(e, Q$String)?'String':$getName(getClass__devirtual$(e));
  }

  function getExceptionProperties(e){
    return instanceOfJso(e)?$getProperties(e):'';
  }

  defineSeed(5, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), JavaScriptException_0);
  _.getMessage_0 = function getMessage_0(){
    this.message_0 == null && (this.name_0 = getExceptionName(this.e) , this.description = this.description + ': ' + getExceptionDescription(this.e) , this.message_0 = '(' + this.name_0 + ') ' + getExceptionProperties(this.e) + this.description , undefined);
    return this.message_0;
  }
  ;
  _.description = '';
  _.e = null;
  _.message_0 = null;
  _.name_0 = null;
  function equals__devirtual$(this$static, other){
    var maybeJsoInvocation;
    return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.equals$(other):maybeJsoInvocation === other;
  }

  function getClass__devirtual$(this$static){
    var maybeJsoInvocation;
    return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
  }

  function hashCode__devirtual$(this$static){
    var maybeJsoInvocation;
    return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.hashCode$():getHashCode(maybeJsoInvocation);
  }

  defineSeed(13, 1, {});
  function apply(jsFunction, thisObj, args){
    return jsFunction.apply(thisObj, args);
    var __0;
  }

  function enter(){
    var now;
    if (entryDepth != 0) {
      now = (new Date).getTime();
      if (now - watchdogEntryDepthLastScheduled > 2000) {
        watchdogEntryDepthLastScheduled = now;
        watchdogEntryDepthTimerId = watchdogEntryDepthSchedule();
      }
    }
    if (entryDepth++ == 0) {
      $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
      return true;
    }
    return false;
  }

  function entry_0(jsFunction){
    return function(){
      try {
        return entry0(jsFunction, this, arguments);
      }
      catch (e) {
        throw e;
      }
    }
        ;
  }

  function entry0(jsFunction, thisObj, args){
    var initialEntry;
    initialEntry = enter();
    try {
      return apply(jsFunction, thisObj, args);
    }
    finally {
      exit(initialEntry);
    }
  }

  function exit(initialEntry){
    initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
    --entryDepth;
    if (initialEntry) {
      if (watchdogEntryDepthTimerId != -1) {
        watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
        watchdogEntryDepthTimerId = -1;
      }
    }
  }

  function getHashCode(o){
    return o.$H || (o.$H = ++sNextHashId);
  }

  function watchdogEntryDepthCancel(timerId){
    $wnd.clearTimeout(timerId);
  }

  function watchdogEntryDepthSchedule(){
    return $wnd.setTimeout(function(){
          entryDepth != 0 && (entryDepth = 0);
          watchdogEntryDepthTimerId = -1;
        }
        , 10);
  }

  var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
  function $clinit_SchedulerImpl(){
    $clinit_SchedulerImpl = nullMethod;
    INSTANCE = new SchedulerImpl_0;
  }

  function $flushEntryCommands(this$static){
    var oldQueue, rescheduled;
    if (this$static.entryCommands) {
      rescheduled = null;
      do {
        oldQueue = this$static.entryCommands;
        this$static.entryCommands = null;
        rescheduled = runScheduledTasks(oldQueue, rescheduled);
      }
      while (this$static.entryCommands);
      this$static.entryCommands = rescheduled;
    }
  }

  function $flushFinallyCommands(this$static){
    var oldQueue, rescheduled;
    if (this$static.finallyCommands) {
      rescheduled = null;
      do {
        oldQueue = this$static.finallyCommands;
        this$static.finallyCommands = null;
        rescheduled = runScheduledTasks(oldQueue, rescheduled);
      }
      while (this$static.finallyCommands);
      this$static.finallyCommands = rescheduled;
    }
  }

  function SchedulerImpl_0(){
  }

  function push(queue, task){
    !queue && (queue = []);
    queue[queue.length] = task;
    return queue;
  }

  function runScheduledTasks(tasks, rescheduled){
    var i_0, j, t;
    for (i_0 = 0 , j = tasks.length; i_0 < j; ++i_0) {
      t = tasks[i_0];
      try {
        t[1]?t[0].nullMethod() && (rescheduled = push(rescheduled, t)):t[0].nullMethod();
      }
      catch ($e0) {
        $e0 = caught($e0);
        if (!instanceOf($e0, Q$Throwable))
          throw $e0;
      }
    }
    return rescheduled;
  }

  defineSeed(15, 13, {}, SchedulerImpl_0);
  _.entryCommands = null;
  _.finallyCommands = null;
  var INSTANCE;
  function splice(arr, length_0){
    arr.length >= length_0 && arr.splice(0, length_0);
    return arr;
  }

  function $createStackTrace(e){
    var i_0, j, stack, stackTrace;
    stack = $inferFrom(instanceOfJso(e.e)?e.e:null);
    stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stack.length, 0);
    for (i_0 = 0 , j = stackTrace.length; i_0 < j; ++i_0) {
      stackTrace[i_0] = new StackTraceElement_0(stack[i_0]);
    }
    $setStackTrace(stackTrace);
  }

  function $fillInStackTrace(){
    var i_0, j, stack, stackTrace;
    stack = splice($inferFrom($makeException()), 3);
    stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stack.length, 0);
    for (i_0 = 0 , j = stackTrace.length; i_0 < j; ++i_0) {
      stackTrace[i_0] = new StackTraceElement_0(stack[i_0]);
    }
    $setStackTrace(stackTrace);
  }

  function $getProperties(e){
    var result = '';
    try {
      for (var prop in e) {
        if (prop != 'name' && prop != 'message' && prop != 'toString') {
          try {
            result += '\n ' + prop + ': ' + e[prop];
          }
          catch (ignored) {
          }
        }
      }
    }
    catch (ignored) {
    }
    return result;
  }

  function $makeException(){
    try {
      null.a();
    }
    catch (e) {
      return e;
    }
  }

  function $inferFrom(e){
    var i_0, j, stack;
    stack = $getStack(e);
    for (i_0 = 0 , j = stack.length; i_0 < j; ++i_0) {
      stack[i_0] = stack[i_0].length == 0?'anonymous':stack[i_0];
    }
    return stack;
  }

  function $getStack(e){
    var i_0, i2, idx, j, toReturn;
    toReturn = e && e.message?e.message.split('\n'):[];
    for (i_0 = 0 , i2 = 0 , j = toReturn.length; i2 < j; ++i_0 , i2 += 2) {
      idx = toReturn[i2].lastIndexOf('function ');
      idx == -1?(toReturn[i_0] = '' , undefined):(toReturn[i_0] = $trim(toReturn[i2].substr(idx + 9, toReturn[i2].length - (idx + 9))) , undefined);
    }
    toReturn.length = i_0;
    return toReturn;
  }

  defineSeed(21, 1, {});
  function $append(this$static, x){
    this$static.string += x;
  }

  function $append_0(this$static, x){
    this$static.string += x;
  }

  function $append_1(this$static, x){
    this$static.string += x;
  }

  function StringBufferImplAppend_0(){
  }

  defineSeed(22, 21, {}, StringBufferImplAppend_0);
  _.string = '';
  function $clinit_Numbers(){
    $clinit_Numbers = nullMethod;
    Math.log(2);
  }

  function Array_0(){
  }

  function createFromSeed(seedType, length_0){
    var array = new Array(length_0);
    if (seedType == 3) {
      for (var i_0 = 0; i_0 < length_0; ++i_0) {
        var value = new Object;
        value.l = value.m = value.h = 0;
        array[i_0] = value;
      }
    }
    else if (seedType > 0) {
      var value = [null, 0, false][seedType];
      for (var i_0 = 0; i_0 < length_0; ++i_0) {
        array[i_0] = value;
      }
    }
    return array;
  }

  function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
    var result;
    result = createFromSeed(seedType, length_0);
    initValues(arrayClass, castableTypeMap, queryId, result);
    return result;
  }

  function initValues(arrayClass, castableTypeMap, queryId, array){
    $clinit_Array$ExpandoWrapper();
    wrapArray(array, expandoNames_0, expandoValues_0);
    array.___clazz$ = arrayClass;
    array.castableTypeMap$ = castableTypeMap;
    array.queryId$ = queryId;
    return array;
  }

  function setCheck(array, index, value){
    if (value != null) {
      if (array.queryId$ > 0 && !canCastUnsafe(value, array.queryId$)) {
        throw new ArrayStoreException_0;
      }
      else if (array.queryId$ == -1 && (value.typeMarker$ == nullMethod || canCast(value, 1))) {
        throw new ArrayStoreException_0;
      }
      else if (array.queryId$ < -1 && !(value.typeMarker$ != nullMethod && !canCast(value, 1)) && !canCastUnsafe(value, -array.queryId$)) {
        throw new ArrayStoreException_0;
      }
    }
    return array[index] = value;
  }

  defineSeed(26, 1, {}, Array_0);
  _.queryId$ = 0;
  function $clinit_Array$ExpandoWrapper(){
    $clinit_Array$ExpandoWrapper = nullMethod;
    expandoNames_0 = [];
    expandoValues_0 = [];
    initExpandos(new Array_0, expandoNames_0, expandoValues_0);
  }

  function initExpandos(protoType, expandoNames, expandoValues){
    var i_0 = 0, value;
    for (var name_0 in protoType) {
      if (value = protoType[name_0]) {
        expandoNames[i_0] = name_0;
        expandoValues[i_0] = value;
        ++i_0;
      }
    }
  }

  function wrapArray(array, expandoNames, expandoValues){
    $clinit_Array$ExpandoWrapper();
    for (var i_0 = 0, c = expandoNames.length; i_0 < c; ++i_0) {
      array[expandoNames[i_0]] = expandoValues[i_0];
    }
  }

  var expandoNames_0, expandoValues_0;
  function canCast(src, dstId){
    return src.castableTypeMap$ && !!src.castableTypeMap$[dstId];
  }

  function canCastUnsafe(src, dstId){
    return src.castableTypeMap$ && src.castableTypeMap$[dstId];
  }

  function instanceOf(src, dstId){
    return src != null && canCast(src, dstId);
  }

  function instanceOfJso(src){
    return src != null && src.typeMarker$ != nullMethod && !canCast(src, 1);
  }

  function isJavaObject(src){
    return src.typeMarker$ == nullMethod || canCast(src, 1);
  }

  function maskUndefined(src){
    return src == null?null:src;
  }

  function round_int(x){
    return ~~Math.max(Math.min(x, 2147483647), -2147483648);
  }

  function init(){
    !!$stats && onModuleStart('com.google.gwt.useragent.client.UserAgentAsserter');
    !!$stats && onModuleStart('com.google.gwt.user.client.DocumentModeAsserter');
    $onModuleLoad();
    !!$stats && onModuleStart('org.HdrHistogram.HdrHistogram');
    new HdrHistogram_0;
    needsEnhance(Lorg_HdrHistogram_Histogram_2_classLit) && doEnhance(Lorg_HdrHistogram_Histogram_2_classLit);
    $clinit_ExporterUtil();
    new AbstractHistogram_ExporterImpl_0;
    new AbstractHistogramBase_ExporterImpl_0;
    new AllValuesIterator_ExporterImpl_0;
    new DoubleHistogram_ExporterImpl_0;
    new DoubleHistogramIterationValue_ExporterImpl_0;
    new DoubleLinearIterator_ExporterImpl_0;
    new DoubleLogarithmicIterator_ExporterImpl_0;
    new DoublePercentileIterator_ExporterImpl_0;
    new DoubleRecordedValuesIterator_ExporterImpl_0;
    new DoubleRecorder_ExporterImpl_0;
    new DoubleRecorder_InternalDoubleHistogram_ExporterImpl_0;
    new Histogram_ExporterImpl_0;
    new IntCountsHistogram_ExporterImpl_0;
    new LinearIterator_ExporterImpl_0;
    new LogarithmicIterator_ExporterImpl_0;
    new PercentileIterator_ExporterImpl_0;
    new RecordedValuesIterator_ExporterImpl_0;
    new Recorder_InternalAtomicHistogram_ExporterImpl_0;
    new Recorder_InternalConcurrentHistogram_ExporterImpl_0;
    new ShortCountsHistogram_ExporterImpl_0;
    new SingleWriterDoubleRecorder_InternalDoubleHistogram_ExporterImpl_0;
    new SingleWriterRecorder_InternalHistogram_ExporterImpl_0;
    new HdrHistogram_XArrayIndexOutOfBoundsException_ExporterImpl_0;
    new HdrHistogram_XIllegalArgumentException_ExporterImpl_0;
    new HdrHistogram_XIllegalStateException_ExporterImpl_0;
    new HdrHistogram_XThrowable_ExporterImpl_0;
    new ByteBufferLike_ExporterImpl_0;
    new HistogramIterationValue_ExporterImpl_0;
    new WriterReaderPhaser_ExporterImpl_0;
  }

  function caught(e){
    if (instanceOf(e, Q$Throwable)) {
      return e;
    }
    return new JavaScriptException_0(e);
  }

  function create(value){
    var a0, a1, a2;
    a0 = value & 4194303;
    a1 = value >> 22 & 4194303;
    a2 = value < 0?1048575:0;
    return create0(a0, a1, a2);
  }

  function create_0(a){
    return create0(a.l, a.m, a.h);
  }

  function create0(l_0, m_0, h_0){
    return _ = new LongLibBase$LongEmul_0 , _.l = l_0 , _.m = m_0 , _.h = h_0 , _;
  }

  function divMod(a, b, computeRemainder){
    var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
    if (b.l == 0 && b.m == 0 && b.h == 0) {
      throw new ArithmeticException_0;
    }
    if (a.l == 0 && a.m == 0 && a.h == 0) {
      computeRemainder && (remainder = create0(0, 0, 0));
      return create0(0, 0, 0);
    }
    if (b.h == 524288 && b.m == 0 && b.l == 0) {
      return divModByMinValue(a, computeRemainder);
    }
    negative = false;
    if (b.h >> 19 != 0) {
      b = neg(b);
      negative = true;
    }
    bpower = powerOfTwo(b);
    aIsNegative = false;
    aIsMinValue = false;
    aIsCopy = false;
    if (a.h == 524288 && a.m == 0 && a.l == 0) {
      aIsMinValue = true;
      aIsNegative = true;
      if (bpower == -1) {
        a = create_0(($clinit_LongLib$Const() , MAX_VALUE));
        aIsCopy = true;
        negative = !negative;
      }
      else {
        c = shr(a, bpower);
        negative && negate(c);
        computeRemainder && (remainder = create0(0, 0, 0));
        return c;
      }
    }
    else if (a.h >> 19 != 0) {
      aIsNegative = true;
      a = neg(a);
      aIsCopy = true;
      negative = !negative;
    }
    if (bpower != -1) {
      return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
    }
    if (!gte_0(a, b)) {
      computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
      return create0(0, 0, 0);
    }
    return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
  }

  function divModByMinValue(a, computeRemainder){
    if (a.h == 524288 && a.m == 0 && a.l == 0) {
      computeRemainder && (remainder = create0(0, 0, 0));
      return create_0(($clinit_LongLib$Const() , ONE));
    }
    computeRemainder && (remainder = create0(a.l, a.m, a.h));
    return create0(0, 0, 0);
  }

  function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
    var c;
    c = shr(a, bpower);
    negative && negate(c);
    if (computeRemainder) {
      a = maskRight(a, bpower);
      aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
    }
    return c;
  }

  function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
    var bshift, gte, quotient, shift, a1, a2, a0;
    shift = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
    bshift = shl(b, shift);
    quotient = create0(0, 0, 0);
    while (shift >= 0) {
      gte = trialSubtract(a, bshift);
      if (gte) {
        shift < 22?(quotient.l |= 1 << shift , undefined):shift < 44?(quotient.m |= 1 << shift - 22 , undefined):(quotient.h |= 1 << shift - 44 , undefined);
        if (a.l == 0 && a.m == 0 && a.h == 0) {
          break;
        }
      }
      a1 = bshift.m;
      a2 = bshift.h;
      a0 = bshift.l;
      bshift.h = a2 >>> 1;
      bshift.m = a1 >>> 1 | (a2 & 1) << 21;
      bshift.l = a0 >>> 1 | (a1 & 1) << 21;
      --shift;
    }
    negative && negate(quotient);
    if (computeRemainder) {
      if (aIsNegative) {
        remainder = neg(a);
        aIsMinValue && (remainder = sub(remainder, ($clinit_LongLib$Const() , ONE)));
      }
      else {
        remainder = create0(a.l, a.m, a.h);
      }
    }
    return quotient;
  }

  function maskRight(a, bits){
    var b0, b1, b2;
    if (bits <= 22) {
      b0 = a.l & (1 << bits) - 1;
      b1 = b2 = 0;
    }
    else if (bits <= 44) {
      b0 = a.l;
      b1 = a.m & (1 << bits - 22) - 1;
      b2 = 0;
    }
    else {
      b0 = a.l;
      b1 = a.m;
      b2 = a.h & (1 << bits - 44) - 1;
    }
    return create0(b0, b1, b2);
  }

  function negate(a){
    var neg0, neg1, neg2;
    neg0 = ~a.l + 1 & 4194303;
    neg1 = ~a.m + (neg0 == 0?1:0) & 4194303;
    neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
    a.l = neg0;
    a.m = neg1;
    a.h = neg2;
  }

  function numberOfLeadingZeros(a){
    var b1, b2;
    b2 = numberOfLeadingZeros_0(a.h);
    if (b2 == 32) {
      b1 = numberOfLeadingZeros_0(a.m);
      return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
    }
    else {
      return b2 - 12;
    }
  }

  function powerOfTwo(a){
    var h_0, l_0, m_0;
    l_0 = a.l;
    if ((l_0 & l_0 - 1) != 0) {
      return -1;
    }
    m_0 = a.m;
    if ((m_0 & m_0 - 1) != 0) {
      return -1;
    }
    h_0 = a.h;
    if ((h_0 & h_0 - 1) != 0) {
      return -1;
    }
    if (h_0 == 0 && m_0 == 0 && l_0 == 0) {
      return -1;
    }
    if (h_0 == 0 && m_0 == 0 && l_0 != 0) {
      return numberOfTrailingZeros(l_0);
    }
    if (h_0 == 0 && m_0 != 0 && l_0 == 0) {
      return numberOfTrailingZeros(m_0) + 22;
    }
    if (h_0 != 0 && m_0 == 0 && l_0 == 0) {
      return numberOfTrailingZeros(h_0) + 44;
    }
    return -1;
  }

  function toDoubleHelper(a){
    return a.l + a.m * 4194304 + a.h * 17592186044416;
  }

  function trialSubtract(a, b){
    var sum0, sum1, sum2;
    sum2 = a.h - b.h;
    if (sum2 < 0) {
      return false;
    }
    sum0 = a.l - b.l;
    sum1 = a.m - b.m + (sum0 >> 22);
    sum2 += sum1 >> 22;
    if (sum2 < 0) {
      return false;
    }
    a.l = sum0 & 4194303;
    a.m = sum1 & 4194303;
    a.h = sum2 & 1048575;
    return true;
  }

  var remainder = null;
  function add(a, b){
    var sum0, sum1, sum2;
    sum0 = a.l + b.l;
    sum1 = a.m + b.m + (sum0 >> 22);
    sum2 = a.h + b.h + (sum1 >> 22);
    return create0(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
  }

  function and(a, b){
    return create0(a.l & b.l, a.m & b.m, a.h & b.h);
  }

  function eq(a, b){
    return a.l == b.l && a.m == b.m && a.h == b.h;
  }

  function fromDouble(value){
    var a0, a1, a2, negative, result;
    if (isNaN_0(value)) {
      return $clinit_LongLib$Const() , ZERO;
    }
    if (value < -9223372036854775808) {
      return $clinit_LongLib$Const() , MIN_VALUE;
    }
    if (value >= 9223372036854775807) {
      return $clinit_LongLib$Const() , MAX_VALUE;
    }
    negative = false;
    if (value < 0) {
      negative = true;
      value = -value;
    }
    a2 = 0;
    if (value >= 17592186044416) {
      a2 = round_int(value / 17592186044416);
      value -= a2 * 17592186044416;
    }
    a1 = 0;
    if (value >= 4194304) {
      a1 = round_int(value / 4194304);
      value -= a1 * 4194304;
    }
    a0 = round_int(value);
    result = create0(a0, a1, a2);
    negative && negate(result);
    return result;
  }

  function fromInt(value){
    var rebase, result;
    if (value > -129 && value < 128) {
      rebase = value + 128;
      boxedValues == null && (boxedValues = initDim(_3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, makeCastMap([Q$Serializable]), Q$LongLibBase$LongEmul, 256, 0));
      result = boxedValues[rebase];
      !result && (result = boxedValues[rebase] = create(value));
      return result;
    }
    return create(value);
  }

  function gt(a, b){
    var signa, signb;
    signa = a.h >> 19;
    signb = b.h >> 19;
    return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
  }

  function gte_0(a, b){
    var signa, signb;
    signa = a.h >> 19;
    signb = b.h >> 19;
    return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
  }

  function lt(a, b){
    return !gte_0(a, b);
  }

  function lte(a, b){
    return !gt(a, b);
  }

  function mul(a, b){
    var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
    a0 = a.l & 8191;
    a1 = a.l >> 13 | (a.m & 15) << 9;
    a2 = a.m >> 4 & 8191;
    a3 = a.m >> 17 | (a.h & 255) << 5;
    a4 = (a.h & 1048320) >> 8;
    b0 = b.l & 8191;
    b1 = b.l >> 13 | (b.m & 15) << 9;
    b2 = b.m >> 4 & 8191;
    b3 = b.m >> 17 | (b.h & 255) << 5;
    b4 = (b.h & 1048320) >> 8;
    p0 = a0 * b0;
    p1 = a1 * b0;
    p2 = a2 * b0;
    p3 = a3 * b0;
    p4 = a4 * b0;
    if (b1 != 0) {
      p1 += a0 * b1;
      p2 += a1 * b1;
      p3 += a2 * b1;
      p4 += a3 * b1;
    }
    if (b2 != 0) {
      p2 += a0 * b2;
      p3 += a1 * b2;
      p4 += a2 * b2;
    }
    if (b3 != 0) {
      p3 += a0 * b3;
      p4 += a1 * b3;
    }
    b4 != 0 && (p4 += a0 * b4);
    c00 = p0 & 4194303;
    c01 = (p1 & 511) << 13;
    c0 = c00 + c01;
    c10 = p0 >> 22;
    c11 = p1 >> 9;
    c12 = (p2 & 262143) << 4;
    c13 = (p3 & 31) << 17;
    c1 = c10 + c11 + c12 + c13;
    c22 = p2 >> 18;
    c23 = p3 >> 5;
    c24 = (p4 & 4095) << 8;
    c2 = c22 + c23 + c24;
    c1 += c0 >> 22;
    c0 &= 4194303;
    c2 += c1 >> 22;
    c1 &= 4194303;
    c2 &= 1048575;
    return create0(c0, c1, c2);
  }

  function neg(a){
    var neg0, neg1, neg2;
    neg0 = ~a.l + 1 & 4194303;
    neg1 = ~a.m + (neg0 == 0?1:0) & 4194303;
    neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
    return create0(neg0, neg1, neg2);
  }

  function neq(a, b){
    return a.l != b.l || a.m != b.m || a.h != b.h;
  }

  function or(a, b){
    return create0(a.l | b.l, a.m | b.m, a.h | b.h);
  }

  function shl(a, n){
    var res0, res1, res2;
    n &= 63;
    if (n < 22) {
      res0 = a.l << n;
      res1 = a.m << n | a.l >> 22 - n;
      res2 = a.h << n | a.m >> 22 - n;
    }
    else if (n < 44) {
      res0 = 0;
      res1 = a.l << n - 22;
      res2 = a.m << n - 22 | a.l >> 44 - n;
    }
    else {
      res0 = 0;
      res1 = 0;
      res2 = a.l << n - 44;
    }
    return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
  }

  function shr(a, n){
    var a2, negative, res0, res1, res2;
    n &= 63;
    a2 = a.h;
    negative = (a2 & 524288) != 0;
    negative && (a2 |= -1048576);
    if (n < 22) {
      res2 = a2 >> n;
      res1 = a.m >> n | a2 << 22 - n;
      res0 = a.l >> n | a.m << 22 - n;
    }
    else if (n < 44) {
      res2 = negative?1048575:0;
      res1 = a2 >> n - 22;
      res0 = a.m >> n - 22 | a2 << 44 - n;
    }
    else {
      res2 = negative?1048575:0;
      res1 = negative?4194303:0;
      res0 = a2 >> n - 44;
    }
    return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
  }

  function shru(a, n){
    var a2, res0, res1, res2;
    n &= 63;
    a2 = a.h & 1048575;
    if (n < 22) {
      res2 = a2 >>> n;
      res1 = a.m >> n | a2 << 22 - n;
      res0 = a.l >> n | a.m << 22 - n;
    }
    else if (n < 44) {
      res2 = 0;
      res1 = a2 >>> n - 22;
      res0 = a.m >> n - 22 | a.h << 44 - n;
    }
    else {
      res2 = 0;
      res1 = 0;
      res0 = a2 >>> n - 44;
    }
    return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
  }

  function sub(a, b){
    var sum0, sum1, sum2;
    sum0 = a.l - b.l;
    sum1 = a.m - b.m + (sum0 >> 22);
    sum2 = a.h - b.h + (sum1 >> 22);
    return create0(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
  }

  function toDouble(a){
    if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
      return -9223372036854775808;
    }
    if (!gte_0(a, ZERO)) {
      return -toDoubleHelper(neg(a));
    }
    return a.l + a.m * 4194304 + a.h * 17592186044416;
  }

  function toInt(a){
    return a.l | a.m << 22;
  }

  function toString_2(a){
    var digits, rem, res, tenPowerLong, zeroesNeeded;
    if (a.l == 0 && a.m == 0 && a.h == 0) {
      return '0';
    }
    if (a.h == 524288 && a.m == 0 && a.l == 0) {
      return '-9223372036854775808';
    }
    if (a.h >> 19 != 0) {
      return '-' + toString_2(neg(a));
    }
    rem = a;
    res = '';
    while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      tenPowerLong = fromInt(1000000000);
      rem = divMod(rem, tenPowerLong, true);
      digits = '' + toInt(remainder);
      if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
        zeroesNeeded = 9 - digits.length;
        for (; zeroesNeeded > 0; --zeroesNeeded) {
          digits = '0' + digits;
        }
      }
      res = digits + res;
    }
    return res;
  }

  var boxedValues = null;
  function $clinit_LongLib$Const(){
    $clinit_LongLib$Const = nullMethod;
    MAX_VALUE = create0(4194303, 4194303, 524287);
    MIN_VALUE = create0(0, 0, 524288);
    ONE = fromInt(1);
    fromInt(2);
    ZERO = fromInt(0);
  }

  var MAX_VALUE, MIN_VALUE, ONE, ZERO;
  function LongLibBase$LongEmul_0(){
  }

  defineSeed(35, 1, makeCastMap([Q$LongLibBase$LongEmul]), LongLibBase$LongEmul_0);
  function onModuleStart(mainClassName){
    return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
  }

  function $clinit_ConstPool$ArrayConsts(){
    $clinit_ConstPool$ArrayConsts = nullMethod;
    EMPTY_CLASSES = initDim(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, 0, 0);
  }

  var EMPTY_CLASSES;
  function remember(constId, cls){
    $wnd.Reflect.$[constId] = cls;
  }

  defineSeed(40, 1, {});
  _.addClass = function addClass(cls, into){
    into[into.length] = cls;
  }
  ;
  function boxLong(l_0){
    return new Long_0(l_0);
  }

  function nullCheck(o){
    if (o == null)
      throw new NullPointerException_1;
  }

  function $addConstructor(this$static, key, c){
    this$static.c[key] = c;
  }

  function $addConstructor_0(this$static, c){
    $addConstructor(this$static, getSignature(c.parameterTypes), c);
  }

  function $addField(this$static, key, f){
    this$static.f[key] = f;
  }

  function $addField_0(this$static, f){
    $addField(this$static, f.name_0, f);
  }



  function $addMethod(this$static, m_0){
    var name_0;
    name_0 = m_0.getName() + getSignature(m_0.getParameterTypes());
    this$static.m[name_0] = m_0;
  }

  function $getConstructor(this$static, params){
    var id, method, superClass;
    id = getSignature(params);
    method = this$static.c.hasOwnProperty(id) && this$static.c[id];
    if (!method) {
      superClass = this$static.$.superclass;
      !superClass?null:getMembers(superClass);
    }
    else if ((method.modifiers & 1) != 0) {
      return method;
    }
    throw new NoSuchMethodException_0('Could not find public constructor ' + this$static.$.typeName + '(' + joinClasses(params) + ')');
  }

  function getMembers(cls){
    var constId, members;
    constId = cls.constId;
    members = $wnd.Reflect.$$[constId];
    if (!members) {
      members = {$:cls, _:{}, a:{}, c:{}, f:{}, i:{}, m:{}, t:{}};
      $wnd.Reflect.$$[constId] = members;
    }
    return members;
  }

  function getSignature(signature){
    var i_0, key;
    key = new StringBuilder_0;
    for (i_0 = 0; i_0 < signature.length; ++i_0) {
      key.impl.string += '_';
      $append_4(key, signature[i_0].constId);
    }
    return key.impl.string;
  }

  function joinClasses(vals){
    var cls, end, i_0, ind, joined, last, sep, totalSize, values;
    ind = vals.length;
    if (ind == 0)
      return '';
    values = initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, ind, 0);
    for (; ind-- > 0;) {
      cls = vals[ind];
      !!cls && (values[ind] = cls.pkgName + $replace(cls.typeName, 36, 46));
    }
    sep = $toCharArray(',');
    totalSize = (values.length - 1) * sep.length;
    for (i_0 = 0; i_0 < values.length; ++i_0) {
      values[i_0] == null?(values[i_0] = ''):(totalSize += values[i_0].length);
    }
    joined = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, totalSize, 1);
    ind = 0;
    i_0 = 0;
    end = values.length - 1;
    for (; i_0 < end; ++i_0) {
      arraycopy($toCharArray(values[i_0]), 0, joined, ind, values[i_0].length);
      ind += values[i_0].length;
      arraycopy(sep, 0, joined, ind, sep.length);
      ind += sep.length;
    }
    last = values[end];
    arraycopy($toCharArray(last), 0, joined, ind, last.length);
    return String.fromCharCode.apply(null, joined);
  }

  function $onModuleLoad(){
    var allowedModes, currentMode, i_0;
    currentMode = $doc.compatMode;
    allowedModes = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, ['CSS1Compat']);
    for (i_0 = 0; i_0 < allowedModes.length; ++i_0) {
      if ($equals(allowedModes[i_0], currentMode)) {
        return;
      }
    }
    allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current doucment rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom 'document.compatMode' configuration property settings.";
  }

  function $clinit_Const0_0(){
    $clinit_Const0_0 = nullMethod;
    CLS_ARR_0 = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit]);
  }

  var CLS_ARR_0;
  function $clinit_Const0_1(){
    $clinit_Const0_1 = nullMethod;
    CLS_ARR_1 = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit, I_classLit]);
  }

  var CLS_ARR_1;
  function $clinit_Const0_2(){
    $clinit_Const0_2 = nullMethod;
    CLS_ARR_2 = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [D_classLit, I_classLit]);
  }

  var CLS_ARR_2;
  function $clinit_Const0_3(){
    $clinit_Const0_3 = nullMethod;
    CLS_ARR_3 = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit, J_classLit, I_classLit]);
  }

  var CLS_ARR_3;
  function $clinit_Const0_4(){
    $clinit_Const0_4 = nullMethod;
    CLS_ARR_4 = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [D_classLit, D_classLit, I_classLit]);
  }

  var CLS_ARR_4;
  function $clinit_Const0_5(){
    $clinit_Const0_5 = nullMethod;
    CLS_ARR_5 = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Lorg_HdrHistogram_AbstractHistogram_2_classLit]);
  }

  var CLS_ARR_5;
  function $clinit_Const0_6(){
    $clinit_Const0_6 = nullMethod;
    CLS_ARR_6 = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [($clinit_Const0_5() , Lorg_HdrHistogram_AbstractHistogram_2_classLit), Z_classLit]);
  }

  var CLS_ARR_6;
  function $clinit_Const0_7(){
    $clinit_Const0_7 = nullMethod;
    CLS_ARR_7 = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit, J_classLit, I_classLit, Z_classLit]);
  }

  var CLS_ARR_7;
  function $format(format, args){
    var msg, pos, split;
    split = $split(format, '%s', 0);
    msg = new StringBuffer_0;
    for (pos = 0; pos < split.length - 1; pos += 1) {
      $append_1(msg.impl, split[pos]);
      $append_0(msg.impl, args[pos]);
    }
    $append_3(msg, split[split.length - 1]);
  }

  function ArithmeticException_0(){
    RuntimeException_0.call(this, 'divide by zero');
  }

  defineSeed(48, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), ArithmeticException_0);
  function IndexOutOfBoundsException_0(){
    $fillInStackTrace();
  }

  function IndexOutOfBoundsException_1(message){
    RuntimeException_0.call(this, message);
  }

  defineSeed(50, 6, makeCastMap([Q$Serializable, Q$Exception, Q$IndexOutOfBoundsException, Q$Throwable]), IndexOutOfBoundsException_0, IndexOutOfBoundsException_1);
  function ArrayIndexOutOfBoundsException_0(){
    $fillInStackTrace();
  }

  function ArrayIndexOutOfBoundsException_1(msg){
    IndexOutOfBoundsException_1.call(this, msg);
  }

  defineSeed(49, 50, makeCastMap([Q$Serializable, Q$ArrayIndexOutOfBoundsException, Q$Exception, Q$IndexOutOfBoundsException, Q$Throwable]), ArrayIndexOutOfBoundsException_0, ArrayIndexOutOfBoundsException_1);
  function ArrayStoreException_0(){
    $fillInStackTrace();
  }

  function ArrayStoreException_1(message){
    RuntimeException_0.call(this, message);
  }

  defineSeed(51, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), ArrayStoreException_0, ArrayStoreException_1);
  function $clinit_Boolean(){
    $clinit_Boolean = nullMethod;
    FALSE = new Boolean_1(false);
    TRUE = new Boolean_1(true);
  }

  function Boolean_1(value){
    this.value = value;
  }

  defineSeed(52, 1, makeCastMap([Q$Serializable, Q$Boolean, Q$Comparable]), Boolean_1);
  _.booleanValue = function booleanValue(){
    return this.value;
  }
  ;
  _.equals$ = function equals_0(o){
    return instanceOf(o, Q$Boolean) && o.value == this.value;
  }
  ;
  _.hashCode$ = function hashCode_1(){
    return this.value?1231:1237;
  }
  ;
  _.toString$ = function toString_3(){
    return this.value?'true':'false';
  }
  ;
  _.value = false;
  var FALSE, TRUE;
  function $clinit_Class(){
    $clinit_Class = nullMethod;
    CONSTS = ($wnd.Reflect = {$:[], $$:[], a:[], c:[], d:[], e:[], i:[], l:[], n:{}, s:[], p:{}, _a:[], _b:[], _c:[], _d:[], _e:[], _f:[], _i:[], _j:[], _l:[], _o:[], _s:[], _t:[], _z:[]} , $wnd.Reflect);
  }

  function $getName(this$static){
    if (this$static.typeName == null)
      throw new NullPointerException_0;
    return this$static.pkgName + this$static.typeName;
  }

  function $remember(this$static){
    var pos = CONSTS.c.length, check;
    CONSTS.c[pos] = this$static;
    if ($equals('true', ($clinit_System() , check = $wnd.XApi.props['gwt.reflect.remember.names'] , check == null?'true':check))) {
      var n = this$static.getName();
      CONSTS.n[n] = this$static;
    }
    return pos;
  }

  function Class_0(){
  }

  function createForArray(packageName, className, seedId, componentType){
    $clinit_Class();
    var clazz;
    clazz = new Class_0;
    setName(clazz, packageName, className, seedId != 0?-seedId:0);
    clazz.modifiers = 4;
    clazz.superclass = Ljava_lang_Object_2_classLit;
    clazz.componentType = componentType;
    return clazz;
  }

  function createForClass(packageName, className, seedId, superclass){
    $clinit_Class();
    var clazz;
    clazz = new Class_0;
    setName(clazz, packageName, className, seedId);
    clazz.superclass = superclass;
    return clazz;
  }

  function createForInterface(packageName, className){
    $clinit_Class();
    var clazz;
    clazz = new Class_0;
    setName(clazz, packageName, className, 0);
    clazz.modifiers = 2;
    return clazz;
  }

  function createForPrimitive(className, seedId){
    $clinit_Class();
    var clazz;
    clazz = new Class_0;
    setName(clazz, '', className, seedId);
    clazz.modifiers = 1;
    return clazz;
  }

  function getSeedFunction(clazz){
    var func = seedTable[clazz.seedId];
    clazz = null;
    return func;
  }

  function needsEnhance(cls){
    $clinit_Class();
    if (!cls.members) {
      cls.members = getMembers(cls);
      return true;
    }
    return false;
  }

  function setClassLiteral(seedId, clazz){
    var proto;
    clazz.seedId = seedId;
    if (seedId == 2) {
      proto = String.prototype;
    }
    else {
      if (seedId > 0) {
        var seed = getSeedFunction(clazz);
        if (seed) {
          proto = seed.prototype;
        }
        else {
          seed = seedTable[seedId] = function(){
          }
          ;
          seed.___clazz$ = clazz;
          return;
        }
      }
      else {
        return;
      }
    }
    proto.___clazz$ = clazz;
  }

  function setName(clazz, packageName, className, seedId){
    clazz.pkgName = packageName.length == 0?'':packageName;
    clazz.typeName = className;
    typeof seedId == 'number' && seedId > 0 && setClassLiteral(seedId, clazz);
    clazz.constId = $remember(clazz);
  }

  defineSeed(53, 1, makeCastMap([Q$Serializable, Q$Class, Q$AnnotatedElement, Q$GenericDeclaration, Q$Type]), Class_0);
  _.getName = function getName(){
    return $getName(this);
  }
  ;
  _.toString$ = function toString_4(){
    return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + $getName(this);
  }
  ;
  _.classData = null;
  _.componentType = null;
  _.constId = 0;
  _.members = null;
  _.modifiers = 0;
  _.pkgName = null;
  _.seedId = 0;
  _.superclass = null;
  _.typeName = null;
  var CONSTS = null;
  defineSeed(55, 1, makeCastMap([Q$Serializable, Q$Number]));
  function $clinit_Double(){
    $clinit_Double = nullMethod;
    powers = initValues(_3D_classLit, makeCastMap([Q$Serializable]), -1, [1.3407807929942597E154, 1.157920892373162E77, 3.4028236692093846E38, 1.8446744073709552E19, 4294967296, 65536, 256, 16, 4, 2]);
    invPowers = initValues(_3D_classLit, makeCastMap([Q$Serializable]), -1, [7.458340731200207E-155, 8.636168555094445E-78, 2.9387358770557188E-39, 5.421010862427522E-20, 2.3283064365386963E-10, 1.52587890625E-5, 0.00390625, 0.0625, 0.25, 0.5]);
  }

  function Double_0(value){
    $clinit_Double();
    this.value = value;
  }

  function doubleToLongBits(value){
    $clinit_Double();
    var bit, exp, i_0, ihi, ilo, negative;
    if (isNaN_0(value)) {
      return P7ff8000000000000_longLit;
    }
    negative = false;
    if (value == 0) {
      return 1 / value == -Infinity?N8000000000000000_longLit:P0_longLit;
    }
    if (value < 0) {
      negative = true;
      value = -value;
    }
    if (!isFinite(value)) {
      return negative?N10000000000000_longLit:P7ff0000000000000_longLit;
    }
    exp = 0;
    if (value < 1) {
      bit = 512;
      for (i_0 = 0; i_0 < 10; ++i_0 , bit >>= 1) {
        if (value < invPowers[i_0] && exp - bit >= -1023) {
          value *= powers[i_0];
          exp -= bit;
        }
      }
      if (value < 1 && exp - 1 >= -1023) {
        value *= 2;
        --exp;
      }
    }
    else if (value >= 2) {
      bit = 512;
      for (i_0 = 0; i_0 < 10; ++i_0 , bit >>= 1) {
        if (value >= powers[i_0]) {
          value *= invPowers[i_0];
          exp += bit;
        }
      }
    }
    exp > -1023?(value -= 1):(value *= 0.5);
    ihi = fromDouble(value * 1048576);
    value -= toDouble(ihi) * 9.5367431640625E-7;
    ilo = fromDouble(value * 4503599627370496);
    ihi = or(ihi, fromInt(exp + 1023 << 20));
    negative && (ihi = or(ihi, P80000000_longLit));
    return or(shl(ihi, 32), ilo);
  }

  function isNaN_0(x){
    $clinit_Double();
    return isNaN(x);
  }

  function longBitsToDouble(bits){
    $clinit_Double();
    var bit, d, exp, i_0, ihi, ilo, negative;
    ihi = shr(bits, 32);
    ilo = and(bits, Pffffffff_longLit);
    lt(ihi, P0_longLit) && (ihi = add(ihi, P100000000_longLit));
    lt(ilo, P0_longLit) && (ilo = add(ilo, P100000000_longLit));
    negative = neq(and(ihi, N80000000_longLit), P0_longLit);
    exp = toInt(and(shr(ihi, 20), P7ff_longLit));
    ihi = and(ihi, Pfffff_longLit);
    if (exp == 0) {
      d = toDouble(ihi) * 9.5367431640625E-7 + toDouble(ilo) * 2.220446049250313E-16;
      d *= 2.2250738585072014E-308;
      return negative?d == 0?-0.:-d:d;
    }
    else if (exp == 2047) {
      return eq(ihi, P0_longLit) && eq(ilo, P0_longLit)?negative?-Infinity:Infinity:NaN;
    }
    exp -= 1023;
    d = 1 + toDouble(ihi) * 9.5367431640625E-7 + toDouble(ilo) * 2.220446049250313E-16;
    if (exp > 0) {
      bit = 512;
      for (i_0 = 0; i_0 < 10; ++i_0 , bit >>= 1) {
        if (exp >= bit) {
          d *= powers[i_0];
          exp -= bit;
        }
      }
    }
    else if (exp < 0) {
      while (exp < 0) {
        bit = 512;
        for (i_0 = 0; i_0 < 10; ++i_0 , bit >>= 1) {
          if (exp <= -bit) {
            d *= invPowers[i_0];
            exp += bit;
          }
        }
      }
    }
    return negative?-d:d;
  }

  defineSeed(54, 55, makeCastMap([Q$Serializable, Q$Comparable, Q$Double, Q$Number]), Double_0);
  _.doubleValue = function doubleValue(){
    return this.value;
  }
  ;
  _.equals$ = function equals_1(o){
    return instanceOf(o, Q$Double) && o.value == this.value;
  }
  ;
  _.hashCode$ = function hashCode_2(){
    return round_int(this.value);
  }
  ;
  _.longValue = function longValue(){
    return fromDouble(this.value);
  }
  ;
  _.toString$ = function toString_5(){
    return '' + this.value;
  }
  ;
  _.value = 0;
  var invPowers, powers;
  defineSeed(56, 8, makeCastMap([Q$Serializable, Q$Throwable]));
  function IllegalArgumentException_0(){
    $fillInStackTrace();
  }

  function IllegalArgumentException_1(message){
    RuntimeException_0.call(this, message);
  }

  function IllegalArgumentException_2(cause){
    RuntimeException_1.call(this, cause);
  }

  defineSeed(57, 6, makeCastMap([Q$Serializable, Q$Exception, Q$IllegalArgumentException, Q$Throwable]), IllegalArgumentException_0, IllegalArgumentException_1, IllegalArgumentException_2);
  function IllegalStateException_0(){
    $fillInStackTrace();
  }

  function IllegalStateException_1(s){
    RuntimeException_0.call(this, s);
  }

  defineSeed(58, 6, makeCastMap([Q$Serializable, Q$Exception, Q$IllegalStateException, Q$Throwable]), IllegalStateException_0, IllegalStateException_1);
  function Integer_0(value){
    this.value = value;
  }

  function numberOfLeadingZeros_0(i_0){
    var m_0, n, y;
    if (i_0 < 0) {
      return 0;
    }
    else if (i_0 == 0) {
      return 32;
    }
    else {
      y = -(i_0 >> 16);
      m_0 = y >> 16 & 16;
      n = 16 - m_0;
      i_0 = i_0 >> m_0;
      y = i_0 - 256;
      m_0 = y >> 16 & 8;
      n += m_0;
      i_0 <<= m_0;
      y = i_0 - 4096;
      m_0 = y >> 16 & 4;
      n += m_0;
      i_0 <<= m_0;
      y = i_0 - 16384;
      m_0 = y >> 16 & 2;
      n += m_0;
      i_0 <<= m_0;
      y = i_0 >> 14;
      m_0 = y & ~(y >> 1);
      return n + 2 - m_0;
    }
  }

  function numberOfTrailingZeros(i_0){
    var r, rtn;
    if (i_0 == 0) {
      return 32;
    }
    else {
      rtn = 0;
      for (r = 1; (r & i_0) == 0; r <<= 1) {
        ++rtn;
      }
      return rtn;
    }
  }

  function toPowerOfTwoString(value){
    var buf, digits, pos;
    buf = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, 8, 1);
    digits = ($clinit_Number$__Digits() , digits_0);
    pos = 7;
    if (value >= 0) {
      while (value > 15) {
        buf[pos--] = digits[value & 15];
        value >>= 4;
      }
    }
    else {
      while (pos > 0) {
        buf[pos--] = digits[value & 15];
        value >>= 4;
      }
    }
    buf[pos] = digits[value & 15];
    return __valueOf(buf, pos, 8);
  }

  function valueOf(i_0){
    var rebase, result;
    if (i_0 > -129 && i_0 < 128) {
      rebase = i_0 + 128;
      result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
      !result && (result = boxedValues_0[rebase] = new Integer_0(i_0));
      return result;
    }
    return new Integer_0(i_0);
  }

  defineSeed(59, 55, makeCastMap([Q$Serializable, Q$Comparable, Q$Integer, Q$Number]), Integer_0);
  _.doubleValue = function doubleValue_0(){
    return this.value;
  }
  ;
  _.equals$ = function equals_2(o){
    return instanceOf(o, Q$Integer) && o.value == this.value;
  }
  ;
  _.hashCode$ = function hashCode_3(){
    return this.value;
  }
  ;
  _.longValue = function longValue_0(){
    return fromInt(this.value);
  }
  ;
  _.toString$ = function toString_6(){
    return '' + this.value;
  }
  ;
  _.value = 0;
  function $clinit_Integer$BoxedValues(){
    $clinit_Integer$BoxedValues = nullMethod;
    boxedValues_0 = initDim(_3Ljava_lang_Integer_2_classLit, makeCastMap([Q$Serializable]), Q$Integer, 256, 0);
  }

  var boxedValues_0;
  defineSeed(62, 56, makeCastMap([Q$Serializable, Q$Throwable]));
  function InternalError_0(){
    $fillInStackTrace();
  }

  function InternalError_1(){
    Throwable_1.call(this, 'InflaterHuffmanTree: static tree length illegal');
  }

  defineSeed(61, 62, makeCastMap([Q$Serializable, Q$Throwable]), InternalError_0, InternalError_1);
  function Long_0(value){
    this.value = value;
  }

  function numberOfLeadingZeros_1(i_0){
    var high;
    high = toInt(shr(i_0, 32));
    return high != 0?numberOfLeadingZeros_0(high):numberOfLeadingZeros_0(toInt(i_0)) + 32;
  }

  function valueOf_0(i_0){
    var rebase, result;
    if (gt(i_0, N81_longLit) && lt(i_0, P80_longLit)) {
      rebase = toInt(i_0) + 128;
      result = ($clinit_Long$BoxedValues() , boxedValues_1)[rebase];
      !result && (result = boxedValues_1[rebase] = new Long_0(i_0));
      return result;
    }
    return new Long_0(i_0);
  }

  defineSeed(63, 55, makeCastMap([Q$Serializable, Q$Comparable, Q$Long, Q$Number]), Long_0);
  _.doubleValue = function doubleValue_1(){
    return toDouble(this.value);
  }
  ;
  _.equals$ = function equals_3(o){
    return instanceOf(o, Q$Long) && eq(o.value, this.value);
  }
  ;
  _.hashCode$ = function hashCode_4(){
    return toInt(this.value);
  }
  ;
  _.longValue = function longValue_1(){
    return this.value;
  }
  ;
  _.toString$ = function toString_7(){
    return '' + toString_2(this.value);
  }
  ;
  _.value = P0_longLit;
  function $clinit_Long$BoxedValues(){
    $clinit_Long$BoxedValues = nullMethod;
    boxedValues_1 = initDim(_3Ljava_lang_Long_2_classLit, makeCastMap([Q$Serializable]), Q$Long, 256, 0);
  }

  var boxedValues_1;
  function ceil(x){
    return Math.ceil(x);
  }

  function floor(x){
    return Math.floor(x);
  }

  function log(x){
    return Math.log(x);
  }

  function max_0(x, y){
    return x > y?x:y;
  }

  function max_1(x, y){
    return gt(x, y)?x:y;
  }

  function min(x, y){
    return x < y?x:y;
  }

  function min_0(x, y){
    return !gte_0(x, y)?x:y;
  }

  function pow(x, exp){
    return Math.pow(x, exp);
  }

  function sqrt(x){
    return Math.sqrt(x);
  }

  defineSeed(67, 7, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]));
  function NoSuchMethodException_0(s){
    Exception_0.call(this, s);
  }

  defineSeed(66, 67, makeCastMap([Q$Serializable, Q$Exception, Q$NoSuchMethodException, Q$Throwable]), NoSuchMethodException_0);
  function NullPointerException_0(){
    $fillInStackTrace();
  }

  function NullPointerException_1(){
    RuntimeException_0.call(this, 'Null is not allowed');
  }

  defineSeed(68, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), NullPointerException_0, NullPointerException_1);
  function $clinit_Number$__Digits(){
    $clinit_Number$__Digits = nullMethod;
    digits_0 = initValues(_3C_classLit, makeCastMap([Q$Serializable]), -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
  }

  var digits_0;
  function StackTraceElement_0(methodName){
    this.className = 'Unknown';
    this.methodName = methodName;
    this.lineNumber = -1;
  }

  defineSeed(70, 1, makeCastMap([Q$Serializable, Q$StackTraceElement]), StackTraceElement_0);
  _.toString$ = function toString_8(){
    return this.className + '.' + this.methodName + '(Unknown Source' + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
  }
  ;
  _.className = null;
  _.lineNumber = 0;
  _.methodName = null;
  function $charAt(this$static, index){
    return this$static.charCodeAt(index);
  }

  function $equals(this$static, other){
    if (!instanceOf(other, Q$String)) {
      return false;
    }
    return String(this$static) == other;
  }

  function $getChars(this$static, srcEnd, dst, dstBegin){
    var srcIdx;
    for (srcIdx = 0; srcIdx < srcEnd; ++srcIdx) {
      dst[dstBegin++] = this$static.charCodeAt(srcIdx);
    }
  }

  function $replace(this$static, from, to){
    var regex;
    if (from < 256) {
      regex = toPowerOfTwoString(from);
      regex = '\\x00'.substring(regex.length) + regex;
    }
    else {
      regex = String.fromCharCode(from);
    }
    return this$static.replace(RegExp(regex, 'g'), String.fromCharCode(to));
  }

  function $split(this$static, regex, maxMatch){
    var compiled = new RegExp(regex, 'g');
    var out = [];
    var count = 0;
    var trail = this$static;
    var lastTrail = null;
    while (true) {
      var matchObj = compiled.exec(trail);
      if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
        out[count] = trail;
        break;
      }
      else {
        out[count] = trail.substring(0, matchObj.index);
        trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
        compiled.lastIndex = 0;
        if (lastTrail == trail) {
          out[count] = trail.substring(0, 1);
          trail = trail.substring(1);
        }
        lastTrail = trail;
        count++;
      }
    }
    if (maxMatch == 0 && this$static.length > 0) {
      var lastNonEmpty = out.length;
      while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
        --lastNonEmpty;
      }
      lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
    }
    var jr = __createArray(out.length);
    for (var i_0 = 0; i_0 < out.length; ++i_0) {
      jr[i_0] = out[i_0];
    }
    return jr;
  }

  function $substring(this$static, beginIndex, endIndex){
    return this$static.substr(beginIndex, endIndex - beginIndex);
  }

  function $toCharArray(this$static){
    var charArr, n;
    n = this$static.length;
    charArr = initDim(_3C_classLit, makeCastMap([Q$Serializable]), -1, n, 1);
    $getChars(this$static, n, charArr, 0);
    return charArr;
  }

  function $trim(this$static){
    if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
      return this$static;
    }
    var r1 = this$static.replace(/^(\s*)/, '');
    var r2 = r1.replace(/\s*$/, '');
    return r2;
  }

  function __createArray(numElements){
    return initDim(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, numElements, 0);
  }

  function __valueOf(x, start, end){
    x = x.slice(start, end);
    return String.fromCharCode.apply(null, x);
  }

  _ = String.prototype;
  _.castableTypeMap$ = makeCastMap([Q$String, Q$Serializable, Q$CharSequence, Q$Comparable]);
  _.equals$ = function equals_4(other){
    return $equals(this, other);
  }
  ;
  _.hashCode$ = function hashCode_5(){
    return getHashCode_0(this);
  }
  ;
  _.toString$ = _.toString;
  function $clinit_String$HashCache(){
    $clinit_String$HashCache = nullMethod;
    back_0 = {};
    front = {};
  }

  function compute(str){
    var hashCode, i_0, n, nBatch;
    hashCode = 0;
    n = str.length;
    nBatch = n - 4;
    i_0 = 0;
    while (i_0 < nBatch) {
      hashCode = str.charCodeAt(i_0 + 3) + 31 * (str.charCodeAt(i_0 + 2) + 31 * (str.charCodeAt(i_0 + 1) + 31 * (str.charCodeAt(i_0) + 31 * hashCode))) | 0;
      i_0 += 4;
    }
    while (i_0 < n) {
      hashCode = hashCode * 31 + $charAt(str, i_0++);
    }
    return hashCode | 0;
  }

  function getHashCode_0(str){
    $clinit_String$HashCache();
    var key = ':' + str;
    var result = front[key];
    if (result != null) {
      return result;
    }
    result = back_0[key];
    result == null && (result = compute(str));
    increment();
    return front[key] = result;
  }

  function increment(){
    if (count_0 == 256) {
      back_0 = front;
      front = {};
      count_0 = 0;
    }
    ++count_0;
  }

  var back_0, count_0 = 0, front;
  function $append_2(this$static, x){
    $append(this$static.impl, x);
    return this$static;
  }

  function $append_3(this$static, x){
    $append_1(this$static.impl, x);
    return this$static;
  }

  function StringBuffer_0(){
    this.impl = new StringBufferImplAppend_0;
  }

  defineSeed(72, 1, makeCastMap([Q$CharSequence]), StringBuffer_0);
  _.toString$ = function toString_9(){
    return this.impl.string;
  }
  ;
  function $$init(this$static){
    this$static.impl = new StringBufferImplAppend_0;
  }

  function $append_4(this$static, x){
    $append(this$static.impl, x);
    return this$static;
  }

  function StringBuilder_0(){
    $$init(this);
  }

  function StringBuilder_1(){
    $$init(this);
  }

  defineSeed(73, 1, makeCastMap([Q$CharSequence]), StringBuilder_0, StringBuilder_1);
  _.toString$ = function toString_10(){
    return this.impl.string;
  }
  ;
  function $clinit_System(){
    $clinit_System = nullMethod;
    $wnd.XApi?!$wnd.XApi.props && ($wnd.XApi.props = {}):($wnd.XApi = {props:{}});
  }

  function arraycopy(src, srcOfs, dest, destOfs, len){
    $clinit_System();
    var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
    if (src == null || dest == null) {
      throw new NullPointerException_0;
    }
    srcType = getClass__devirtual$(src);
    destType = getClass__devirtual$(dest);
    if ((srcType.modifiers & 4) == 0 || (destType.modifiers & 4) == 0) {
      throw new ArrayStoreException_1('Must be array types');
    }
    srcComp = srcType.componentType;
    destComp = destType.componentType;
    if (!((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0)) {
      throw new ArrayStoreException_1('Array types must match');
    }
    srclen = src.length;
    destlen = dest.length;
    if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
      throw new IndexOutOfBoundsException_0;
    }
    if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
      srcArray = src;
      destArray = dest;
      if (maskUndefined(src) === maskUndefined(dest) && srcOfs < destOfs) {
        srcOfs += len;
        for (destEnd = destOfs + len; destEnd-- > destOfs;) {
          setCheck(destArray, destEnd, srcArray[--srcOfs]);
        }
      }
      else {
        for (destEnd = destOfs + len; destOfs < destEnd;) {
          setCheck(destArray, destOfs++, srcArray[srcOfs++]);
        }
      }
    }
    else {
      Array.prototype.splice.apply(dest, [destOfs, len].concat(src.slice(srcOfs, srcOfs + len)));
    }
  }

  function UnsupportedOperationException_0(){
    $fillInStackTrace();
  }

  function UnsupportedOperationException_1(){
    RuntimeException_0.call(this, 'Add not supported on this collection');
  }

  defineSeed(75, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), UnsupportedOperationException_0, UnsupportedOperationException_1);
  defineSeed(76, 1, makeCastMap([Q$AnnotatedElement]));
  function $create(func, args){
    return func.apply(null, args);
  }

  function $newInstance(this$static, initargs){
    return $create(this$static.method, initargs);
  }

  function Constructor_0(from, modifiers, method, params, exceptions){
    this.clazz = from;
    this.modifiers = modifiers;
    this.method = method;
    this.parameterTypes = params;
    this.exceptionTypes = exceptions;
  }

  defineSeed(77, 76, makeCastMap([Q$AnnotatedElement, Q$Constructor, Q$GenericDeclaration]), Constructor_0);
  _.equals$ = function equals_5(obj){
    var i_0, other, params1, params2;
    if (obj != null && instanceOf(obj, Q$Constructor)) {
      other = obj;
      if (this.clazz == other.clazz) {
        params1 = this.parameterTypes;
        params2 = other.parameterTypes;
        if (params1.length == params2.length) {
          for (i_0 = 0; i_0 < params1.length; ++i_0) {
            if (params1[i_0] != params2[i_0])
              return false;
          }
          return true;
        }
      }
    }
    return false;
  }
  ;
  _.hashCode$ = function hashCode_6(){
    return getHashCode_0($getName(this.clazz));
  }
  ;
  _.toString$ = function toString_11(){
    var e, exceptions, j, k_0, mod, params, sb;
    try {
      sb = new StringBuffer_0;
      mod = this.modifiers & 7;
      mod != 0 && $append_3(sb, toString_14(mod) + ' ');
      $append_3(sb, getTypeName(this.clazz));
      sb.impl.string += '(';
      params = this.parameterTypes;
      for (j = 0; j < params.length; ++j) {
        $append_3(sb, getTypeName(params[j]));
        j < params.length - 1 && (sb.impl.string += ',' , sb);
      }
      sb.impl.string += ')';
      exceptions = this.exceptionTypes;
      if (exceptions.length > 0) {
        sb.impl.string += ' throws ';
        for (k_0 = 0; k_0 < exceptions.length; ++k_0) {
          $append_3(sb, $getName(exceptions[k_0]));
          k_0 < exceptions.length - 1 && (sb.impl.string += ',' , sb);
        }
      }
      return sb.impl.string;
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$Exception)) {
        e = $e0;
        return '<' + e + '>';
      }
      else
        throw $e0;
    }
  }
  ;
  _.clazz = null;
  _.exceptionTypes = null;
  _.method = null;
  _.modifiers = 0;
  _.parameterTypes = null;
  function Field_0(returnType, declaringClass, name_0, modifiers){
    this.clazz = declaringClass;
    this.name_0 = name_0;
    this.type = returnType;
    this.modifiers = modifiers;
  }



  function getTypeName(type){
    var cl, dimensions, i_0, sb;
    if ((type.modifiers & 4) != 0) {
      try {
        cl = type;
        dimensions = 0;
        while ((cl.modifiers & 4) != 0) {
          ++dimensions;
          cl = cl.componentType;
        }
        sb = new StringBuffer_0;
        $append_3(sb, $getName(cl));
        for (i_0 = 0; i_0 < dimensions; ++i_0) {
          sb.impl.string += '[]';
        }
        return sb.impl.string;
      }
      catch ($e0) {
        $e0 = caught($e0);
        if (!instanceOf($e0, Q$Throwable))
          throw $e0;
      }
    }
    return $getName(type);
  }

  defineSeed(78, 76, makeCastMap([Q$AnnotatedElement, Q$Field]), Field_0);
  _.equals$ = function equals_6(obj){
    var other;
    if (obj != null && instanceOf(obj, Q$Field)) {
      other = obj;
      return this.clazz == other.clazz && this.name_0 == other.name_0 && this.type == other.type;
    }
    return false;
  }
  ;
  _.hashCode$ = function hashCode_7(){
    return getHashCode_0($getName(this.clazz)) ^ getHashCode_0(this.name_0);
  }
  ;
  _.toString$ = function toString_12(){
    var mod;
    mod = this.modifiers;
    return (mod == 0?'':toString_14(mod) + ' ') + getTypeName(this.type) + ' ' + getTypeName(this.clazz) + '.' + this.name_0;
  }
  ;
  _.clazz = null;
  _.modifiers = 0;
  _.name_0 = null;
  _.type = null;
  function Int_Field_0(declaringClass, name_0, modifiers){
    Field_0.call(this, I_classLit, declaringClass, name_0, modifiers);
  }

  defineSeed(79, 78, makeCastMap([Q$AnnotatedElement, Q$Field]), Int_Field_0);
  function Long_Field_0(declaringClass){
    Field_0.call(this, J_classLit, declaringClass, 'totalCount', 0);
  }

  defineSeed(80, 78, makeCastMap([Q$AnnotatedElement, Q$Field]), Long_Field_0);
  function Method_0(){
    this.parameterTypes = this.exceptionTypes = initDim(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, 0, 0);
  }

  defineSeed(81, 76, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]));
  _.equals$ = function equals_7(obj){
    var i_0, other, params1, params2;
    if (obj === this)
      return true;
    if (instanceOf(obj, Q$Method)) {
      other = obj;
      if (this.getDeclaringClass() == other.getDeclaringClass() && this.getName() == other.getName()) {
        if (!null.nullMethod(other.getReturnType()))
          return false;
        params1 = this.parameterTypes;
        params2 = other.parameterTypes;
        if (params1.length == params2.length) {
          for (i_0 = 0; i_0 < params1.length; ++i_0) {
            if (params1[i_0] != params2[i_0])
              return false;
          }
          return true;
        }
      }
    }
    return false;
  }
  ;
  _.getDeclaringClass = function getDeclaringClass(){
    return this.clazz;
  }
  ;
  _.getExceptionTypes = function getExceptionTypes(){
    return this.exceptionTypes;
  }
  ;
  _.getModifiers = function getModifiers(){
    return this.modifiers;
  }
  ;
  _.getName = function getName_0(){
    return this.name_0;
  }
  ;
  _.getParameterTypes = function getParameterTypes(){
    return this.parameterTypes;
  }
  ;
  _.getReturnType = function getReturnType(){
    return this.returnType;
  }
  ;
  _.hashCode$ = function hashCode_8(){
    return getHashCode_0($getName(this.getDeclaringClass())) ^ getHashCode_0(this.getName());
  }
  ;
  _.toString$ = function toString_13(){
    var e, exceptions, j, k_0, mod, params, sb;
    try {
      sb = new StringBuffer_0;
      mod = this.getModifiers() & 1343;
      mod != 0 && $append_3(sb, toString_14(mod) + ' ');
      $append_3(sb, getTypeName(this.getReturnType()) + ' ');
      $append_3(sb, getTypeName(this.getDeclaringClass()) + '.');
      $append_3(sb, this.getName() + '(');
      params = this.getParameterTypes();
      for (j = 0; j < params.length; ++j) {
        $append_3(sb, getTypeName(params[j]));
        j < params.length - 1 && (sb.impl.string += ',' , sb);
      }
      sb.impl.string += ')';
      exceptions = this.getExceptionTypes();
      if (exceptions != null && exceptions.length > 0) {
        sb.impl.string += ' throws ';
        for (k_0 = 0; k_0 < exceptions.length; ++k_0) {
          $append_3(sb, $getName(exceptions[k_0]));
          k_0 < exceptions.length - 1 && (sb.impl.string += ',' , sb);
        }
      }
      return sb.impl.string;
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$Exception)) {
        e = $e0;
        return '<' + e + '>';
      }
      else
        throw $e0;
    }
  }
  ;
  _.clazz = null;
  _.exceptionTypes = null;
  _.modifiers = 0;
  _.name_0 = null;
  _.parameterTypes = null;
  _.returnType = null;
  function toString_14(mod){
    var len, sb;
    sb = new StringBuffer_0;
    (mod & 1) != 0 && (sb.impl.string += 'public ' , sb);
    (mod & 4) != 0 && (sb.impl.string += 'protected ' , sb);
    (mod & 2) != 0 && (sb.impl.string += 'private ' , sb);
    (mod & 1024) != 0 && (sb.impl.string += 'abstract ' , sb);
    (mod & 8) != 0 && (sb.impl.string += 'static ' , sb);
    (mod & 16) != 0 && (sb.impl.string += 'final ' , sb);
    (mod & 128) != 0 && (sb.impl.string += 'transient ' , sb);
    (mod & 64) != 0 && (sb.impl.string += 'volatile ' , sb);
    (mod & 32) != 0 && (sb.impl.string += 'synchronized ' , sb);
    (mod & 256) != 0 && (sb.impl.string += 'native ' , sb);
    (mod & 2048) != 0 && (sb.impl.string += 'strictfp ' , sb);
    (mod & 512) != 0 && (sb.impl.string += 'interface ' , sb);
    if ((len = sb.impl.string.length) > 0)
      return $substring(sb.impl.string, 0, len - 1);
    return '';
  }

  function $clear(this$static){
    this$static.position_0 = 0;
    this$static.mark = -1;
    this$static.limit = this$static.capacity_0;
    return this$static;
  }

  function $position(this$static, newPosition){
    if (newPosition < 0 || newPosition > this$static.limit) {
      throw new IllegalArgumentException_0;
    }
    this$static.position_0 = newPosition;
    this$static.mark != -1 && this$static.mark > this$static.position_0 && (this$static.mark = -1);
    return this$static;
  }

  function $rewind(this$static){
    this$static.position_0 = 0;
    this$static.mark = -1;
    return this$static;
  }

  function Buffer_0(capacity){
    if (capacity < 0) {
      throw new IllegalArgumentException_0;
    }
    this.capacity_0 = this.limit = capacity;
  }

  defineSeed(85, 1, {});
  _.capacity_1 = function capacity_0(){
    return this.capacity_0;
  }
  ;
  _.position_1 = function position(){
    return this.position_0;
  }
  ;
  _.position_2 = function position_0(newPosition){
    return $position(this, newPosition);
  }
  ;
  _.rewind_0 = function rewind(){
    return $rewind(this);
  }
  ;
  _.capacity_0 = 0;
  _.limit = 0;
  _.mark = -1;
  _.position_0 = 0;
  function allocate(capacity){
    if (capacity < 0) {
      throw new IllegalArgumentException_0;
    }
    return new ReadWriteHeapByteBuffer_0(capacity);
  }

  function wrap(array){
    return new ReadWriteHeapByteBuffer_1(array);
  }

  defineSeed(84, 85, makeCastMap([Q$Comparable, Q$ByteBuffer]));
  _.array_1 = function array_0(){
    return this.backingArray;
  }
  ;
  _.equals$ = function equals_8(other){
    var equalSoFar, myPosition, otherBuffer, otherPosition;
    if (!instanceOf(other, Q$ByteBuffer)) {
      return false;
    }
    otherBuffer = other;
    if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
      return false;
    }
    myPosition = this.position_0;
    otherPosition = otherBuffer.position_0;
    equalSoFar = true;
    while (equalSoFar && myPosition < this.limit) {
      equalSoFar = $get(this, myPosition++) == $get(otherBuffer, otherPosition++);
    }
    return equalSoFar;
  }
  ;
  _.hashCode$ = function hashCode_9(){
    var hash, myPosition;
    myPosition = this.position_0;
    hash = 0;
    while (myPosition < this.limit) {
      hash = hash + $get(this, myPosition++);
    }
    return hash;
  }
  ;
  _.toString$ = function toString_15(){
    var buf;
    buf = new StringBuffer_0;
    $append_3(buf, $getName(this.___clazz$));
    buf.impl.string += ', status: capacity=';
    $append_2(buf, this.capacity_0);
    buf.impl.string += ' position=';
    $append_2(buf, this.position_0);
    buf.impl.string += ' limit=';
    $append_2(buf, this.limit);
    return buf.impl.string;
  }
  ;
  _.order = 0;
  defineSeed(83, 84, makeCastMap([Q$Comparable, Q$ByteBuffer]));
  function BufferOverflowException_0(){
    $fillInStackTrace();
  }

  defineSeed(86, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), BufferOverflowException_0);
  function BufferUnderflowException_0(){
    $fillInStackTrace();
  }

  defineSeed(87, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), BufferUnderflowException_0);
  function $get(this$static, index){
    if (index < 0 || index >= this$static.limit) {
      throw new IndexOutOfBoundsException_0;
    }
    return this$static.backingArray[this$static.offset + index];
  }

  function $getInt(this$static){
    var newPosition, result;
    newPosition = this$static.position_0 + 4;
    if (newPosition > this$static.limit) {
      throw new BufferUnderflowException_0;
    }
    result = $loadInt(this$static, this$static.position_0);
    this$static.position_0 = newPosition;
    return result;
  }

  function $getInt_0(this$static, index){
    if (index < 0 || index + 4 > this$static.limit) {
      throw new IndexOutOfBoundsException_0;
    }
    return $loadInt(this$static, index);
  }

  function $getLong(this$static){
    var newPosition, result;
    newPosition = this$static.position_0 + 8;
    if (newPosition > this$static.limit) {
      throw new BufferUnderflowException_0;
    }
    result = $loadLong(this$static, this$static.position_0);
    this$static.position_0 = newPosition;
    return result;
  }

  function $getLong_0(this$static, index){
    if (index < 0 || index + 8 > this$static.limit) {
      throw new IndexOutOfBoundsException_0;
    }
    return $loadLong(this$static, index);
  }

  function $getShort(this$static, index){
    if (index < 0 || index + 2 > this$static.limit) {
      throw new IndexOutOfBoundsException_0;
    }
    return $loadShort(this$static, index);
  }

  function $loadInt(this$static, index){
    var baseOffset, bytes, i_0;
    baseOffset = this$static.offset + index;
    bytes = 0;
    if (this$static.order == 0) {
      for (i_0 = 0; i_0 < 4; ++i_0) {
        bytes = bytes << 8;
        bytes = bytes | this$static.backingArray[baseOffset + i_0] & 255;
      }
    }
    else {
      for (i_0 = 3; i_0 >= 0; --i_0) {
        bytes = bytes << 8;
        bytes = bytes | this$static.backingArray[baseOffset + i_0] & 255;
      }
    }
    return bytes;
  }

  function $loadLong(this$static, index){
    var baseOffset, bytes, i_0;
    baseOffset = this$static.offset + index;
    bytes = P0_longLit;
    if (this$static.order == 0) {
      for (i_0 = 0; i_0 < 8; ++i_0) {
        bytes = shl(bytes, 8);
        bytes = or(bytes, fromInt(this$static.backingArray[baseOffset + i_0] & 255));
      }
    }
    else {
      for (i_0 = 7; i_0 >= 0; --i_0) {
        bytes = shl(bytes, 8);
        bytes = or(bytes, fromInt(this$static.backingArray[baseOffset + i_0] & 255));
      }
    }
    return bytes;
  }

  function $loadShort(this$static, index){
    var baseOffset, bytes;
    baseOffset = this$static.offset + index;
    if (this$static.order == 0) {
      bytes = this$static.backingArray[baseOffset] << 8 << 16 >> 16;
      bytes = (bytes | this$static.backingArray[baseOffset + 1] & 255) << 16 >> 16;
    }
    else {
      bytes = this$static.backingArray[baseOffset + 1] << 8 << 16 >> 16;
      bytes = (bytes | this$static.backingArray[baseOffset] & 255) << 16 >> 16;
    }
    return bytes;
  }

  function $store(this$static, index, value){
    var baseOffset, i_0;
    baseOffset = this$static.offset + index;
    if (this$static.order == 0) {
      for (i_0 = 3; i_0 >= 0; --i_0) {
        this$static.backingArray[baseOffset + i_0] = (value & 255) << 24 >> 24;
        value = value >> 8;
      }
    }
    else {
      for (i_0 = 0; i_0 <= 3; ++i_0) {
        this$static.backingArray[baseOffset + i_0] = (value & 255) << 24 >> 24;
        value = value >> 8;
      }
    }
  }

  function $store_0(this$static, index, value){
    var baseOffset, i_0;
    baseOffset = this$static.offset + index;
    if (this$static.order == 0) {
      for (i_0 = 7; i_0 >= 0; --i_0) {
        this$static.backingArray[baseOffset + i_0] = toInt(and(value, Pff_longLit)) << 24 >> 24;
        value = shr(value, 8);
      }
    }
    else {
      for (i_0 = 0; i_0 <= 7; ++i_0) {
        this$static.backingArray[baseOffset + i_0] = toInt(and(value, Pff_longLit)) << 24 >> 24;
        value = shr(value, 8);
      }
    }
  }

  function $store_1(this$static, index, value){
    var baseOffset;
    baseOffset = this$static.offset + index;
    if (this$static.order == 0) {
      this$static.backingArray[baseOffset] = (value >> 8 & 255) << 24 >> 24;
      this$static.backingArray[baseOffset + 1] = (value & 255) << 24 >> 24;
    }
    else {
      this$static.backingArray[baseOffset + 1] = (value >> 8 & 255) << 24 >> 24;
      this$static.backingArray[baseOffset] = (value & 255) << 24 >> 24;
    }
  }

  function HeapByteBuffer_0(backingArray, capacity, offset){
    Buffer_0.call(this, capacity);
    this.backingArray = backingArray;
    this.offset = offset;
    if (offset + capacity > backingArray.length) {
      throw new IndexOutOfBoundsException_0;
    }
  }

  defineSeed(88, 83, makeCastMap([Q$Comparable, Q$ByteBuffer]));
  _.backingArray = null;
  _.offset = 0;
  function $put(this$static, src, len){
    var i_0, length_0;
    length_0 = src.length;
    if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
      throw new IndexOutOfBoundsException_0;
    }
    if (len > this$static.limit - this$static.position_0) {
      throw new BufferOverflowException_0;
    }
    for (i_0 = 0; i_0 < len; ++i_0) {
      $put_0(this$static, src[i_0]);
    }
    return this$static;
  }

  function IntBuffer_0(capacity){
    Buffer_0.call(this, capacity);
  }

  defineSeed(89, 85, makeCastMap([Q$Comparable, Q$IntBuffer]));
  _.equals$ = function equals_9(other){
    var equalSoFar, myPosition, otherBuffer, otherPosition;
    if (!instanceOf(other, Q$IntBuffer)) {
      return false;
    }
    otherBuffer = other;
    if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
      return false;
    }
    myPosition = this.position_0;
    otherPosition = otherBuffer.position_0;
    equalSoFar = true;
    while (equalSoFar && myPosition < this.limit) {
      equalSoFar = $get_1(this, myPosition++) == $get_1(otherBuffer, otherPosition++);
    }
    return equalSoFar;
  }
  ;
  _.hashCode$ = function hashCode_10(){
    var hash, myPosition;
    myPosition = this.position_0;
    hash = 0;
    while (myPosition < this.limit) {
      hash = hash + $get_1(this, myPosition++);
    }
    return hash;
  }
  ;
  _.toString$ = function toString_16(){
    var buf;
    buf = new StringBuffer_0;
    $append_3(buf, $getName(Ljava_nio_IntToByteBufferAdapter_2_classLit));
    buf.impl.string += ', status: capacity=';
    $append_2(buf, this.capacity_0);
    buf.impl.string += ' position=';
    $append_2(buf, this.position_0);
    buf.impl.string += ' limit=';
    $append_2(buf, this.limit);
    return buf.impl.string;
  }
  ;
  function $get_0(this$static){
    if (this$static.position_0 == this$static.limit) {
      throw new BufferUnderflowException_0;
    }
    return $getInt_0(this$static.byteBuffer, this$static.position_0++ << 2);
  }

  function $get_1(this$static, index){
    if (index < 0 || index >= this$static.limit) {
      throw new IndexOutOfBoundsException_0;
    }
    return $getInt_0(this$static.byteBuffer, index << 2);
  }

  function $put_0(this$static, c){
    if (this$static.position_0 == this$static.limit) {
      throw new BufferOverflowException_0;
    }
    $putInt_0(this$static.byteBuffer, this$static.position_0++ << 2, c);
    return this$static;
  }

  function IntToByteBufferAdapter_0(byteBuffer){
    IntBuffer_0.call(this, byteBuffer.capacity_0 >> 2);
    this.byteBuffer = byteBuffer;
    $clear(this.byteBuffer);
  }

  defineSeed(90, 89, makeCastMap([Q$Comparable, Q$IntBuffer]), IntToByteBufferAdapter_0);
  _.byteBuffer = null;
  function $get_2(this$static, dest, len){
    var i_0, length_0;
    length_0 = dest.length;
    if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
      throw new IndexOutOfBoundsException_0;
    }
    if (len > this$static.limit - this$static.position_0) {
      throw new BufferUnderflowException_0;
    }
    for (i_0 = 0; i_0 < len; ++i_0) {
      dest[i_0] = $get_3(this$static);
    }
    return this$static;
  }

  function $put_1(this$static, src, len){
    var i_0, length_0;
    length_0 = src.length;
    if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
      throw new IndexOutOfBoundsException_0;
    }
    if (len > this$static.limit - this$static.position_0) {
      throw new BufferOverflowException_0;
    }
    for (i_0 = 0; i_0 < len; ++i_0) {
      $put_2(this$static, src[i_0]);
    }
    return this$static;
  }

  function LongBuffer_0(capacity){
    Buffer_0.call(this, capacity);
  }

  defineSeed(91, 85, makeCastMap([Q$Comparable, Q$LongBuffer]));
  _.equals$ = function equals_10(other){
    var equalSoFar, myPosition, otherBuffer, otherPosition;
    if (!instanceOf(other, Q$LongBuffer)) {
      return false;
    }
    otherBuffer = other;
    if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
      return false;
    }
    myPosition = this.position_0;
    otherPosition = otherBuffer.position_0;
    equalSoFar = true;
    while (equalSoFar && myPosition < this.limit) {
      equalSoFar = eq($get_4(this, myPosition++), $get_4(otherBuffer, otherPosition++));
    }
    return equalSoFar;
  }
  ;
  _.hashCode$ = function hashCode_11(){
    var hash, l_0, myPosition;
    myPosition = this.position_0;
    hash = 0;
    while (myPosition < this.limit) {
      l_0 = $get_4(this, myPosition++);
      hash = hash + toInt(l_0) ^ toInt(shr(l_0, 32));
    }
    return hash;
  }
  ;
  _.toString$ = function toString_17(){
    var buf;
    buf = new StringBuffer_0;
    $append_3(buf, $getName(Ljava_nio_LongToByteBufferAdapter_2_classLit));
    buf.impl.string += ', status: capacity=';
    $append_2(buf, this.capacity_0);
    buf.impl.string += ' position=';
    $append_2(buf, this.position_0);
    buf.impl.string += ' limit=';
    $append_2(buf, this.limit);
    return buf.impl.string;
  }
  ;
  function $get_3(this$static){
    if (this$static.position_0 == this$static.limit) {
      throw new BufferUnderflowException_0;
    }
    return $getLong_0(this$static.byteBuffer, this$static.position_0++ << 3);
  }

  function $get_4(this$static, index){
    if (index < 0 || index >= this$static.limit) {
      throw new IndexOutOfBoundsException_0;
    }
    return $getLong_0(this$static.byteBuffer, index << 3);
  }

  function $put_2(this$static, c){
    if (this$static.position_0 == this$static.limit) {
      throw new BufferOverflowException_0;
    }
    $putLong(this$static.byteBuffer, this$static.position_0++ << 3, c);
    return this$static;
  }

  function LongToByteBufferAdapter_0(byteBuffer){
    LongBuffer_0.call(this, byteBuffer.capacity_0 >> 3);
    this.byteBuffer = byteBuffer;
    $clear(this.byteBuffer);
  }

  defineSeed(92, 91, makeCastMap([Q$Comparable, Q$LongBuffer]), LongToByteBufferAdapter_0);
  _.byteBuffer = null;
  function $putDouble(this$static, value){
    return $putLong_0(this$static, ($clinit_Numbers() , doubleToLongBits(value)));
  }

  function $putInt(this$static, value){
    var newPosition;
    newPosition = this$static.position_0 + 4;
    if (newPosition > this$static.limit) {
      throw new BufferOverflowException_0;
    }
    $store(this$static, this$static.position_0, value);
    this$static.position_0 = newPosition;
    return this$static;
  }

  function $putInt_0(this$static, index, value){
    if (index < 0 || gt(add(fromInt(index), P4_longLit), fromInt(this$static.limit))) {
      throw new IndexOutOfBoundsException_0;
    }
    $store(this$static, index, value);
    return this$static;
  }

  function $putLong(this$static, index, value){
    if (index < 0 || gt(add(fromInt(index), P8_longLit), fromInt(this$static.limit))) {
      throw new IndexOutOfBoundsException_0;
    }
    $store_0(this$static, index, value);
    return this$static;
  }

  function $putLong_0(this$static, value){
    var newPosition;
    newPosition = this$static.position_0 + 8;
    if (newPosition > this$static.limit) {
      throw new BufferOverflowException_0;
    }
    $store_0(this$static, this$static.position_0, value);
    this$static.position_0 = newPosition;
    return this$static;
  }

  function $putShort(this$static, index, value){
    if (index < 0 || gt(add(fromInt(index), P2_longLit), fromInt(this$static.limit))) {
      throw new IndexOutOfBoundsException_0;
    }
    $store_1(this$static, index, value);
    return this$static;
  }

  function $slice(this$static){
    var slice;
    slice = new ReadWriteHeapByteBuffer_2(this$static.backingArray, this$static.limit - this$static.position_0, this$static.offset + this$static.position_0);
    slice.order = this$static.order;
    return slice;
  }

  function ReadWriteHeapByteBuffer_0(capacity){
    HeapByteBuffer_0.call(this, initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, capacity, 1), capacity, 0);
  }

  function ReadWriteHeapByteBuffer_1(backingArray){
    HeapByteBuffer_0.call(this, backingArray, backingArray.length, 0);
  }

  function ReadWriteHeapByteBuffer_2(backingArray, capacity, arrayOffset){
    HeapByteBuffer_0.call(this, backingArray, capacity, arrayOffset);
  }

  defineSeed(93, 88, makeCastMap([Q$Comparable, Q$ByteBuffer]), ReadWriteHeapByteBuffer_0, ReadWriteHeapByteBuffer_1, ReadWriteHeapByteBuffer_2);
  function $put_3(this$static, src, len){
    var i_0, length_0;
    length_0 = src.length;
    if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
      throw new IndexOutOfBoundsException_0;
    }
    if (len > this$static.limit - this$static.position_0) {
      throw new BufferOverflowException_0;
    }
    for (i_0 = 0; i_0 < len; ++i_0) {
      $put_4(this$static, src[i_0]);
    }
    return this$static;
  }

  function ShortBuffer_0(capacity){
    Buffer_0.call(this, capacity);
  }

  defineSeed(94, 85, makeCastMap([Q$Comparable, Q$ShortBuffer]));
  _.equals$ = function equals_11(other){
    var equalSoFar, myPosition, otherBuffer, otherPosition;
    if (!instanceOf(other, Q$ShortBuffer)) {
      return false;
    }
    otherBuffer = other;
    if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
      return false;
    }
    myPosition = this.position_0;
    otherPosition = otherBuffer.position_0;
    equalSoFar = true;
    while (equalSoFar && myPosition < this.limit) {
      equalSoFar = $get_6(this, myPosition++) == $get_6(otherBuffer, otherPosition++);
    }
    return equalSoFar;
  }
  ;
  _.hashCode$ = function hashCode_12(){
    var hash, myPosition;
    myPosition = this.position_0;
    hash = 0;
    while (myPosition < this.limit) {
      hash = hash + $get_6(this, myPosition++);
    }
    return hash;
  }
  ;
  _.toString$ = function toString_18(){
    var buf;
    buf = new StringBuffer_0;
    $append_3(buf, $getName(Ljava_nio_ShortToByteBufferAdapter_2_classLit));
    buf.impl.string += ', status: capacity=';
    $append_2(buf, this.capacity_0);
    buf.impl.string += ' position=';
    $append_2(buf, this.position_0);
    buf.impl.string += ' limit=';
    $append_2(buf, this.limit);
    return buf.impl.string;
  }
  ;
  function $get_5(this$static){
    if (this$static.position_0 == this$static.limit) {
      throw new BufferUnderflowException_0;
    }
    return $getShort(this$static.byteBuffer, this$static.position_0++ << 1);
  }

  function $get_6(this$static, index){
    if (index < 0 || index >= this$static.limit) {
      throw new IndexOutOfBoundsException_0;
    }
    return $getShort(this$static.byteBuffer, index << 1);
  }

  function $put_4(this$static, c){
    if (this$static.position_0 == this$static.limit) {
      throw new BufferOverflowException_0;
    }
    $putShort(this$static.byteBuffer, this$static.position_0++ << 1, c);
    return this$static;
  }

  function ShortToByteBufferAdapter_0(byteBuffer){
    ShortBuffer_0.call(this, byteBuffer.capacity_0 >> 1);
    this.byteBuffer = byteBuffer;
    $clear(this.byteBuffer);
  }

  defineSeed(95, 94, makeCastMap([Q$Comparable, Q$ShortBuffer]), ShortToByteBufferAdapter_0);
  _.byteBuffer = null;
  function $advanceToFind(iter, o){
    var t;
    while (iter.hasNext_0()) {
      t = iter.next_0();
      if (o == null?t == null:equals__devirtual$(o, t)) {
        return iter;
      }
    }
    return null;
  }

  defineSeed(96, 1, {});
  _.add_0 = function add_0(o){
    throw new UnsupportedOperationException_1;
  }
  ;
  _.contains = function contains(o){
    var iter;
    iter = $advanceToFind(this.iterator(), o);
    return !!iter;
  }
  ;
  _.toString$ = function toString_19(){
    var comma, iter, sb, value;
    sb = new StringBuffer_0;
    comma = null;
    sb.impl.string += '[';
    iter = this.iterator();
    while (iter.hasNext_0()) {
      comma != null?($append_1(sb.impl, comma) , sb):(comma = ', ');
      value = iter.next_0();
      $append_1(sb.impl, value === this?'(this Collection)':'' + value);
    }
    sb.impl.string += ']';
    return sb.impl.string;
  }
  ;
  function $values(this$static){
    var entrySet;
    entrySet = new AbstractHashMap$EntrySet_0(this$static);
    return new AbstractMap$2_0(this$static, entrySet);
  }

  defineSeed(98, 1, makeCastMap([Q$Map]));
  _.equals$ = function equals_12(obj){
    var entry, entry$iterator, otherKey, otherMap, otherValue;
    if (obj === this) {
      return true;
    }
    if (!instanceOf(obj, Q$Map)) {
      return false;
    }
    otherMap = obj;
    if (this.size != otherMap.size) {
      return false;
    }
    for (entry$iterator = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(otherMap)).this$0); $hasNext(entry$iterator.iter);) {
      entry = $next(entry$iterator.iter);
      otherKey = entry.getKey();
      otherValue = entry.getValue();
      if (!(otherKey == null?this.nullSlotLive:instanceOf(otherKey, Q$String)?':' + otherKey in this.stringMap:$hasHashValue(this, otherKey, ~~hashCode__devirtual$(otherKey)))) {
        return false;
      }
      if (!equalsWithNullCheck(otherValue, otherKey == null?this.nullSlot:instanceOf(otherKey, Q$String)?this.stringMap[':' + otherKey]:$getHashValue(this, otherKey, ~~hashCode__devirtual$(otherKey)))) {
        return false;
      }
    }
    return true;
  }
  ;
  _.hashCode$ = function hashCode_13(){
    var entry, entry$iterator, hashCode;
    hashCode = 0;
    for (entry$iterator = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(this)).this$0); $hasNext(entry$iterator.iter);) {
      entry = $next(entry$iterator.iter);
      hashCode += entry.hashCode$();
      hashCode = ~~hashCode;
    }
    return hashCode;
  }
  ;
  _.toString$ = function toString_20(){
    var comma, entry, iter, s;
    s = '{';
    comma = false;
    for (iter = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(this)).this$0); $hasNext(iter.iter);) {
      entry = $next(iter.iter);
      comma?(s += ', '):(comma = true);
      s += '' + entry.getKey();
      s += '=';
      s += '' + entry.getValue();
    }
    return s + '}';
  }
  ;
  function $addAllHashEntries(this$static, dest){
    var hashCodeMap = this$static.hashCodeMap;
    for (var hashCode in hashCodeMap) {
      var hashCodeInt = parseInt(hashCode, 10);
      if (hashCode == hashCodeInt) {
        var array = hashCodeMap[hashCodeInt];
        for (var i_0 = 0, c = array.length; i_0 < c; ++i_0) {
          dest.add_0(array[i_0]);
        }
      }
    }
  }

  function $addAllStringEntries(this$static, dest){
    var stringMap = this$static.stringMap;
    for (var key in stringMap) {
      if (key.charCodeAt(0) == 58) {
        var entry = new AbstractHashMap$MapEntryString_0(this$static, key.substring(1));
        dest.add_0(entry);
      }
    }
  }

  function $containsHashValue(this$static, value){
    var hashCodeMap = this$static.hashCodeMap;
    for (var hashCode in hashCodeMap) {
      var hashCodeInt = parseInt(hashCode, 10);
      if (hashCode == hashCodeInt) {
        var array = hashCodeMap[hashCodeInt];
        for (var i_0 = 0, c = array.length; i_0 < c; ++i_0) {
          var entry = array[i_0];
          var entryValue = entry.getValue();
          if (this$static.equalsBridge(value, entryValue)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function $containsKey(this$static, key){
    return key == null?this$static.nullSlotLive:instanceOf(key, Q$String)?':' + key in this$static.stringMap:$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
  }

  function $containsStringValue(this$static, value){
    var stringMap = this$static.stringMap;
    for (var key in stringMap) {
      if (key.charCodeAt(0) == 58) {
        var entryValue = stringMap[key];
        if (this$static.equalsBridge(value, entryValue)) {
          return true;
        }
      }
    }
    return false;
  }

  function $containsValue(this$static, value){
    if (this$static.nullSlotLive && $equals_0(this$static.nullSlot, value)) {
      return true;
    }
    else if ($containsStringValue(this$static, value)) {
      return true;
    }
    else if ($containsHashValue(this$static, value)) {
      return true;
    }
    return false;
  }

  function $get_7(this$static, key){
    return key == null?this$static.nullSlot:instanceOf(key, Q$String)?this$static.stringMap[':' + key]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
  }

  function $getHashValue(this$static, key, hashCode){
    var array = this$static.hashCodeMap[hashCode];
    if (array) {
      for (var i_0 = 0, c = array.length; i_0 < c; ++i_0) {
        var entry = array[i_0];
        var entryKey = entry.getKey();
        if (this$static.equalsBridge(key, entryKey)) {
          return entry.getValue();
        }
      }
    }
    return null;
  }

  function $getStringValue(this$static, key){
    return this$static.stringMap[':' + key];
  }

  function $hasHashValue(this$static, key, hashCode){
    var array = this$static.hashCodeMap[hashCode];
    if (array) {
      for (var i_0 = 0, c = array.length; i_0 < c; ++i_0) {
        var entry = array[i_0];
        var entryKey = entry.getKey();
        if (this$static.equalsBridge(key, entryKey)) {
          return true;
        }
      }
    }
    return false;
  }

  function $put_5(this$static, key, value){
    return !key?$putNullSlot(this$static, value):$putHashValue(this$static, key, value, ~~getHashCode(key));
  }

  function $putHashValue(this$static, key, value, hashCode){
    var array = this$static.hashCodeMap[hashCode];
    if (array) {
      for (var i_0 = 0, c = array.length; i_0 < c; ++i_0) {
        var entry = array[i_0];
        var entryKey = entry.getKey();
        if (this$static.equalsBridge(key, entryKey)) {
          var previous = entry.getValue();
          entry.setValue(value);
          return previous;
        }
      }
    }
    else {
      array = this$static.hashCodeMap[hashCode] = [];
    }
    var entry = new MapEntryImpl_0(key, value);
    array.push(entry);
    ++this$static.size;
    return null;
  }



  function $putNullSlot(this$static, value){
    var result;
    result = this$static.nullSlot;
    this$static.nullSlot = value;
    if (!this$static.nullSlotLive) {
      this$static.nullSlotLive = true;
      ++this$static.size;
    }
    return result;
  }

  function $putStringValue(this$static, key, value){
    var result, stringMap = this$static.stringMap;
    key = ':' + key;
    key in stringMap?(result = stringMap[key]):++this$static.size;
    stringMap[key] = value;
    return result;
  }

  defineSeed(97, 98, makeCastMap([Q$Map]));
  _.equalsBridge = function equalsBridge(value1, value2){
    return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals__devirtual$(value1, value2);
  }
  ;
  _.hashCodeMap = null;
  _.nullSlot = null;
  _.nullSlotLive = false;
  _.size = 0;
  _.stringMap = null;
  defineSeed(100, 96, makeCastMap([Q$Set]));
  _.equals$ = function equals_13(o){
    var iter, other, otherItem;
    if (o === this) {
      return true;
    }
    if (!instanceOf(o, Q$Set)) {
      return false;
    }
    other = o;
    if (other.this$0.size != this.size_0()) {
      return false;
    }
    for (iter = new AbstractHashMap$EntrySetIterator_0(other.this$0); $hasNext(iter.iter);) {
      otherItem = $next(iter.iter);
      if (!this.contains(otherItem)) {
        return false;
      }
    }
    return true;
  }
  ;
  _.hashCode$ = function hashCode_14(){
    var hashCode, iter, next;
    hashCode = 0;
    for (iter = this.iterator(); iter.hasNext_0();) {
      next = iter.next_0();
      if (next != null) {
        hashCode += hashCode__devirtual$(next);
        hashCode = ~~hashCode;
      }
    }
    return hashCode;
  }
  ;
  function AbstractHashMap$EntrySet_0(this$0){
    this.this$0 = this$0;
  }

  defineSeed(99, 100, makeCastMap([Q$Set]), AbstractHashMap$EntrySet_0);
  _.contains = function contains_0(o){
    var entry, key, value;
    if (instanceOf(o, Q$Map$Entry)) {
      entry = o;
      key = entry.getKey();
      if ($containsKey(this.this$0, key)) {
        value = $get_7(this.this$0, key);
        return $equals_0(entry.getValue(), value);
      }
    }
    return false;
  }
  ;
  _.iterator = function iterator_0(){
    return new AbstractHashMap$EntrySetIterator_0(this.this$0);
  }
  ;
  _.size_0 = function size_0(){
    return this.this$0.size;
  }
  ;
  _.this$0 = null;
  function AbstractHashMap$EntrySetIterator_0(this$0){
    var list;
    list = new ArrayList_0;
    this$0.nullSlotLive && $add_0(list, new AbstractHashMap$MapEntryNull_0(this$0));
    $addAllStringEntries(this$0, list);
    $addAllHashEntries(this$0, list);
    this.iter = new AbstractList$IteratorImpl_0(list);
  }

  defineSeed(101, 1, {}, AbstractHashMap$EntrySetIterator_0);
  _.hasNext_0 = function hasNext(){
    return $hasNext(this.iter);
  }
  ;
  _.next_0 = function next_0(){
    return $next(this.iter);
  }
  ;
  _.iter = null;
  defineSeed(103, 1, makeCastMap([Q$Map$Entry]));
  _.equals$ = function equals_14(other){
    var entry;
    if (instanceOf(other, Q$Map$Entry)) {
      entry = other;
      if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
        return true;
      }
    }
    return false;
  }
  ;
  _.hashCode$ = function hashCode_15(){
    var keyHash, valueHash;
    keyHash = 0;
    valueHash = 0;
    this.getKey() != null && (keyHash = hashCode__devirtual$(this.getKey()));
    this.getValue() != null && (valueHash = hashCode__devirtual$(this.getValue()));
    return keyHash ^ valueHash;
  }
  ;
  _.toString$ = function toString_21(){
    return this.getKey() + '=' + this.getValue();
  }
  ;
  function AbstractHashMap$MapEntryNull_0(this$0){
    this.this$0 = this$0;
  }

  defineSeed(102, 103, makeCastMap([Q$Map$Entry]), AbstractHashMap$MapEntryNull_0);
  _.getKey = function getKey(){
    return null;
  }
  ;
  _.getValue = function getValue(){
    return this.this$0.nullSlot;
  }
  ;
  _.setValue = function setValue(object){
    return $putNullSlot(this.this$0, object);
  }
  ;
  _.this$0 = null;
  function AbstractHashMap$MapEntryString_0(this$0, key){
    this.this$0 = this$0;
    this.key = key;
  }

  defineSeed(104, 103, makeCastMap([Q$Map$Entry]), AbstractHashMap$MapEntryString_0);
  _.getKey = function getKey_0(){
    return this.key;
  }
  ;
  _.getValue = function getValue_0(){
    return $getStringValue(this.this$0, this.key);
  }
  ;
  _.setValue = function setValue_0(object){
    return $putStringValue(this.this$0, this.key, object);
  }
  ;
  _.key = null;
  _.this$0 = null;
  function checkIndex(index, size){
    (index < 0 || index >= size) && indexOutOfBounds(index, size);
  }

  function indexOutOfBounds(index, size){
    throw new IndexOutOfBoundsException_1('Index: ' + index + ', Size: ' + size);
  }

  defineSeed(105, 96, makeCastMap([Q$List]));
  _.add_0 = function add_1(obj){
    $add(this, this.size_0(), obj);
    return true;
  }
  ;
  _.equals$ = function equals_15(o){
    var elem, elemOther, iter, iterOther, other;
    if (o === this) {
      return true;
    }
    if (!instanceOf(o, Q$List)) {
      return false;
    }
    other = o;
    if (this.size_0() != other.size) {
      return false;
    }
    iter = new AbstractList$IteratorImpl_0(this);
    iterOther = new AbstractList$IteratorImpl_0(other);
    while (iter.i < iter.this$0.size) {
      elem = $next(iter);
      elemOther = $next(iterOther);
      if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
        return false;
      }
    }
    return true;
  }
  ;
  _.hashCode$ = function hashCode_16(){
    var iter, k_0, obj;
    k_0 = 1;
    iter = new AbstractList$IteratorImpl_0(this);
    while (iter.i < iter.this$0.size) {
      obj = $next(iter);
      k_0 = 31 * k_0 + (obj == null?0:hashCode__devirtual$(obj));
      k_0 = ~~k_0;
    }
    return k_0;
  }
  ;
  _.iterator = function iterator_1(){
    return new AbstractList$IteratorImpl_0(this);
  }
  ;
  function $hasNext(this$static){
    return this$static.i < this$static.this$0.size;
  }

  function $next(this$static){
    if (this$static.i >= this$static.this$0.size) {
      throw new NoSuchElementException_0;
    }
    return $get_8(this$static.this$0, this$static.i++);
  }

  function AbstractList$IteratorImpl_0(this$0){
    this.this$0 = this$0;
  }

  defineSeed(106, 1, {}, AbstractList$IteratorImpl_0);
  _.hasNext_0 = function hasNext_0(){
    return $hasNext(this);
  }
  ;
  _.next_0 = function next_1(){
    return $next(this);
  }
  ;
  _.i = 0;
  _.this$0 = null;
  function $iterator(this$static){
    var outerIter;
    outerIter = new AbstractHashMap$EntrySetIterator_0(this$static.val$entrySet.this$0);
    return new AbstractMap$2$1_0(outerIter);
  }

  function AbstractMap$2_0(this$0, val$entrySet){
    this.this$0 = this$0;
    this.val$entrySet = val$entrySet;
  }

  defineSeed(107, 96, {}, AbstractMap$2_0);
  _.contains = function contains_1(value){
    return $containsValue(this.this$0, value);
  }
  ;
  _.iterator = function iterator_2(){
    return $iterator(this);
  }
  ;
  _.size_0 = function size_1(){
    return this.val$entrySet.this$0.size;
  }
  ;
  _.this$0 = null;
  _.val$entrySet = null;
  function $next_0(this$static){
    var value;
    value = $next(this$static.val$outerIter.iter).getValue();
    return value;
  }

  function AbstractMap$2$1_0(val$outerIter){
    this.val$outerIter = val$outerIter;
  }

  defineSeed(108, 1, {}, AbstractMap$2$1_0);
  _.hasNext_0 = function hasNext_1(){
    return $hasNext(this.val$outerIter.iter);
  }
  ;
  _.next_0 = function next_2(){
    return $next_0(this);
  }
  ;
  _.val$outerIter = null;
  function $add(this$static, index, o){
    (index < 0 || index > this$static.size) && indexOutOfBounds(index, this$static.size);
    splice_0(this$static.array_0, index, 0, o);
    ++this$static.size;
  }

  function $add_0(this$static, o){
    setCheck(this$static.array_0, this$static.size++, o);
    return true;
  }

  function $get_8(this$static, index){
    checkIndex(index, this$static.size);
    return this$static.array_0[index];
  }

  function $indexOf(this$static, o, index){
    for (; index < this$static.size; ++index) {
      if (equalsWithNullCheck(o, this$static.array_0[index])) {
        return index;
      }
    }
    return -1;
  }

  function ArrayList_0(){
    this.array_0 = initDim(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, 0, 0);
  }

  function splice_0(array, index, deleteCount, value){
    array.splice(index, deleteCount, value);
  }

  defineSeed(109, 105, makeCastMap([Q$Serializable, Q$List]), ArrayList_0);
  _.add_0 = function add_2(o){
    return $add_0(this, o);
  }
  ;
  _.contains = function contains_2(o){
    return $indexOf(this, o, 0) != -1;
  }
  ;
  _.size_0 = function size_2(){
    return this.size;
  }
  ;
  _.size = 0;
  function copyOf(original, newLength){
    var copy;
    copy = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, newLength, 1);
    arraycopy(original, 0, copy, 0, min(original.length, newLength));
    return copy;
  }

  function copyOf_0(original, newLength){
    var copy;
    copy = initDim(_3J_classLit, makeCastMap([Q$Serializable]), -1, newLength, 3);
    arraycopy(original, 0, copy, 0, min(original.length, newLength));
    return copy;
  }

  function copyOf_1(original, newLength){
    var copy;
    copy = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, newLength, 1);
    arraycopy(original, 0, copy, 0, min(original.length, newLength));
    return copy;
  }

  function fill(a){
    fill_0(a, a.length);
  }

  function fill_0(a, toIndex){
    var i_0;
    for (i_0 = 0; i_0 < toIndex; ++i_0) {
      a[i_0] = 0;
    }
  }

  function fill_1(a, toIndex){
    var i_0;
    for (i_0 = 0; i_0 < toIndex; ++i_0) {
      a[i_0] = P0_longLit;
    }
  }

  function fill_2(a){
    fill_1(a, a.length);
  }

  function fill_3(a, toIndex){
    var i_0;
    for (i_0 = 0; i_0 < toIndex; ++i_0) {
      a[i_0] = 0;
    }
  }

  function fill_4(a){
    fill_3(a, a.length);
  }

  function ConcurrentModificationException_0(){
    $fillInStackTrace();
  }

  defineSeed(111, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), ConcurrentModificationException_0);
  function $equals_0(value1, value2){
    return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals__devirtual$(value1, value2);
  }

  function HashMap_0(){
    this.hashCodeMap = [];
    this.stringMap = {};
    this.nullSlotLive = false;
    this.nullSlot = null;
    this.size = 0;
  }

  defineSeed(112, 97, makeCastMap([Q$Serializable, Q$Map]), HashMap_0);
  function $clinit_Locale(){
    $clinit_Locale = nullMethod;
    new Locale_0('en', 'CA');
    new Locale_0('fr', 'CA');
    new Locale_0('zh', 'CN');
    new Locale_0('zh', '');
    new Locale_0('en', '');
    new Locale_0('fr', 'FR');
    new Locale_0('fr', '');
    new Locale_0('de', '');
    new Locale_0('de', 'DE');
    new Locale_0('it', '');
    new Locale_0('it', 'IT');
    new Locale_0('ja', 'JP');
    new Locale_0('ja', '');
    new Locale_0('ko', 'KR');
    new Locale_0('ko', '');
    new Locale_0('zh', 'CN');
    new Locale_0('', '');
    new Locale_0('zh', 'CN');
    new Locale_0('zh', 'TW');
    new Locale_0('zh', 'TW');
    new Locale_0('en', 'GB');
    new Locale_0('en', 'US');
  }

  function Locale_0(lowerCaseLanguageCode, upperCaseCountryCode){
    this.languageCode = lowerCaseLanguageCode;
    this.countryCode = upperCaseCountryCode;
    this.variantCode = '';
  }

  function toNewString(languageCode, countryCode, variantCode){
    var result;
    if (languageCode.length == 0 && countryCode.length == 0) {
      return '';
    }
    result = new StringBuilder_1;
    $append_1(result.impl, languageCode);
    (countryCode.length > 0 || variantCode.length > 0) && (result.impl.string += '_' , result);
    $append_1(result.impl, countryCode);
    variantCode.length > 0 && (result.impl.string += '_' , result);
    $append_1(result.impl, variantCode);
    return result.impl.string;
  }

  defineSeed(113, 1, makeCastMap([Q$Serializable, Q$Locale]), Locale_0);
  _.equals$ = function equals_16(object){
    var o;
    if (object === this) {
      return true;
    }
    if (instanceOf(object, Q$Locale)) {
      o = object;
      return $equals(this.languageCode, o.languageCode) && $equals(this.countryCode, o.countryCode) && $equals(this.variantCode, o.variantCode);
    }
    return false;
  }
  ;
  _.hashCode$ = function hashCode_17(){
    return getHashCode_0(this.countryCode) + getHashCode_0(this.languageCode) + getHashCode_0(this.variantCode);
  }
  ;
  _.toString$ = function toString_22(){
    var result;
    result = this.cachedToStringResult;
    result == null && (result = this.cachedToStringResult = toNewString(this.languageCode, this.countryCode, this.variantCode));
    return result;
  }
  ;
  _.cachedToStringResult = null;
  _.countryCode = null;
  _.languageCode = null;
  _.variantCode = null;
  function MapEntryImpl_0(key, value){
    this.key = key;
    this.value = value;
  }

  defineSeed(114, 103, makeCastMap([Q$Map$Entry]), MapEntryImpl_0);
  _.getKey = function getKey_1(){
    return this.key;
  }
  ;
  _.getValue = function getValue_1(){
    return this.value;
  }
  ;
  _.setValue = function setValue_1(value){
    var old;
    old = this.value;
    this.value = value;
    return old;
  }
  ;
  _.key = null;
  _.value = null;
  function NoSuchElementException_0(){
    $fillInStackTrace();
  }

  defineSeed(115, 6, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]), NoSuchElementException_0);
  function equalsWithNullCheck(a, b){
    return maskUndefined(a) === maskUndefined(b) || a != null && equals__devirtual$(a, b);
  }

  function AtomicLong_0(initialValue){
    this.value = initialValue;
  }

  defineSeed(117, 55, makeCastMap([Q$Serializable, Q$Number]), AtomicLong_0);
  _.doubleValue = function doubleValue_2(){
    return toDouble(this.value);
  }
  ;
  _.longValue = function longValue_2(){
    return this.value;
  }
  ;
  _.toString$ = function toString_23(){
    return '' + toString_2(this.value);
  }
  ;
  _.value = P0_longLit;
  function $unlock(this$static){
    if (this$static.lockCount <= 0)
      throw new RuntimeException_0('more unlocks than locks?');
    this$static.lockCount -= 1;
  }

  function ReentrantLock_0(){
  }

  defineSeed(118, 1, {}, ReentrantLock_0);
  _.lockCount = 0;
  function $update(this$static, buf, off, len){
    var n, s1, s2;
    s1 = this$static.checksum & 65535;
    s2 = this$static.checksum >>> 16;
    while (len > 0) {
      n = 3800;
      3800 > len && (n = len);
      len -= n;
      while (--n >= 0) {
        s1 = s1 + (buf[off++] & 255);
        s2 = s2 + s1;
      }
      s1 %= 65521;
      s2 %= 65521;
    }
    this$static.checksum = s2 << 16 | s1;
  }

  function Adler32_0(){
    this.checksum = 1;
  }

  defineSeed(119, 1, {}, Adler32_0);
  _.checksum = 0;
  function DataFormatException_0(){
    Exception_1.call(this, null);
  }

  function DataFormatException_1(s){
    $fillInStackTrace();
    this.cause = null;
    this.detailMessage = s;
  }

  defineSeed(120, 7, makeCastMap([Q$Serializable, Q$Exception, Q$Throwable, Q$DataFormatException]), DataFormatException_0, DataFormatException_1);
  _.getCause_0 = function getCause_0(){
    return this.ex;
  }
  ;
  _.ex = null;
  function $deflate(this$static, output, offset, length_0){
    var adler, chksum, count, header, level_flags, neededbits, origLength;
    origLength = length_0;
    if (this$static.state == 127)
      throw new IllegalStateException_1('Deflater closed');
    if (this$static.state < 16) {
      header = 30720;
      level_flags = this$static.level - 1 >> 1;
      (level_flags < 0 || level_flags > 3) && (level_flags = 3);
      header |= level_flags << 6;
      (this$static.state & 1) != 0 && (header |= 32);
      header += 31 - header % 31;
      $writeShortMSB(this$static.pending, header);
      if ((this$static.state & 1) != 0) {
        chksum = $getAdler(this$static.engine);
        this$static.engine.adler.checksum = 1;
        $writeShortMSB(this$static.pending, chksum >> 16);
        $writeShortMSB(this$static.pending, chksum & 65535);
      }
      this$static.state = 16 | this$static.state & 12;
    }
    for (;;) {
      count = $flush(this$static.pending, output, offset, length_0);
      offset += count;
      this$static.totalOut = add(this$static.totalOut, fromInt(count));
      length_0 -= count;
      if (length_0 == 0 || this$static.state == 30)
        break;
      if (!$deflate_0(this$static.engine, (this$static.state & 4) != 0, (this$static.state & 8) != 0)) {
        if (this$static.state == 16)
          return origLength - length_0;
        else if (this$static.state == 20) {
          if (this$static.level != 0) {
            neededbits = 8 + (-this$static.pending.bitCount & 7);
            while (neededbits > 0) {
              $writeBits(this$static.pending, 2, 10);
              neededbits -= 10;
            }
          }
          this$static.state = 16;
        }
        else if (this$static.state == 28) {
          $alignToByte(this$static.pending);
          if (!this$static.noHeader) {
            adler = $getAdler(this$static.engine);
            $writeShortMSB(this$static.pending, adler >> 16);
            $writeShortMSB(this$static.pending, adler & 65535);
          }
          this$static.state = 30;
        }
      }
    }
    return origLength - length_0;
  }

  function $setInput(this$static, input, len){
    if ((this$static.state & 8) != 0)
      throw new IllegalStateException_1('finish()/end() already called');
    $setInput_0(this$static.engine, input, len);
  }

  function $setLevel(this$static, lvl){
    if (lvl == -1)
      lvl = 6;
    else if (lvl < 0 || lvl > 9)
      throw new IllegalArgumentException_0;
    if (this$static.level != lvl) {
      this$static.level = lvl;
      $setLevel_0(this$static.engine, lvl);
    }
  }

  function Deflater_0(lvl){
    Deflater_1.call(this, lvl);
  }

  function Deflater_1(lvl){
    if (lvl == -1)
      lvl = 6;
    else if (lvl < 0 || lvl > 9)
      throw new IllegalArgumentException_0;
    this.pending = new DeflaterPending_0;
    this.engine = new DeflaterEngine_0(this.pending);
    this.noHeader = false;
    this.engine.strategy = 0;
    $setLevel(this, lvl);
    this.state = this.noHeader?16:0;
    this.totalOut = P0_longLit;
    $reset_2(this.pending);
    $reset(this.engine);
  }

  defineSeed(121, 1, {}, Deflater_0);
  _.engine = null;
  _.level = 0;
  _.noHeader = false;
  _.pending = null;
  _.state = 0;
  _.totalOut = P0_longLit;
  function $clinit_DeflaterConstants(){
    $clinit_DeflaterConstants = nullMethod;
    GOOD_LENGTH = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 4, 4, 4, 4, 8, 8, 8, 32, 32]);
    MAX_LAZY = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 4, 5, 6, 4, 16, 16, 32, 128, 258]);
    NICE_LENGTH = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 8, 16, 32, 16, 32, 128, 128, 258, 258]);
    MAX_CHAIN = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 4, 8, 32, 16, 32, 128, 256, 1024, 4096]);
    COMPR_FUNC = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
  }

  var COMPR_FUNC, GOOD_LENGTH, MAX_CHAIN, MAX_LAZY, NICE_LENGTH;
  function $deflate_0(this$static, flush, finish){
    var canFlush, progress;
    do {
      $fillWindow(this$static);
      canFlush = flush && this$static.inputOff == this$static.inputEnd;
      switch (this$static.comprFunc) {
        case 0:
          progress = $deflateStored(this$static, canFlush, finish);
          break;
        case 1:
          progress = $deflateFast(this$static, canFlush, finish);
          break;
        case 2:
          progress = $deflateSlow(this$static, canFlush, finish);
          break;
        default:throw new InternalError_0;
      }
    }
    while (this$static.pending.end == 0 && progress);
    return progress;
  }

  function $deflateFast(this$static, flush, finish){
    var full, hashHead, lastBlock;
    if (this$static.lookahead < 262 && !flush)
      return false;
    while (this$static.lookahead >= 262 || flush) {
      if (this$static.lookahead == 0) {
        $flushBlock(this$static.huffman, this$static.window_0, this$static.blockStart, this$static.strstart - this$static.blockStart, finish);
        this$static.blockStart = this$static.strstart;
        return false;
      }
      this$static.strstart > 65274 && $slideWindow(this$static);
      if (this$static.lookahead >= 3 && (hashHead = $insertString(this$static)) != 0 && this$static.strategy != 2 && this$static.strstart - hashHead <= 32506 && $findLongestMatch(this$static, hashHead)) {
        full = $tallyDist(this$static.huffman, this$static.strstart - this$static.matchStart, this$static.matchLen);
        this$static.lookahead -= this$static.matchLen;
        if (this$static.matchLen <= this$static.max_lazy && this$static.lookahead >= 3) {
          while (--this$static.matchLen > 0) {
            ++this$static.strstart;
            $insertString(this$static);
          }
          ++this$static.strstart;
        }
        else {
          this$static.strstart += this$static.matchLen;
          this$static.lookahead >= 2 && (this$static.ins_h = this$static.window_0[this$static.strstart] << 5 ^ this$static.window_0[this$static.strstart + 1]);
        }
        this$static.matchLen = 2;
        if (!full)
          continue;
      }
      else {
        $tallyLit(this$static.huffman, this$static.window_0[this$static.strstart] & 255);
        ++this$static.strstart;
        --this$static.lookahead;
      }
      if (this$static.huffman.last_lit == 16384) {
        lastBlock = finish && this$static.lookahead == 0;
        $flushBlock(this$static.huffman, this$static.window_0, this$static.blockStart, this$static.strstart - this$static.blockStart, lastBlock);
        this$static.blockStart = this$static.strstart;
        return !lastBlock;
      }
    }
    return true;
  }

  function $deflateSlow(this$static, flush, finish){
    var hashHead, lastBlock, len, prevLen, prevMatch;
    if (this$static.lookahead < 262 && !flush)
      return false;
    while (this$static.lookahead >= 262 || flush) {
      if (this$static.lookahead == 0) {
        this$static.prevAvailable && $tallyLit(this$static.huffman, this$static.window_0[this$static.strstart - 1] & 255);
        this$static.prevAvailable = false;
        $flushBlock(this$static.huffman, this$static.window_0, this$static.blockStart, this$static.strstart - this$static.blockStart, finish);
        this$static.blockStart = this$static.strstart;
        return false;
      }
      this$static.strstart >= 65274 && $slideWindow(this$static);
      prevMatch = this$static.matchStart;
      prevLen = this$static.matchLen;
      if (this$static.lookahead >= 3) {
        hashHead = $insertString(this$static);
        this$static.strategy != 2 && hashHead != 0 && this$static.strstart - hashHead <= 32506 && $findLongestMatch(this$static, hashHead) && this$static.matchLen <= 5 && (this$static.strategy == 1 || this$static.matchLen == 3 && this$static.strstart - this$static.matchStart > 4096) && (this$static.matchLen = 2);
      }
      if (prevLen >= 3 && this$static.matchLen <= prevLen) {
        $tallyDist(this$static.huffman, this$static.strstart - 1 - prevMatch, prevLen);
        prevLen -= 2;
        do {
          ++this$static.strstart;
          --this$static.lookahead;
          this$static.lookahead >= 3 && $insertString(this$static);
        }
        while (--prevLen > 0);
        ++this$static.strstart;
        --this$static.lookahead;
        this$static.prevAvailable = false;
        this$static.matchLen = 2;
      }
      else {
        this$static.prevAvailable && $tallyLit(this$static.huffman, this$static.window_0[this$static.strstart - 1] & 255);
        this$static.prevAvailable = true;
        ++this$static.strstart;
        --this$static.lookahead;
      }
      if (this$static.huffman.last_lit == 16384) {
        len = this$static.strstart - this$static.blockStart;
        this$static.prevAvailable && --len;
        lastBlock = finish && this$static.lookahead == 0 && !this$static.prevAvailable;
        $flushBlock(this$static.huffman, this$static.window_0, this$static.blockStart, len, lastBlock);
        this$static.blockStart += len;
        return !lastBlock;
      }
    }
    return true;
  }

  function $deflateStored(this$static, flush, finish){
    var lastBlock, storedLen;
    if (!flush && this$static.lookahead == 0)
      return false;
    this$static.strstart += this$static.lookahead;
    this$static.lookahead = 0;
    storedLen = this$static.strstart - this$static.blockStart;
    if (storedLen >= ($clinit_DeflaterConstants() , 65531) || this$static.blockStart < 32768 && storedLen >= 32506 || flush) {
      lastBlock = finish;
      if (storedLen > 65531) {
        storedLen = 65531;
        lastBlock = false;
      }
      $flushStoredBlock(this$static.huffman, this$static.window_0, this$static.blockStart, storedLen, lastBlock);
      this$static.blockStart += storedLen;
      return !lastBlock;
    }
    return true;
  }

  function $fillWindow(this$static){
    var more;
    this$static.strstart >= 65274 && $slideWindow(this$static);
    while (this$static.lookahead < 262 && this$static.inputOff < this$static.inputEnd) {
      more = 65536 - this$static.lookahead - this$static.strstart;
      more > this$static.inputEnd - this$static.inputOff && (more = this$static.inputEnd - this$static.inputOff);
      arraycopy(this$static.inputBuf, this$static.inputOff, this$static.window_0, this$static.strstart + this$static.lookahead, more);
      $update(this$static.adler, this$static.inputBuf, this$static.inputOff, more);
      this$static.inputOff += more;
      this$static.totalIn = add(this$static.totalIn, fromInt(more));
      this$static.lookahead += more;
    }
    this$static.lookahead >= 3 && (this$static.ins_h = this$static.window_0[this$static.strstart] << 5 ^ this$static.window_0[this$static.strstart + 1]);
  }

  function $findLongestMatch(this$static, curMatch){
    var best_end, best_len, chainLength, limit, match, niceLength, prev, scan, scan_end, scan_end1, strend;
    chainLength = this$static.max_chain;
    niceLength = this$static.niceLength;
    prev = this$static.prev;
    scan = this$static.strstart;
    best_end = this$static.strstart + this$static.matchLen;
    best_len = max_0(this$static.matchLen, 2);
    limit = max_0(this$static.strstart - 32506, 0);
    strend = scan + 258 - 1;
    scan_end1 = this$static.window_0[best_end - 1];
    scan_end = this$static.window_0[best_end];
    best_len >= this$static.goodLength && (chainLength >>= 2);
    niceLength > this$static.lookahead && (niceLength = this$static.lookahead);
    do {
      if (this$static.window_0[curMatch + best_len] != scan_end || this$static.window_0[curMatch + best_len - 1] != scan_end1 || this$static.window_0[curMatch] != this$static.window_0[scan] || this$static.window_0[curMatch + 1] != this$static.window_0[scan + 1])
        continue;
      match = curMatch + 2;
      scan += 2;
      while (this$static.window_0[++scan] == this$static.window_0[++match] && this$static.window_0[++scan] == this$static.window_0[++match] && this$static.window_0[++scan] == this$static.window_0[++match] && this$static.window_0[++scan] == this$static.window_0[++match] && this$static.window_0[++scan] == this$static.window_0[++match] && this$static.window_0[++scan] == this$static.window_0[++match] && this$static.window_0[++scan] == this$static.window_0[++match] && this$static.window_0[++scan] == this$static.window_0[++match] && scan < strend)
        ;
      if (scan > best_end) {
        this$static.matchStart = curMatch;
        best_end = scan;
        best_len = scan - this$static.strstart;
        if (best_len >= niceLength)
          break;
        scan_end1 = this$static.window_0[scan - 1];
        scan_end = this$static.window_0[scan];
      }
      scan = this$static.strstart;
    }
    while ((curMatch = prev[curMatch & 32767] & 65535) > limit && --chainLength != 0);
    this$static.matchLen = min(best_len, this$static.lookahead);
    return this$static.matchLen >= 3;
  }

  function $getAdler(this$static){
    var chksum;
    chksum = toInt(and(fromInt(this$static.adler.checksum), Pffffffff_longLit));
    return chksum;
  }

  function $insertString(this$static){
    var hash, match;
    hash = (this$static.ins_h << 5 ^ this$static.window_0[this$static.strstart + 2]) & 32767;
    this$static.prev[this$static.strstart & 32767] = match = this$static.head[hash];
    this$static.head[hash] = this$static.strstart << 16 >> 16;
    this$static.ins_h = hash;
    return match & 65535;
  }

  function $reset(this$static){
    var i_0;
    $reset_0(this$static.huffman);
    this$static.adler.checksum = 1;
    this$static.blockStart = this$static.strstart = 1;
    this$static.lookahead = 0;
    this$static.totalIn = P0_longLit;
    this$static.prevAvailable = false;
    this$static.matchLen = 2;
    for (i_0 = 0; i_0 < 32768; ++i_0)
      this$static.head[i_0] = 0;
    for (i_0 = 0; i_0 < 32768; ++i_0)
      this$static.prev[i_0] = 0;
  }

  function $setInput_0(this$static, buf, len){
    if (this$static.inputOff < this$static.inputEnd)
      throw new IllegalStateException_1('Old input was not completely processed');
    if (0 > len || len > buf.length)
      throw new ArrayIndexOutOfBoundsException_0;
    this$static.inputBuf = buf;
    this$static.inputOff = 0;
    this$static.inputEnd = len;
  }

  function $setLevel_0(this$static, lvl){
    this$static.goodLength = ($clinit_DeflaterConstants() , GOOD_LENGTH)[lvl];
    this$static.max_lazy = MAX_LAZY[lvl];
    this$static.niceLength = NICE_LENGTH[lvl];
    this$static.max_chain = MAX_CHAIN[lvl];
    if (COMPR_FUNC[lvl] != this$static.comprFunc) {
      switch (this$static.comprFunc) {
        case 0:
          if (this$static.strstart > this$static.blockStart) {
            $flushStoredBlock(this$static.huffman, this$static.window_0, this$static.blockStart, this$static.strstart - this$static.blockStart, false);
            this$static.blockStart = this$static.strstart;
          }

          this$static.ins_h = this$static.window_0[this$static.strstart] << 5 ^ this$static.window_0[this$static.strstart + 1];
          break;
        case 1:
          if (this$static.strstart > this$static.blockStart) {
            $flushBlock(this$static.huffman, this$static.window_0, this$static.blockStart, this$static.strstart - this$static.blockStart, false);
            this$static.blockStart = this$static.strstart;
          }

          break;
        case 2:
          this$static.prevAvailable && $tallyLit(this$static.huffman, this$static.window_0[this$static.strstart - 1] & 255);
          if (this$static.strstart > this$static.blockStart) {
            $flushBlock(this$static.huffman, this$static.window_0, this$static.blockStart, this$static.strstart - this$static.blockStart, false);
            this$static.blockStart = this$static.strstart;
          }

          this$static.prevAvailable = false;
          this$static.matchLen = 2;
      }
      this$static.comprFunc = COMPR_FUNC[lvl];
    }
  }



  function $slideWindow(this$static){
    var i_0, m_0;
    arraycopy(this$static.window_0, 32768, this$static.window_0, 0, 32768);
    this$static.matchStart -= 32768;
    this$static.strstart -= 32768;
    this$static.blockStart -= 32768;
    for (i_0 = 0; i_0 < 32768; ++i_0) {
      m_0 = this$static.head[i_0] & 65535;
      this$static.head[i_0] = m_0 >= 32768?m_0 - 32768 << 16 >> 16:0;
    }
    for (i_0 = 0; i_0 < 32768; ++i_0) {
      m_0 = this$static.prev[i_0] & 65535;
      this$static.prev[i_0] = m_0 >= 32768?m_0 - 32768 << 16 >> 16:0;
    }
  }

  function DeflaterEngine_0(pending){
    this.pending = pending;
    this.huffman = new DeflaterHuffman_0(pending);
    this.adler = new Adler32_0;
    this.window_0 = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 65536, 1);
    this.head = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, 32768, 1);
    this.prev = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, 32768, 1);
    this.blockStart = this.strstart = 1;
  }

  defineSeed(122, 1, {}, DeflaterEngine_0);
  _.adler = null;
  _.blockStart = 0;
  _.comprFunc = 0;
  _.goodLength = 0;
  _.head = null;
  _.huffman = null;
  _.inputBuf = null;
  _.inputEnd = 0;
  _.inputOff = 0;
  _.ins_h = 0;
  _.lookahead = 0;
  _.matchLen = 0;
  _.matchStart = 0;
  _.max_chain = 0;
  _.max_lazy = 0;
  _.niceLength = 0;
  _.pending = null;
  _.prev = null;
  _.prevAvailable = false;
  _.strategy = 0;
  _.strstart = 0;
  _.totalIn = P0_longLit;
  _.window_0 = null;
  function $clinit_DeflaterHuffman(){
    $clinit_DeflaterHuffman = nullMethod;
    var i_0;
    BL_ORDER = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    staticLCodes = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, 286, 1);
    staticLLength = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 286, 1);
    i_0 = 0;
    while (i_0 < 144) {
      staticLCodes[i_0] = ('\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(48 + i_0 << 8 & 15) << 12 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(48 + i_0 << 8 >> 4 & 15) << 8 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(48 + i_0 << 8 >> 8 & 15) << 4 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(48 + i_0 << 8 >> 12)) << 16 >> 16;
      staticLLength[i_0++] = 8;
    }
    while (i_0 < 256) {
      staticLCodes[i_0] = ('\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(256 + i_0 << 7 & 15) << 12 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(256 + i_0 << 7 >> 4 & 15) << 8 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(256 + i_0 << 7 >> 8 & 15) << 4 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(256 + i_0 << 7 >> 12)) << 16 >> 16;
      staticLLength[i_0++] = 9;
    }
    while (i_0 < 280) {
      staticLCodes[i_0] = ('\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(-256 + i_0 << 9 & 15) << 12 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(-256 + i_0 << 9 >> 4 & 15) << 8 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(-256 + i_0 << 9 >> 8 & 15) << 4 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(-256 + i_0 << 9 >> 12)) << 16 >> 16;
      staticLLength[i_0++] = 7;
    }
    while (i_0 < 286) {
      staticLCodes[i_0] = ('\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(-88 + i_0 << 8 & 15) << 12 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(-88 + i_0 << 8 >> 4 & 15) << 8 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(-88 + i_0 << 8 >> 8 & 15) << 4 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(-88 + i_0 << 8 >> 12)) << 16 >> 16;
      staticLLength[i_0++] = 8;
    }
    staticDCodes = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, 30, 1);
    staticDLength = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 30, 1);
    for (i_0 = 0; i_0 < 30; ++i_0) {
      staticDCodes[i_0] = ('\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(i_0 << 11 & 15) << 12 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(i_0 << 11 >> 4 & 15) << 8 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(i_0 << 11 >> 8 & 15) << 4 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(i_0 << 11 >> 12)) << 16 >> 16;
      staticDLength[i_0] = 5;
    }
  }

  function $compressBlock(this$static){
    var bits, dc, dist, i_0, lc, litlen;
    for (i_0 = 0; i_0 < this$static.last_lit; ++i_0) {
      litlen = this$static.l_buf[i_0] & 255;
      dist = this$static.d_buf[i_0];
      if (dist-- != 0) {
        lc = $l_code(litlen);
        $writeSymbol(this$static.literalTree, lc);
        bits = ~~((lc - 261) / 4);
        bits > 0 && bits <= 5 && $writeBits(this$static.pending, litlen & (1 << bits) - 1, bits);
        dc = $d_code(dist);
        $writeSymbol(this$static.distTree, dc);
        bits = ~~(dc / 2) - 1;
        bits > 0 && $writeBits(this$static.pending, dist & (1 << bits) - 1, bits);
      }
      else {
        $writeSymbol(this$static.literalTree, litlen);
      }
    }
    $writeSymbol(this$static.literalTree, 256);
  }

  function $d_code(distance){
    var code;
    code = 0;
    while (distance >= 4) {
      code += 2;
      distance >>= 1;
    }
    return code + distance;
  }

  function $flushBlock(this$static, stored, stored_offset, stored_len, lastBlock){
    var blTreeCodes, i_0, opt_len, static_len;
    ++this$static.literalTree.freqs[256];
    $buildTree(this$static.literalTree);
    $buildTree(this$static.distTree);
    $calcBLFreq(this$static.literalTree, this$static.blTree);
    $calcBLFreq(this$static.distTree, this$static.blTree);
    $buildTree(this$static.blTree);
    blTreeCodes = 4;
    for (i_0 = 18; i_0 > blTreeCodes; --i_0) {
      this$static.blTree.length_0[BL_ORDER[i_0]] > 0 && (blTreeCodes = i_0 + 1);
    }
    opt_len = 14 + blTreeCodes * 3 + $getEncodedLength(this$static.blTree) + $getEncodedLength(this$static.literalTree) + $getEncodedLength(this$static.distTree) + this$static.extra_bits;
    static_len = this$static.extra_bits;
    for (i_0 = 0; i_0 < 286; ++i_0)
      static_len += this$static.literalTree.freqs[i_0] * staticLLength[i_0];
    for (i_0 = 0; i_0 < 30; ++i_0)
      static_len += this$static.distTree.freqs[i_0] * staticDLength[i_0];
    opt_len >= static_len && (opt_len = static_len);
    if (stored_offset >= 0 && stored_len + 4 < opt_len >> 3) {
      $flushStoredBlock(this$static, stored, stored_offset, stored_len, lastBlock);
    }
    else if (opt_len == static_len) {
      $writeBits(this$static.pending, 2 + (lastBlock?1:0), 3);
      $setStaticCodes(this$static.literalTree, staticLCodes, staticLLength);
      $setStaticCodes(this$static.distTree, staticDCodes, staticDLength);
      $compressBlock(this$static);
      $reset_0(this$static);
    }
    else {
      $writeBits(this$static.pending, 4 + (lastBlock?1:0), 3);
      $sendAllTrees(this$static, blTreeCodes);
      $compressBlock(this$static);
      $reset_0(this$static);
    }
  }

  function $flushStoredBlock(this$static, stored, stored_offset, stored_len, lastBlock){
    $writeBits(this$static.pending, lastBlock?1:0, 3);
    $alignToByte(this$static.pending);
    $writeShort(this$static.pending, stored_len);
    $writeShort(this$static.pending, ~stored_len);
    $writeBlock(this$static.pending, stored, stored_offset, stored_len);
    $reset_0(this$static);
  }

  function $l_code(len){
    var code;
    if (len == 255)
      return 285;
    code = 257;
    while (len >= 8) {
      code += 4;
      len >>= 1;
    }
    return code + len;
  }

  function $reset_0(this$static){
    this$static.last_lit = 0;
    this$static.extra_bits = 0;
    $reset_1(this$static.literalTree);
    $reset_1(this$static.distTree);
    $reset_1(this$static.blTree);
  }

  function $sendAllTrees(this$static, blTreeCodes){
    var rank;
    $buildCodes(this$static.blTree);
    $buildCodes(this$static.literalTree);
    $buildCodes(this$static.distTree);
    $writeBits(this$static.pending, this$static.literalTree.numCodes - 257, 5);
    $writeBits(this$static.pending, this$static.distTree.numCodes - 1, 5);
    $writeBits(this$static.pending, blTreeCodes - 4, 4);
    for (rank = 0; rank < blTreeCodes; ++rank)
      $writeBits(this$static.pending, this$static.blTree.length_0[BL_ORDER[rank]], 3);
    $writeTree(this$static.literalTree, this$static.blTree);
    $writeTree(this$static.distTree, this$static.blTree);
  }

  function $tallyDist(this$static, dist, len){
    var dc, lc;
    this$static.d_buf[this$static.last_lit] = dist << 16 >> 16;
    this$static.l_buf[this$static.last_lit++] = len - 3 << 24 >> 24;
    lc = $l_code(len - 3);
    ++this$static.literalTree.freqs[lc];
    lc >= 265 && lc < 285 && (this$static.extra_bits += ~~((lc - 261) / 4));
    dc = $d_code(dist - 1);
    ++this$static.distTree.freqs[dc];
    dc >= 4 && (this$static.extra_bits += ~~(dc / 2) - 1);
    return this$static.last_lit == 16384;
  }

  function $tallyLit(this$static, lit){
    this$static.d_buf[this$static.last_lit] = 0;
    this$static.l_buf[this$static.last_lit++] = lit << 24 >> 24;
    ++this$static.literalTree.freqs[lit];
    return this$static.last_lit == 16384;
  }

  function DeflaterHuffman_0(pending){
    $clinit_DeflaterHuffman();
    this.pending = pending;
    this.literalTree = new DeflaterHuffman$Tree_0(this, 286, 257, 15);
    this.distTree = new DeflaterHuffman$Tree_0(this, 30, 1, 15);
    this.blTree = new DeflaterHuffman$Tree_0(this, 19, 4, 7);
    this.d_buf = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, 16384, 1);
    this.l_buf = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 16384, 1);
  }

  defineSeed(123, 1, {}, DeflaterHuffman_0);
  _.blTree = null;
  _.d_buf = null;
  _.distTree = null;
  _.extra_bits = 0;
  _.l_buf = null;
  _.last_lit = 0;
  _.literalTree = null;
  _.pending = null;
  var BL_ORDER, staticDCodes = null, staticDLength = null, staticLCodes = null, staticLLength = null;
  function $buildCodes(this$static){
    var bits, code, i_0, nextCode;
    nextCode = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, this$static.maxLength, 1);
    code = 0;
    this$static.codes = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, this$static.freqs.length, 1);
    for (bits = 0; bits < this$static.maxLength; ++bits) {
      nextCode[bits] = code;
      code += this$static.bl_counts[bits] << 15 - bits;
    }
    for (i_0 = 0; i_0 < this$static.numCodes; ++i_0) {
      bits = this$static.length_0[i_0];
      if (bits > 0) {
        this$static.codes[i_0] = ($clinit_DeflaterHuffman() , ('\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(nextCode[bits - 1] & 15) << 12 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(nextCode[bits - 1] >> 4 & 15) << 8 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(nextCode[bits - 1] >> 8 & 15) << 4 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(nextCode[bits - 1] >> 12)) << 16 >> 16);
        nextCode[bits - 1] += 1 << 16 - bits;
      }
    }
  }

  function $buildLength(this$static, childs){
    var bitLength, bits, childPtr, i_0, incrBitLen, lengths, n, nodePtr, numLeafs, numNodes, overflow;
    this$static.length_0 = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, this$static.freqs.length, 1);
    numNodes = ~~(childs.length / 2);
    numLeafs = ~~((numNodes + 1) / 2);
    overflow = 0;
    for (i_0 = 0; i_0 < this$static.maxLength; ++i_0)
      this$static.bl_counts[i_0] = 0;
    lengths = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, numNodes, 1);
    lengths[numNodes - 1] = 0;
    for (i_0 = numNodes - 1; i_0 >= 0; --i_0) {
      if (childs[2 * i_0 + 1] != -1) {
        bitLength = lengths[i_0] + 1;
        if (bitLength > this$static.maxLength) {
          bitLength = this$static.maxLength;
          ++overflow;
        }
        lengths[childs[2 * i_0]] = lengths[childs[2 * i_0 + 1]] = bitLength;
      }
      else {
        bitLength = lengths[i_0];
        ++this$static.bl_counts[bitLength - 1];
        this$static.length_0[childs[2 * i_0]] = lengths[i_0] << 24 >> 24;
      }
    }
    if (overflow == 0)
      return;
    incrBitLen = this$static.maxLength - 1;
    do {
      while (this$static.bl_counts[--incrBitLen] == 0)
        ;
      do {
        --this$static.bl_counts[incrBitLen];
        ++this$static.bl_counts[++incrBitLen];
        overflow -= 1 << this$static.maxLength - 1 - incrBitLen;
      }
      while (overflow > 0 && incrBitLen < this$static.maxLength - 1);
    }
    while (overflow > 0);
    this$static.bl_counts[this$static.maxLength - 1] += overflow;
    this$static.bl_counts[this$static.maxLength - 2] -= overflow;
    nodePtr = 2 * numLeafs;
    for (bits = this$static.maxLength; bits != 0; --bits) {
      n = this$static.bl_counts[bits - 1];
      while (n > 0) {
        childPtr = 2 * childs[nodePtr++];
        if (childs[childPtr + 1] == -1) {
          this$static.length_0[childs[childPtr]] = bits << 24 >> 24;
          --n;
        }
      }
    }
  }

  function $buildTree(this$static){
    var childs, first, freq, heap, heapLen, i_0, last, lastVal, maxCode, mindepth, n, node, numNodes, numSymbols, path, pos, ppos, second, values;
    numSymbols = this$static.freqs.length;
    heap = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, numSymbols, 1);
    heapLen = 0;
    maxCode = 0;
    for (n = 0; n < numSymbols; ++n) {
      freq = this$static.freqs[n];
      if (freq != 0) {
        pos = heapLen++;
        while (pos > 0 && this$static.freqs[heap[ppos = ~~((pos - 1) / 2)]] > freq) {
          heap[pos] = heap[ppos];
          pos = ppos;
        }
        heap[pos] = n;
        maxCode = n;
      }
    }
    while (heapLen < 2) {
      node = maxCode < 2?++maxCode:0;
      heap[heapLen++] = node;
    }
    this$static.numCodes = max_0(maxCode + 1, this$static.minNumCodes);
    childs = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 4 * heapLen - 2, 1);
    values = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 2 * heapLen - 1, 1);
    numNodes = heapLen;
    for (i_0 = 0; i_0 < heapLen; ++i_0) {
      node = heap[i_0];
      childs[2 * i_0] = node;
      childs[2 * i_0 + 1] = -1;
      values[i_0] = this$static.freqs[node] << 8;
      heap[i_0] = i_0;
    }
    do {
      first = heap[0];
      last = heap[--heapLen];
      ppos = 0;
      path = 1;
      while (path < heapLen) {
        path + 1 < heapLen && values[heap[path]] > values[heap[path + 1]] && ++path;
        heap[ppos] = heap[path];
        ppos = path;
        path = path * 2 + 1;
      }
      lastVal = values[last];
      while ((path = ppos) > 0 && values[heap[ppos = ~~((ppos - 1) / 2)]] > lastVal)
        heap[path] = heap[ppos];
      heap[path] = last;
      second = heap[0];
      last = numNodes++;
      childs[2 * last] = first;
      childs[2 * last + 1] = second;
      mindepth = min(values[first] & 255, values[second] & 255);
      values[last] = lastVal = values[first] + values[second] - mindepth + 1;
      ppos = 0;
      path = 1;
      while (path < heapLen) {
        path + 1 < heapLen && values[heap[path]] > values[heap[path + 1]] && ++path;
        heap[ppos] = heap[path];
        ppos = path;
        path = path * 2 + 1;
      }
      while ((path = ppos) > 0 && values[heap[ppos = ~~((ppos - 1) / 2)]] > lastVal)
        heap[path] = heap[ppos];
      heap[path] = last;
    }
    while (heapLen > 1);
    if (heap[0] != ~~(childs.length / 2) - 1)
      throw new RuntimeException_0('Weird!');
    $buildLength(this$static, childs);
  }

  function $calcBLFreq(this$static, blTree){
    var count, curlen, i_0, max_count, nextlen;
    curlen = -1;
    i_0 = 0;
    while (i_0 < this$static.numCodes) {
      count = 1;
      nextlen = this$static.length_0[i_0];
      if (nextlen == 0) {
        max_count = 138;
      }
      else {
        max_count = 6;
        if (curlen != nextlen) {
          ++blTree.freqs[nextlen];
          count = 0;
        }
      }
      curlen = nextlen;
      ++i_0;
      while (i_0 < this$static.numCodes && nextlen == this$static.length_0[i_0]) {
        ++i_0;
        if (++count >= max_count)
          break;
      }
      count < 3?(blTree.freqs[nextlen] = blTree.freqs[nextlen] + count << 16 >> 16):nextlen != 0?++blTree.freqs[16]:count <= 10?++blTree.freqs[17]:++blTree.freqs[18];
    }
  }

  function $getEncodedLength(this$static){
    var i_0, len;
    len = 0;
    for (i_0 = 0; i_0 < this$static.freqs.length; ++i_0)
      len += this$static.freqs[i_0] * this$static.length_0[i_0];
    return len;
  }

  function $reset_1(this$static){
    var i_0;
    for (i_0 = 0; i_0 < this$static.freqs.length; ++i_0)
      this$static.freqs[i_0] = 0;
    this$static.codes = null;
    this$static.length_0 = null;
  }

  function $setStaticCodes(this$static, stCodes, stLength){
    this$static.codes = stCodes;
    this$static.length_0 = stLength;
  }

  function $writeSymbol(this$static, code){
    $writeBits(this$static.this$0.pending, this$static.codes[code] & 65535, this$static.length_0[code]);
  }

  function $writeTree(this$static, blTree){
    var count, curlen, i_0, max_count, nextlen;
    curlen = -1;
    i_0 = 0;
    while (i_0 < this$static.numCodes) {
      count = 1;
      nextlen = this$static.length_0[i_0];
      if (nextlen == 0) {
        max_count = 138;
      }
      else {
        max_count = 6;
        if (curlen != nextlen) {
          $writeBits(blTree.this$0.pending, blTree.codes[nextlen] & 65535, blTree.length_0[nextlen]);
          count = 0;
        }
      }
      curlen = nextlen;
      ++i_0;
      while (i_0 < this$static.numCodes && nextlen == this$static.length_0[i_0]) {
        ++i_0;
        if (++count >= max_count)
          break;
      }
      if (count < 3) {
        while (count-- > 0)
          $writeBits(blTree.this$0.pending, blTree.codes[nextlen] & 65535, blTree.length_0[nextlen]);
      }
      else if (nextlen != 0) {
        $writeBits(blTree.this$0.pending, blTree.codes[16] & 65535, blTree.length_0[16]);
        $writeBits(this$static.this$0.pending, count - 3, 2);
      }
      else if (count <= 10) {
        $writeBits(blTree.this$0.pending, blTree.codes[17] & 65535, blTree.length_0[17]);
        $writeBits(this$static.this$0.pending, count - 3, 3);
      }
      else {
        $writeBits(blTree.this$0.pending, blTree.codes[18] & 65535, blTree.length_0[18]);
        $writeBits(this$static.this$0.pending, count - 11, 7);
      }
    }
  }

  function DeflaterHuffman$Tree_0(this$0, elems, minCodes, maxLength){
    this.this$0 = this$0;
    this.minNumCodes = minCodes;
    this.maxLength = maxLength;
    this.freqs = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, elems, 1);
    this.bl_counts = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, maxLength, 1);
  }

  defineSeed(124, 1, {}, DeflaterHuffman$Tree_0);
  _.bl_counts = null;
  _.codes = null;
  _.freqs = null;
  _.length_0 = null;
  _.maxLength = 0;
  _.minNumCodes = 0;
  _.numCodes = 0;
  _.this$0 = null;
  function $alignToByte(this$static){
    if (this$static.bitCount > 0) {
      this$static.buf[this$static.end++] = this$static.bits << 24 >> 24;
      this$static.bitCount > 8 && (this$static.buf[this$static.end++] = this$static.bits >>> 8 << 24 >> 24);
    }
    this$static.bits = 0;
    this$static.bitCount = 0;
  }

  function $flush(this$static, output, offset, length_0){
    if (this$static.bitCount >= 8) {
      this$static.buf[this$static.end++] = this$static.bits << 24 >> 24;
      this$static.bits >>>= 8;
      this$static.bitCount -= 8;
    }
    if (length_0 > this$static.end - this$static.start) {
      length_0 = this$static.end - this$static.start;
      arraycopy(this$static.buf, this$static.start, output, offset, length_0);
      this$static.start = 0;
      this$static.end = 0;
    }
    else {
      arraycopy(this$static.buf, this$static.start, output, offset, length_0);
      this$static.start += length_0;
    }
    return length_0;
  }

  function $reset_2(this$static){
    this$static.start = this$static.end = this$static.bitCount = 0;
  }

  function $writeBits(this$static, b, count){
    this$static.bits |= b << this$static.bitCount;
    this$static.bitCount += count;
    if (this$static.bitCount >= 16) {
      this$static.buf[this$static.end++] = this$static.bits << 24 >> 24;
      this$static.buf[this$static.end++] = this$static.bits >>> 8 << 24 >> 24;
      this$static.bits >>>= 16;
      this$static.bitCount -= 16;
    }
  }

  function $writeBlock(this$static, block, offset, len){
    arraycopy(block, offset, this$static.buf, this$static.end, len);
    this$static.end += len;
  }

  function $writeShort(this$static, s){
    this$static.buf[this$static.end++] = s << 24 >> 24;
    this$static.buf[this$static.end++] = s >> 8 << 24 >> 24;
  }

  function $writeShortMSB(this$static, s){
    this$static.buf[this$static.end++] = s >> 8 << 24 >> 24;
    this$static.buf[this$static.end++] = s << 24 >> 24;
  }

  defineSeed(126, 1, {});
  _.bitCount = 0;
  _.bits = 0;
  _.buf = null;
  _.end = 0;
  _.start = 0;
  function DeflaterPending_0(){
    this.buf = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 65536, 1);
  }

  defineSeed(125, 126, {}, DeflaterPending_0);
  function $clinit_Inflater(){
    $clinit_Inflater = nullMethod;
    CPLENS = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258]);
    CPLEXT = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    CPDIST = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]);
    CPDEXT = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
  }

  function $decode(this$static){
    var more, nlen, type;
    switch (this$static.mode) {
      case 0:
        return $decodeHeader(this$static);
      case 1:
        return $decodeDict(this$static);
      case 11:
        return $decodeChksum(this$static);
      case 2:
        if (this$static.isLastBlock) {
          if (this$static.nowrap) {
            this$static.mode = 12;
            return false;
          }
          else {
            $skipToByteBoundary(this$static.input);
            this$static.neededBits = 32;
            this$static.mode = 11;
            return true;
          }
        }

        type = $peekBits(this$static.input, 3);
        if (type < 0)
          return false;
        $dropBits(this$static.input, 3);
        (type & 1) != 0 && (this$static.isLastBlock = true);
        switch (type >> 1) {
          case 0:
            $skipToByteBoundary(this$static.input);
            this$static.mode = 3;
            break;
          case 1:
            this$static.litlenTree = ($clinit_InflaterHuffmanTree() , defLitLenTree);
            this$static.distTree = defDistTree;
            this$static.mode = 7;
            break;
          case 2:
            this$static.dynHeader = new InflaterDynHeader_0;
            this$static.mode = 6;
            break;
          default:throw new DataFormatException_1('Unknown block type ' + type);
        }

        return true;
      case 3:
      {
        if ((this$static.uncomprLen = $peekBits(this$static.input, 16)) < 0)
          return false;
        $dropBits(this$static.input, 16);
        this$static.mode = 4;
      }

      case 4:
      {
        nlen = $peekBits(this$static.input, 16);
        if (nlen < 0)
          return false;
        $dropBits(this$static.input, 16);
        if (nlen != (this$static.uncomprLen ^ 65535))
          throw new DataFormatException_1('broken uncompressed block');
        this$static.mode = 5;
      }

      case 5:
      {
        more = $copyStored(this$static.outputWindow, this$static.input, this$static.uncomprLen);
        this$static.uncomprLen -= more;
        if (this$static.uncomprLen == 0) {
          this$static.mode = 2;
          return true;
        }
        return !$needsInput(this$static.input);
      }

      case 6:
        if (!$decode_0(this$static.dynHeader, this$static.input))
          return false;
        this$static.litlenTree = $buildLitLenTree(this$static.dynHeader);
        this$static.distTree = $buildDistTree(this$static.dynHeader);
        this$static.mode = 7;
      case 7:
      case 8:
      case 9:
      case 10:
        return $decodeHuffman(this$static);
      case 12:
        return false;
      default:throw new IllegalStateException_0;
    }
  }

  function $decodeChksum(this$static){
    var chkByte;
    while (this$static.neededBits > 0) {
      chkByte = $peekBits(this$static.input, 8);
      if (chkByte < 0)
        return false;
      $dropBits(this$static.input, 8);
      this$static.readAdler = this$static.readAdler << 8 | chkByte;
      this$static.neededBits -= 8;
    }
    if (toInt(and(fromInt(this$static.adler.checksum), Pffffffff_longLit)) != this$static.readAdler)
      throw new DataFormatException_1("Adler chksum doesn't match: " + toPowerOfTwoString(toInt(and(fromInt(this$static.adler.checksum), Pffffffff_longLit))) + ' vs. ' + toPowerOfTwoString(this$static.readAdler));
    this$static.mode = 12;
    return false;
  }

  function $decodeDict(this$static){
    var dictByte;
    while (this$static.neededBits > 0) {
      dictByte = $peekBits(this$static.input, 8);
      if (dictByte < 0)
        return false;
      $dropBits(this$static.input, 8);
      this$static.readAdler = this$static.readAdler << 8 | dictByte;
      this$static.neededBits -= 8;
    }
    return false;
  }

  function $decodeHeader(this$static){
    var header;
    header = $peekBits(this$static.input, 16);
    if (header < 0)
      return false;
    $dropBits(this$static.input, 16);
    header = (header << 8 | header >> 8) & 65535;
    if (header % 31 != 0)
      throw new DataFormatException_1('Header checksum illegal');
    if ((header & 3840) != 2048)
      throw new DataFormatException_1('Compression Method unknown');
    if ((header & 32) == 0) {
      this$static.mode = 2;
    }
    else {
      this$static.mode = 1;
      this$static.neededBits = 32;
    }
    return true;
  }

  function $decodeHuffman(this$static){
    var free, i_0, symbol;
    free = 32768 - this$static.outputWindow.window_filled;
    while (free >= 258) {
      switch (this$static.mode) {
        case 7:
          while (((symbol = $getSymbol(this$static.litlenTree, this$static.input)) & -256) == 0) {
            $write(this$static.outputWindow, symbol);
            if (--free < 258)
              return true;
          }

          if (symbol < 257) {
            if (symbol < 0)
              return false;
            else {
              this$static.distTree = null;
              this$static.litlenTree = null;
              this$static.mode = 2;
              return true;
            }
          }

          try {
            this$static.repLength = CPLENS[symbol - 257];
            this$static.neededBits = CPLEXT[symbol - 257];
          }
          catch ($e0) {
            $e0 = caught($e0);
            if (instanceOf($e0, Q$ArrayIndexOutOfBoundsException)) {
              throw new DataFormatException_1('Illegal rep length code');
            }
            else
              throw $e0;
          }

        case 8:
          if (this$static.neededBits > 0) {
            this$static.mode = 8;
            i_0 = $peekBits(this$static.input, this$static.neededBits);
            if (i_0 < 0)
              return false;
            $dropBits(this$static.input, this$static.neededBits);
            this$static.repLength += i_0;
          }

          this$static.mode = 9;
        case 9:
          symbol = $getSymbol(this$static.distTree, this$static.input);
          if (symbol < 0)
            return false;
          try {
            this$static.repDist = CPDIST[symbol];
            this$static.neededBits = CPDEXT[symbol];
          }
          catch ($e0) {
            $e0 = caught($e0);
            if (instanceOf($e0, Q$ArrayIndexOutOfBoundsException)) {
              throw new DataFormatException_1('Illegal rep dist code');
            }
            else
              throw $e0;
          }

        case 10:
          if (this$static.neededBits > 0) {
            this$static.mode = 10;
            i_0 = $peekBits(this$static.input, this$static.neededBits);
            if (i_0 < 0)
              return false;
            $dropBits(this$static.input, this$static.neededBits);
            this$static.repDist += i_0;
          }

          $repeat(this$static.outputWindow, this$static.repLength, this$static.repDist);
          free -= this$static.repLength;
          this$static.mode = 7;
          break;
        default:throw new IllegalStateException_0;
      }
    }
    return true;
  }

  function $inflate(this$static, buf){
    return $inflate_0(this$static, buf, 0, buf.length);
  }

  function $inflate_0(this$static, buf, off, len){
    var count, more;
    if (0 > off || off > off + len || off + len > buf.length)
      throw new ArrayIndexOutOfBoundsException_0;
    count = 0;
    for (;;) {
      if (this$static.outputWindow.window_filled == 0) {
        if (!$decode(this$static))
          break;
      }
      else if (len > 0) {
        more = $copyOutput(this$static.outputWindow, buf, off, len);
        $update(this$static.adler, buf, off, more);
        off += more;
        count += more;
        this$static.totalOut = add(this$static.totalOut, fromInt(more));
        len -= more;
      }
      else
        break;
    }
    return count;
  }

  function $setInput_1(this$static, buf, off, len){
    $setInput_2(this$static.input, buf, off, len);
    this$static.totalIn = add(this$static.totalIn, fromInt(len));
  }

  function Inflater_0(){
    $clinit_Inflater();
    this.nowrap = false;
    this.adler = new Adler32_0;
    this.input = new StreamManipulator_0;
    this.outputWindow = new OutputWindow_0;
    this.mode = 0;
  }

  defineSeed(127, 1, {}, Inflater_0);
  _.adler = null;
  _.distTree = null;
  _.dynHeader = null;
  _.input = null;
  _.isLastBlock = false;
  _.litlenTree = null;
  _.mode = 0;
  _.neededBits = 0;
  _.nowrap = false;
  _.outputWindow = null;
  _.readAdler = 0;
  _.repDist = 0;
  _.repLength = 0;
  _.totalIn = P0_longLit;
  _.totalOut = P0_longLit;
  _.uncomprLen = 0;
  var CPDEXT, CPDIST, CPLENS, CPLEXT;
  function $clinit_InflaterDynHeader(){
    $clinit_InflaterDynHeader = nullMethod;
    repMin = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [3, 3, 11]);
    repBits = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [2, 3, 7]);
    BL_ORDER_0 = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  }

  function $buildDistTree(this$static){
    var distLens;
    distLens = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, this$static.dnum, 1);
    arraycopy(this$static.litdistLens, this$static.lnum, distLens, 0, this$static.dnum);
    return new InflaterHuffmanTree_0(distLens);
  }

  function $buildLitLenTree(this$static){
    var litlenLens;
    litlenLens = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, this$static.lnum, 1);
    arraycopy(this$static.litdistLens, 0, litlenLens, 0, this$static.lnum);
    return new InflaterHuffmanTree_0(litlenLens);
  }



  function $decode_0(this$static, input){
    var bits, count, len, symbol;
    decode_loop: for (;;) {
      switch (this$static.mode) {
        case 0:
          this$static.lnum = $peekBits(input, 5);
          if (this$static.lnum < 0)
            return false;
          this$static.lnum += 257;
          input.buffer >>>= 5;
          input.bits_in_buffer -= 5;
          this$static.mode = 1;
        case 1:
          this$static.dnum = $peekBits(input, 5);
          if (this$static.dnum < 0)
            return false;
          ++this$static.dnum;
          input.buffer >>>= 5;
          input.bits_in_buffer -= 5;
          this$static.num = this$static.lnum + this$static.dnum;
          this$static.litdistLens = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, this$static.num, 1);
          this$static.mode = 2;
        case 2:
          this$static.blnum = $peekBits(input, 4);
          if (this$static.blnum < 0)
            return false;
          this$static.blnum += 4;
          input.buffer >>>= 4;
          input.bits_in_buffer -= 4;
          this$static.blLens = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 19, 1);
          this$static.ptr = 0;
          this$static.mode = 3;
        case 3:
          while (this$static.ptr < this$static.blnum) {
            len = $peekBits(input, 3);
            if (len < 0)
              return false;
            input.buffer >>>= 3;
            input.bits_in_buffer -= 3;
            this$static.blLens[BL_ORDER_0[this$static.ptr]] = len << 24 >> 24;
            ++this$static.ptr;
          }

          this$static.blTree = new InflaterHuffmanTree_0(this$static.blLens);
          this$static.blLens = null;
          this$static.ptr = 0;
          this$static.mode = 4;
        case 4:
        {
          while (((symbol = $getSymbol(this$static.blTree, input)) & -16) == 0) {
            this$static.litdistLens[this$static.ptr++] = this$static.lastLen = symbol << 24 >> 24;
            if (this$static.ptr == this$static.num) {
              return true;
            }
          }
          if (symbol < 0)
            return false;
          if (symbol >= 17) {
            this$static.lastLen = 0;
          }
          else {
            if (this$static.ptr == 0)
              throw new DataFormatException_0;
          }
          this$static.repSymbol = symbol - 16;
          this$static.mode = 5;
        }

        case 5:
        {
          bits = repBits[this$static.repSymbol];
          count = $peekBits(input, bits);
          if (count < 0)
            return false;
          input.buffer >>>= bits;
          input.bits_in_buffer -= bits;
          count += repMin[this$static.repSymbol];
          if (this$static.ptr + count > this$static.num)
            throw new DataFormatException_0;
          while (count-- > 0)
            this$static.litdistLens[this$static.ptr++] = this$static.lastLen;
          if (this$static.ptr == this$static.num) {
            return true;
          }
        }

          this$static.mode = 4;
          continue decode_loop;
      }
    }
  }

  function InflaterDynHeader_0(){
    $clinit_InflaterDynHeader();
  }

  defineSeed(128, 1, {}, InflaterDynHeader_0);
  _.blLens = null;
  _.blTree = null;
  _.blnum = 0;
  _.dnum = 0;
  _.lastLen = 0;
  _.litdistLens = null;
  _.lnum = 0;
  _.mode = 0;
  _.num = 0;
  _.ptr = 0;
  _.repSymbol = 0;
  var BL_ORDER_0, repBits, repMin;
  function $clinit_InflaterHuffmanTree(){
    $clinit_InflaterHuffmanTree = nullMethod;
    var codeLengths, i_0;
    try {
      codeLengths = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 288, 1);
      i_0 = 0;
      while (i_0 < 144)
        codeLengths[i_0++] = 8;
      while (i_0 < 256)
        codeLengths[i_0++] = 9;
      while (i_0 < 280)
        codeLengths[i_0++] = 7;
      while (i_0 < 288)
        codeLengths[i_0++] = 8;
      defLitLenTree = new InflaterHuffmanTree_0(codeLengths);
      codeLengths = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 32, 1);
      i_0 = 0;
      while (i_0 < 32)
        codeLengths[i_0++] = 5;
      defDistTree = new InflaterHuffmanTree_0(codeLengths);
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$DataFormatException)) {
        throw new InternalError_1;
      }
      else
        throw $e0;
    }
  }

  function $buildTree_0(this$static, codeLengths){
    var bits, blCount, code, end, i_0, max, nextCode, revcode, start, subTree, treeLen, treePtr, treeSize;
    blCount = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 16, 1);
    nextCode = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 16, 1);
    for (i_0 = 0; i_0 < codeLengths.length; ++i_0) {
      bits = codeLengths[i_0];
      bits > 0 && ++blCount[bits];
    }
    max = 0;
    code = 0;
    treeSize = 512;
    for (bits = 1; bits <= 15; ++bits) {
      nextCode[bits] = code;
      blCount[bits] > 0 && (max = bits);
      code += blCount[bits] << 16 - bits;
      if (bits >= 10) {
        start = nextCode[bits] & 130944;
        end = code & 130944;
        treeSize += end - start >> 16 - bits;
      }
    }
    if (code != 65536 && max > 1)
      throw new DataFormatException_1('incomplete dynamic bit lengths tree');
    this$static.tree = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, treeSize, 1);
    treePtr = 512;
    for (bits = 15; bits >= 10; --bits) {
      end = code & 130944;
      code -= blCount[bits] << 16 - bits;
      start = code & 130944;
      for (i_0 = start; i_0 < end; i_0 += 128) {
        this$static.tree[$clinit_DeflaterHuffman() , ('\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(i_0 & 15) << 12 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(i_0 >> 4 & 15) << 8 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(i_0 >> 8 & 15) << 4 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(i_0 >> 12)) << 16 >> 16] = (-treePtr << 4 | bits) << 16 >> 16;
        treePtr += 1 << bits - 9;
      }
    }
    for (i_0 = 0; i_0 < codeLengths.length; ++i_0) {
      bits = codeLengths[i_0];
      if (bits == 0)
        continue;
      code = nextCode[bits];
      revcode = ($clinit_DeflaterHuffman() , ('\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(code & 15) << 12 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(code >> 4 & 15) << 8 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(code >> 8 & 15) << 4 | '\0\b\4\f\2\n\6\16\1\t\5\r\3\13\7\17'.charCodeAt(code >> 12)) << 16 >> 16);
      if (bits <= 9) {
        do {
          this$static.tree[revcode] = (i_0 << 4 | bits) << 16 >> 16;
          revcode += 1 << bits;
        }
        while (revcode < 512);
      }
      else {
        subTree = this$static.tree[revcode & 511];
        treeLen = 1 << (subTree & 15);
        subTree = -(subTree >> 4);
        do {
          this$static.tree[subTree | revcode >> 9] = (i_0 << 4 | bits) << 16 >> 16;
          revcode += 1 << bits;
        }
        while (revcode < treeLen);
      }
      nextCode[bits] = code + (1 << 16 - bits);
    }
  }

  function $getSymbol(this$static, input){
    var bitlen, bits, lookahead, subtree, symbol;
    if ((lookahead = $peekBits(input, 9)) >= 0) {
      if ((symbol = this$static.tree[lookahead]) >= 0) {
        input.buffer >>>= symbol & 15;
        input.bits_in_buffer -= symbol & 15;
        return symbol >> 4;
      }
      subtree = -(symbol >> 4);
      bitlen = symbol & 15;
      if ((lookahead = $peekBits(input, bitlen)) >= 0) {
        symbol = this$static.tree[subtree | lookahead >> 9];
        input.buffer >>>= symbol & 15;
        input.bits_in_buffer -= symbol & 15;
        return symbol >> 4;
      }
      else {
        bits = input.bits_in_buffer;
        lookahead = $peekBits(input, bits);
        symbol = this$static.tree[subtree | lookahead >> 9];
        if ((symbol & 15) <= bits) {
          input.buffer >>>= symbol & 15;
          input.bits_in_buffer -= symbol & 15;
          return symbol >> 4;
        }
        else
          return -1;
      }
    }
    else {
      bits = input.bits_in_buffer;
      lookahead = $peekBits(input, bits);
      symbol = this$static.tree[lookahead];
      if (symbol >= 0 && (symbol & 15) <= bits) {
        input.buffer >>>= symbol & 15;
        input.bits_in_buffer -= symbol & 15;
        return symbol >> 4;
      }
      else
        return -1;
    }
  }

  function InflaterHuffmanTree_0(codeLengths){
    $clinit_InflaterHuffmanTree();
    $buildTree_0(this, codeLengths);
  }

  defineSeed(129, 1, {}, InflaterHuffmanTree_0);
  _.tree = null;
  var defDistTree = null, defLitLenTree = null;
  function $copyOutput(this$static, output, offset, len){
    var copied, copy_end, tailLen;
    copy_end = this$static.window_end;
    len > this$static.window_filled?(len = this$static.window_filled):(copy_end = this$static.window_end - this$static.window_filled + len & 32767);
    copied = len;
    tailLen = len - copy_end;
    if (tailLen > 0) {
      arraycopy(this$static.window_0, 32768 - tailLen, output, offset, tailLen);
      offset += tailLen;
      len = copy_end;
    }
    arraycopy(this$static.window_0, copy_end - len, output, offset, len);
    this$static.window_filled -= copied;
    if (this$static.window_filled < 0)
      throw new IllegalStateException_0;
    return copied;
  }

  function $copyStored(this$static, input, len){
    var copied, tailLen;
    len = min(min(len, 32768 - this$static.window_filled), input.window_end - input.window_start + (input.bits_in_buffer >> 3));
    tailLen = 32768 - this$static.window_end;
    if (len > tailLen) {
      copied = $copyBytes(input, this$static.window_0, this$static.window_end, tailLen);
      copied == tailLen && (copied += $copyBytes(input, this$static.window_0, 0, len - tailLen));
    }
    else
      copied = $copyBytes(input, this$static.window_0, this$static.window_end, len);
    this$static.window_end = this$static.window_end + copied & 32767;
    this$static.window_filled += copied;
    return copied;
  }

  function $repeat(this$static, len, dist){
    var border, rep_start;
    if ((this$static.window_filled += len) > 32768)
      throw new IllegalStateException_1('Window full');
    rep_start = this$static.window_end - dist & 32767;
    border = 32768 - len;
    if (rep_start <= border && this$static.window_end < border) {
      if (len <= dist) {
        arraycopy(this$static.window_0, rep_start, this$static.window_0, this$static.window_end, len);
        this$static.window_end += len;
      }
      else {
        while (len-- > 0)
          this$static.window_0[this$static.window_end++] = this$static.window_0[rep_start++];
      }
    }
    else
      $slowRepeat(this$static, rep_start, len);
  }

  function $slowRepeat(this$static, rep_start, len){
    while (len-- > 0) {
      this$static.window_0[this$static.window_end++] = this$static.window_0[rep_start++];
      this$static.window_end &= 32767;
      rep_start &= 32767;
    }
  }

  function $write(this$static, abyte){
    if (this$static.window_filled++ == 32768)
      throw new IllegalStateException_1('Window full');
    this$static.window_0[this$static.window_end++] = abyte << 24 >> 24;
    this$static.window_end &= 32767;
  }

  function OutputWindow_0(){
    this.window_0 = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, 32768, 1);
  }

  defineSeed(130, 1, {}, OutputWindow_0);
  _.window_end = 0;
  _.window_filled = 0;
  function $copyBytes(this$static, output, offset, length_0){
    var avail, count;
    if (length_0 < 0)
      throw new IllegalArgumentException_1('length negative');
    if ((this$static.bits_in_buffer & 7) != 0)
      throw new IllegalStateException_1('Bit buffer is not aligned!');
    count = 0;
    while (this$static.bits_in_buffer > 0 && length_0 > 0) {
      output[offset++] = this$static.buffer << 24 >> 24;
      this$static.buffer >>>= 8;
      this$static.bits_in_buffer -= 8;
      --length_0;
      ++count;
    }
    if (length_0 == 0)
      return count;
    avail = this$static.window_end - this$static.window_start;
    length_0 > avail && (length_0 = avail);
    arraycopy(this$static.window_0, this$static.window_start, output, offset, length_0);
    this$static.window_start += length_0;
    if ((this$static.window_start - this$static.window_end & 1) != 0) {
      this$static.buffer = this$static.window_0[this$static.window_start++] & 255;
      this$static.bits_in_buffer = 8;
    }
    return count + length_0;
  }

  function $dropBits(this$static, n){
    this$static.buffer >>>= n;
    this$static.bits_in_buffer -= n;
  }

  function $needsInput(this$static){
    return this$static.window_start == this$static.window_end;
  }

  function $peekBits(this$static, n){
    if (this$static.bits_in_buffer < n) {
      if (this$static.window_start == this$static.window_end)
        return -1;
      this$static.buffer |= (this$static.window_0[this$static.window_start++] & 255 | (this$static.window_0[this$static.window_start++] & 255) << 8) << this$static.bits_in_buffer;
      this$static.bits_in_buffer += 16;
    }
    return this$static.buffer & (1 << n) - 1;
  }

  function $setInput_2(this$static, buf, off, len){
    var end;
    if (this$static.window_start < this$static.window_end)
      throw new IllegalStateException_1('Old input was not completely processed');
    end = off + len;
    if (0 > off || off > end || end > buf.length)
      throw new ArrayIndexOutOfBoundsException_0;
    if ((len & 1) != 0) {
      this$static.buffer |= (buf[off++] & 255) << this$static.bits_in_buffer;
      this$static.bits_in_buffer += 8;
    }
    this$static.window_0 = buf;
    this$static.window_start = off;
    this$static.window_end = end;
  }

  function $skipToByteBoundary(this$static){
    this$static.buffer >>= this$static.bits_in_buffer & 7;
    this$static.bits_in_buffer &= -8;
  }

  function StreamManipulator_0(){
  }

  defineSeed(131, 1, {}, StreamManipulator_0);
  _.bits_in_buffer = 0;
  _.buffer = 0;
  _.window_0 = null;
  _.window_end = 0;
  _.window_start = 0;
  defineSeed(134, 1, {});
  function $clinit_AbstractHistogramBase(){
    $clinit_AbstractHistogramBase = nullMethod;
    constructionIdentityCount = new AtomicLong_0(P0_longLit);
  }

  function $setIntegerToDoubleValueConversionRatio(this$static, integerToDoubleValueConversionRatio){
    this$static.integerToDoubleValueConversionRatio = integerToDoubleValueConversionRatio;
  }

  defineSeed(133, 134, makeCastMap([Q$AbstractHistogramBase, Q$Exportable]));
  _.getBucketCount_0 = function getBucketCount(){
    return this.bucketCount;
  }
  ;
  _.getCountsArrayLength_0 = function getCountsArrayLength(){
    return this.countsArrayLength;
  }
  ;
  _.getSubBucketCount_0 = function getSubBucketCount(){
    return this.subBucketCount;
  }
  ;
  _.getWordSizeInBytes_0 = function getWordSizeInBytes(){
    return this.wordSizeInBytes;
  }
  ;
  _.autoResize = false;
  _.bucketCount = 0;
  _.countsArrayLength = 0;
  _.endTimeStampMsec = P0_longLit;
  _.highestTrackableValue = P0_longLit;
  _.integerToDoubleValueConversionRatio = 1;
  _.intermediateUncompressedByteBuffer = null;
  _.lowestDiscernibleValue = P0_longLit;
  _.numberOfSignificantValueDigits = 0;
  _.percentileIterator = null;
  _.recordedValuesIterator = null;
  _.startTimeStampMsec = P0_longLit;
  _.subBucketCount = 0;
  _.wordSizeInBytes = 0;
  var constructionIdentityCount;
  function $clinit_AbstractHistogram(){
    $clinit_AbstractHistogram = nullMethod;
    $clinit_AbstractHistogramBase();
    constructorArgsTypes = initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit, J_classLit, I_classLit]);
  }

  function $add_1(this$static, otherHistogram){
    var highestRecordableValue, i_0, observedOtherTotalCount, otherCount;
    highestRecordableValue = sub($nextNonEquivalentValue(this$static, $valueFromIndex(this$static, this$static.countsArrayLength - 1)), P1_longLit);
    if (lt(highestRecordableValue, eq(otherHistogram.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(otherHistogram, otherHistogram.maxValue))) {
      throw new ArrayIndexOutOfBoundsException_1("The other histogram includes values that do not fit in this histogram's range.");
    }
    if (this$static.bucketCount == otherHistogram.bucketCount && this$static.subBucketCount == otherHistogram.subBucketCount && this$static.unitMagnitude == otherHistogram.unitMagnitude && this$static.getNormalizingIndexOffset() == otherHistogram.getNormalizingIndexOffset()) {
      observedOtherTotalCount = P0_longLit;
      for (i_0 = 0; i_0 < otherHistogram.countsArrayLength; ++i_0) {
        otherCount = otherHistogram.getCountAtIndex(i_0);
        if (gt(otherCount, P0_longLit)) {
          this$static.addToCountAtIndex(i_0, otherCount);
          observedOtherTotalCount = add(observedOtherTotalCount, otherCount);
        }
      }
      this$static.setTotalCount(add(this$static.getTotalCount_0(), observedOtherTotalCount));
      $updatedMaxValue(this$static, max_1(eq(this$static.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(this$static, this$static.maxValue), eq(otherHistogram.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(otherHistogram, otherHistogram.maxValue)));
      $updateMinNonZeroValue(this$static, min_0(eq(this$static.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(this$static, this$static.minNonZeroValue), eq(otherHistogram.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(otherHistogram, otherHistogram.minNonZeroValue)));
    }
    else {
      for (i_0 = 0; i_0 < otherHistogram.countsArrayLength; ++i_0) {
        otherCount = otherHistogram.getCountAtIndex(i_0);
        gt(otherCount, P0_longLit) && $recordValueWithCount(this$static, $valueFromIndex(otherHistogram, i_0), otherCount);
      }
    }
  }

  function $addWhileCorrectingForCoordinatedOmission(this$static, otherHistogram, expectedIntervalBetweenValueSamples){
    var v, v$iterator;
    for (v$iterator = new RecordedValuesIterator_0((new AbstractHistogram$RecordedValues_0(otherHistogram)).histogram); $hasNext_0(v$iterator);) {
      v = $next_1(v$iterator);
      $recordValueWithCountAndExpectedInterval(this$static, v.valueIteratedTo, v.countAtValueIteratedTo, expectedIntervalBetweenValueSamples);
    }
  }

  function $checkBounds(this$static, index){
    if (index > this$static.countsArrayLength || index < 0) {
      throw new ArrayIndexOutOfBoundsException_1('index out of covered value range');
    }
  }

  function $copyInto(this$static, targetHistogram){
    $reset_3(targetHistogram);
    $add_1(targetHistogram, this$static);
    $setStartTimeStamp(targetHistogram, this$static.startTimeStampMsec);
    $setEndTimeStamp(targetHistogram, this$static.endTimeStampMsec);
  }

  function $copyIntoCorrectedForCoordinatedOmission(this$static, targetHistogram, expectedIntervalBetweenValueSamples){
    $reset_3(targetHistogram);
    $addWhileCorrectingForCoordinatedOmission(targetHistogram, this$static, expectedIntervalBetweenValueSamples);
    $setStartTimeStamp(targetHistogram, this$static.startTimeStampMsec);
    $setEndTimeStamp(targetHistogram, this$static.endTimeStampMsec);
  }

  function $countsArrayIndex(this$static, value){
    var bucketIndex, subBucketIndex, bucketBaseIndex, offsetInBucket;
    if (lt(value, P0_longLit)) {
      throw new ArrayIndexOutOfBoundsException_1('Histogram recorded value cannot be negative.');
    }
    bucketIndex = this$static.leadingZeroCountBase - numberOfLeadingZeros_1(or(value, this$static.subBucketMask));
    subBucketIndex = toInt(shru(value, bucketIndex + this$static.unitMagnitude));
    return bucketBaseIndex = bucketIndex + 1 << this$static.subBucketHalfCountMagnitude , offsetInBucket = subBucketIndex - this$static.subBucketHalfCount , bucketBaseIndex + offsetInBucket;
  }

  function $encodeIntoByteBuffer(this$static, buffer){
    var bytesWritten, initialPosition, maxValue, relevantLength;
    maxValue = eq(this$static.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(this$static, this$static.maxValue);
    relevantLength = $countsArrayIndex(this$static, maxValue) + 1;
    if (buffer.capacity_0 < relevantLength * this$static.wordSizeInBytes + 40) {
      throw new ArrayIndexOutOfBoundsException_1('buffer does not have capacity for' + (relevantLength * this$static.wordSizeInBytes + 40) + ' bytes');
    }
    initialPosition = buffer.position_0;
    $putInt(buffer, 478450433 + (this$static.wordSizeInBytes << 4));
    $putInt(buffer, relevantLength * this$static.wordSizeInBytes);
    $putInt(buffer, this$static.getNormalizingIndexOffset());
    $putInt(buffer, this$static.numberOfSignificantValueDigits);
    $putLong_0(buffer, this$static.lowestDiscernibleValue);
    $putLong_0(buffer, this$static.highestTrackableValue);
    $putDouble(buffer, this$static.integerToDoubleValueConversionRatio);
    this$static.fillBufferFromCountsArray(buffer, relevantLength);
    bytesWritten = relevantLength * this$static.wordSizeInBytes + 40;
    $position(buffer, initialPosition + bytesWritten);
    return bytesWritten;
  }

  function $encodeIntoCompressedByteBuffer(this$static, targetBuffer, compressionLevel){
    var bytesWritten, compressedDataLength, compressedTargetOffset, compressor, initialTargetPosition, targetArray, uncompressedLength;
    !this$static.intermediateUncompressedByteBuffer && (this$static.intermediateUncompressedByteBuffer = allocate($getNeededByteBufferCapacity_0(this$static, this$static.countsArrayLength)));
    $clear(this$static.intermediateUncompressedByteBuffer);
    uncompressedLength = $encodeIntoByteBuffer(this$static, this$static.intermediateUncompressedByteBuffer);
    initialTargetPosition = targetBuffer.position_0;
    $putInt(targetBuffer, 478450434 + (this$static.wordSizeInBytes << 4));
    $putInt(targetBuffer, 0);
    compressor = new Deflater_0(compressionLevel);
    $setInput(compressor, this$static.intermediateUncompressedByteBuffer.backingArray, uncompressedLength);
    compressor.state |= 12;
    targetArray = targetBuffer.backingArray;
    compressedTargetOffset = initialTargetPosition + 8;
    compressedDataLength = $deflate(compressor, targetArray, compressedTargetOffset, targetArray.length - compressedTargetOffset);
    compressor.engine = null;
    compressor.pending = null;
    compressor.state = 127;
    $putInt_0(targetBuffer, initialTargetPosition + 4, compressedDataLength);
    bytesWritten = compressedDataLength + 8;
    $position(targetBuffer, initialTargetPosition + bytesWritten);
    return bytesWritten;
  }

  function $establishInternalTackingValues(this$static){
    var countAtIndex, index, maxIndex, minNonZeroIndex, observedTotalCount;
    this$static.maxValue = P0_longLit;
    this$static.minNonZeroValue = P7fffffffffffffff_longLit;
    maxIndex = -1;
    minNonZeroIndex = -1;
    observedTotalCount = P0_longLit;
    for (index = 0; index < this$static.countsArrayLength; ++index) {
      if (gt(countAtIndex = this$static.getCountAtIndex(index), P0_longLit)) {
        observedTotalCount = add(observedTotalCount, countAtIndex);
        maxIndex = index;
        minNonZeroIndex == -1 && index != 0 && (minNonZeroIndex = index);
      }
    }
    maxIndex >= 0 && $updatedMaxValue(this$static, $highestEquivalentValue(this$static, $valueFromIndex(this$static, maxIndex)));
    minNonZeroIndex >= 0 && $updateMinNonZeroValue(this$static, $valueFromIndex(this$static, minNonZeroIndex));
    this$static.setTotalCount(observedTotalCount);
  }

  function $establishSize(this$static, highestTrackableValue){
    if (lt(highestTrackableValue, mul(P2_longLit, this$static.lowestDiscernibleValue))) {
      throw new IllegalArgumentException_1('highestTrackableValue (' + toString_2(highestTrackableValue) + ') cannot be < (2 * lowestDiscernibleValue)');
    }
    this$static.bucketCount = $getBucketsNeededToCoverValue(this$static, highestTrackableValue);
    this$static.countsArrayLength = $getLengthForNumberOfBuckets(this$static, this$static.bucketCount);
  }

  function $fillCountsArrayFromSourceBuffer(this$static, sourceBuffer, lengthInWords, wordSizeInBytes){
    var i_0, source;
    switch (wordSizeInBytes) {
      case 2:
      {
        source = new ShortToByteBufferAdapter_0($slice(sourceBuffer));
        for (i_0 = 0; i_0 < lengthInWords; ++i_0) {
          this$static.setCountAtNormalizedIndex(i_0, fromInt($get_5(source)));
        }
        break;
      }

      case 4:
      {
        source = new IntToByteBufferAdapter_0($slice(sourceBuffer));
        for (i_0 = 0; i_0 < lengthInWords; ++i_0) {
          this$static.setCountAtNormalizedIndex(i_0, fromInt($get_0(source)));
        }
        break;
      }

      case 8:
      {
        source = new LongToByteBufferAdapter_0($slice(sourceBuffer));
        for (i_0 = 0; i_0 < lengthInWords; ++i_0) {
          this$static.setCountAtNormalizedIndex(i_0, $get_3(source));
        }
        break;
      }

      default:throw new IllegalArgumentException_1('word size must be 2, 4, or 8 bytes');
    }
  }

  function $getBucketsNeededToCoverValue(this$static, value){
    var bucketsNeeded, smallestUntrackableValue;
    smallestUntrackableValue = shl(fromInt(this$static.subBucketCount), this$static.unitMagnitude);
    bucketsNeeded = 1;
    while (!gt(smallestUntrackableValue, value)) {
      if (gt(smallestUntrackableValue, P3fffffffffffffff_longLit)) {
        return bucketsNeeded + 1;
      }
      smallestUntrackableValue = shl(smallestUntrackableValue, 1);
      ++bucketsNeeded;
    }
    return bucketsNeeded;
  }

  function $getCountAtValue(this$static, value){
    var index;
    index = min(max_0(0, $countsArrayIndex(this$static, value)), this$static.countsArrayLength - 1);
    return this$static.getCountAtIndex(index);
  }

  function $getCountBetweenValues(this$static, lowValue, highValue){
    var count, highIndex, i_0, lowIndex;
    lowIndex = max_0(0, $countsArrayIndex(this$static, lowValue));
    highIndex = min($countsArrayIndex(this$static, highValue), this$static.countsArrayLength - 1);
    count = P0_longLit;
    for (i_0 = lowIndex; i_0 <= highIndex; ++i_0) {
      count = add(count, this$static.getCountAtIndex(i_0));
    }
    return count;
  }

  function $getLengthForNumberOfBuckets(this$static, numberOfBuckets){
    var lengthNeeded;
    lengthNeeded = (numberOfBuckets + 1) * ~~(this$static.subBucketCount / 2);
    return lengthNeeded;
  }

  function $getMaxValue(this$static){
    return eq(this$static.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(this$static, this$static.maxValue);
  }

  function $getMean(this$static){
    var iterationValue, totalValue;
    $reset_12(this$static.recordedValuesIterator);
    totalValue = 0;
    while ($hasNext_0(this$static.recordedValuesIterator)) {
      iterationValue = $next_1(this$static.recordedValuesIterator);
      totalValue += toDouble(mul($medianEquivalentValue(this$static, iterationValue.valueIteratedTo), iterationValue.countAtValueIteratedTo));
    }
    return totalValue / toDouble(this$static.getTotalCount_0());
  }

  function $getMinNonZeroValue(this$static){
    return eq(this$static.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(this$static, this$static.minNonZeroValue);
  }

  function $getMinValue(this$static){
    if (gt(this$static.getCountAtIndex(0), P0_longLit)) {
      return P0_longLit;
    }
    return eq(this$static.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(this$static, this$static.minNonZeroValue);
  }

  function $getNeededByteBufferCapacity(this$static){
    return $getNeededPayloadByteBufferCapacity(this$static, this$static.countsArrayLength) + 40;
  }

  function $getNeededByteBufferCapacity_0(this$static, relevantLength){
    return relevantLength * this$static.wordSizeInBytes + 40;
  }

  function $getNeededPayloadByteBufferCapacity(this$static, relevantLength){
    return relevantLength * this$static.wordSizeInBytes;
  }

  function $getPercentileAtOrBelowValue(this$static, value){
    var i_0, targetIndex, totalToCurrentIndex;
    targetIndex = min($countsArrayIndex(this$static, value), this$static.countsArrayLength - 1);
    totalToCurrentIndex = P0_longLit;
    for (i_0 = 0; i_0 <= targetIndex; ++i_0) {
      totalToCurrentIndex = add(totalToCurrentIndex, this$static.getCountAtIndex(i_0));
    }
    return 100 * toDouble(totalToCurrentIndex) / toDouble(this$static.getTotalCount_0());
  }

  function $getStdDeviation(this$static){
    var deviation, geometric_deviation_total, iterationValue, mean, std_deviation;
    mean = $getMean(this$static);
    geometric_deviation_total = 0;
    $reset_12(this$static.recordedValuesIterator);
    while ($hasNext_0(this$static.recordedValuesIterator)) {
      iterationValue = $next_1(this$static.recordedValuesIterator);
      deviation = ($clinit_Double() , new Double_0(toDouble($medianEquivalentValue(this$static, iterationValue.valueIteratedTo)) - mean));
      geometric_deviation_total += deviation.value * deviation.value * toDouble(iterationValue.countAddedInThisIterationStep);
    }
    std_deviation = sqrt(geometric_deviation_total / toDouble(this$static.getTotalCount_0()));
    return std_deviation;
  }

  function $getValueAtPercentile(this$static, percentile){
    var countAtPercentile, i_0, requestedPercentile, totalToCurrentIndex, valueAtIndex;
    requestedPercentile = percentile < 100?percentile:100;
    countAtPercentile = fromDouble(requestedPercentile / 100 * toDouble(this$static.getTotalCount_0()) + 0.5);
    countAtPercentile = gt(countAtPercentile, P1_longLit)?countAtPercentile:P1_longLit;
    totalToCurrentIndex = P0_longLit;
    for (i_0 = 0; i_0 < this$static.countsArrayLength; ++i_0) {
      totalToCurrentIndex = add(totalToCurrentIndex, this$static.getCountAtIndex(i_0));
      if (gte_0(totalToCurrentIndex, countAtPercentile)) {
        valueAtIndex = $valueFromIndex(this$static, i_0);
        return percentile == 0?$lowestEquivalentValue(this$static, valueAtIndex):sub(add($lowestEquivalentValue(this$static, valueAtIndex), $sizeOfEquivalentValueRange(this$static, valueAtIndex)), P1_longLit);
      }
    }
    return P0_longLit;
  }

  function $handleRecordException(this$static, count, value, ex){
    var countsIndex;
    if (!this$static.autoResize) {
      throw new ArrayIndexOutOfBoundsException_1('value outside of histogram covered range. Caused by: ' + ex);
    }
    this$static.resize(value);
    countsIndex = $countsArrayIndex(this$static, value);
    this$static.addToCountAtIndex(countsIndex, count);
    this$static.highestTrackableValue = sub($nextNonEquivalentValue(this$static, $valueFromIndex(this$static, this$static.countsArrayLength - 1)), P1_longLit);
  }

  function $highestEquivalentValue(this$static, value){
    return sub(add($lowestEquivalentValue(this$static, value), $sizeOfEquivalentValueRange(this$static, value)), P1_longLit);
  }



  function $lowestEquivalentValue(this$static, value){
    var bucketIndex, subBucketIndex, thisValueBaseLevel;
    bucketIndex = this$static.leadingZeroCountBase - numberOfLeadingZeros_1(or(value, this$static.subBucketMask));
    subBucketIndex = toInt(shru(value, bucketIndex + this$static.unitMagnitude));
    thisValueBaseLevel = shl(fromInt(subBucketIndex), bucketIndex + this$static.unitMagnitude);
    return thisValueBaseLevel;
  }

  function $medianEquivalentValue(this$static, value){
    return add($lowestEquivalentValue(this$static, value), shr($sizeOfEquivalentValueRange(this$static, value), 1));
  }

  function $nextNonEquivalentValue(this$static, value){
    return add($lowestEquivalentValue(this$static, value), $sizeOfEquivalentValueRange(this$static, value));
  }

  function $nonConcurrentNormalizingIndexShift(this$static, shiftAmount, lowestHalfBucketPopulated){
    var zeroValueCount;
    zeroValueCount = this$static.getCountAtIndex(0);
    this$static.setCountAtIndex(0, P0_longLit);
    this$static.setNormalizingIndexOffset(this$static.getNormalizingIndexOffset() + shiftAmount);
    lowestHalfBucketPopulated && $shiftLowestHalfBucketContentsLeft(this$static, shiftAmount);
    this$static.setCountAtIndex(0, zeroValueCount);
  }

  function $normalizeIndex(this$static, index, normalizingIndexOffset){
    var normilizedIndex;
    if (normalizingIndexOffset == 0) {
      return index;
    }
    $checkBounds(this$static, index);
    normilizedIndex = index - normalizingIndexOffset;
    normilizedIndex < 0?(normilizedIndex += this$static.countsArrayLength):normilizedIndex >= this$static.countsArrayLength && (normilizedIndex -= this$static.countsArrayLength);
    return normilizedIndex;
  }

  function $outputPercentileDistribution(this$static, percentileTicksPerHalfDistance, outputValueUnitScalingRatio, useCsvFormat){
    var iterationValue, iterator, mean, std_deviation, args;
    useCsvFormat?$format('"Value","Percentile","TotalCount","1/(1-Percentile)"\n', initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, [])):(args = initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, ['Value', 'Percentile', 'TotalCount', '1/(1-Percentile)']) , $format('%12s %14s %10s %14s\n\n', args) , undefined);
    iterator = this$static.percentileIterator;
    $reset_11(iterator, iterator.histogram, percentileTicksPerHalfDistance);
    while ($hasNext_3(iterator)) {
      iterationValue = $next_1(iterator);
      iterationValue.percentileLevelIteratedTo != 100?null.nullMethod($clinit_Locale(), ($clinit_Double() , new Double_0(toDouble(iterationValue.valueIteratedTo) / outputValueUnitScalingRatio.value)), new Double_0(iterationValue.percentileLevelIteratedTo / 100), valueOf_0(iterationValue.totalCountToThisValue), new Double_0(1 / (1 - iterationValue.percentileLevelIteratedTo / 100))):null.nullMethod($clinit_Locale(), ($clinit_Double() , new Double_0(toDouble(iterationValue.valueIteratedTo) / outputValueUnitScalingRatio.value)), new Double_0(iterationValue.percentileLevelIteratedTo / 100), valueOf_0(iterationValue.totalCountToThisValue));
    }
    if (!useCsvFormat) {
      mean = $getMean(this$static) / outputValueUnitScalingRatio.value;
      std_deviation = $getStdDeviation(this$static) / outputValueUnitScalingRatio.value;
      null.nullMethod($clinit_Locale(), ($clinit_Double() , new Double_0(mean)), new Double_0(std_deviation));
      null.nullMethod($clinit_Locale(), new Double_0(toDouble(eq(this$static.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(this$static, this$static.maxValue)) / outputValueUnitScalingRatio.value), valueOf_0(this$static.getTotalCount_0()));
      null.nullMethod($clinit_Locale(), valueOf(this$static.bucketCount), valueOf(this$static.subBucketCount));
    }
  }

  function $recordCountAtValue(this$static, count, value){
    var countsIndex, ex;
    countsIndex = $countsArrayIndex(this$static, value);
    try {
      this$static.addToCountAtIndex(countsIndex, count);
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$ArrayIndexOutOfBoundsException)) {
        ex = $e0;
        $handleRecordException(this$static, count, value, ex);
      }
      else if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
        ex = $e0;
        $handleRecordException(this$static, count, value, ex);
      }
      else
        throw $e0;
    }
    gt(value, this$static.maxValue) && $updatedMaxValue(this$static, value);
    lt(value, this$static.minNonZeroValue) && neq(value, P0_longLit) && $updateMinNonZeroValue(this$static, value);
    this$static.addToTotalCount(count);
  }

  function $recordSingleValue(this$static, value){
    var countsIndex, ex;
    countsIndex = $countsArrayIndex(this$static, value);
    try {
      this$static.incrementCountAtIndex(countsIndex);
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$ArrayIndexOutOfBoundsException)) {
        ex = $e0;
        $handleRecordException(this$static, P1_longLit, value, ex);
      }
      else if (instanceOf($e0, Q$IndexOutOfBoundsException)) {
        ex = $e0;
        $handleRecordException(this$static, P1_longLit, value, ex);
      }
      else
        throw $e0;
    }
    gt(value, this$static.maxValue) && $updatedMaxValue(this$static, value);
    lt(value, this$static.minNonZeroValue) && neq(value, P0_longLit) && $updateMinNonZeroValue(this$static, value);
    this$static.incrementTotalCount();
  }

  function $recordSingleValueWithExpectedInterval(this$static, value, expectedIntervalBetweenValueSamples){
    var missingValue;
    $recordSingleValue(this$static, value);
    if (lte(expectedIntervalBetweenValueSamples, P0_longLit))
      return;
    for (missingValue = sub(value, expectedIntervalBetweenValueSamples); gte_0(missingValue, expectedIntervalBetweenValueSamples); missingValue = sub(missingValue, expectedIntervalBetweenValueSamples)) {
      $recordSingleValue(this$static, missingValue);
    }
  }

  function $recordValueWithCount(this$static, value, count){
    $recordCountAtValue(this$static, count, value);
  }

  function $recordValueWithCountAndExpectedInterval(this$static, value, count, expectedIntervalBetweenValueSamples){
    var missingValue;
    $recordCountAtValue(this$static, count, value);
    if (lte(expectedIntervalBetweenValueSamples, P0_longLit))
      return;
    for (missingValue = sub(value, expectedIntervalBetweenValueSamples); gte_0(missingValue, expectedIntervalBetweenValueSamples); missingValue = sub(missingValue, expectedIntervalBetweenValueSamples)) {
      $recordCountAtValue(this$static, count, missingValue);
    }
  }

  function $reset_3(this$static){
    this$static.clearCounts();
    this$static.maxValue = P0_longLit;
    this$static.minNonZeroValue = P7fffffffffffffff_longLit;
    this$static.setNormalizingIndexOffset(0);
  }

  function $setEndTimeStamp(this$static, timeStampMsec){
    this$static.endTimeStampMsec = timeStampMsec;
  }

  function $setStartTimeStamp(this$static, timeStampMsec){
    this$static.startTimeStampMsec = timeStampMsec;
  }

  function $shiftLowestHalfBucketContentsLeft(this$static, shiftAmount){
    var countAtFromIndex, fromIndex, numberOfBinaryOrdersOfMagnitude, toIndex, toValue;
    numberOfBinaryOrdersOfMagnitude = shiftAmount >> this$static.subBucketHalfCountMagnitude;
    for (fromIndex = 1; fromIndex < this$static.subBucketHalfCount; ++fromIndex) {
      toValue = shl($valueFromIndex(this$static, fromIndex), numberOfBinaryOrdersOfMagnitude);
      toIndex = $countsArrayIndex(this$static, toValue);
      countAtFromIndex = this$static.getCountAtNormalizedIndex(fromIndex);
      this$static.setCountAtIndex(toIndex, countAtFromIndex);
      this$static.setCountAtNormalizedIndex(fromIndex, P0_longLit);
    }
  }

  function $shiftValuesLeft(this$static, numberOfBinaryOrdersOfMagnitude){
    var lowestHalfBucketPopulated, maxValueBeforeShift, maxValueIndex, minNonZeroValueBeforeShift, shiftAmount;
    if (numberOfBinaryOrdersOfMagnitude < 0) {
      throw new IllegalArgumentException_1('Cannot shift by a negative number of magnitudes');
    }
    if (numberOfBinaryOrdersOfMagnitude == 0) {
      return;
    }
    if (eq(this$static.getTotalCount_0(), this$static.getCountAtIndex(0))) {
      return;
    }
    shiftAmount = numberOfBinaryOrdersOfMagnitude << this$static.subBucketHalfCountMagnitude;
    maxValueIndex = $countsArrayIndex(this$static, eq(this$static.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(this$static, this$static.maxValue));
    if (maxValueIndex >= this$static.countsArrayLength - shiftAmount) {
      throw new ArrayIndexOutOfBoundsException_1('Operation would overflow, would discard recorded value counts');
    }
    maxValueBeforeShift = $getAndSet(this$static.maxValueUpdater, P0_longLit);
    minNonZeroValueBeforeShift = $getAndSet(this$static.minNonZeroValueUpdater, P7fffffffffffffff_longLit);
    lowestHalfBucketPopulated = lt(minNonZeroValueBeforeShift, fromInt(this$static.subBucketHalfCount));
    this$static.shiftNormalizingIndexByOffset(shiftAmount, lowestHalfBucketPopulated);
    gt(shl(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude), this$static.maxValue) && $updatedMaxValue(this$static, shl(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude));
    lt(shl(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude), this$static.minNonZeroValue) && neq(shl(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude), P0_longLit) && $updateMinNonZeroValue(this$static, shl(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude));
    lt(minNonZeroValueBeforeShift, P7fffffffffffffff_longLit) && (gt(shl(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude), this$static.maxValue) && $updatedMaxValue(this$static, shl(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude)) , lt(shl(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude), this$static.minNonZeroValue) && neq(shl(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude), P0_longLit) && $updateMinNonZeroValue(this$static, shl(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude)));
  }

  function $shiftValuesRight(this$static, numberOfBinaryOrdersOfMagnitude){
    var maxValueBeforeShift, minNonZeroValueBeforeShift, minNonZeroValueIndex, shiftAmount;
    if (numberOfBinaryOrdersOfMagnitude < 0) {
      throw new IllegalArgumentException_1('Cannot shift by a negative number of magnitudes');
    }
    if (numberOfBinaryOrdersOfMagnitude == 0) {
      return;
    }
    if (eq(this$static.getTotalCount_0(), this$static.getCountAtIndex(0))) {
      return;
    }
    shiftAmount = this$static.subBucketHalfCount * numberOfBinaryOrdersOfMagnitude;
    minNonZeroValueIndex = $countsArrayIndex(this$static, eq(this$static.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(this$static, this$static.minNonZeroValue));
    if (minNonZeroValueIndex < shiftAmount + this$static.subBucketHalfCount) {
      throw new ArrayIndexOutOfBoundsException_1('Operation would underflow and lose precision of already recorded value counts');
    }
    maxValueBeforeShift = $getAndSet(this$static.maxValueUpdater, P0_longLit);
    minNonZeroValueBeforeShift = $getAndSet(this$static.minNonZeroValueUpdater, P7fffffffffffffff_longLit);
    this$static.shiftNormalizingIndexByOffset(-shiftAmount, false);
    gt(shr(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude), this$static.maxValue) && $updatedMaxValue(this$static, shr(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude));
    lt(shr(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude), this$static.minNonZeroValue) && neq(shr(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude), P0_longLit) && $updateMinNonZeroValue(this$static, shr(maxValueBeforeShift, numberOfBinaryOrdersOfMagnitude));
    lt(minNonZeroValueBeforeShift, P7fffffffffffffff_longLit) && (gt(shr(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude), this$static.maxValue) && $updatedMaxValue(this$static, shr(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude)) , lt(shr(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude), this$static.minNonZeroValue) && neq(shr(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude), P0_longLit) && $updateMinNonZeroValue(this$static, shr(minNonZeroValueBeforeShift, numberOfBinaryOrdersOfMagnitude)));
  }

  function $sizeOfEquivalentValueRange(this$static, value){
    var bucketIndex, distanceToNextValue, subBucketIndex;
    bucketIndex = this$static.leadingZeroCountBase - numberOfLeadingZeros_1(or(value, this$static.subBucketMask));
    subBucketIndex = toInt(shru(value, bucketIndex + this$static.unitMagnitude));
    distanceToNextValue = shl(P1_longLit, this$static.unitMagnitude + (subBucketIndex >= this$static.subBucketCount?bucketIndex + 1:bucketIndex));
    return distanceToNextValue;
  }

  function $updateMinNonZeroValue(this$static, value){
    while (lt(value, this$static.minNonZeroValue)) {
      $compareAndSet(this$static.minNonZeroValueUpdater, this$static.minNonZeroValue, value);
    }
  }

  function $updatedMaxValue(this$static, value){
    while (gt(value, this$static.maxValue)) {
      $compareAndSet(this$static.maxValueUpdater, this$static.maxValue, value);
    }
  }

  function $valueFromIndex(this$static, index){
    var bucketIndex, subBucketIndex;
    bucketIndex = (index >> this$static.subBucketHalfCountMagnitude) - 1;
    subBucketIndex = (index & this$static.subBucketHalfCount - 1) + this$static.subBucketHalfCount;
    if (bucketIndex < 0) {
      subBucketIndex -= this$static.subBucketHalfCount;
      bucketIndex = 0;
    }
    return shl(fromInt(subBucketIndex), bucketIndex + this$static.unitMagnitude);
  }

  function $valuesAreEquivalent(this$static, value1, value2){
    return eq($lowestEquivalentValue(this$static, value1), $lowestEquivalentValue(this$static, value2));
  }

  function AbstractHistogram_0(lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits){
    var $t0, largestValueWithSingleUnitResolution, subBucketCountMagnitude;
    $clinit_AbstractHistogramBase();
    this.maxValueUpdater = new AbstractHistogram$1_0(this);
    this.minNonZeroValueUpdater = new AbstractHistogram$2_0(this);
    if (lt(lowestDiscernibleValue, P1_longLit)) {
      throw new IllegalArgumentException_1('lowestDiscernibleValue must be >= 1');
    }
    if (lt(highestTrackableValue, mul(P2_longLit, lowestDiscernibleValue))) {
      throw new IllegalArgumentException_1('highestTrackableValue must be >= 2 * lowestDiscernibleValue');
    }
    if (numberOfSignificantValueDigits < 0 || numberOfSignificantValueDigits > 5) {
      throw new IllegalArgumentException_1('numberOfSignificantValueDigits must be between 0 and 5');
    }
    $t0 = constructionIdentityCount;
    $t0.value = add($t0.value, P1_longLit);
    this.lowestDiscernibleValue = lowestDiscernibleValue;
    this.highestTrackableValue = highestTrackableValue;
    this.numberOfSignificantValueDigits = numberOfSignificantValueDigits;
    this.integerToDoubleValueConversionRatio = 1;
    largestValueWithSingleUnitResolution = mul(P2_longLit, fromDouble(Math.pow(10, numberOfSignificantValueDigits)));
    this.unitMagnitude = round_int(floor(log(toDouble(lowestDiscernibleValue)) / Math.log(2)));
    subBucketCountMagnitude = round_int(ceil(log(toDouble(largestValueWithSingleUnitResolution)) / Math.log(2)));
    this.subBucketHalfCountMagnitude = (subBucketCountMagnitude > 1?subBucketCountMagnitude:1) - 1;
    this.subBucketCount = round_int(pow(2, this.subBucketHalfCountMagnitude + 1));
    this.subBucketHalfCount = ~~(this.subBucketCount / 2);
    this.subBucketMask = shl(sub(fromInt(this.subBucketCount), P1_longLit), this.unitMagnitude);
    $establishSize(this, highestTrackableValue);
    this.leadingZeroCountBase = 64 - this.unitMagnitude - this.subBucketHalfCountMagnitude - 1;
    this.percentileIterator = new PercentileIterator_0(this, 1);
    this.recordedValuesIterator = new RecordedValuesIterator_0(this);
  }

  function AbstractHistogram_1(source){
    AbstractHistogram_0.call(this, source.lowestDiscernibleValue, source.highestTrackableValue, source.numberOfSignificantValueDigits);
    $setStartTimeStamp(this, source.startTimeStampMsec);
    $setEndTimeStamp(this, source.endTimeStampMsec);
    this.autoResize = source.autoResize;
  }

  function decodeFromByteBuffer(buffer, histogramClass, minBarForHighestTrackableValue){
    $clinit_AbstractHistogram();
    var ex;
    try {
      return decodeFromByteBuffer_0(buffer, histogramClass, minBarForHighestTrackableValue, null);
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$DataFormatException)) {
        ex = $e0;
        throw new RuntimeException_1(ex);
      }
      else
        throw $e0;
    }
  }

  function decodeFromByteBuffer_0(buffer, histogramClass, minBarForHighestTrackableValue, decompressor){
    var constructor_0, cookie, decompressedByteCount, ex, expectedCapacity, highestTrackableValue, histogram, integerToDoubleValueConversionRatio, lowestTrackableUnitValue, normalizingIndexOffset, numberOfSignificantValueDigits, payLoadSourceBuffer, payloadLength;
    cookie = $getInt(buffer);
    if ((cookie & -241) == 478450433) {
      payloadLength = $getInt(buffer);
      normalizingIndexOffset = $getInt(buffer);
      numberOfSignificantValueDigits = $getInt(buffer);
      lowestTrackableUnitValue = $getLong(buffer);
      highestTrackableValue = $getLong(buffer);
      integerToDoubleValueConversionRatio = ($clinit_Double() , new Double_0(($clinit_Numbers() , longBitsToDouble($getLong(buffer)))));
    }
    else if ((cookie & -241) == 478450440) {
      numberOfSignificantValueDigits = $getInt(buffer);
      lowestTrackableUnitValue = $getLong(buffer);
      highestTrackableValue = $getLong(buffer);
      $getLong(buffer);
      payloadLength = 2147483647;
      integerToDoubleValueConversionRatio = ($clinit_Double() , new Double_0(1));
      normalizingIndexOffset = 0;
    }
    else {
      throw new IllegalArgumentException_1('The buffer does not contain a Histogram ' + cookie);
    }
    highestTrackableValue = gt(highestTrackableValue, minBarForHighestTrackableValue)?highestTrackableValue:minBarForHighestTrackableValue;
    try {
      if (histogramClass == Lorg_HdrHistogram_IntCountsHistogram_2_classLit) {
        histogram = new IntCountsHistogram_3(lowestTrackableUnitValue, highestTrackableValue, numberOfSignificantValueDigits);
      }
      else {
        constructor_0 = $getConstructor(getMembers(histogramClass), constructorArgsTypes);
        histogram = $newInstance(constructor_0, initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, [valueOf_0(lowestTrackableUnitValue), valueOf_0(highestTrackableValue), valueOf(numberOfSignificantValueDigits)]));
      }
      $setIntegerToDoubleValueConversionRatio(histogram, integerToDoubleValueConversionRatio.value);
      histogram.setNormalizingIndexOffset(normalizingIndexOffset);
      if (cookie != 478450433 + (histogram.wordSizeInBytes << 4) && cookie != 478450440 + (histogram.wordSizeInBytes << 4)) {
        throw new IllegalArgumentException_1("The buffer's encoded value byte size (" + ((cookie & 240) >> 4) + ") does not match the Histogram's (" + histogram.wordSizeInBytes + ')');
      }
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$NoSuchMethodException)) {
        ex = $e0;
        throw new IllegalArgumentException_2(ex);
      }
      else
        throw $e0;
    }
    expectedCapacity = min($getNeededPayloadByteBufferCapacity(histogram, histogram.countsArrayLength), payloadLength);
    if (!decompressor) {
      if (expectedCapacity > buffer.limit - buffer.position_0) {
        throw new IllegalArgumentException_1('The buffer does not contain the full Histogram payload');
      }
      payLoadSourceBuffer = buffer;
    }
    else {
      payLoadSourceBuffer = allocate(expectedCapacity);
      decompressedByteCount = $inflate(decompressor, payLoadSourceBuffer.backingArray);
      if (payloadLength < 2147483647 && decompressedByteCount < payloadLength) {
        throw new IllegalArgumentException_1('The buffer does not contain the indicated payload amount');
      }
    }
    $fillCountsArrayFromSourceBuffer(histogram, payLoadSourceBuffer, ~~(expectedCapacity / ((cookie & 240) >> 4)), (cookie & 240) >> 4);
    $establishInternalTackingValues(histogram);
    return histogram;
  }

  function decodeFromCompressedByteBuffer(buffer, histogramClass, minBarForHighestTrackableValue){
    $clinit_AbstractHistogram();
    var cookie, decompressor, headerBuffer, headerSize, histogram, initialTargetPosition, lengthOfCompressedContents;
    initialTargetPosition = buffer.position_0;
    cookie = $getInt(buffer);
    if ((cookie & -241) == 478450434) {
      headerSize = 40;
    }
    else if ((cookie & -241) == 478450441) {
      headerSize = 32;
    }
    else {
      throw new IllegalArgumentException_1('The buffer does not contain a compressed Histogram ' + cookie);
    }
    lengthOfCompressedContents = $getInt(buffer);
    decompressor = new Inflater_0;
    $setInput_1(decompressor, buffer.backingArray, initialTargetPosition + 8, lengthOfCompressedContents);
    headerBuffer = allocate(headerSize);
    $inflate(decompressor, headerBuffer.backingArray);
    histogram = decodeFromByteBuffer_0(headerBuffer, histogramClass, minBarForHighestTrackableValue, decompressor);
    return histogram;
  }

  defineSeed(132, 133, makeCastMap([Q$Serializable, Q$AbstractHistogram, Q$AbstractHistogramBase, Q$Exportable]));
  _.add_1 = function add_3(otherHistogram){
    $add_1(this, otherHistogram);
  }
  ;
  _.allValues_0 = function allValues(){
    return new AbstractHistogram$AllValues_0;
  }
  ;
  _.copyInto_0 = function copyInto(targetHistogram){
    $copyInto(this, targetHistogram);
  }
  ;
  _.encodeIntoByteBuffer_0 = function encodeIntoByteBuffer(buffer){
    return $encodeIntoByteBuffer(this, buffer);
  }
  ;
  _.encodeIntoCompressedByteBuffer_0 = function encodeIntoCompressedByteBuffer(targetBuffer){
    return $encodeIntoCompressedByteBuffer(this, targetBuffer, -1);
  }
  ;
  _.encodeIntoCompressedByteBuffer_1 = function encodeIntoCompressedByteBuffer_0(targetBuffer, compressionLevel){
    return $encodeIntoCompressedByteBuffer(this, targetBuffer, compressionLevel);
  }
  ;
  _.equals$ = function equals_17(other){
    var i_0, that;
    if (this === other) {
      return true;
    }
    if (!instanceOf(other, Q$AbstractHistogram)) {
      return false;
    }
    that = other;
    if (neq(this.lowestDiscernibleValue, that.lowestDiscernibleValue) || neq(this.highestTrackableValue, that.highestTrackableValue) || this.numberOfSignificantValueDigits != that.numberOfSignificantValueDigits || this.integerToDoubleValueConversionRatio != that.integerToDoubleValueConversionRatio) {
      return false;
    }
    if (this.countsArrayLength != that.countsArrayLength) {
      return false;
    }
    if (neq(this.getTotalCount_0(), that.getTotalCount_0())) {
      return false;
    }
    for (i_0 = 0; i_0 < this.countsArrayLength; ++i_0) {
      if (neq(this.getCountAtIndex(i_0), that.getCountAtIndex(i_0))) {
        return false;
      }
    }
    return true;
  }
  ;
  _.getEstimatedFootprintInBytes_0 = function getEstimatedFootprintInBytes(){
    return this._getEstimatedFootprintInBytes();
  }
  ;
  _.getMaxValueAsDouble_0 = function getMaxValueAsDouble(){
    return toDouble(eq(this.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(this, this.maxValue));
  }
  ;
  _.getMean_0 = function getMean(){
    return $getMean(this);
  }
  ;
  _.getNeededByteBufferCapacity_0 = function getNeededByteBufferCapacity(){
    return $getNeededByteBufferCapacity(this);
  }
  ;
  _.getNumberOfSignificantValueDigits_0 = function getNumberOfSignificantValueDigits(){
    return this.numberOfSignificantValueDigits;
  }
  ;
  _.getStdDeviation_0 = function getStdDeviation(){
    return $getStdDeviation(this);
  }
  ;
  _.getWordSizeInBytes_0 = function getWordSizeInBytes_0(){
    return this.wordSizeInBytes;
  }
  ;
  _.isAutoResize_0 = function isAutoResize(){
    return this.autoResize;
  }
  ;
  _.outputPercentileDistribution_0 = function outputPercentileDistribution(printStream, percentileTicksPerHalfDistance, outputValueUnitScalingRatio){
    $outputPercentileDistribution(this, percentileTicksPerHalfDistance, outputValueUnitScalingRatio, false);
  }
  ;
  _.outputPercentileDistribution_1 = function outputPercentileDistribution_0(printStream, percentileTicksPerHalfDistance, outputValueUnitScalingRatio, useCsvFormat){
    $outputPercentileDistribution(this, percentileTicksPerHalfDistance, outputValueUnitScalingRatio, useCsvFormat);
  }
  ;
  _.outputPercentileDistribution_2 = function outputPercentileDistribution_1(printStream, outputValueUnitScalingRatio){
    $outputPercentileDistribution(this, 5, outputValueUnitScalingRatio, false);
  }
  ;
  _.percentiles_0 = function percentiles(percentileTicksPerHalfDistance){
    return new AbstractHistogram$Percentiles_0;
  }
  ;
  _.recordedValues_0 = function recordedValues(){
    return new AbstractHistogram$RecordedValues_0(this);
  }
  ;
  _.reset_0 = function reset(){
    $reset_3(this);
  }
  ;
  _.setAutoResize_0 = function setAutoResize(autoResize){
    this.autoResize = autoResize;
  }
  ;
  _.shiftValuesLeft_0 = function shiftValuesLeft(numberOfBinaryOrdersOfMagnitude){
    $shiftValuesLeft(this, numberOfBinaryOrdersOfMagnitude);
  }
  ;
  _.subtract_0 = function subtract(otherHistogram){
    var highestRecordableValue, i_0, observedOtherTotalCount, otherCount, otherValue;
    highestRecordableValue = $valueFromIndex(this, this.countsArrayLength - 1);
    if (lt(highestRecordableValue, eq(otherHistogram.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(otherHistogram, otherHistogram.maxValue))) {
      throw new ArrayIndexOutOfBoundsException_1("The other histogram includes values that do not fit in this histogram's range.");
    }
    if (this.bucketCount == otherHistogram.bucketCount && this.subBucketCount == otherHistogram.subBucketCount && this.unitMagnitude == otherHistogram.unitMagnitude && this.getNormalizingIndexOffset() == otherHistogram.getNormalizingIndexOffset()) {
      observedOtherTotalCount = P0_longLit;
      for (i_0 = 0; i_0 < otherHistogram.countsArrayLength; ++i_0) {
        otherCount = otherHistogram.getCountAtIndex(i_0);
        if (gt(otherCount, P0_longLit)) {
          if (lt(this.getCountAtIndex(i_0), otherCount)) {
            throw new IllegalArgumentException_1('otherHistogram count (' + toString_2(otherCount) + ') at value ' + toString_2($valueFromIndex(this, i_0)) + " is larger than this one's (" + toString_2(this.getCountAtIndex(i_0)) + ')');
          }
          this.addToCountAtIndex(i_0, neg(otherCount));
          observedOtherTotalCount = add(observedOtherTotalCount, otherCount);
        }
      }
      this.setTotalCount(sub(this.getTotalCount_0(), observedOtherTotalCount));
      $updatedMaxValue(this, max_1(eq(this.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(this, this.maxValue), eq(otherHistogram.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(otherHistogram, otherHistogram.maxValue)));
      $updateMinNonZeroValue(this, min_0(eq(this.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(this, this.minNonZeroValue), eq(otherHistogram.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(otherHistogram, otherHistogram.minNonZeroValue)));
    }
    else {
      for (i_0 = 0; i_0 < otherHistogram.countsArrayLength; ++i_0) {
        otherCount = otherHistogram.getCountAtIndex(i_0);
        if (gt(otherCount, P0_longLit)) {
          otherValue = $valueFromIndex(otherHistogram, i_0);
          if (lt($getCountAtValue(this, otherValue), otherCount)) {
            throw new IllegalArgumentException_1('otherHistogram count (' + toString_2(otherCount) + ') at value ' + toString_2(otherValue) + " is larger than this one's (" + toString_2($getCountAtValue(this, otherValue)) + ')');
          }
          $recordCountAtValue(this, neg(otherCount), otherValue);
        }
      }
    }
    (lte($getCountAtValue(this, eq(this.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(this, this.maxValue)), P0_longLit) || lte($getCountAtValue(this, eq(this.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(this, this.minNonZeroValue)), P0_longLit)) && $establishInternalTackingValues(this);
  }
  ;
  _.leadingZeroCountBase = 0;
  _.maxValue = P0_longLit;
  _.minNonZeroValue = P7fffffffffffffff_longLit;
  _.subBucketHalfCount = 0;
  _.subBucketHalfCountMagnitude = 0;
  _.subBucketMask = P0_longLit;
  _.unitMagnitude = 0;
  var constructorArgsTypes;
  function $compareAndSet(this$static, expect, update){
    if (eq(this$static.getValue_0(), expect)) {
      this$static.setValue_0(update);
      return true;
    }
    return false;
  }

  function $getAndIncrement(this$static){
    var old;
    old = this$static.getValue_0();
    this$static.setValue_0(add(old, P1_longLit));
    return old;
  }

  function $getAndSet(this$static, newValue){
    var old;
    old = this$static.getValue_0();
    this$static.setValue_0(newValue);
    return old;
  }

  defineSeed(136, 1, {});
  function AbstractHistogram$1_0(this$0){
    this.this$0 = this$0;
  }

  defineSeed(135, 136, {}, AbstractHistogram$1_0);
  _.getValue_0 = function getValue_2(){
    return this.this$0.maxValue;
  }
  ;
  _.setValue_0 = function setValue_2(x){
    this.this$0.maxValue = x;
  }
  ;
  _.this$0 = null;
  function AbstractHistogram$2_0(this$0){
    this.this$0 = this$0;
  }

  defineSeed(137, 136, {}, AbstractHistogram$2_0);
  _.getValue_0 = function getValue_3(){
    return this.this$0.minNonZeroValue;
  }
  ;
  _.setValue_0 = function setValue_3(x){
    this.this$0.minNonZeroValue = x;
  }
  ;
  _.this$0 = null;
  function AbstractHistogram$AllValues_0(){
  }

  defineSeed(138, 1, {}, AbstractHistogram$AllValues_0);
  function AbstractHistogram$LinearBucketValues_0(){
  }

  defineSeed(139, 1, {}, AbstractHistogram$LinearBucketValues_0);
  function AbstractHistogram$LogarithmicBucketValues_0(){
  }

  defineSeed(140, 1, {}, AbstractHistogram$LogarithmicBucketValues_0);
  function AbstractHistogram$Percentiles_0(){
  }

  defineSeed(141, 1, {}, AbstractHistogram$Percentiles_0);
  function AbstractHistogram$RecordedValues_0(histogram){
    this.histogram = histogram;
  }

  defineSeed(142, 1, {}, AbstractHistogram$RecordedValues_0);
  _.histogram = null;
  function $export(this$static){
    if (!exported) {
      exported = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_AbstractHistogramBase_2_classLit, this$static);
      $export0(this$static);
    }
  }



  function $export0(this$static){
    var pkg = declarePackage('org.HdrHistogram.AbstractHistogramBase');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.AbstractHistogramBase = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.AbstractHistogramBase.prototype = new Object;
    __0.getBucketCount = $entry(function(){
          return this.g.getBucketCount_0();
        }
    );
    __0.getCountsArrayLength = $entry(function(){
          return this.g.getCountsArrayLength_0();
        }
    );
    __0.getSubBucketCount = $entry(function(){
          return this.g.getSubBucketCount_0();
        }
    );
    __0.getWordSizeInBytes = $entry(function(){
          return this.g.getWordSizeInBytes_0();
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.AbstractHistogramBase[p] === undefined && ($wnd.org.HdrHistogram.AbstractHistogramBase[p] = pkg[p]);
  }

  function AbstractHistogramBase_ExporterImpl_0(){
    $export(this);
  }

  defineSeed(143, 1, {}, AbstractHistogramBase_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor(){
    return $wnd.org.HdrHistogram.AbstractHistogramBase;
  }
  ;
  _.isAssignable = function isAssignable(o){
    return o != null && instanceOf(o, Q$AbstractHistogramBase);
  }
  ;
  var exported = false;
  function $hasNext_0(this$static){
    if (neq(this$static.histogram.getTotalCount_0(), this$static.savedHistogramTotalRawCount)) {
      throw new ConcurrentModificationException_0;
    }
    return lt(this$static.totalCountToCurrentIndex, this$static.arrayTotalCount);
  }

  function $next_1(this$static){
    var valueIteratedTo;
    while (this$static.currentIndex < this$static.histogram.countsArrayLength) {
      this$static.countAtThisValue = this$static.histogram.getCountAtIndex(this$static.currentIndex);
      if (this$static.freshSubBucket) {
        this$static.totalCountToCurrentIndex = add(this$static.totalCountToCurrentIndex, this$static.countAtThisValue);
        this$static.freshSubBucket = false;
      }
      if (this$static.reachedIterationLevel()) {
        valueIteratedTo = this$static.getValueIteratedTo_0();
        $set(this$static.currentIterationValue, valueIteratedTo, this$static.prevValueIteratedTo, this$static.countAtThisValue, sub(this$static.totalCountToCurrentIndex, this$static.totalCountToPrevIndex), this$static.totalCountToCurrentIndex, 100 * toDouble(this$static.totalCountToCurrentIndex) / toDouble(this$static.arrayTotalCount), this$static.getPercentileIteratedTo(), this$static.integerToDoubleValueConversionRatio);
        this$static.prevValueIteratedTo = valueIteratedTo;
        this$static.totalCountToPrevIndex = this$static.totalCountToCurrentIndex;
        this$static.incrementIterationLevel();
        if (neq(this$static.histogram.getTotalCount_0(), this$static.savedHistogramTotalRawCount)) {
          throw new ConcurrentModificationException_0;
        }
        return this$static.currentIterationValue;
      }
      this$static.freshSubBucket = true;
      ++this$static.currentIndex;
      this$static.currentValueAtIndex = $valueFromIndex(this$static.histogram, this$static.currentIndex);
      this$static.nextValueAtIndex = $valueFromIndex(this$static.histogram, this$static.currentIndex + 1);
    }
    throw new ArrayIndexOutOfBoundsException_0;
  }

  function $remove(){
    throw new UnsupportedOperationException_0;
  }

  function $resetIterator(this$static, histogram){
    this$static.histogram = histogram;
    this$static.savedHistogramTotalRawCount = histogram.getTotalCount_0();
    this$static.arrayTotalCount = histogram.getTotalCount_0();
    this$static.integerToDoubleValueConversionRatio = histogram.integerToDoubleValueConversionRatio;
    this$static.currentIndex = 0;
    this$static.currentValueAtIndex = P0_longLit;
    this$static.nextValueAtIndex = fromInt(1 << histogram.unitMagnitude);
    this$static.prevValueIteratedTo = P0_longLit;
    this$static.totalCountToPrevIndex = P0_longLit;
    this$static.totalCountToCurrentIndex = P0_longLit;
    this$static.countAtThisValue = P0_longLit;
    this$static.freshSubBucket = true;
    $reset_5(this$static.currentIterationValue);
  }

  function AbstractHistogramIterator_0(){
    this.currentIterationValue = new HistogramIterationValue_0;
  }

  defineSeed(144, 1, makeCastMap([Q$Exportable]));
  _.getPercentileIteratedTo = function getPercentileIteratedTo(){
    return 100 * toDouble(this.totalCountToCurrentIndex) / toDouble(this.arrayTotalCount);
  }
  ;
  _.getValueIteratedTo_0 = function getValueIteratedTo(){
    return $highestEquivalentValue(this.histogram, this.currentValueAtIndex);
  }
  ;
  _.hasNext_0 = function hasNext_2(){
    return $hasNext_0(this);
  }
  ;
  _.next_0 = function next_3(){
    return $next_1(this);
  }
  ;
  _.arrayTotalCount = P0_longLit;
  _.countAtThisValue = P0_longLit;
  _.currentIndex = 0;
  _.currentValueAtIndex = P0_longLit;
  _.freshSubBucket = false;
  _.histogram = null;
  _.integerToDoubleValueConversionRatio = 0;
  _.nextValueAtIndex = P0_longLit;
  _.prevValueIteratedTo = P0_longLit;
  _.savedHistogramTotalRawCount = P0_longLit;
  _.totalCountToCurrentIndex = P0_longLit;
  _.totalCountToPrevIndex = P0_longLit;
  function $export_0(this$static){
    if (!exported_0) {
      exported_0 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_AbstractHistogram_2_classLit, this$static);
      $export0_0(this$static);
    }
  }

  function $export0_0(this$static){
    var pkg = declarePackage('org.HdrHistogram.AbstractHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.AbstractHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.AbstractHistogram.prototype = new Object;
    __0._getCountAtIndex = $entry(function(a0){
          return __static_wrapper__getCountAtIndex(this.g, a0);
        }
    );
    __0.add = $entry(function(a0){
          this.g.add_1(gwtInstance(a0));
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_addWhileCorrectingForCoordinatedOmission(this.g, gwtInstance(a0), a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_0();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_0());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(__static_wrapper_copyCorrectedForCoordinatedOmission(this.g, a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_0(gwtInstance(a0));
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_copyIntoCorrectedForCoordinatedOmission(this.g, gwtInstance(a0), a1);
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_AbstractHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_AbstractHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.getBucketCount = $entry(function(){
          return this.g.getBucketCount_0();
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return __static_wrapper_getCountBetweenValues(this.g, a0, a1);
        }
    );
    __0.getCountsArrayLength = $entry(function(){
          return this.g.getCountsArrayLength_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestTrackableValue = $entry(function(){
          return __static_wrapper_getHighestTrackableValue(this.g);
        }
    );
    __0.getLowestDiscernibleValue = $entry(function(){
          return __static_wrapper_getLowestDiscernibleValue(this.g);
        }
    );
    __0.getMaxValue = $entry(function(){
          return __static_wrapper_getMaxValue(this.g);
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return __static_wrapper_getMinNonZeroValue(this.g);
        }
    );
    __0.getMinValue = $entry(function(){
          return __static_wrapper_getMinValue(this.g);
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return __static_wrapper_getPercentileAtOrBelowValue(this.g, a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getSubBucketCount = $entry(function(){
          return this.g.getSubBucketCount_0();
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return __static_wrapper_getValueAtPercentile(this.g, a0);
        }
    );
    __0.getWordSizeInBytes = $entry(function(){
          return this.g.getWordSizeInBytes_0();
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return __static_wrapper_highestEquivalentValue(this.g, a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return __static_wrapper_linearBucketValues(this.g, a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return __static_wrapper_logarithmicBucketValues(this.g, a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return __static_wrapper_lowestEquivalentValue(this.g, a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return __static_wrapper_medianEquivalentValue(this.g, a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return __static_wrapper_nextNonEquivalentValue(this.g, a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_AbstractHistogram_2_classLit, 3, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_0(a0);
        }
    );
    __0.recordValue = $entry(function(a0, a1){
          runDispatch(this.g, Lorg_HdrHistogram_AbstractHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          __static_wrapper_recordValueWithExpectedInterval(this.g, a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_0();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp(this.g, a0);
        }
    );
    __0.shiftValuesLeft = $entry(function(a0){
          this.g.shiftValuesLeft_0(a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return __static_wrapper_sizeOfEquivalentValueRange(this.g, a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_0(gwtInstance(a0));
        }
    );
    __0.valueFromIndex = $entry(function(a0){
          return __static_wrapper_valueFromIndex(this.g, a0);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return __static_wrapper_valuesAreEquivalent(this.g, a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_AbstractHistogram_2_classLit, {0:{1:[[__static_wrapper_recordValue, null, unshift, 'number']], 2:[[__static_wrapper_recordValue_0, null, unshift, 'number', 'number']]}, 1:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 2:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 3:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.AbstractHistogram[p] === undefined && ($wnd.org.HdrHistogram.AbstractHistogram[p] = pkg[p]);
  }

  function AbstractHistogram_ExporterImpl_0(){
    $export_0(this);
  }

  function __static_wrapper__getCountAtIndex(instance, a0){
    return toDouble(instance.getCountAtIndex(a0));
  }

  function __static_wrapper_addWhileCorrectingForCoordinatedOmission(instance, a0, a1){
    $addWhileCorrectingForCoordinatedOmission(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_copyCorrectedForCoordinatedOmission(instance, a0){
    return instance.copyCorrectedForCoordinatedOmission_0(fromDouble(a0));
  }

  function __static_wrapper_copyIntoCorrectedForCoordinatedOmission(instance, a0, a1){
    $copyIntoCorrectedForCoordinatedOmission(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_getCountAtValue(instance, a0){
    return toDouble($getCountAtValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_getCountBetweenValues(instance, a0, a1){
    return toDouble($getCountBetweenValues(instance, fromDouble(a0), fromDouble(a1)));
  }

  function __static_wrapper_getEndTimeStamp(instance){
    return toDouble(instance.endTimeStampMsec);
  }

  function __static_wrapper_getHighestTrackableValue(instance){
    return toDouble(instance.highestTrackableValue);
  }

  function __static_wrapper_getLowestDiscernibleValue(instance){
    return toDouble(instance.lowestDiscernibleValue);
  }

  function __static_wrapper_getMaxValue(instance){
    return toDouble(eq(instance.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(instance, instance.maxValue));
  }

  function __static_wrapper_getMinNonZeroValue(instance){
    return toDouble(eq(instance.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(instance, instance.minNonZeroValue));
  }

  function __static_wrapper_getMinValue(instance){
    return toDouble($getMinValue(instance));
  }

  function __static_wrapper_getPercentileAtOrBelowValue(instance, a0){
    return $getPercentileAtOrBelowValue(instance, fromDouble(a0));
  }

  function __static_wrapper_getStartTimeStamp(instance){
    return toDouble(instance.startTimeStampMsec);
  }

  function __static_wrapper_getValueAtPercentile(instance, a0){
    return toDouble($getValueAtPercentile(instance, a0));
  }

  function __static_wrapper_highestEquivalentValue(instance, a0){
    return toDouble($highestEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_linearBucketValues(instance, a0){
    return new AbstractHistogram$LinearBucketValues_0(fromDouble(a0));
  }

  function __static_wrapper_logarithmicBucketValues(instance, a0, a1){
    return new AbstractHistogram$LogarithmicBucketValues_0(fromDouble(a0));
  }

  function __static_wrapper_lowestEquivalentValue(instance, a0){
    return toDouble($lowestEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_medianEquivalentValue(instance, a0){
    return toDouble($medianEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_nextNonEquivalentValue(instance, a0){
    return toDouble($nextNonEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_recordValue(instance, a0){
    $recordSingleValue(instance, fromDouble(a0));
  }

  function __static_wrapper_recordValue_0(instance, a0, a1){
    $recordSingleValueWithExpectedInterval(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithCount(instance, a0, a1){
    $recordValueWithCount(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithExpectedInterval(instance, a0, a1){
    $recordSingleValueWithExpectedInterval(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp(instance, a0){
    $setEndTimeStamp(instance, fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp(instance, a0){
    $setStartTimeStamp(instance, fromDouble(a0));
  }

  function __static_wrapper_sizeOfEquivalentValueRange(instance, a0){
    return toDouble($sizeOfEquivalentValueRange(instance, fromDouble(a0)));
  }

  function __static_wrapper_valueFromIndex(instance, a0){
    return toDouble($valueFromIndex(instance, a0));
  }

  function __static_wrapper_valuesAreEquivalent(instance, a0, a1){
    return $valuesAreEquivalent(instance, fromDouble(a0), fromDouble(a1));
  }

  defineSeed(145, 1, {}, AbstractHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_0(){
    return $wnd.org.HdrHistogram.AbstractHistogram;
  }
  ;
  _.isAssignable = function isAssignable_0(o){
    return o != null && instanceOf(o, Q$AbstractHistogram);
  }
  ;
  var exported_0 = false;
  function $reset_4(this$static, histogram){
    $resetIterator(this$static, histogram);
    this$static.visitedIndex = -1;
  }

  function AllValuesIterator_0(histogram){
    AbstractHistogramIterator_0.call(this);
    $resetIterator(this, histogram);
    this.visitedIndex = -1;
  }

  defineSeed(146, 144, makeCastMap([Q$AllValuesIterator, Q$Exportable]), AllValuesIterator_0);
  _.incrementIterationLevel = function incrementIterationLevel(){
    this.visitedIndex = this.currentIndex;
  }
  ;
  _.reachedIterationLevel = function reachedIterationLevel(){
    return this.visitedIndex != this.currentIndex;
  }
  ;
  _.reset_0 = function reset_0(){
    $reset_4(this, this.histogram);
  }
  ;
  _.visitedIndex = 0;
  function $export_1(this$static){
    if (!exported_1) {
      exported_1 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_AllValuesIterator_2_classLit, this$static);
      $export0_1(this$static);
    }
  }

  function $export0_1(this$static){
    var pkg = declarePackage('org.HdrHistogram.AllValuesIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.AllValuesIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 1 && (g = ___create(($clinit_ExporterUtil() , $gwtInstance(a[0]))));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.AllValuesIterator.prototype = new Object;
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.AllValuesIterator[p] === undefined && ($wnd.org.HdrHistogram.AllValuesIterator[p] = pkg[p]);
  }

  function AllValuesIterator_ExporterImpl_0(){
    $export_1(this);
  }

  function ___create(a0){
    return new AllValuesIterator_0(a0);
  }

  defineSeed(147, 1, {}, AllValuesIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_1(){
    return $wnd.org.HdrHistogram.AllValuesIterator;
  }
  ;
  _.isAssignable = function isAssignable_1(o){
    return o != null && instanceOf(o, Q$AllValuesIterator);
  }
  ;
  var exported_1 = false;
  function ByteBufferLike_0(){
  }

  function wrap_0(bb){
    if (bb.array || bb.rewind || bb.position || bb.capacity) {
      console.error(bb);
      throw new Error('ByteBuffer already decorated!');
    }
    bb.array = function(){
      return bb.array_1();
    }
    ;
    bb.rewind = function(){
      return bb.rewind_0();
    }
    ;
    bb.position = function(){
      if (arguments.length == 0)
        return bb.position_1();
      else
        return bb.position_2(arguments[0]);
    }
    ;
    bb.capacity = function(){
      return bb.capacity_1();
    }
    ;
    return bb;
  }

  function wrap_1(array){
    var bb = wrap(array);
    var out = wrap_0(bb);
    out.array = function(){
      return array;
    }
    ;
    return out;
  }

  defineSeed(148, 1, makeCastMap([Q$ByteBufferLike, Q$Exportable]), ByteBufferLike_0);
  function $export_2(this$static){
    if (!exported_2) {
      exported_2 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_ByteBufferLike_2_classLit, this$static);
      $export0_2(this$static);
    }
  }

  function $export0_2(this$static){
    var pkg = declarePackage('org.HdrHistogram.ByteBuffer');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.ByteBuffer = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 0 && (g = new ByteBufferLike_0);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.ByteBuffer.prototype = new Object;
    $wnd.org.HdrHistogram.ByteBuffer.allocate = $entry(function(a0){
          var bb;
          return wrap_2((bb = allocate(a0) , wrap_0(bb)));
        }
    );
    $wnd.org.HdrHistogram.ByteBuffer.wrap = $entry(function(a0){
          return wrap_2(wrap_1(($clinit_ExporterUtil() , $toArrByte(a0))));
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.ByteBuffer[p] === undefined && ($wnd.org.HdrHistogram.ByteBuffer[p] = pkg[p]);
  }

  function ByteBufferLike_ExporterImpl_0(){
    $export_2(this);
  }

  defineSeed(149, 1, {}, ByteBufferLike_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_2(){
    return $wnd.org.HdrHistogram.ByteBuffer;
  }
  ;
  _.isAssignable = function isAssignable_2(o){
    return o != null && instanceOf(o, Q$ByteBufferLike);
  }
  ;
  var exported_2 = false;
  function $clinit_DoubleHistogram(){
    $clinit_DoubleHistogram = nullMethod;
    var value;
    value = 1;
    while (value < 4.4942328371557893E307) {
      value *= 2;
    }
    highestAllowedValueEver = value;
  }

  function $add_2(this$static, fromHistogram){
    var arrayLength, count, fromIntegerHistogram, i_0;
    arrayLength = fromHistogram.integerValuesHistogram.countsArrayLength;
    fromIntegerHistogram = fromHistogram.integerValuesHistogram;
    for (i_0 = 0; i_0 < arrayLength; ++i_0) {
      count = fromIntegerHistogram.getCountAtIndex(i_0);
      gt(count, P0_longLit) && $recordValueWithCount_0(this$static, toDouble($valueFromIndex(fromIntegerHistogram, i_0)) * fromHistogram.integerToDoubleValueConversionRatio, count);
    }
  }

  function $addWhileCorrectingForCoordinatedOmission_0(this$static, fromHistogram, expectedIntervalBetweenValueSamples){
    var v, v$iterator;
    for (v$iterator = new RecordedValuesIterator_0((new AbstractHistogram$RecordedValues_0(fromHistogram.integerValuesHistogram)).histogram); $hasNext_0(v$iterator);) {
      v = $next_1(v$iterator);
      $recordValueWithCountAndExpectedInterval_0(this$static, toDouble(v.valueIteratedTo) * this$static.integerToDoubleValueConversionRatio, v.countAtValueIteratedTo, expectedIntervalBetweenValueSamples);
    }
  }

  function $autoAdjustRangeForValue(this$static, value){
    if (value == 0) {
      return;
    }
    $autoAdjustRangeForValueSlowPath(this$static, value);
  }

  function $autoAdjustRangeForValueSlowPath(this$static, value){
    var shiftAmount;
    if (value < this$static.currentLowestValueInAutoRange) {
      if (value < 0) {
        throw new ArrayIndexOutOfBoundsException_1('Negative values cannot be recorded');
      }
      do {
        shiftAmount = $findCappedContainingBinaryOrderOfMagnitude(this$static, ceil(this$static.currentLowestValueInAutoRange / value) - 1);
        $shiftCoveredRangeToTheRight(this$static, shiftAmount);
      }
      while (value < this$static.currentLowestValueInAutoRange);
    }
    else if (value >= this$static.currentHighestValueLimitInAutoRange) {
      if (value > highestAllowedValueEver) {
        throw new ArrayIndexOutOfBoundsException_1('Values above ' + highestAllowedValueEver + ' cannot be recorded');
      }
      do {
        shiftAmount = $findCappedContainingBinaryOrderOfMagnitude(this$static, ceil((value + Math.ulp(value)) / this$static.currentHighestValueLimitInAutoRange) - 1);
        $shiftCoveredRangeToTheLeft(this$static, shiftAmount);
      }
      while (value >= this$static.currentHighestValueLimitInAutoRange);
    }
  }

  function $copyInto_0(this$static, targetHistogram){
    targetHistogram.integerValuesHistogram.clearCounts();
    $add_2(targetHistogram, this$static);
    $setStartTimeStamp_0(targetHistogram, this$static.integerValuesHistogram.startTimeStampMsec);
    $setEndTimeStamp_0(targetHistogram, this$static.integerValuesHistogram.endTimeStampMsec);
  }

  function $deriveInternalHighestToLowestValueRatio(externalHighestToLowestValueRatio){
    var internalHighestToLowestValueRatio;
    internalHighestToLowestValueRatio = shl(P1_longLit, 64 - numberOfLeadingZeros_1(externalHighestToLowestValueRatio) + 1);
    return internalHighestToLowestValueRatio;
  }

  function $encodeIntoCompressedByteBuffer_0(this$static, targetBuffer, compressionLevel){
    $putInt(targetBuffer, 208802381);
    $putInt(targetBuffer, this$static.integerValuesHistogram.numberOfSignificantValueDigits);
    $putLong_0(targetBuffer, this$static.configuredHighestToLowestValueRatio);
    return $encodeIntoCompressedByteBuffer(this$static.integerValuesHistogram, targetBuffer, compressionLevel) + 16;
  }

  function $findCappedContainingBinaryOrderOfMagnitude(this$static, doubleNumber){
    var longNumber;
    if (doubleNumber > toDouble(this$static.configuredHighestToLowestValueRatio)) {
      return round_int(log(toDouble(this$static.configuredHighestToLowestValueRatio)) / Math.log(2));
    }
    if (doubleNumber > Math.pow(2, 50)) {
      return 50;
    }
    return longNumber = fromDouble(Math.ceil(doubleNumber)) , 64 - numberOfLeadingZeros_1(longNumber);
  }

  function $handleShiftValuesException(this$static, numberOfBinaryOrdersOfMagnitude, ex){
    var highestTrackableValue, highestTrackaleValueContainingOrderOfMagnitude, newHighestTrackableValue;
    if (!this$static.autoResize) {
      throw new ArrayIndexOutOfBoundsException_1('value outside of histogram covered range. Caused by: ' + ex);
    }
    highestTrackableValue = this$static.integerValuesHistogram.highestTrackableValue;
    highestTrackaleValueContainingOrderOfMagnitude = 64 - numberOfLeadingZeros_1(highestTrackableValue);
    newHighestTrackableValue = sub(shl(P1_longLit, numberOfBinaryOrdersOfMagnitude + highestTrackaleValueContainingOrderOfMagnitude), P1_longLit);
    if (!gte_0(newHighestTrackableValue, highestTrackableValue)) {
      throw new ArrayIndexOutOfBoundsException_1('cannot resize histogram covered range beyond (1L << 63) / (1L << ' + this$static.integerValuesHistogram.subBucketHalfCountMagnitude + ') - 1.\nCaused by:' + ex);
    }
    this$static.integerValuesHistogram.resize(newHighestTrackableValue);
    this$static.integerValuesHistogram.highestTrackableValue = newHighestTrackableValue;
    this$static.configuredHighestToLowestValueRatio = shl(this$static.configuredHighestToLowestValueRatio, numberOfBinaryOrdersOfMagnitude);
  }

  function $recordCountAtValue_0(this$static, count, value){
    var integerValue;
    (value < this$static.currentLowestValueInAutoRange || value > this$static.currentHighestValueLimitInAutoRange) && $autoAdjustRangeForValue(this$static, value);
    integerValue = fromDouble(value * this$static.doubleToIntegerValueConversionRatio);
    $recordValueWithCount(this$static.integerValuesHistogram, integerValue, count);
  }

  function $recordSingleValue_0(this$static, value){
    var integerValue;
    (value < this$static.currentLowestValueInAutoRange || value >= this$static.currentHighestValueLimitInAutoRange) && $autoAdjustRangeForValue(this$static, value);
    integerValue = fromDouble(value * this$static.doubleToIntegerValueConversionRatio);
    $recordSingleValue(this$static.integerValuesHistogram, integerValue);
  }

  function $recordValueWithCount_0(this$static, value, count){
    $recordCountAtValue_0(this$static, count, value);
  }

  function $recordValueWithCountAndExpectedInterval_0(this$static, value, count, expectedIntervalBetweenValueSamples){
    var missingValue;
    $recordCountAtValue_0(this$static, count, value);
    if (expectedIntervalBetweenValueSamples <= 0)
      return;
    for (missingValue = value - expectedIntervalBetweenValueSamples; missingValue >= expectedIntervalBetweenValueSamples; missingValue -= expectedIntervalBetweenValueSamples) {
      $recordCountAtValue_0(this$static, count, missingValue);
    }
  }

  function $setEndTimeStamp_0(this$static, timeStampMsec){
    this$static.integerValuesHistogram.endTimeStampMsec = timeStampMsec;
  }

  function $setStartTimeStamp_0(this$static, timeStampMsec){
    this$static.integerValuesHistogram.startTimeStampMsec = timeStampMsec;
  }

  function $setTrackableValueRange(this$static, lowestValueInAutoRange, highestValueInAutoRange){
    this$static.currentLowestValueInAutoRange = lowestValueInAutoRange;
    this$static.currentHighestValueLimitInAutoRange = highestValueInAutoRange;
    this$static.integerToDoubleValueConversionRatio = lowestValueInAutoRange / toDouble(fromInt(this$static.integerValuesHistogram.subBucketHalfCount));
    this$static.doubleToIntegerValueConversionRatio = 1 / this$static.integerToDoubleValueConversionRatio;
    $setIntegerToDoubleValueConversionRatio(this$static.integerValuesHistogram, this$static.integerToDoubleValueConversionRatio);
  }



  function $shiftCoveredRangeToTheLeft(this$static, numberOfBinaryOrdersOfMagnitude){
    var ex, newHighestValueLimitInAutoRange, newLowestValueInAutoRange, shiftMultiplier;
    newLowestValueInAutoRange = this$static.currentLowestValueInAutoRange;
    newHighestValueLimitInAutoRange = this$static.currentHighestValueLimitInAutoRange;
    try {
      shiftMultiplier = toDouble(shl(P1_longLit, numberOfBinaryOrdersOfMagnitude));
      this$static.currentLowestValueInAutoRange *= shiftMultiplier;
      if (gt(this$static.integerValuesHistogram.getTotalCount_0(), this$static.integerValuesHistogram.getCountAtIndex(0))) {
        try {
          $shiftValuesRight(this$static.integerValuesHistogram, numberOfBinaryOrdersOfMagnitude);
          newLowestValueInAutoRange *= shiftMultiplier;
          newHighestValueLimitInAutoRange *= shiftMultiplier;
        }
        catch ($e0) {
          $e0 = caught($e0);
          if (instanceOf($e0, Q$ArrayIndexOutOfBoundsException)) {
            ex = $e0;
            $handleShiftValuesException(this$static, numberOfBinaryOrdersOfMagnitude, ex);
            newLowestValueInAutoRange /= shiftMultiplier;
          }
          else
            throw $e0;
        }
      }
      newLowestValueInAutoRange *= shiftMultiplier;
      newHighestValueLimitInAutoRange *= shiftMultiplier;
    }
    finally {
      $setTrackableValueRange(this$static, newLowestValueInAutoRange, newHighestValueLimitInAutoRange);
    }
  }

  function $shiftCoveredRangeToTheRight(this$static, numberOfBinaryOrdersOfMagnitude){
    var ex, newHighestValueLimitInAutoRange, newLowestValueInAutoRange, shiftMultiplier;
    newLowestValueInAutoRange = this$static.currentLowestValueInAutoRange;
    newHighestValueLimitInAutoRange = this$static.currentHighestValueLimitInAutoRange;
    try {
      shiftMultiplier = 1 / toDouble(shl(P1_longLit, numberOfBinaryOrdersOfMagnitude));
      this$static.currentHighestValueLimitInAutoRange *= shiftMultiplier;
      if (gt(this$static.integerValuesHistogram.getTotalCount_0(), this$static.integerValuesHistogram.getCountAtIndex(0))) {
        try {
          $shiftValuesLeft(this$static.integerValuesHistogram, numberOfBinaryOrdersOfMagnitude);
        }
        catch ($e0) {
          $e0 = caught($e0);
          if (instanceOf($e0, Q$ArrayIndexOutOfBoundsException)) {
            ex = $e0;
            $handleShiftValuesException(this$static, numberOfBinaryOrdersOfMagnitude, ex);
            newHighestValueLimitInAutoRange /= shiftMultiplier;
            $shiftValuesLeft(this$static.integerValuesHistogram, numberOfBinaryOrdersOfMagnitude);
          }
          else
            throw $e0;
        }
      }
      newLowestValueInAutoRange *= shiftMultiplier;
      newHighestValueLimitInAutoRange *= shiftMultiplier;
    }
    finally {
      $setTrackableValueRange(this$static, newLowestValueInAutoRange, newHighestValueLimitInAutoRange);
    }
  }

  function DoubleHistogram_0(highestToLowestValueRatio, numberOfSignificantValueDigits){
    $clinit_DoubleHistogram();
    DoubleHistogram_2.call(this, fromDouble(highestToLowestValueRatio), numberOfSignificantValueDigits, Lorg_HdrHistogram_Histogram_2_classLit);
  }

  function DoubleHistogram_1(numberOfSignificantValueDigits){
    $clinit_DoubleHistogram();
    DoubleHistogram_3.call(this, P2_longLit, numberOfSignificantValueDigits, Lorg_HdrHistogram_Histogram_2_classLit, null);
    this.autoResize = true;
  }

  function DoubleHistogram_2(highestToLowestValueRatio, numberOfSignificantValueDigits, internalCountsHistogramClass){
    DoubleHistogram_4.call(this, highestToLowestValueRatio, numberOfSignificantValueDigits, internalCountsHistogramClass, null, false);
  }

  function DoubleHistogram_3(highestToLowestValueRatio, numberOfSignificantValueDigits, internalCountsHistogramClass, internalCountsHistogram){
    DoubleHistogram_4.call(this, highestToLowestValueRatio, numberOfSignificantValueDigits, internalCountsHistogramClass, internalCountsHistogram, false);
  }

  function DoubleHistogram_4(highestToLowestValueRatio, numberOfSignificantValueDigits, internalCountsHistogramClass, internalCountsHistogram, mimicInternalModel){
    var ex, histogramConstructor, initialLowestValueInAutoRange, integerValueRange, valuesHistogram, internalHighestToLowestValueRatio, lowestTackingIntegerValue, largestValueWithSingleUnitResolution, subBucketCountMagnitude, internalHighestToLowestValueRatio_0;
    try {
      if (lt(highestToLowestValueRatio, P2_longLit)) {
        throw new IllegalArgumentException_1('highestToLowestValueRatio must be >= 2');
      }
      if (toDouble(highestToLowestValueRatio) * Math.pow(10, numberOfSignificantValueDigits) >= 2305843009213693952) {
        throw new IllegalArgumentException_1('highestToLowestValueRatio * (10^numberOfSignificantValueDigits) must be < (1L << 61)');
      }
      integerValueRange = (internalHighestToLowestValueRatio = $deriveInternalHighestToLowestValueRatio(highestToLowestValueRatio) , lowestTackingIntegerValue = fromInt(~~(($clinit_AbstractHistogram() , largestValueWithSingleUnitResolution = mul(P2_longLit, fromDouble(Math.pow(10, numberOfSignificantValueDigits))) , subBucketCountMagnitude = round_int(ceil(log(toDouble(largestValueWithSingleUnitResolution)) / Math.log(2))) , round_int(Math.pow(2, subBucketCountMagnitude))) / 2)) , mul(lowestTackingIntegerValue, internalHighestToLowestValueRatio));
      if (!internalCountsHistogram) {
        histogramConstructor = $getConstructor(getMembers(internalCountsHistogramClass), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit, J_classLit, I_classLit]));
        valuesHistogram = $newInstance(histogramConstructor, initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, [valueOf_0(P1_longLit), valueOf_0(sub(integerValueRange, P1_longLit)), valueOf(numberOfSignificantValueDigits)]));
        initialLowestValueInAutoRange = Math.pow(2, 800);
      }
      else if (mimicInternalModel) {
        histogramConstructor = $getConstructor(getMembers(internalCountsHistogramClass), initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Lorg_HdrHistogram_AbstractHistogram_2_classLit]));
        valuesHistogram = $create(histogramConstructor.method, initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, [internalCountsHistogram]));
        initialLowestValueInAutoRange = Math.pow(2, 800);
      }
      else {
        if (neq(internalCountsHistogram.lowestDiscernibleValue, P1_longLit) || neq(internalCountsHistogram.highestTrackableValue, sub(integerValueRange, P1_longLit)) || internalCountsHistogram.numberOfSignificantValueDigits != numberOfSignificantValueDigits) {
          throw new IllegalStateException_1('integer values histogram does not match stated parameters.');
        }
        valuesHistogram = internalCountsHistogram;
        initialLowestValueInAutoRange = internalCountsHistogram.integerToDoubleValueConversionRatio * internalCountsHistogram.subBucketHalfCount;
      }
      this.configuredHighestToLowestValueRatio = highestToLowestValueRatio;
      this.integerValuesHistogram = valuesHistogram;
      internalHighestToLowestValueRatio_0 = $deriveInternalHighestToLowestValueRatio(highestToLowestValueRatio);
      $setTrackableValueRange(this, initialLowestValueInAutoRange, initialLowestValueInAutoRange * toDouble(internalHighestToLowestValueRatio_0));
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$NoSuchMethodException)) {
        ex = $e0;
        throw new IllegalArgumentException_2(ex);
      }
      else
        throw $e0;
    }
  }

  function DoubleHistogram_5(source){
    DoubleHistogram_4.call(this, source.configuredHighestToLowestValueRatio, source.integerValuesHistogram.numberOfSignificantValueDigits, source.integerValuesHistogram.___clazz$, source.integerValuesHistogram, true);
    this.autoResize = source.autoResize;
  }

  function constructHistogramFromBuffer(cookie, buffer, histogramClass, minBarForHighestToLowestValueRatio){
    var configuredHighestToLowestValueRatio, histogram, numberOfSignificantValueDigits, valuesHistogram;
    numberOfSignificantValueDigits = $getInt(buffer);
    configuredHighestToLowestValueRatio = $getLong(buffer);
    if (cookie == 208802380 || cookie == 208802892) {
      valuesHistogram = decodeFromByteBuffer(buffer, histogramClass, minBarForHighestToLowestValueRatio);
    }
    else if (cookie == 208802381 || cookie == 208802893) {
      valuesHistogram = decodeFromCompressedByteBuffer(buffer, histogramClass, minBarForHighestToLowestValueRatio);
    }
    else {
      throw new IllegalStateException_1('The buffer does not contain a DoubleHistogram');
    }
    histogram = new DoubleHistogram_3(configuredHighestToLowestValueRatio, numberOfSignificantValueDigits, histogramClass, valuesHistogram);
    return histogram;
  }

  function copyFrom(source){
    $clinit_DoubleHistogram();
    return new DoubleHistogram_5(source);
  }

  function decodeFromByteBuffer_1(buffer, internalCountsHistogramClass, minBarForHighestToLowestValueRatio){
    $clinit_DoubleHistogram();
    var cookie, ex, histogram;
    try {
      cookie = $getInt(buffer);
      if (!(cookie == 208802380 || cookie == 208802892)) {
        throw new IllegalArgumentException_1('The buffer does not contain a DoubleHistogram');
      }
      histogram = constructHistogramFromBuffer(cookie, buffer, internalCountsHistogramClass, minBarForHighestToLowestValueRatio);
      return histogram;
    }
    catch ($e0) {
      $e0 = caught($e0);
      if (instanceOf($e0, Q$DataFormatException)) {
        ex = $e0;
        throw new RuntimeException_1(ex);
      }
      else
        throw $e0;
    }
  }

  function decodeFromCompressedByteBuffer_0(buffer, internalCountsHistogramClass, minBarForHighestToLowestValueRatio){
    $clinit_DoubleHistogram();
    var cookie, histogram;
    cookie = $getInt(buffer);
    if (!(cookie == 208802381 || cookie == 208802893)) {
      throw new IllegalArgumentException_1('The buffer does not contain a compressed DoubleHistogram');
    }
    histogram = constructHistogramFromBuffer(cookie, buffer, internalCountsHistogramClass, minBarForHighestToLowestValueRatio);
    return histogram;
  }

  defineSeed(150, 134, makeCastMap([Q$Serializable, Q$DoubleHistogram, Q$Exportable]), DoubleHistogram_0, DoubleHistogram_1, DoubleHistogram_3, DoubleHistogram_5);
  _.add_2 = function add_4(fromHistogram){
    $add_2(this, fromHistogram);
  }
  ;
  _.addWhileCorrectingForCoordinatedOmission_0 = function addWhileCorrectingForCoordinatedOmission(fromHistogram, expectedIntervalBetweenValueSamples){
    $addWhileCorrectingForCoordinatedOmission_0(this, fromHistogram, expectedIntervalBetweenValueSamples);
  }
  ;
  _.allValues_1 = function allValues_0(){
    return new DoubleHistogram$AllValues_0;
  }
  ;
  _.copy_1 = function copy_0(){
    var targetHistogram;
    targetHistogram = new DoubleHistogram_0(toDouble(this.configuredHighestToLowestValueRatio), this.integerValuesHistogram.numberOfSignificantValueDigits);
    $setTrackableValueRange(targetHistogram, this.currentLowestValueInAutoRange, this.currentHighestValueLimitInAutoRange);
    $copyInto(this.integerValuesHistogram, targetHistogram.integerValuesHistogram);
    return targetHistogram;
  }
  ;
  _.copyCorrectedForCoordinatedOmission_1 = function copyCorrectedForCoordinatedOmission(expectedIntervalBetweenValueSamples){
    var targetHistogram;
    targetHistogram = new DoubleHistogram_0(toDouble(this.configuredHighestToLowestValueRatio), this.integerValuesHistogram.numberOfSignificantValueDigits);
    $setTrackableValueRange(targetHistogram, this.currentLowestValueInAutoRange, this.currentHighestValueLimitInAutoRange);
    $addWhileCorrectingForCoordinatedOmission_0(targetHistogram, this, expectedIntervalBetweenValueSamples);
    return targetHistogram;
  }
  ;
  _.copyInto_1 = function copyInto_0(targetHistogram){
    $copyInto_0(this, targetHistogram);
  }
  ;
  _.copyIntoCorrectedForCoordinatedOmission_0 = function copyIntoCorrectedForCoordinatedOmission(targetHistogram, expectedIntervalBetweenValueSamples){
    targetHistogram.integerValuesHistogram.clearCounts();
    $addWhileCorrectingForCoordinatedOmission_0(targetHistogram, this, expectedIntervalBetweenValueSamples);
    $setStartTimeStamp_0(targetHistogram, this.integerValuesHistogram.startTimeStampMsec);
    $setEndTimeStamp_0(targetHistogram, this.integerValuesHistogram.endTimeStampMsec);
  }
  ;
  _.encodeIntoByteBuffer_0 = function encodeIntoByteBuffer_0(buffer){
    var maxValue, relevantLength;
    maxValue = $getMaxValue(this.integerValuesHistogram);
    relevantLength = $getLengthForNumberOfBuckets(this.integerValuesHistogram, $getBucketsNeededToCoverValue(this.integerValuesHistogram, maxValue));
    if (buffer.capacity_0 < $getNeededByteBufferCapacity_0(this.integerValuesHistogram, relevantLength)) {
      throw new ArrayIndexOutOfBoundsException_1('buffer does not have capacity for' + $getNeededByteBufferCapacity_0(this.integerValuesHistogram, relevantLength) + ' bytes');
    }
    $putInt(buffer, 208802380);
    $putInt(buffer, this.integerValuesHistogram.numberOfSignificantValueDigits);
    $putLong_0(buffer, this.configuredHighestToLowestValueRatio);
    return $encodeIntoByteBuffer(this.integerValuesHistogram, buffer) + 16;
  }
  ;
  _.encodeIntoCompressedByteBuffer_0 = function encodeIntoCompressedByteBuffer_1(targetBuffer){
    return $encodeIntoCompressedByteBuffer_0(this, targetBuffer, -1);
  }
  ;
  _.encodeIntoCompressedByteBuffer_1 = function encodeIntoCompressedByteBuffer_2(targetBuffer, compressionLevel){
    return $encodeIntoCompressedByteBuffer_0(this, targetBuffer, compressionLevel);
  }
  ;
  _.equals$ = function equals_18(other){
    var i_0, that;
    if (this === other) {
      return true;
    }
    if (!instanceOf(other, Q$DoubleHistogram)) {
      return false;
    }
    that = other;
    if (this.currentLowestValueInAutoRange != that.currentLowestValueInAutoRange || this.currentHighestValueLimitInAutoRange != that.currentHighestValueLimitInAutoRange || this.integerValuesHistogram.numberOfSignificantValueDigits != that.integerValuesHistogram.numberOfSignificantValueDigits) {
      return false;
    }
    if (this.integerValuesHistogram.countsArrayLength != that.integerValuesHistogram.countsArrayLength) {
      return false;
    }
    if (neq(this.integerValuesHistogram.getTotalCount_0(), that.integerValuesHistogram.getTotalCount_0())) {
      return false;
    }
    for (i_0 = 0; i_0 < this.integerValuesHistogram.countsArrayLength; ++i_0) {
      if (neq(this.integerValuesHistogram.getCountAtIndex(i_0), that.integerValuesHistogram.getCountAtIndex(i_0))) {
        return false;
      }
    }
    return true;
  }
  ;
  _.getCountBetweenValues_0 = function getCountBetweenValues(lowValue, highValue){
    return toDouble($getCountBetweenValues(this.integerValuesHistogram, fromDouble(lowValue * this.doubleToIntegerValueConversionRatio), fromDouble(highValue * this.doubleToIntegerValueConversionRatio)));
  }
  ;
  _.getCurrentLowestTrackableNonZeroValue_0 = function getCurrentLowestTrackableNonZeroValue(){
    return this.currentLowestValueInAutoRange;
  }
  ;
  _.getEstimatedFootprintInBytes_0 = function getEstimatedFootprintInBytes_0(){
    return this.integerValuesHistogram._getEstimatedFootprintInBytes();
  }
  ;
  _.getIntegerToDoubleValueConversionRatio_0 = function getIntegerToDoubleValueConversionRatio(){
    return this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getMaxValue_0 = function getMaxValue(){
    return toDouble($getMaxValue(this.integerValuesHistogram)) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getMaxValueAsDouble_0 = function getMaxValueAsDouble_0(){
    return toDouble($getMaxValue(this.integerValuesHistogram)) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getMean_0 = function getMean_0(){
    return $getMean(this.integerValuesHistogram) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getMinNonZeroValue_0 = function getMinNonZeroValue(){
    return toDouble($getMinNonZeroValue(this.integerValuesHistogram)) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getMinValue_0 = function getMinValue(){
    return toDouble($getMinValue(this.integerValuesHistogram)) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getNeededByteBufferCapacity_0 = function getNeededByteBufferCapacity_0(){
    return $getNeededByteBufferCapacity(this.integerValuesHistogram);
  }
  ;
  _.getNumberOfSignificantValueDigits_0 = function getNumberOfSignificantValueDigits_0(){
    return this.integerValuesHistogram.numberOfSignificantValueDigits;
  }
  ;
  _.getPercentileAtOrBelowValue_0 = function getPercentileAtOrBelowValue(value){
    return $getPercentileAtOrBelowValue(this.integerValuesHistogram, fromDouble(value * this.doubleToIntegerValueConversionRatio));
  }
  ;
  _.getStdDeviation_0 = function getStdDeviation_0(){
    return $getStdDeviation(this.integerValuesHistogram) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getValueAtPercentile_0 = function getValueAtPercentile(percentile){
    return toDouble($getValueAtPercentile(this.integerValuesHistogram, percentile)) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.highestEquivalentValue_0 = function highestEquivalentValue_0(value){
    var highestEquivalentValue, nextNonEquivalentValue;
    nextNonEquivalentValue = toDouble($nextNonEquivalentValue(this.integerValuesHistogram, fromDouble(value * this.doubleToIntegerValueConversionRatio))) * this.integerToDoubleValueConversionRatio;
    highestEquivalentValue = nextNonEquivalentValue - 2 * Math.ulp(nextNonEquivalentValue);
    while (highestEquivalentValue + Math.ulp(highestEquivalentValue) < nextNonEquivalentValue) {
      highestEquivalentValue += Math.ulp(highestEquivalentValue);
    }
    return highestEquivalentValue;
  }
  ;
  _.isAutoResize_0 = function isAutoResize_0(){
    return this.autoResize;
  }
  ;
  _.linearBucketValues_0 = function linearBucketValues(valueUnitsPerBucket){
    return new DoubleHistogram$LinearBucketValues_0;
  }
  ;
  _.logarithmicBucketValues_0 = function logarithmicBucketValues(valueUnitsInFirstBucket, logBase){
    return new DoubleHistogram$LogarithmicBucketValues_0;
  }
  ;
  _.lowestEquivalentValue_0 = function lowestEquivalentValue(value){
    return toDouble($lowestEquivalentValue(this.integerValuesHistogram, fromDouble(value * this.doubleToIntegerValueConversionRatio))) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.medianEquivalentValue_0 = function medianEquivalentValue(value){
    return toDouble($medianEquivalentValue(this.integerValuesHistogram, fromDouble(value * this.doubleToIntegerValueConversionRatio))) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.nextNonEquivalentValue_0 = function nextNonEquivalentValue_0(value){
    return toDouble($nextNonEquivalentValue(this.integerValuesHistogram, fromDouble(value * this.doubleToIntegerValueConversionRatio))) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.outputPercentileDistribution_0 = function outputPercentileDistribution_2(printStream, percentileTicksPerHalfDistance, outputValueUnitScalingRatio){
    $outputPercentileDistribution(this.integerValuesHistogram, percentileTicksPerHalfDistance, ($clinit_Double() , new Double_0(outputValueUnitScalingRatio.value / this.integerToDoubleValueConversionRatio)), false);
  }
  ;
  _.outputPercentileDistribution_1 = function outputPercentileDistribution_3(printStream, percentileTicksPerHalfDistance, outputValueUnitScalingRatio, useCsvFormat){
    $outputPercentileDistribution(this.integerValuesHistogram, percentileTicksPerHalfDistance, ($clinit_Double() , new Double_0(outputValueUnitScalingRatio.value / this.integerToDoubleValueConversionRatio)), useCsvFormat);
  }
  ;
  _.outputPercentileDistribution_2 = function outputPercentileDistribution_4(printStream, outputValueUnitScalingRatio){
    $outputPercentileDistribution(this.integerValuesHistogram, 5, ($clinit_Double() , new Double_0(outputValueUnitScalingRatio.value / this.integerToDoubleValueConversionRatio)), false);
  }
  ;
  _.percentiles_1 = function percentiles_0(percentileTicksPerHalfDistance){
    return new DoubleHistogram$Percentiles_0;
  }
  ;
  _.recordValue_0 = function recordValue(value){
    $recordSingleValue_0(this, value);
  }
  ;
  _.recordValueWithExpectedInterval_0 = function recordValueWithExpectedInterval(value, expectedIntervalBetweenValueSamples){
    $recordValueWithCountAndExpectedInterval_0(this, value, P1_longLit, expectedIntervalBetweenValueSamples);
  }
  ;
  _.recordedValues_1 = function recordedValues_0(){
    return new DoubleHistogram$RecordedValues_0;
  }
  ;
  _.reset_0 = function reset_1(){
    this.integerValuesHistogram.clearCounts();
  }
  ;
  _.setAutoResize_0 = function setAutoResize_0(autoResize){
    this.autoResize = autoResize;
  }
  ;
  _.sizeOfEquivalentValueRange_0 = function sizeOfEquivalentValueRange(value){
    return toDouble($sizeOfEquivalentValueRange(this.integerValuesHistogram, fromDouble(value * this.doubleToIntegerValueConversionRatio))) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.subtract_1 = function subtract_0(otherHistogram){
    var arrayLength, i_0, otherCount, otherIntegerHistogram, otherValue;
    arrayLength = otherHistogram.integerValuesHistogram.countsArrayLength;
    otherIntegerHistogram = otherHistogram.integerValuesHistogram;
    for (i_0 = 0; i_0 < arrayLength; ++i_0) {
      otherCount = otherIntegerHistogram.getCountAtIndex(i_0);
      if (gt(otherCount, P0_longLit)) {
        otherValue = toDouble($valueFromIndex(otherIntegerHistogram, i_0)) * otherHistogram.integerToDoubleValueConversionRatio;
        if (lt($getCountAtValue(this.integerValuesHistogram, fromDouble(otherValue * this.doubleToIntegerValueConversionRatio)), otherCount)) {
          throw new IllegalArgumentException_1('otherHistogram count (' + toString_2(otherCount) + ') at value ' + otherValue + " is larger than this one's (" + toString_2($getCountAtValue(this.integerValuesHistogram, fromDouble(otherValue * this.doubleToIntegerValueConversionRatio))) + ')');
        }
        $recordCountAtValue_0(this, neg(otherCount), otherValue);
      }
    }
  }
  ;
  _.valuesAreEquivalent_0 = function valuesAreEquivalent(value1, value2){
    return toDouble($lowestEquivalentValue(this.integerValuesHistogram, fromDouble(value1 * this.doubleToIntegerValueConversionRatio))) * this.integerToDoubleValueConversionRatio == toDouble($lowestEquivalentValue(this.integerValuesHistogram, fromDouble(value2 * this.doubleToIntegerValueConversionRatio))) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.autoResize = false;
  _.configuredHighestToLowestValueRatio = P0_longLit;
  _.currentHighestValueLimitInAutoRange = 0;
  _.currentLowestValueInAutoRange = 0;
  _.doubleToIntegerValueConversionRatio = 0;
  _.integerToDoubleValueConversionRatio = 0;
  _.integerValuesHistogram = null;
  var highestAllowedValueEver = 0;
  function DoubleHistogram$AllValues_0(){
  }

  defineSeed(151, 1, {}, DoubleHistogram$AllValues_0);
  function DoubleHistogram$LinearBucketValues_0(){
  }

  defineSeed(152, 1, {}, DoubleHistogram$LinearBucketValues_0);
  function DoubleHistogram$LogarithmicBucketValues_0(){
  }

  defineSeed(153, 1, {}, DoubleHistogram$LogarithmicBucketValues_0);
  function DoubleHistogram$Percentiles_0(){
  }

  defineSeed(154, 1, {}, DoubleHistogram$Percentiles_0);
  function DoubleHistogram$RecordedValues_0(){
  }

  defineSeed(155, 1, {}, DoubleHistogram$RecordedValues_0);
  function DoubleHistogramIterationValue_0(integerHistogramIterationValue){
    this.integerHistogramIterationValue = integerHistogramIterationValue;
  }

  defineSeed(156, 1, makeCastMap([Q$DoubleHistogramIterationValue, Q$Exportable]), DoubleHistogramIterationValue_0);
  _.getIntegerHistogramIterationValue_0 = function getIntegerHistogramIterationValue(){
    return this.integerHistogramIterationValue;
  }
  ;
  _.getPercentile_0 = function getPercentile(){
    return this.integerHistogramIterationValue.percentile;
  }
  ;
  _.getPercentileLevelIteratedTo_0 = function getPercentileLevelIteratedTo(){
    return this.integerHistogramIterationValue.percentileLevelIteratedTo;
  }
  ;
  _.getValueIteratedFrom_0 = function getValueIteratedFrom(){
    return toDouble(this.integerHistogramIterationValue.valueIteratedFrom) * this.integerHistogramIterationValue.integerToDoubleValueConversionRatio;
  }
  ;
  _.getValueIteratedTo_1 = function getValueIteratedTo_0(){
    return toDouble(this.integerHistogramIterationValue.valueIteratedTo) * this.integerHistogramIterationValue.integerToDoubleValueConversionRatio;
  }
  ;
  _.toString$ = function toString_24(){
    return 'valueIteratedTo:' + toDouble(this.integerHistogramIterationValue.valueIteratedTo) * this.integerHistogramIterationValue.integerToDoubleValueConversionRatio + ', prevValueIteratedTo:' + toDouble(this.integerHistogramIterationValue.valueIteratedFrom) * this.integerHistogramIterationValue.integerToDoubleValueConversionRatio + ', countAtValueIteratedTo:' + toString_2(this.integerHistogramIterationValue.countAtValueIteratedTo) + ', countAddedInThisIterationStep:' + toString_2(this.integerHistogramIterationValue.countAddedInThisIterationStep) + ', totalCountToThisValue:' + toString_2(this.integerHistogramIterationValue.totalCountToThisValue) + ', percentile:' + this.integerHistogramIterationValue.percentile + ', percentileLevelIteratedTo:' + this.integerHistogramIterationValue.percentileLevelIteratedTo;
  }
  ;
  _.integerHistogramIterationValue = null;
  function $export_3(this$static){
    if (!exported_3) {
      exported_3 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_DoubleHistogramIterationValue_2_classLit, this$static);
      new HistogramIterationValue_ExporterImpl_0;
      $export0_3(this$static);
    }
  }

  function $export0_3(this$static){
    var pkg = declarePackage('org.HdrHistogram.DoubleHistogramIterationValue');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.DoubleHistogramIterationValue = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.DoubleHistogramIterationValue.prototype = new Object;
    __0.getCountAddedInThisIterationStep = $entry(function(){
          return __static_wrapper_getCountAddedInThisIterationStep(this.g);
        }
    );
    __0.getCountAtValueIteratedTo = $entry(function(){
          return __static_wrapper_getCountAtValueIteratedTo(this.g);
        }
    );
    __0.getIntegerHistogramIterationValue = $entry(function(){
          return wrap_2(this.g.getIntegerHistogramIterationValue_0());
        }
    );
    __0.getPercentile = $entry(function(){
          return this.g.getPercentile_0();
        }
    );
    __0.getPercentileLevelIteratedTo = $entry(function(){
          return this.g.getPercentileLevelIteratedTo_0();
        }
    );
    __0.getTotalCountToThisValue = $entry(function(){
          return __static_wrapper_getTotalCountToThisValue(this.g);
        }
    );
    __0.getValueIteratedFrom = $entry(function(){
          return this.g.getValueIteratedFrom_0();
        }
    );
    __0.getValueIteratedTo = $entry(function(){
          return this.g.getValueIteratedTo_1();
        }
    );
    __0.toString = $entry(function(){
          return this.g.toString$();
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.DoubleHistogramIterationValue[p] === undefined && ($wnd.org.HdrHistogram.DoubleHistogramIterationValue[p] = pkg[p]);
  }

  function DoubleHistogramIterationValue_ExporterImpl_0(){
    $export_3(this);
  }

  function __static_wrapper_getCountAddedInThisIterationStep(instance){
    return toDouble(instance.integerHistogramIterationValue.countAddedInThisIterationStep);
  }

  function __static_wrapper_getCountAtValueIteratedTo(instance){
    return toDouble(instance.integerHistogramIterationValue.countAtValueIteratedTo);
  }

  function __static_wrapper_getTotalCountToThisValue(instance){
    return toDouble(instance.integerHistogramIterationValue.totalCountToThisValue);
  }

  defineSeed(157, 1, {}, DoubleHistogramIterationValue_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_3(){
    return $wnd.org.HdrHistogram.DoubleHistogramIterationValue;
  }
  ;
  _.isAssignable = function isAssignable_3(o){
    return o != null && instanceOf(o, Q$DoubleHistogramIterationValue);
  }
  ;
  var exported_3 = false;
  function $export_4(this$static){
    if (!exported_4) {
      exported_4 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_DoubleHistogram_2_classLit, this$static);
      $export0_4(this$static);
    }
  }



  function $export0_4(this$static){
    var pkg = declarePackage('org.HdrHistogram.DoubleHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.DoubleHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 1?(g = new DoubleHistogram_1(a[0])):a.length == 2 && (g = new DoubleHistogram_0(a[0], a[1]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.DoubleHistogram.prototype = new Object;
    __0.add = $entry(function(a0){
          this.g.add_2(a0 == null?null:a0.g);
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          this.g.addWhileCorrectingForCoordinatedOmission_0(a0 == null?null:a0.g, a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_1();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_1());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(this.g.copyCorrectedForCoordinatedOmission_1(a0));
        }
    );
    $wnd.org.HdrHistogram.DoubleHistogram.copyFrom = $entry(function(a0){
          return wrap_2(copyFrom(a0 == null?null:a0.g));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_1(a0 == null?null:a0.g);
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          this.g.copyIntoCorrectedForCoordinatedOmission_0(a0 == null?null:a0.g, a1);
        }
    );
    $wnd.org.HdrHistogram.DoubleHistogram.decodeFromByteBuffer = $entry(function(a0, a1, a2){
          return runDispatch(null, Lorg_HdrHistogram_DoubleHistogram_2_classLit, 1, arguments, true, false)[0];
        }
    );
    $wnd.org.HdrHistogram.DoubleHistogram.decodeFromCompressedByteBuffer = $entry(function(a0, a1, a2){
          return runDispatch(null, Lorg_HdrHistogram_DoubleHistogram_2_classLit, 0, arguments, true, false)[0];
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_DoubleHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_DoubleHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_0(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return this.g.getCountBetweenValues_0(a0, a1);
        }
    );
    __0.getCurrentLowestTrackableNonZeroValue = $entry(function(){
          return this.g.getCurrentLowestTrackableNonZeroValue_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_0(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestToLowestValueRatio = $entry(function(){
          return __static_wrapper_getHighestToLowestValueRatio(this.g);
        }
    );
    __0.getIntegerToDoubleValueConversionRatio = $entry(function(){
          return this.g.getIntegerToDoubleValueConversionRatio_0();
        }
    );
    __0.getMaxValue = $entry(function(){
          return this.g.getMaxValue_0();
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return this.g.getMinNonZeroValue_0();
        }
    );
    __0.getMinValue = $entry(function(){
          return this.g.getMinValue_0();
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return this.g.getPercentileAtOrBelowValue_0(a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_0(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return this.g.getValueAtPercentile_0(a0);
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return this.g.highestEquivalentValue_0(a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return this.g.linearBucketValues_0(a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return this.g.logarithmicBucketValues_0(a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return this.g.lowestEquivalentValue_0(a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return this.g.medianEquivalentValue_0(a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return this.g.nextNonEquivalentValue_0(a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_DoubleHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_1(a0);
        }
    );
    __0.recordValue = $entry(function(a0){
          this.g.recordValue_0(a0);
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_0(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          this.g.recordValueWithExpectedInterval_0(a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_1();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_0(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_0(this.g, a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return this.g.sizeOfEquivalentValueRange_0(a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_1(a0 == null?null:a0.g);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return this.g.valuesAreEquivalent_0(a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_DoubleHistogram_2_classLit, {0:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 1:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 2:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    registerDispatchMap(Lorg_HdrHistogram_DoubleHistogram_2_classLit, {0:{2:[[__static_wrapper_decodeFromCompressedByteBuffer, wrap_2, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']], 3:[[__static_wrapper_decodeFromCompressedByteBuffer_0, wrap_2, undefined, Ljava_nio_ByteBuffer_2_classLit, Ljava_lang_Class_2_classLit, 'number']]}, 1:{2:[[__static_wrapper_decodeFromByteBuffer, wrap_2, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']], 3:[[__static_wrapper_decodeFromByteBuffer_0, wrap_2, undefined, Ljava_nio_ByteBuffer_2_classLit, Ljava_lang_Class_2_classLit, 'number']]}}, true);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.DoubleHistogram[p] === undefined && ($wnd.org.HdrHistogram.DoubleHistogram[p] = pkg[p]);
  }

  function DoubleHistogram_ExporterImpl_0(){
    $export_4(this);
  }

  function __static_wrapper_decodeFromByteBuffer(a0, a1){
    return $clinit_DoubleHistogram() , decodeFromByteBuffer_1(a0, Lorg_HdrHistogram_Histogram_2_classLit, fromDouble(a1));
  }

  function __static_wrapper_decodeFromByteBuffer_0(a0, a1, a2){
    return decodeFromByteBuffer_1(a0, a1, fromDouble(a2));
  }

  function __static_wrapper_decodeFromCompressedByteBuffer(a0, a1){
    return $clinit_DoubleHistogram() , decodeFromCompressedByteBuffer_0(a0, Lorg_HdrHistogram_Histogram_2_classLit, fromDouble(a1));
  }

  function __static_wrapper_decodeFromCompressedByteBuffer_0(a0, a1, a2){
    return decodeFromCompressedByteBuffer_0(a0, a1, fromDouble(a2));
  }

  function __static_wrapper_getCountAtValue_0(instance, a0){
    return toDouble($getCountAtValue(instance.integerValuesHistogram, fromDouble(a0 * instance.doubleToIntegerValueConversionRatio)));
  }

  function __static_wrapper_getEndTimeStamp_0(instance){
    return toDouble(instance.integerValuesHistogram.endTimeStampMsec);
  }

  function __static_wrapper_getHighestToLowestValueRatio(instance){
    return toDouble(instance.configuredHighestToLowestValueRatio);
  }

  function __static_wrapper_getStartTimeStamp_0(instance){
    return toDouble(instance.integerValuesHistogram.startTimeStampMsec);
  }

  function __static_wrapper_getTotalCount(instance){
    return toDouble(instance.integerValuesHistogram.getTotalCount_0());
  }

  function __static_wrapper_recordValueWithCount_0(instance, a0, a1){
    $recordValueWithCount_0(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_0(instance, a0){
    $setEndTimeStamp_0(instance, fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_0(instance, a0){
    $setStartTimeStamp_0(instance, fromDouble(a0));
  }

  defineSeed(158, 1, {}, DoubleHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_4(){
    return $wnd.org.HdrHistogram.DoubleHistogram;
  }
  ;
  _.isAssignable = function isAssignable_4(o){
    return o != null && instanceOf(o, Q$DoubleHistogram);
  }
  ;
  var exported_4 = false;
  function DoubleLinearIterator_0(histogram, valueUnitsPerBucket){
    this.histogram = histogram;
    this.integerLinearIterator = new LinearIterator_1(histogram.integerValuesHistogram, fromDouble(valueUnitsPerBucket * histogram.doubleToIntegerValueConversionRatio));
    this.iterationValue = new DoubleHistogramIterationValue_0(this.integerLinearIterator.currentIterationValue);
  }

  defineSeed(159, 1, makeCastMap([Q$DoubleLinearIterator, Q$Exportable]), DoubleLinearIterator_0);
  _.hasNext_0 = function hasNext_3(){
    return $hasNext_1(this.integerLinearIterator);
  }
  ;
  _.next_0 = function next_4(){
    return $next_1(this.integerLinearIterator) , this.iterationValue;
  }
  ;
  _.next_1 = function next_5(){
    return $next_1(this.integerLinearIterator) , this.iterationValue;
  }
  ;
  _.remove_0 = function remove(){
    $remove();
  }
  ;
  _.reset_1 = function reset_2(valueUnitsPerBucket){
    $reset_6(this.integerLinearIterator, fromDouble(valueUnitsPerBucket * this.histogram.doubleToIntegerValueConversionRatio));
  }
  ;
  _.histogram = null;
  _.integerLinearIterator = null;
  _.iterationValue = null;
  function $export_5(this$static){
    if (!exported_5) {
      exported_5 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_DoubleLinearIterator_2_classLit, this$static);
      new DoubleHistogramIterationValue_ExporterImpl_0;
      $export0_5(this$static);
    }
  }

  function $export0_5(this$static){
    var pkg = declarePackage('org.HdrHistogram.DoubleLinearIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.DoubleLinearIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 2 && (g = ___create_0(a[0] == null?null:a[0].g, a[1]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.DoubleLinearIterator.prototype = new Object;
    __0.hasNext = $entry(function(){
          return this.g.hasNext_0();
        }
    );
    __0.next = $entry(function(){
          return wrap_2(this.g.next_1());
        }
    );
    __0.remove = $entry(function(){
          this.g.remove_0();
        }
    );
    __0.reset = $entry(function(a0){
          this.g.reset_1(a0);
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.DoubleLinearIterator[p] === undefined && ($wnd.org.HdrHistogram.DoubleLinearIterator[p] = pkg[p]);
  }

  function DoubleLinearIterator_ExporterImpl_0(){
    $export_5(this);
  }

  function ___create_0(a0, a1){
    return new DoubleLinearIterator_0(a0, a1);
  }

  defineSeed(160, 1, {}, DoubleLinearIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_5(){
    return $wnd.org.HdrHistogram.DoubleLinearIterator;
  }
  ;
  _.isAssignable = function isAssignable_5(o){
    return o != null && instanceOf(o, Q$DoubleLinearIterator);
  }
  ;
  var exported_5 = false;
  function DoubleLogarithmicIterator_0(histogram, valueUnitsInFirstBucket, logBase){
    this.histogram = histogram;
    this.integerLogarithmicIterator = new LogarithmicIterator_1(histogram.integerValuesHistogram, fromDouble(valueUnitsInFirstBucket * histogram.doubleToIntegerValueConversionRatio), logBase);
    this.iterationValue = new DoubleHistogramIterationValue_0(this.integerLogarithmicIterator.currentIterationValue);
  }

  defineSeed(161, 1, makeCastMap([Q$DoubleLogarithmicIterator, Q$Exportable]), DoubleLogarithmicIterator_0);
  _.hasNext_0 = function hasNext_4(){
    return $hasNext_2(this.integerLogarithmicIterator);
  }
  ;
  _.next_0 = function next_6(){
    return $next_1(this.integerLogarithmicIterator) , this.iterationValue;
  }
  ;
  _.next_1 = function next_7(){
    return $next_1(this.integerLogarithmicIterator) , this.iterationValue;
  }
  ;
  _.remove_0 = function remove_0(){
    $remove();
  }
  ;
  _.reset_2 = function reset_3(valueUnitsInFirstBucket, logBase){
    $reset_8(this.integerLogarithmicIterator, fromDouble(valueUnitsInFirstBucket * this.histogram.doubleToIntegerValueConversionRatio), logBase);
  }
  ;
  _.histogram = null;
  _.integerLogarithmicIterator = null;
  _.iterationValue = null;
  function $export_6(this$static){
    if (!exported_6) {
      exported_6 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_DoubleLogarithmicIterator_2_classLit, this$static);
      new DoubleHistogramIterationValue_ExporterImpl_0;
      $export0_6(this$static);
    }
  }

  function $export0_6(this$static){
    var pkg = declarePackage('org.HdrHistogram.DoubleLogarithmicIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.DoubleLogarithmicIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 3 && (g = ___create_1(a[0] == null?null:a[0].g, a[1], a[2]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.DoubleLogarithmicIterator.prototype = new Object;
    __0.hasNext = $entry(function(){
          return this.g.hasNext_0();
        }
    );
    __0.next = $entry(function(){
          return wrap_2(this.g.next_1());
        }
    );
    __0.remove = $entry(function(){
          this.g.remove_0();
        }
    );
    __0.reset = $entry(function(a0, a1){
          this.g.reset_2(a0, a1);
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.DoubleLogarithmicIterator[p] === undefined && ($wnd.org.HdrHistogram.DoubleLogarithmicIterator[p] = pkg[p]);
  }

  function DoubleLogarithmicIterator_ExporterImpl_0(){
    $export_6(this);
  }

  function ___create_1(a0, a1, a2){
    return new DoubleLogarithmicIterator_0(a0, a1, a2);
  }

  defineSeed(162, 1, {}, DoubleLogarithmicIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_6(){
    return $wnd.org.HdrHistogram.DoubleLogarithmicIterator;
  }
  ;
  _.isAssignable = function isAssignable_6(o){
    return o != null && instanceOf(o, Q$DoubleLogarithmicIterator);
  }
  ;
  var exported_6 = false;
  function DoublePercentileIterator_0(histogram, percentileTicksPerHalfDistance){
    this.integerPercentileIterator = new PercentileIterator_0(histogram.integerValuesHistogram, percentileTicksPerHalfDistance);
    this.iterationValue = new DoubleHistogramIterationValue_0(this.integerPercentileIterator.currentIterationValue);
  }

  defineSeed(163, 1, makeCastMap([Q$DoublePercentileIterator, Q$Exportable]), DoublePercentileIterator_0);
  _.hasNext_0 = function hasNext_5(){
    return $hasNext_3(this.integerPercentileIterator);
  }
  ;
  _.next_0 = function next_8(){
    return $next_1(this.integerPercentileIterator) , this.iterationValue;
  }
  ;
  _.next_1 = function next_9(){
    return $next_1(this.integerPercentileIterator) , this.iterationValue;
  }
  ;
  _.remove_0 = function remove_1(){
    $remove();
  }
  ;
  _.reset_3 = function reset_4(percentileTicksPerHalfDistance){
    $reset_10(this.integerPercentileIterator, percentileTicksPerHalfDistance);
  }
  ;
  _.integerPercentileIterator = null;
  _.iterationValue = null;
  function $export_7(this$static){
    if (!exported_7) {
      exported_7 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_DoublePercentileIterator_2_classLit, this$static);
      new DoubleHistogramIterationValue_ExporterImpl_0;
      $export0_7(this$static);
    }
  }

  function $export0_7(this$static){
    var pkg = declarePackage('org.HdrHistogram.DoublePercentileIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.DoublePercentileIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 2 && (g = ___create_2(a[0] == null?null:a[0].g, a[1]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.DoublePercentileIterator.prototype = new Object;
    __0.hasNext = $entry(function(){
          return this.g.hasNext_0();
        }
    );
    __0.next = $entry(function(){
          return wrap_2(this.g.next_1());
        }
    );
    __0.remove = $entry(function(){
          this.g.remove_0();
        }
    );
    __0.reset = $entry(function(a0){
          this.g.reset_3(a0);
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.DoublePercentileIterator[p] === undefined && ($wnd.org.HdrHistogram.DoublePercentileIterator[p] = pkg[p]);
  }

  function DoublePercentileIterator_ExporterImpl_0(){
    $export_7(this);
  }

  function ___create_2(a0, a1){
    return new DoublePercentileIterator_0(a0, a1);
  }

  defineSeed(164, 1, {}, DoublePercentileIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_7(){
    return $wnd.org.HdrHistogram.DoublePercentileIterator;
  }
  ;
  _.isAssignable = function isAssignable_7(o){
    return o != null && instanceOf(o, Q$DoublePercentileIterator);
  }
  ;
  var exported_7 = false;
  function DoubleRecordedValuesIterator_0(histogram){
    this.integerRecordedValuesIterator = new RecordedValuesIterator_0(histogram.integerValuesHistogram);
    this.iterationValue = new DoubleHistogramIterationValue_0(this.integerRecordedValuesIterator.currentIterationValue);
  }

  defineSeed(165, 1, makeCastMap([Q$DoubleRecordedValuesIterator, Q$Exportable]), DoubleRecordedValuesIterator_0);
  _.hasNext_0 = function hasNext_6(){
    return $hasNext_0(this.integerRecordedValuesIterator);
  }
  ;
  _.next_0 = function next_10(){
    return $next_1(this.integerRecordedValuesIterator) , this.iterationValue;
  }
  ;
  _.next_1 = function next_11(){
    return $next_1(this.integerRecordedValuesIterator) , this.iterationValue;
  }
  ;
  _.remove_0 = function remove_2(){
    $remove();
  }
  ;
  _.reset_0 = function reset_5(){
    $reset_12(this.integerRecordedValuesIterator);
  }
  ;
  _.integerRecordedValuesIterator = null;
  _.iterationValue = null;
  function $export_8(this$static){
    if (!exported_8) {
      exported_8 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_DoubleRecordedValuesIterator_2_classLit, this$static);
      new DoubleHistogramIterationValue_ExporterImpl_0;
      $export0_8(this$static);
    }
  }

  function $export0_8(this$static){
    var pkg = declarePackage('org.HdrHistogram.DoubleRecordedValuesIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.DoubleRecordedValuesIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 1 && (g = ___create_3(a[0] == null?null:a[0].g));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.DoubleRecordedValuesIterator.prototype = new Object;
    __0.hasNext = $entry(function(){
          return this.g.hasNext_0();
        }
    );
    __0.next = $entry(function(){
          return wrap_2(this.g.next_1());
        }
    );
    __0.remove = $entry(function(){
          this.g.remove_0();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.DoubleRecordedValuesIterator[p] === undefined && ($wnd.org.HdrHistogram.DoubleRecordedValuesIterator[p] = pkg[p]);
  }

  function DoubleRecordedValuesIterator_ExporterImpl_0(){
    $export_8(this);
  }

  function ___create_3(a0){
    return new DoubleRecordedValuesIterator_0(a0);
  }

  defineSeed(166, 1, {}, DoubleRecordedValuesIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_8(){
    return $wnd.org.HdrHistogram.DoubleRecordedValuesIterator;
  }
  ;
  _.isAssignable = function isAssignable_8(o){
    return o != null && instanceOf(o, Q$DoubleRecordedValuesIterator);
  }
  ;
  var exported_8 = false;
  function $clinit_DoubleRecorder(){
    $clinit_DoubleRecorder = nullMethod;
    instanceIdSequencer = new AtomicLong_0(P1_longLit);
  }

  function $$init_0(this$static){
    var $t0;
    this$static.instanceId = ($t0 = instanceIdSequencer.value , instanceIdSequencer.value = add(instanceIdSequencer.value, P1_longLit) , $t0);
    this$static.recordingPhaser = new WriterReaderPhaser_0;
  }

  function $getIntervalHistogram(this$static, histogramToRecycle){
    !histogramToRecycle && (histogramToRecycle = new DoubleRecorder$InternalDoubleHistogram_2(this$static.inactiveHistogram));
    $validateFitAsReplacementHistogram(this$static, histogramToRecycle);
    try {
      this$static.recordingPhaser.readerLock_0.lockCount += 1;
      this$static.inactiveHistogram = histogramToRecycle;
      $performIntervalSample(this$static);
      return this$static.inactiveHistogram;
    }
    finally {
      $unlock(this$static.recordingPhaser.readerLock_0);
    }
  }

  function $performIntervalSample(this$static){
    var now, tempHistogram;
    this$static.inactiveHistogram.integerValuesHistogram.clearCounts();
    try {
      this$static.recordingPhaser.readerLock_0.lockCount += 1;
      tempHistogram = this$static.inactiveHistogram;
      this$static.inactiveHistogram = this$static.activeHistogram;
      this$static.activeHistogram = tempHistogram;
      now = ($clinit_System() , fromDouble((new Date).getTime()));
      $setStartTimeStamp_0(this$static.activeHistogram, now);
      $setEndTimeStamp_0(this$static.inactiveHistogram, now);
      $flipPhase(this$static.recordingPhaser);
    }
    finally {
      $unlock(this$static.recordingPhaser.readerLock_0);
    }
  }

  function $validateFitAsReplacementHistogram(this$static, replacementHistogram){
    var bad;
    bad = true;
    instanceOf(replacementHistogram, Q$DoubleRecorder$InternalDoubleHistogram) && eq(replacementHistogram.containingInstanceId, this$static.activeHistogram.containingInstanceId) && (bad = false);
    if (bad) {
      throw new IllegalArgumentException_1('replacement histogram must have been obtained via a previousgetIntervalHistogram() call from this ' + $getName(Lorg_HdrHistogram_DoubleRecorder_2_classLit) + ' instance');
    }
  }

  function DoubleRecorder_0(highestToLowestValueRatio, numberOfSignificantValueDigits){
    $clinit_DoubleRecorder();
    $$init_0(this);
    this.activeHistogram = new DoubleRecorder$InternalDoubleHistogram_1(this.instanceId, fromDouble(highestToLowestValueRatio), numberOfSignificantValueDigits);
    this.inactiveHistogram = new DoubleRecorder$InternalDoubleHistogram_1(this.instanceId, fromDouble(highestToLowestValueRatio), numberOfSignificantValueDigits);
  }

  function DoubleRecorder_1(numberOfSignificantValueDigits){
    $clinit_DoubleRecorder();
    $$init_0(this);
    this.activeHistogram = new DoubleRecorder$InternalDoubleHistogram_0(this.instanceId, numberOfSignificantValueDigits);
    this.inactiveHistogram = new DoubleRecorder$InternalDoubleHistogram_0(this.instanceId, numberOfSignificantValueDigits);
  }

  defineSeed(167, 1, makeCastMap([Q$DoubleRecorder, Q$Exportable]), DoubleRecorder_0, DoubleRecorder_1);
  _.getIntervalHistogram_0 = function getIntervalHistogram(){
    return $getIntervalHistogram(this, null);
  }
  ;
  _.getIntervalHistogram_1 = function getIntervalHistogram_0(histogramToRecycle){
    return $getIntervalHistogram(this, histogramToRecycle);
  }
  ;
  _.getIntervalHistogramInto_0 = function getIntervalHistogramInto(targetHistogram){
    $performIntervalSample(this);
    $copyInto_0(this.inactiveHistogram, targetHistogram);
  }
  ;
  _.recordValue_0 = function recordValue_0(value){
    var criticalValueAtEnter;
    criticalValueAtEnter = $getAndIncrement(this.recordingPhaser.startEpochUpdater);
    try {
      $recordSingleValue_0(this.activeHistogram, value);
    }
    finally {
      $writerCriticalSectionExit(this.recordingPhaser, criticalValueAtEnter);
    }
  }
  ;
  _.recordValueWithExpectedInterval_0 = function recordValueWithExpectedInterval_0(value, expectedIntervalBetweenValueSamples){
    var criticalValueAtEnter;
    criticalValueAtEnter = $getAndIncrement(this.recordingPhaser.startEpochUpdater);
    try {
      $recordValueWithCountAndExpectedInterval_0(this.activeHistogram, value, P1_longLit, expectedIntervalBetweenValueSamples);
    }
    finally {
      $writerCriticalSectionExit(this.recordingPhaser, criticalValueAtEnter);
    }
  }
  ;
  _.reset_0 = function reset_6(){
    $performIntervalSample(this);
    $performIntervalSample(this);
  }
  ;
  _.activeHistogram = null;
  _.inactiveHistogram = null;
  var instanceIdSequencer;
  function DoubleRecorder$InternalDoubleHistogram_0(id, numberOfSignificantValueDigits){
    $clinit_DoubleHistogram();
    DoubleHistogram_1.call(this, numberOfSignificantValueDigits);
    this.containingInstanceId = id;
  }

  function DoubleRecorder$InternalDoubleHistogram_1(id, highestToLowestValueRatio, numberOfSignificantValueDigits){
    $clinit_DoubleHistogram();
    DoubleHistogram_0.call(this, toDouble(highestToLowestValueRatio), numberOfSignificantValueDigits);
    this.containingInstanceId = id;
  }

  function DoubleRecorder$InternalDoubleHistogram_2(source){
    $clinit_DoubleHistogram();
    DoubleHistogram_5.call(this, source);
    this.containingInstanceId = source.containingInstanceId;
  }

  defineSeed(168, 150, makeCastMap([Q$Serializable, Q$DoubleHistogram, Q$DoubleRecorder$InternalDoubleHistogram, Q$Exportable]), DoubleRecorder$InternalDoubleHistogram_0, DoubleRecorder$InternalDoubleHistogram_1, DoubleRecorder$InternalDoubleHistogram_2);
  _.containingInstanceId = P0_longLit;
  function $export_9(this$static){
    if (!exported_9) {
      exported_9 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_DoubleRecorder_2_classLit, this$static);
      new DoubleHistogram_ExporterImpl_0;
      $export0_9(this$static);
    }
  }

  function $export0_9(this$static){
    var pkg = declarePackage('org.HdrHistogram.DoubleRecorder');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.DoubleRecorder = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 1?(g = new DoubleRecorder_1(a[0])):a.length == 2 && (g = new DoubleRecorder_0(a[0], a[1]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.DoubleRecorder.prototype = new Object;
    __0.getIntervalHistogram = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_DoubleRecorder_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.getIntervalHistogramInto = $entry(function(a0){
          this.g.getIntervalHistogramInto_0(a0 == null?null:a0.g);
        }
    );
    __0.recordValue = $entry(function(a0){
          this.g.recordValue_0(a0);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          this.g.recordValueWithExpectedInterval_0(a0, a1);
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_DoubleRecorder_2_classLit, {0:{0:[[function(){
      return this.getIntervalHistogram_0.apply(this, arguments);
    }
      , wrap_2, undefined]], 1:[[function(){
      return this.getIntervalHistogram_1.apply(this, arguments);
    }
      , wrap_2, undefined, Lorg_HdrHistogram_DoubleHistogram_2_classLit]]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.DoubleRecorder[p] === undefined && ($wnd.org.HdrHistogram.DoubleRecorder[p] = pkg[p]);
  }

  function DoubleRecorder_ExporterImpl_0(){
    $export_9(this);
  }

  defineSeed(169, 1, {}, DoubleRecorder_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_9(){
    return $wnd.org.HdrHistogram.DoubleRecorder;
  }
  ;
  _.isAssignable = function isAssignable_9(o){
    return o != null && instanceOf(o, Q$DoubleRecorder);
  }
  ;
  var exported_9 = false;
  function $export_10(this$static){
    if (!exported_10) {
      exported_10 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_DoubleRecorder$InternalDoubleHistogram_2_classLit, this$static);
      new DoubleHistogram_ExporterImpl_0;
      $export0_10(this$static);
    }
  }



  function $export0_10(this$static){
    var pkg = declarePackage('org.HdrHistogram.DoubleRecorder.InternalDoubleHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.DoubleRecorder.InternalDoubleHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.DoubleRecorder.InternalDoubleHistogram.prototype = new Object;
    __0.add = $entry(function(a0){
          this.g.add_2(a0 == null?null:a0.g);
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          this.g.addWhileCorrectingForCoordinatedOmission_0(a0 == null?null:a0.g, a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_1();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_1());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(this.g.copyCorrectedForCoordinatedOmission_1(a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_1(a0 == null?null:a0.g);
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          this.g.copyIntoCorrectedForCoordinatedOmission_0(a0 == null?null:a0.g, a1);
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_DoubleRecorder$InternalDoubleHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_DoubleRecorder$InternalDoubleHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_1(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return this.g.getCountBetweenValues_0(a0, a1);
        }
    );
    __0.getCurrentLowestTrackableNonZeroValue = $entry(function(){
          return this.g.getCurrentLowestTrackableNonZeroValue_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_1(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestToLowestValueRatio = $entry(function(){
          return __static_wrapper_getHighestToLowestValueRatio_0(this.g);
        }
    );
    __0.getIntegerToDoubleValueConversionRatio = $entry(function(){
          return this.g.getIntegerToDoubleValueConversionRatio_0();
        }
    );
    __0.getMaxValue = $entry(function(){
          return this.g.getMaxValue_0();
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return this.g.getMinNonZeroValue_0();
        }
    );
    __0.getMinValue = $entry(function(){
          return this.g.getMinValue_0();
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return this.g.getPercentileAtOrBelowValue_0(a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_1(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount_0(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return this.g.getValueAtPercentile_0(a0);
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return this.g.highestEquivalentValue_0(a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return this.g.linearBucketValues_0(a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return this.g.logarithmicBucketValues_0(a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return this.g.lowestEquivalentValue_0(a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return this.g.medianEquivalentValue_0(a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return this.g.nextNonEquivalentValue_0(a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_DoubleRecorder$InternalDoubleHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_1(a0);
        }
    );
    __0.recordValue = $entry(function(a0){
          this.g.recordValue_0(a0);
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_1(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          this.g.recordValueWithExpectedInterval_0(a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_1();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_1(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_1(this.g, a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return this.g.sizeOfEquivalentValueRange_0(a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_1(a0 == null?null:a0.g);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return this.g.valuesAreEquivalent_0(a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_DoubleRecorder$InternalDoubleHistogram_2_classLit, {0:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 1:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 2:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.DoubleRecorder.InternalDoubleHistogram[p] === undefined && ($wnd.org.HdrHistogram.DoubleRecorder.InternalDoubleHistogram[p] = pkg[p]);
  }

  function DoubleRecorder_InternalDoubleHistogram_ExporterImpl_0(){
    $export_10(this);
  }

  function __static_wrapper_getCountAtValue_1(instance, a0){
    return toDouble($getCountAtValue(instance.integerValuesHistogram, fromDouble(a0 * instance.doubleToIntegerValueConversionRatio)));
  }

  function __static_wrapper_getEndTimeStamp_1(instance){
    return toDouble(instance.integerValuesHistogram.endTimeStampMsec);
  }

  function __static_wrapper_getHighestToLowestValueRatio_0(instance){
    return toDouble(instance.configuredHighestToLowestValueRatio);
  }

  function __static_wrapper_getStartTimeStamp_1(instance){
    return toDouble(instance.integerValuesHistogram.startTimeStampMsec);
  }

  function __static_wrapper_getTotalCount_0(instance){
    return toDouble(instance.integerValuesHistogram.getTotalCount_0());
  }

  function __static_wrapper_recordValueWithCount_1(instance, a0, a1){
    $recordValueWithCount_0(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_1(instance, a0){
    $setEndTimeStamp_0(instance, fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_1(instance, a0){
    $setStartTimeStamp_0(instance, fromDouble(a0));
  }

  defineSeed(170, 1, {}, DoubleRecorder_InternalDoubleHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_10(){
    return $wnd.org.HdrHistogram.DoubleRecorder.InternalDoubleHistogram;
  }
  ;
  _.isAssignable = function isAssignable_10(o){
    return o != null && instanceOf(o, Q$DoubleRecorder$InternalDoubleHistogram);
  }
  ;
  var exported_10 = false;
  function HdrHistogram_0(){
    new Histogram_3(P30d40_longLit, 4);
  }

  defineSeed(171, 1, {}, HdrHistogram_0);
  function $export_11(this$static){
    if (!exported_11) {
      exported_11 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit, this$static);
      $export0_11(this$static);
    }
  }

  function $export0_11(this$static){
    var pkg = declarePackage('org.HdrHistogram.ArrayIndexOutOfBoundsException');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.ArrayIndexOutOfBoundsException = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 0 && (g = new ArrayIndexOutOfBoundsException_0);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.ArrayIndexOutOfBoundsException.prototype = new Object;
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.ArrayIndexOutOfBoundsException[p] === undefined && ($wnd.org.HdrHistogram.ArrayIndexOutOfBoundsException[p] = pkg[p]);
  }

  function HdrHistogram_XArrayIndexOutOfBoundsException_ExporterImpl_0(){
    $export_11(this);
  }

  defineSeed(172, 1, {}, HdrHistogram_XArrayIndexOutOfBoundsException_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_11(){
    return $wnd.org.HdrHistogram.ArrayIndexOutOfBoundsException;
  }
  ;
  _.isAssignable = function isAssignable_11(o){
    return o != null && instanceOf(o, Q$ArrayIndexOutOfBoundsException);
  }
  ;
  var exported_11 = false;
  function $export_12(this$static){
    if (!exported_12) {
      exported_12 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Ljava_lang_IllegalArgumentException_2_classLit, this$static);
      $export0_12(this$static);
    }
  }

  function $export0_12(this$static){
    var pkg = declarePackage('org.HdrHistogram.IllegalArgumentException');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.IllegalArgumentException = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 0 && (g = new IllegalArgumentException_0);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.IllegalArgumentException.prototype = new Object;
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.IllegalArgumentException[p] === undefined && ($wnd.org.HdrHistogram.IllegalArgumentException[p] = pkg[p]);
  }

  function HdrHistogram_XIllegalArgumentException_ExporterImpl_0(){
    $export_12(this);
  }

  defineSeed(173, 1, {}, HdrHistogram_XIllegalArgumentException_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_12(){
    return $wnd.org.HdrHistogram.IllegalArgumentException;
  }
  ;
  _.isAssignable = function isAssignable_12(o){
    return o != null && instanceOf(o, Q$IllegalArgumentException);
  }
  ;
  var exported_12 = false;
  function $export_13(this$static){
    if (!exported_13) {
      exported_13 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Ljava_lang_IllegalStateException_2_classLit, this$static);
      $export0_13(this$static);
    }
  }

  function $export0_13(this$static){
    var pkg = declarePackage('org.HdrHistogram.IllegalStateException');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.IllegalStateException = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 0 && (g = new IllegalStateException_0);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.IllegalStateException.prototype = new Object;
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.IllegalStateException[p] === undefined && ($wnd.org.HdrHistogram.IllegalStateException[p] = pkg[p]);
  }

  function HdrHistogram_XIllegalStateException_ExporterImpl_0(){
    $export_13(this);
  }

  defineSeed(174, 1, {}, HdrHistogram_XIllegalStateException_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_13(){
    return $wnd.org.HdrHistogram.IllegalStateException;
  }
  ;
  _.isAssignable = function isAssignable_13(o){
    return o != null && instanceOf(o, Q$IllegalStateException);
  }
  ;
  var exported_13 = false;
  function $export_14(this$static){
    if (!exported_14) {
      exported_14 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Ljava_lang_Throwable_2_classLit, this$static);
      $export0_14(this$static);
    }
  }

  function $export0_14(this$static){
    var pkg = declarePackage('org.HdrHistogram.ThrowableXX');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.ThrowableXX = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 0 && (g = new Throwable_0);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.ThrowableXX.prototype = new Object;
    __0.getCause = $entry(function(){
          return wrap_2(this.g.getCause_0());
        }
    );
    __0.getMessage = $entry(function(){
          return this.g.getMessage_0();
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.ThrowableXX[p] === undefined && ($wnd.org.HdrHistogram.ThrowableXX[p] = pkg[p]);
  }

  function HdrHistogram_XThrowable_ExporterImpl_0(){
    $export_14(this);
  }

  defineSeed(175, 1, {}, HdrHistogram_XThrowable_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_14(){
    return $wnd.org.HdrHistogram.ThrowableXX;
  }
  ;
  _.isAssignable = function isAssignable_14(o){
    return o != null && instanceOf(o, Q$Throwable);
  }
  ;
  var exported_14 = false;
  function $copy(this$static){
    var copy;
    copy = new Histogram_6(this$static);
    $add_1(copy, this$static);
    return copy;
  }

  function $copyCorrectedForCoordinatedOmission(this$static, expectedIntervalBetweenValueSamples){
    var copy;
    copy = new Histogram_6(this$static);
    $addWhileCorrectingForCoordinatedOmission(copy, this$static, expectedIntervalBetweenValueSamples);
    return copy;
  }

  function $getCountAtIndex(this$static, index){
    return this$static.counts[$normalizeIndex(this$static, index, this$static.normalizingIndexOffset)];
  }

  function CopyLike(source){
    $clinit_AbstractHistogram();
    return new Histogram_6(source);
  }

  function Histogram_0(lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    Histogram_5.call(this, fromDouble(lowestDiscernibleValue), fromDouble(highestTrackableValue), numberOfSignificantValueDigits, true);
  }

  function Histogram_1(highestTrackableValue, numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    Histogram_4.call(this, P1_longLit, fromDouble(highestTrackableValue), numberOfSignificantValueDigits);
  }

  function Histogram_2(numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    Histogram_4.call(this, P1_longLit, P2_longLit, numberOfSignificantValueDigits);
    this.autoResize = true;
  }

  function Histogram_3(highestTrackableValue, numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    Histogram_4.call(this, P1_longLit, highestTrackableValue, numberOfSignificantValueDigits);
  }

  function Histogram_4(lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    Histogram_5.call(this, lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits, true);
  }

  function Histogram_5(lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits, allocateCountsArray){
    $clinit_AbstractHistogram();
    AbstractHistogram_0.call(this, lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits);
    allocateCountsArray && (this.counts = initDim(_3J_classLit, makeCastMap([Q$Serializable]), -1, this.countsArrayLength, 3));
    this.wordSizeInBytes = 8;
  }

  function Histogram_6(source){
    $clinit_AbstractHistogram();
    Histogram_7.call(this, source, true);
  }

  function Histogram_7(source, allocateCountsArray){
    $clinit_AbstractHistogram();
    AbstractHistogram_1.call(this, source);
    allocateCountsArray && (this.counts = initDim(_3J_classLit, makeCastMap([Q$Serializable]), -1, this.countsArrayLength, 3));
    this.wordSizeInBytes = 8;
  }

  function decodeFromByteBuffer_2(buffer, minBarForHighestTrackableValue){
    $clinit_AbstractHistogram();
    return decodeFromByteBuffer(buffer, Lorg_HdrHistogram_Histogram_2_classLit, minBarForHighestTrackableValue);
  }

  function decodeFromCompressedByteBuffer_1(buffer, minBarForHighestTrackableValue){
    $clinit_AbstractHistogram();
    return decodeFromCompressedByteBuffer(buffer, Lorg_HdrHistogram_Histogram_2_classLit, minBarForHighestTrackableValue);
  }

  defineSeed(176, 132, makeCastMap([Q$Serializable, Q$AbstractHistogram, Q$AbstractHistogramBase, Q$Histogram, Q$Exportable]), Histogram_0, Histogram_1, Histogram_2, Histogram_3, Histogram_4, Histogram_5, Histogram_6, Histogram_7);
  _._getEstimatedFootprintInBytes = function _getEstimatedFootprintInBytes(){
    return 512 + 8 * this.counts.length;
  }
  ;
  _.addToCountAtIndex = function addToCountAtIndex(index, value){
    var $t0;
    $t0 = $normalizeIndex(this, index, this.normalizingIndexOffset);
    this.counts[$t0] = add(this.counts[$t0], value);
  }
  ;
  _.addToTotalCount = function addToTotalCount(value){
    this.totalCount = add(this.totalCount, value);
  }
  ;
  _.clearCounts = function clearCounts(){
    fill_2(this.counts);
    this.totalCount = P0_longLit;
  }
  ;
  _.copy_0 = function copy_1(){
    return $copy(this);
  }
  ;
  _.copy_2 = function copy_2(){
    return $copy(this);
  }
  ;
  _.copyCorrectedForCoordinatedOmission_0 = function copyCorrectedForCoordinatedOmission_0(expectedIntervalBetweenValueSamples){
    return $copyCorrectedForCoordinatedOmission(this, expectedIntervalBetweenValueSamples);
  }
  ;
  _.copyCorrectedForCoordinatedOmission_2 = function copyCorrectedForCoordinatedOmission_1(expectedIntervalBetweenValueSamples){
    return $copyCorrectedForCoordinatedOmission(this, expectedIntervalBetweenValueSamples);
  }
  ;
  _.fillBufferFromCountsArray = function fillBufferFromCountsArray(buffer, length_0){
    if (!this.cachedDstLongBuffer || buffer != this.cachedDstByteBuffer || buffer.position_0 != this.cachedDstByteBufferPosition) {
      this.cachedDstByteBuffer = buffer;
      this.cachedDstByteBufferPosition = buffer.position_0;
      this.cachedDstLongBuffer = new LongToByteBufferAdapter_0($slice(buffer));
    }
    $rewind(this.cachedDstLongBuffer);
    $put_1(this.cachedDstLongBuffer, this.counts, length_0);
  }
  ;
  _.fillCountsArrayFromBuffer = function fillCountsArrayFromBuffer(buffer, length_0){
    $get_2(new LongToByteBufferAdapter_0($slice(buffer)), this.counts, length_0);
  }
  ;
  _.getCountAtIndex = function getCountAtIndex(index){
    return $getCountAtIndex(this, index);
  }
  ;
  _.getCountAtNormalizedIndex = function getCountAtNormalizedIndex(index){
    return this.counts[index];
  }
  ;
  _.getNormalizingIndexOffset = function getNormalizingIndexOffset(){
    return this.normalizingIndexOffset;
  }
  ;
  _.getTotalCount_0 = function getTotalCount(){
    return this.totalCount;
  }
  ;
  _.incrementCountAtIndex = function incrementCountAtIndex(index){
    var idx;
    idx = $normalizeIndex(this, index, this.normalizingIndexOffset);
    if (idx >= this.counts.length)
      throw new ArrayIndexOutOfBoundsException_0;
    this.counts[idx] = add(this.counts[idx], P1_longLit);
  }
  ;
  _.incrementTotalCount = function incrementTotalCount(){
    this.totalCount = add(this.totalCount, P1_longLit);
  }
  ;
  _.readObject = function readObject(o){
    $clinit_AbstractHistogram();
    null.nullMethod();
  }
  ;
  _.resize = function resize(newHighestTrackableValue){
    var countsDelta, lengthToCopy, newNormalizedZeroIndex, oldNormalizedZeroIndex;
    oldNormalizedZeroIndex = $normalizeIndex(this, 0, this.normalizingIndexOffset);
    $establishSize(this, newHighestTrackableValue);
    countsDelta = this.countsArrayLength - this.counts.length;
    this.counts = copyOf_0(this.counts, this.countsArrayLength);
    if (oldNormalizedZeroIndex != 0) {
      newNormalizedZeroIndex = oldNormalizedZeroIndex + countsDelta;
      lengthToCopy = this.countsArrayLength - countsDelta - oldNormalizedZeroIndex;
      arraycopy(this.counts, oldNormalizedZeroIndex, this.counts, newNormalizedZeroIndex, lengthToCopy);
    }
  }
  ;
  _.setCountAtIndex = function setCountAtIndex(index, value){
    this.counts[$normalizeIndex(this, index, this.normalizingIndexOffset)] = value;
  }
  ;
  _.setCountAtNormalizedIndex = function setCountAtNormalizedIndex(index, value){
    this.counts[index] = value;
  }
  ;
  _.setNormalizingIndexOffset = function setNormalizingIndexOffset(normalizingIndexOffset){
    this.normalizingIndexOffset = normalizingIndexOffset;
  }
  ;
  _.setTotalCount = function setTotalCount(totalCount){
    this.totalCount = totalCount;
  }
  ;
  _.shiftNormalizingIndexByOffset = function shiftNormalizingIndexByOffset(offsetToAdd, lowestHalfBucketPopulated){
    $nonConcurrentNormalizingIndexShift(this, offsetToAdd, lowestHalfBucketPopulated);
  }
  ;
  _.cachedDstByteBuffer = null;
  _.cachedDstByteBufferPosition = 0;
  _.cachedDstLongBuffer = null;
  _.counts = null;
  _.normalizingIndexOffset = 0;
  _.totalCount = P0_longLit;
  function $reset_5(this$static){
    this$static.valueIteratedTo = P0_longLit;
    this$static.valueIteratedFrom = P0_longLit;
    this$static.countAtValueIteratedTo = P0_longLit;
    this$static.countAddedInThisIterationStep = P0_longLit;
    this$static.totalCountToThisValue = P0_longLit;
    this$static.percentile = 0;
    this$static.percentileLevelIteratedTo = 0;
  }

  function $set(this$static, valueIteratedTo, valueIteratedFrom, countAtValueIteratedTo, countInThisIterationStep, totalCountToThisValue, percentile, percentileLevelIteratedTo, integerToDoubleValueConversionRatio){
    this$static.valueIteratedTo = valueIteratedTo;
    this$static.valueIteratedFrom = valueIteratedFrom;
    this$static.countAtValueIteratedTo = countAtValueIteratedTo;
    this$static.countAddedInThisIterationStep = countInThisIterationStep;
    this$static.totalCountToThisValue = totalCountToThisValue;
    this$static.percentile = percentile;
    this$static.percentileLevelIteratedTo = percentileLevelIteratedTo;
    this$static.integerToDoubleValueConversionRatio = integerToDoubleValueConversionRatio;
  }

  function HistogramIterationValue_0(){
  }

  defineSeed(177, 1, makeCastMap([Q$HistogramIterationValue, Q$Exportable]), HistogramIterationValue_0);
  _.getDoubleValueIteratedFrom_0 = function getDoubleValueIteratedFrom(){
    return toDouble(this.valueIteratedFrom) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getDoubleValueIteratedTo_0 = function getDoubleValueIteratedTo(){
    return toDouble(this.valueIteratedTo) * this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getIntegerToDoubleValueConversionRatio_0 = function getIntegerToDoubleValueConversionRatio_0(){
    return this.integerToDoubleValueConversionRatio;
  }
  ;
  _.getPercentile_0 = function getPercentile_0(){
    return this.percentile;
  }
  ;
  _.getPercentileLevelIteratedTo_0 = function getPercentileLevelIteratedTo_0(){
    return this.percentileLevelIteratedTo;
  }
  ;
  _.toString$ = function toString_25(){
    return 'valueIteratedTo:' + toString_2(this.valueIteratedTo) + ', prevValueIteratedTo:' + toString_2(this.valueIteratedFrom) + ', countAtValueIteratedTo:' + toString_2(this.countAtValueIteratedTo) + ', countAddedInThisIterationStep:' + toString_2(this.countAddedInThisIterationStep) + ', totalCountToThisValue:' + toString_2(this.totalCountToThisValue) + ', percentile:' + this.percentile + ', percentileLevelIteratedTo:' + this.percentileLevelIteratedTo;
  }
  ;
  _.countAddedInThisIterationStep = P0_longLit;
  _.countAtValueIteratedTo = P0_longLit;
  _.integerToDoubleValueConversionRatio = 0;
  _.percentile = 0;
  _.percentileLevelIteratedTo = 0;
  _.totalCountToThisValue = P0_longLit;
  _.valueIteratedFrom = P0_longLit;
  _.valueIteratedTo = P0_longLit;
  function $export_15(this$static){
    if (!exported_15) {
      exported_15 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_HistogramIterationValue_2_classLit, this$static);
      $export0_15(this$static);
    }
  }

  function $export0_15(this$static){
    var pkg = declarePackage('org.HdrHistogram.HistogramIterationValue');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.HistogramIterationValue = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.HistogramIterationValue.prototype = new Object;
    __0.getCountAddedInThisIterationStep = $entry(function(){
          return __static_wrapper_getCountAddedInThisIterationStep_0(this.g);
        }
    );
    __0.getCountAtValueIteratedTo = $entry(function(){
          return __static_wrapper_getCountAtValueIteratedTo_0(this.g);
        }
    );
    __0.getDoubleValueIteratedFrom = $entry(function(){
          return this.g.getDoubleValueIteratedFrom_0();
        }
    );
    __0.getDoubleValueIteratedTo = $entry(function(){
          return this.g.getDoubleValueIteratedTo_0();
        }
    );
    __0.getIntegerToDoubleValueConversionRatio = $entry(function(){
          return this.g.getIntegerToDoubleValueConversionRatio_0();
        }
    );
    __0.getPercentile = $entry(function(){
          return this.g.getPercentile_0();
        }
    );
    __0.getPercentileLevelIteratedTo = $entry(function(){
          return this.g.getPercentileLevelIteratedTo_0();
        }
    );
    __0.getTotalCountToThisValue = $entry(function(){
          return __static_wrapper_getTotalCountToThisValue_0(this.g);
        }
    );
    __0.getValueIteratedFrom = $entry(function(){
          return __static_wrapper_getValueIteratedFrom(this.g);
        }
    );
    __0.getValueIteratedTo = $entry(function(){
          return __static_wrapper_getValueIteratedTo(this.g);
        }
    );
    __0.toString = $entry(function(){
          return this.g.toString$();
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.HistogramIterationValue[p] === undefined && ($wnd.org.HdrHistogram.HistogramIterationValue[p] = pkg[p]);
  }

  function HistogramIterationValue_ExporterImpl_0(){
    $export_15(this);
  }

  function __static_wrapper_getCountAddedInThisIterationStep_0(instance){
    return toDouble(instance.countAddedInThisIterationStep);
  }

  function __static_wrapper_getCountAtValueIteratedTo_0(instance){
    return toDouble(instance.countAtValueIteratedTo);
  }

  function __static_wrapper_getTotalCountToThisValue_0(instance){
    return toDouble(instance.totalCountToThisValue);
  }

  function __static_wrapper_getValueIteratedFrom(instance){
    return toDouble(instance.valueIteratedFrom);
  }

  function __static_wrapper_getValueIteratedTo(instance){
    return toDouble(instance.valueIteratedTo);
  }

  defineSeed(178, 1, {}, HistogramIterationValue_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_15(){
    return $wnd.org.HdrHistogram.HistogramIterationValue;
  }
  ;
  _.isAssignable = function isAssignable_15(o){
    return o != null && instanceOf(o, Q$HistogramIterationValue);
  }
  ;
  var exported_15 = false;
  function $export_16(this$static){
    if (!exported_16) {
      exported_16 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_Histogram_2_classLit, this$static);
      new AbstractHistogram_ExporterImpl_0;
      $export0_16(this$static);
    }
  }



  function $export0_16(this$static){
    var pkg = declarePackage('org.HdrHistogram.Histogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.Histogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 1?(g = new Histogram_2(a[0])):a.length == 2?(g = new Histogram_1(a[0], a[1])):a.length == 3 && (g = new Histogram_0(a[0], a[1], a[2]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.Histogram.prototype = new Object;
    $wnd.org.HdrHistogram.Histogram.CopyLike = $entry(function(a0){
          return wrap_2(CopyLike(gwtInstance(a0)));
        }
    );
    __0._getCountAtIndex = $entry(function(a0){
          return __static_wrapper__getCountAtIndex_0(this.g, a0);
        }
    );
    __0.add = $entry(function(a0){
          this.g.add_1(gwtInstance(a0));
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_addWhileCorrectingForCoordinatedOmission_0(this.g, gwtInstance(a0), a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_0();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_2());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(__static_wrapper_copyCorrectedForCoordinatedOmission_0(this.g, a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_0(gwtInstance(a0));
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_copyIntoCorrectedForCoordinatedOmission_0(this.g, gwtInstance(a0), a1);
        }
    );
    $wnd.org.HdrHistogram.Histogram.decodeFromByteBuffer = $entry(function(a0, a1){
          return wrap_2(__static_wrapper_decodeFromByteBuffer_1(gwtInstance(a0), a1));
        }
    );
    $wnd.org.HdrHistogram.Histogram.decodeFromCompressedByteBuffer = $entry(function(a0, a1){
          return wrap_2(__static_wrapper_decodeFromCompressedByteBuffer_1(gwtInstance(a0), a1));
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_Histogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_Histogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.getBucketCount = $entry(function(){
          return this.g.getBucketCount_0();
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_2(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return __static_wrapper_getCountBetweenValues_0(this.g, a0, a1);
        }
    );
    __0.getCountsArrayLength = $entry(function(){
          return this.g.getCountsArrayLength_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_2(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestTrackableValue = $entry(function(){
          return __static_wrapper_getHighestTrackableValue_0(this.g);
        }
    );
    __0.getLowestDiscernibleValue = $entry(function(){
          return __static_wrapper_getLowestDiscernibleValue_0(this.g);
        }
    );
    __0.getMaxValue = $entry(function(){
          return __static_wrapper_getMaxValue_0(this.g);
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return __static_wrapper_getMinNonZeroValue_0(this.g);
        }
    );
    __0.getMinValue = $entry(function(){
          return __static_wrapper_getMinValue_0(this.g);
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return __static_wrapper_getPercentileAtOrBelowValue_0(this.g, a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_2(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getSubBucketCount = $entry(function(){
          return this.g.getSubBucketCount_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount_1(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return __static_wrapper_getValueAtPercentile_0(this.g, a0);
        }
    );
    __0.getWordSizeInBytes = $entry(function(){
          return this.g.getWordSizeInBytes_0();
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return __static_wrapper_highestEquivalentValue_0(this.g, a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return __static_wrapper_linearBucketValues_0(this.g, a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return __static_wrapper_logarithmicBucketValues_0(this.g, a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return __static_wrapper_lowestEquivalentValue_0(this.g, a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return __static_wrapper_medianEquivalentValue_0(this.g, a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return __static_wrapper_nextNonEquivalentValue_0(this.g, a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_Histogram_2_classLit, 3, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_0(a0);
        }
    );
    __0.recordValue = $entry(function(a0, a1){
          runDispatch(this.g, Lorg_HdrHistogram_Histogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_2(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          __static_wrapper_recordValueWithExpectedInterval_0(this.g, a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_0();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_2(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_2(this.g, a0);
        }
    );
    __0.shiftValuesLeft = $entry(function(a0){
          this.g.shiftValuesLeft_0(a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return __static_wrapper_sizeOfEquivalentValueRange_0(this.g, a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_0(gwtInstance(a0));
        }
    );
    __0.valueFromIndex = $entry(function(a0){
          return __static_wrapper_valueFromIndex_0(this.g, a0);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return __static_wrapper_valuesAreEquivalent_0(this.g, a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_Histogram_2_classLit, {0:{1:[[__static_wrapper_recordValue_1, null, unshift, 'number']], 2:[[__static_wrapper_recordValue_2, null, unshift, 'number', 'number']]}, 1:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 2:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 3:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.Histogram[p] === undefined && ($wnd.org.HdrHistogram.Histogram[p] = pkg[p]);
  }

  function Histogram_ExporterImpl_0(){
    $export_16(this);
  }

  function __static_wrapper__getCountAtIndex_0(instance, a0){
    return toDouble($getCountAtIndex(instance, a0));
  }

  function __static_wrapper_addWhileCorrectingForCoordinatedOmission_0(instance, a0, a1){
    $addWhileCorrectingForCoordinatedOmission(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_copyCorrectedForCoordinatedOmission_0(instance, a0){
    return $copyCorrectedForCoordinatedOmission(instance, fromDouble(a0));
  }

  function __static_wrapper_copyIntoCorrectedForCoordinatedOmission_0(instance, a0, a1){
    $copyIntoCorrectedForCoordinatedOmission(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_decodeFromByteBuffer_1(a0, a1){
    return $clinit_AbstractHistogram() , decodeFromByteBuffer(a0, Lorg_HdrHistogram_Histogram_2_classLit, fromDouble(a1));
  }

  function __static_wrapper_decodeFromCompressedByteBuffer_1(a0, a1){
    return $clinit_AbstractHistogram() , decodeFromCompressedByteBuffer(a0, Lorg_HdrHistogram_Histogram_2_classLit, fromDouble(a1));
  }

  function __static_wrapper_getCountAtValue_2(instance, a0){
    return toDouble($getCountAtValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_getCountBetweenValues_0(instance, a0, a1){
    return toDouble($getCountBetweenValues(instance, fromDouble(a0), fromDouble(a1)));
  }

  function __static_wrapper_getEndTimeStamp_2(instance){
    return toDouble(instance.endTimeStampMsec);
  }

  function __static_wrapper_getHighestTrackableValue_0(instance){
    return toDouble(instance.highestTrackableValue);
  }

  function __static_wrapper_getLowestDiscernibleValue_0(instance){
    return toDouble(instance.lowestDiscernibleValue);
  }

  function __static_wrapper_getMaxValue_0(instance){
    return toDouble(eq(instance.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(instance, instance.maxValue));
  }

  function __static_wrapper_getMinNonZeroValue_0(instance){
    return toDouble(eq(instance.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(instance, instance.minNonZeroValue));
  }

  function __static_wrapper_getMinValue_0(instance){
    return toDouble($getMinValue(instance));
  }

  function __static_wrapper_getPercentileAtOrBelowValue_0(instance, a0){
    return $getPercentileAtOrBelowValue(instance, fromDouble(a0));
  }

  function __static_wrapper_getStartTimeStamp_2(instance){
    return toDouble(instance.startTimeStampMsec);
  }

  function __static_wrapper_getTotalCount_1(instance){
    return toDouble(instance.totalCount);
  }

  function __static_wrapper_getValueAtPercentile_0(instance, a0){
    return toDouble($getValueAtPercentile(instance, a0));
  }

  function __static_wrapper_highestEquivalentValue_0(instance, a0){
    return toDouble($highestEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_linearBucketValues_0(instance, a0){
    return new AbstractHistogram$LinearBucketValues_0(fromDouble(a0));
  }

  function __static_wrapper_logarithmicBucketValues_0(instance, a0, a1){
    return new AbstractHistogram$LogarithmicBucketValues_0(fromDouble(a0));
  }

  function __static_wrapper_lowestEquivalentValue_0(instance, a0){
    return toDouble($lowestEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_medianEquivalentValue_0(instance, a0){
    return toDouble($medianEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_nextNonEquivalentValue_0(instance, a0){
    return toDouble($nextNonEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_recordValue_1(instance, a0){
    $recordSingleValue(instance, fromDouble(a0));
  }

  function __static_wrapper_recordValue_2(instance, a0, a1){
    $recordSingleValueWithExpectedInterval(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithCount_2(instance, a0, a1){
    $recordValueWithCount(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithExpectedInterval_0(instance, a0, a1){
    $recordSingleValueWithExpectedInterval(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_2(instance, a0){
    $setEndTimeStamp(instance, fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_2(instance, a0){
    $setStartTimeStamp(instance, fromDouble(a0));
  }

  function __static_wrapper_sizeOfEquivalentValueRange_0(instance, a0){
    return toDouble($sizeOfEquivalentValueRange(instance, fromDouble(a0)));
  }

  function __static_wrapper_valueFromIndex_0(instance, a0){
    return toDouble($valueFromIndex(instance, a0));
  }

  function __static_wrapper_valuesAreEquivalent_0(instance, a0, a1){
    return $valuesAreEquivalent(instance, fromDouble(a0), fromDouble(a1));
  }

  defineSeed(179, 1, {}, Histogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_16(){
    return $wnd.org.HdrHistogram.Histogram;
  }
  ;
  _.isAssignable = function isAssignable_16(o){
    return o != null && instanceOf(o, Q$Histogram);
  }
  ;
  var exported_16 = false;
  function Histogram_MC_0(){
    this.ifaces = [];
    this.classes = [];
  }

  function doEnhance(toEnhance){
    var classMap, map, map_0, map_1, map_2;
    classMap = new Histogram_MC_0;
    toEnhance.classData = classMap;
    remember(getHashCode(toEnhance), classMap);
    map = getMembers(toEnhance);
    $addMethod(map, new Histogram_m_getCountAtIndex_0);
    $addMethod(map, new Histogram_m_getCountAtNormalizedIndex_0);
    $addMethod(map, new Histogram_m_incrementCountAtIndex_0);
    $addMethod(map, new Histogram_m_addToCountAtIndex_0);
    $addMethod(map, new Histogram_m_setCountAtIndex_0);
    $addMethod(map, new Histogram_m_setCountAtNormalizedIndex_0);
    $addMethod(map, new Histogram_m_getNormalizingIndexOffset_0);
    $addMethod(map, new Histogram_m_setNormalizingIndexOffset_0);
    $addMethod(map, new Histogram_m_shiftNormalizingIndexByOffset_0);
    $addMethod(map, new Histogram_m_clearCounts_0);
    $addMethod(map, new Histogram_m_copy_0);
    $addMethod(map, new Histogram_m_copyCorrectedForCoordinatedOmission_0);
    $addMethod(map, new Histogram_m_getTotalCount_0);
    $addMethod(map, new Histogram_m_setTotalCount_0);
    $addMethod(map, new Histogram_m_incrementTotalCount_0);
    $addMethod(map, new Histogram_m_addToTotalCount_0);
    $addMethod(map, new Histogram_m__getEstimatedFootprintInBytes_0);
    $addMethod(map, new Histogram_m_resize_0);
    $addMethod(map, new Histogram_m_CopyLike_0);
    $addMethod(map, new Histogram_m_decodeFromByteBuffer_0);
    $addMethod(map, new Histogram_m_decodeFromCompressedByteBuffer_0);
    $addMethod(map, new Histogram_m_readObject_0);
    $addMethod(map, new Histogram_m_fillCountsArrayFromBuffer_0);
    $addMethod(map, new Histogram_m_fillBufferFromCountsArray_0);
    map_0 = getMembers(toEnhance);
    $addField_0(map_0, new Long_Field_0(Lorg_HdrHistogram_Histogram_2_classLit, getAccessor_4()));
    $addField_0(map_0, new Field_0(_3J_classLit, Lorg_HdrHistogram_Histogram_2_classLit, 'counts', 0, getAccessor_2()));
    $addField_0(map_0, new Int_Field_0(Lorg_HdrHistogram_Histogram_2_classLit, 'normalizingIndexOffset', 0, getAccessor_3()));
    $addField_0(map_0, new Field_0(Ljava_nio_LongBuffer_2_classLit, Lorg_HdrHistogram_Histogram_2_classLit, 'cachedDstLongBuffer', 2, getAccessor_1()));
    $addField_0(map_0, new Field_0(Ljava_nio_ByteBuffer_2_classLit, Lorg_HdrHistogram_Histogram_2_classLit, 'cachedDstByteBuffer', 2, getAccessor()));
    $addField_0(map_0, new Int_Field_0(Lorg_HdrHistogram_Histogram_2_classLit, 'cachedDstByteBufferPosition', 2, getAccessor_0()));
    map_1 = getMembers(toEnhance);
    $addConstructor_0(map_1, (!ctor_1 && (ctor_1 = new Constructor_0(Lorg_HdrHistogram_Histogram_2_classLit, 1, invoker_1(), ($clinit_ConstPool$ArrayConsts() , $clinit_Const0_0() , CLS_ARR_0), EMPTY_CLASSES)) , ctor_1));
    $addConstructor_0(map_1, (!ctor_2 && (ctor_2 = new Constructor_0(Lorg_HdrHistogram_Histogram_2_classLit, 1, invoker_2(), ($clinit_Const0_1() , $clinit_Const0_1() , CLS_ARR_1), ($clinit_ConstPool$ArrayConsts() , EMPTY_CLASSES))) , ctor_2));
    $addConstructor_0(map_1, (!ctor_0 && (ctor_0 = new Constructor_0(Lorg_HdrHistogram_Histogram_2_classLit, 1, invoker_0(), ($clinit_ConstPool$ArrayConsts() , $clinit_Const0_2() , CLS_ARR_2), EMPTY_CLASSES)) , ctor_0));
    $addConstructor_0(map_1, (!ctor_3 && (ctor_3 = new Constructor_0(Lorg_HdrHistogram_Histogram_2_classLit, 1, invoker_3(), ($clinit_Const0_1() , $clinit_Const0_3() , CLS_ARR_3), ($clinit_ConstPool$ArrayConsts() , EMPTY_CLASSES))) , ctor_3));
    $addConstructor_0(map_1, (!ctor && (ctor = new Constructor_0(Lorg_HdrHistogram_Histogram_2_classLit, 1, invoker(), ($clinit_ConstPool$ArrayConsts() , $clinit_Const0_4() , CLS_ARR_4), EMPTY_CLASSES)) , ctor));
    $addConstructor_0(map_1, (!ctor_5 && (ctor_5 = new Constructor_0(Lorg_HdrHistogram_Histogram_2_classLit, 1, invoker_5(), ($clinit_Const0_1() , $clinit_Const0_5() , CLS_ARR_5), ($clinit_ConstPool$ArrayConsts() , EMPTY_CLASSES))) , ctor_5));
    $addConstructor_0(map_1, (!ctor_6 && (ctor_6 = new Constructor_0(Lorg_HdrHistogram_Histogram_2_classLit, 0, invoker_6(), ($clinit_ConstPool$ArrayConsts() , $clinit_Const0_6() , CLS_ARR_6), EMPTY_CLASSES)) , ctor_6));
    $addConstructor_0(map_1, (!ctor_4 && (ctor_4 = new Constructor_0(Lorg_HdrHistogram_Histogram_2_classLit, 0, invoker_4(), ($clinit_ConstPool$ArrayConsts() , $clinit_Const0_7() , CLS_ARR_7), EMPTY_CLASSES)) , ctor_4));
    map_2 = toEnhance.classData;
    map_2.addClass(Lorg_HdrHistogram_AbstractHistogram$Percentiles_2_classLit, map_2.classes);
    map_2.addClass(Lorg_HdrHistogram_AbstractHistogram$LogarithmicBucketValues_2_classLit, map_2.classes);
    map_2.addClass(Lorg_HdrHistogram_AbstractHistogram$RecordedValues_2_classLit, map_2.classes);
    map_2.addClass(Lorg_HdrHistogram_AbstractHistogram$AllValues_2_classLit, map_2.classes);
    map_2.addClass(Lorg_HdrHistogram_AbstractHistogram$LinearBucketValues_2_classLit, map_2.classes);
    map_2.addClass(Lorg_timepedia_exporter_client_Exportable_2_classLit, map_2.ifaces);
  }

  defineSeed(180, 40, {}, Histogram_MC_0);
  function invoker(){
    return function(A, B, C){
      return new Histogram_0(A.doubleValue(), B.doubleValue(), C.doubleValue());
    }
        ;
  }

  var ctor = null;
  function invoker_0(){
    return function(A, B){
      return new Histogram_1(A.doubleValue(), B.doubleValue());
    }
        ;
  }

  var ctor_0 = null;
  function invoker_1(){
    return function(A){
      return new Histogram_2(A.doubleValue());
    }
        ;
  }

  var ctor_1 = null;
  function invoker_2(){
    return function(A, B){
      return new Histogram_3(A.longValue(), B.doubleValue());
    }
        ;
  }

  var ctor_2 = null;
  function invoker_3(){
    return function(A, B, C){
      return new Histogram_4(A.longValue(), B.longValue(), C.doubleValue());
    }
        ;
  }

  var ctor_3 = null;
  function invoker_4(){
    return function(A, B, C, D){
      return new Histogram_5(A.longValue(), B.longValue(), C.doubleValue(), D.booleanValue());
    }
        ;
  }

  var ctor_4 = null;
  function invoker_5(){
    return function(A){
      return new Histogram_6(A);
    }
        ;
  }

  var ctor_5 = null;
  function invoker_6(){
    return function(A, B){
      return new Histogram_7(A, B.booleanValue());
    }
        ;
  }

  var ctor_6 = null;
  function getAccessor(){
    return {annos:function(){
      return [];
    }
      , getter:function(o){
        nullCheck(o);
        return o.cachedDstByteBuffer;
      }
      , setter:function(o, v){
        nullCheck(o);
        o.cachedDstByteBuffer = v;
      }
    };
  }

  function getAccessor_0(){
    return {annos:function(){
      return [];
    }
      , getter:function(o){
        nullCheck(o);
        return o.cachedDstByteBufferPosition;
      }
      , setter:function(o, v){
        nullCheck(o);
        o.cachedDstByteBufferPosition = v;
      }
    };
  }

  function getAccessor_1(){
    return {annos:function(){
      return [];
    }
      , getter:function(o){
        nullCheck(o);
        return o.cachedDstLongBuffer;
      }
      , setter:function(o, v){
        nullCheck(o);
        o.cachedDstLongBuffer = v;
      }
    };
  }

  function getAccessor_2(){
    return {annos:function(){
      return [];
    }
      , getter:function(o){
        nullCheck(o);
        return o.counts;
      }
      , setter:function(o, v){
        nullCheck(o);
        o.counts = v;
      }
    };
  }

  function getAccessor_3(){
    return {annos:function(){
      return [];
    }
      , getter:function(o){
        nullCheck(o);
        return o.normalizingIndexOffset;
      }
      , setter:function(o, v){
        nullCheck(o);
        o.normalizingIndexOffset = v;
      }
    };
  }

  function getAccessor_4(){
    return {annos:function(){
      return [];
    }
      , getter:function(o){
        nullCheck(o);
        return o.totalCount;
      }
      , setter:function(o, v){
        nullCheck(o);
        o.totalCount = v;
      }
    };
  }

  function Histogram_m_CopyLike_0(){
    Method_0.call(this, invoker_7());
  }

  function invoker_7(){
    return function(o, A){
      return CopyLike(A);
    }
        ;
  }

  defineSeed(195, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_CopyLike_0);
  _.getDeclaringClass = function getDeclaringClass_0(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_0(){
    return 9;
  }
  ;
  _.getName = function getName_1(){
    return 'CopyLike';
  }
  ;
  _.getParameterTypes = function getParameterTypes_0(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Lorg_HdrHistogram_AbstractHistogram_2_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_0(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  function Histogram_m__getEstimatedFootprintInBytes_0(){
    Method_0.call(this, invoker_8());
  }

  function invoker_8(){
    return function(o){
      nullCheck(o);
      return new Integer_0(o._getEstimatedFootprintInBytes());
    }
        ;
  }

  defineSeed(196, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m__getEstimatedFootprintInBytes_0);
  _.getDeclaringClass = function getDeclaringClass_1(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_1(){
    return 0;
  }
  ;
  _.getName = function getName_2(){
    return '_getEstimatedFootprintInBytes';
  }
  ;
  _.getReturnType = function getReturnType_1(){
    return I_classLit;
  }
  ;
  function Histogram_m_addToCountAtIndex_0(){
    Method_0.call(this, invoker_9());
  }

  function invoker_9(){
    return function(o, A, B){
      nullCheck(o);
      o.addToCountAtIndex(A.doubleValue(), B.longValue());
    }
        ;
  }

  defineSeed(197, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_addToCountAtIndex_0);
  _.getDeclaringClass = function getDeclaringClass_2(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_2(){
    return 0;
  }
  ;
  _.getName = function getName_3(){
    return 'addToCountAtIndex';
  }
  ;
  _.getParameterTypes = function getParameterTypes_1(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit, J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_2(){
    return V_classLit;
  }
  ;
  function Histogram_m_addToTotalCount_0(){
    Method_0.call(this, invoker_10());
  }

  function invoker_10(){
    return function(o, A){
      nullCheck(o);
      o.addToTotalCount(A.longValue());
    }
        ;
  }

  defineSeed(198, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_addToTotalCount_0);
  _.getDeclaringClass = function getDeclaringClass_3(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_3(){
    return 0;
  }
  ;
  _.getName = function getName_4(){
    return 'addToTotalCount';
  }
  ;
  _.getParameterTypes = function getParameterTypes_2(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_3(){
    return V_classLit;
  }
  ;
  function Histogram_m_clearCounts_0(){
    Method_0.call(this, invoker_11());
  }

  function invoker_11(){
    return function(o){
      nullCheck(o);
      o.clearCounts();
    }
        ;
  }

  defineSeed(199, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_clearCounts_0);
  _.getDeclaringClass = function getDeclaringClass_4(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_4(){
    return 0;
  }
  ;
  _.getName = function getName_5(){
    return 'clearCounts';
  }
  ;
  _.getReturnType = function getReturnType_4(){
    return V_classLit;
  }
  ;
  function Histogram_m_copy_0(){
    Method_0.call(this, invoker_12());
  }

  function invoker_12(){
    return function(o){
      nullCheck(o);
      return o.copy_2();
    }
        ;
  }

  defineSeed(200, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_copy_0);
  _.getDeclaringClass = function getDeclaringClass_5(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_5(){
    return 1;
  }
  ;
  _.getName = function getName_6(){
    return 'copy';
  }
  ;
  _.getReturnType = function getReturnType_5(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  function Histogram_m_copyCorrectedForCoordinatedOmission_0(){
    Method_0.call(this, invoker_13());
  }

  function invoker_13(){
    return function(o, A){
      nullCheck(o);
      return o.copyCorrectedForCoordinatedOmission_2(A.longValue());
    }
        ;
  }

  defineSeed(201, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_copyCorrectedForCoordinatedOmission_0);
  _.getDeclaringClass = function getDeclaringClass_6(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_6(){
    return 1;
  }
  ;
  _.getName = function getName_7(){
    return 'copyCorrectedForCoordinatedOmission';
  }
  ;
  _.getParameterTypes = function getParameterTypes_3(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_6(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  function Histogram_m_decodeFromByteBuffer_0(){
    Method_0.call(this, invoker_14());
  }

  function invoker_14(){
    return function(o, A, B){
      return decodeFromByteBuffer_2(A, B.longValue());
    }
        ;
  }

  defineSeed(202, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_decodeFromByteBuffer_0);
  _.getDeclaringClass = function getDeclaringClass_7(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_7(){
    return 9;
  }
  ;
  _.getName = function getName_8(){
    return 'decodeFromByteBuffer';
  }
  ;
  _.getParameterTypes = function getParameterTypes_4(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Ljava_nio_ByteBuffer_2_classLit, J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_7(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  function Histogram_m_decodeFromCompressedByteBuffer_0(){
    Method_0.call(this, invoker_15());
  }

  function invoker_15(){
    return function(o, A, B){
      return decodeFromCompressedByteBuffer_1(A, B.longValue());
    }
        ;
  }

  defineSeed(203, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_decodeFromCompressedByteBuffer_0);
  _.getDeclaringClass = function getDeclaringClass_8(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getExceptionTypes = function getExceptionTypes_0(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Ljava_util_zip_DataFormatException_2_classLit]);
  }
  ;
  _.getModifiers = function getModifiers_8(){
    return 9;
  }
  ;
  _.getName = function getName_9(){
    return 'decodeFromCompressedByteBuffer';
  }
  ;
  _.getParameterTypes = function getParameterTypes_5(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Ljava_nio_ByteBuffer_2_classLit, J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_8(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  function Histogram_m_fillBufferFromCountsArray_0(){
    Method_0.call(this, invoker_16());
  }

  function invoker_16(){
    return function(o, A, B){
      nullCheck(o);
      o.fillBufferFromCountsArray(A, B.doubleValue());
    }
        ;
  }

  defineSeed(204, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_fillBufferFromCountsArray_0);
  _.getDeclaringClass = function getDeclaringClass_9(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_9(){
    return 0;
  }
  ;
  _.getName = function getName_10(){
    return 'fillBufferFromCountsArray';
  }
  ;
  _.getParameterTypes = function getParameterTypes_6(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Ljava_nio_ByteBuffer_2_classLit, I_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_9(){
    return V_classLit;
  }
  ;
  function Histogram_m_fillCountsArrayFromBuffer_0(){
    Method_0.call(this, invoker_17());
  }

  function invoker_17(){
    return function(o, A, B){
      nullCheck(o);
      o.fillCountsArrayFromBuffer(A, B.doubleValue());
    }
        ;
  }

  defineSeed(205, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_fillCountsArrayFromBuffer_0);
  _.getDeclaringClass = function getDeclaringClass_10(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_10(){
    return 0;
  }
  ;
  _.getName = function getName_11(){
    return 'fillCountsArrayFromBuffer';
  }
  ;
  _.getParameterTypes = function getParameterTypes_7(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Ljava_nio_ByteBuffer_2_classLit, I_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_10(){
    return V_classLit;
  }
  ;


  function Histogram_m_getCountAtIndex_0(){
    Method_0.call(this, invoker_18());
  }

  function invoker_18(){
    return function(o, A){
      nullCheck(o);
      return boxLong(o.getCountAtIndex(A.doubleValue()));
    }
        ;
  }

  defineSeed(206, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_getCountAtIndex_0);
  _.getDeclaringClass = function getDeclaringClass_11(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_11(){
    return 0;
  }
  ;
  _.getName = function getName_12(){
    return 'getCountAtIndex';
  }
  ;
  _.getParameterTypes = function getParameterTypes_8(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_11(){
    return J_classLit;
  }
  ;
  function Histogram_m_getCountAtNormalizedIndex_0(){
    Method_0.call(this, invoker_19());
  }

  function invoker_19(){
    return function(o, A){
      nullCheck(o);
      return boxLong(o.getCountAtNormalizedIndex(A.doubleValue()));
    }
        ;
  }

  defineSeed(207, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_getCountAtNormalizedIndex_0);
  _.getDeclaringClass = function getDeclaringClass_12(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_12(){
    return 0;
  }
  ;
  _.getName = function getName_13(){
    return 'getCountAtNormalizedIndex';
  }
  ;
  _.getParameterTypes = function getParameterTypes_9(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_12(){
    return J_classLit;
  }
  ;
  function Histogram_m_getNormalizingIndexOffset_0(){
    Method_0.call(this, invoker_20());
  }

  function invoker_20(){
    return function(o){
      nullCheck(o);
      return new Integer_0(o.getNormalizingIndexOffset());
    }
        ;
  }

  defineSeed(208, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_getNormalizingIndexOffset_0);
  _.getDeclaringClass = function getDeclaringClass_13(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_13(){
    return 0;
  }
  ;
  _.getName = function getName_14(){
    return 'getNormalizingIndexOffset';
  }
  ;
  _.getReturnType = function getReturnType_13(){
    return I_classLit;
  }
  ;
  function Histogram_m_getTotalCount_0(){
    Method_0.call(this, invoker_21());
  }

  function invoker_21(){
    return function(o){
      nullCheck(o);
      return boxLong(o.getTotalCount_0());
    }
        ;
  }

  defineSeed(209, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_getTotalCount_0);
  _.getDeclaringClass = function getDeclaringClass_14(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_14(){
    return 1;
  }
  ;
  _.getName = function getName_15(){
    return 'getTotalCount';
  }
  ;
  _.getReturnType = function getReturnType_14(){
    return J_classLit;
  }
  ;
  function Histogram_m_incrementCountAtIndex_0(){
    Method_0.call(this, invoker_22());
  }

  function invoker_22(){
    return function(o, A){
      nullCheck(o);
      o.incrementCountAtIndex(A.doubleValue());
    }
        ;
  }

  defineSeed(210, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_incrementCountAtIndex_0);
  _.getDeclaringClass = function getDeclaringClass_15(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_15(){
    return 0;
  }
  ;
  _.getName = function getName_16(){
    return 'incrementCountAtIndex';
  }
  ;
  _.getParameterTypes = function getParameterTypes_10(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_15(){
    return V_classLit;
  }
  ;
  function Histogram_m_incrementTotalCount_0(){
    Method_0.call(this, invoker_23());
  }

  function invoker_23(){
    return function(o){
      nullCheck(o);
      o.incrementTotalCount();
    }
        ;
  }

  defineSeed(211, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_incrementTotalCount_0);
  _.getDeclaringClass = function getDeclaringClass_16(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_16(){
    return 0;
  }
  ;
  _.getName = function getName_17(){
    return 'incrementTotalCount';
  }
  ;
  _.getReturnType = function getReturnType_16(){
    return V_classLit;
  }
  ;
  function Histogram_m_readObject_0(){
    Method_0.call(this, invoker_24());
  }

  function invoker_24(){
    return function(o, A){
      nullCheck(o);
      o.readObject(A);
    }
        ;
  }

  defineSeed(212, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_readObject_0);
  _.getDeclaringClass = function getDeclaringClass_17(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getExceptionTypes = function getExceptionTypes_1(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Ljava_io_IOException_2_classLit, Ljava_lang_ClassNotFoundException_2_classLit]);
  }
  ;
  _.getModifiers = function getModifiers_17(){
    return 2;
  }
  ;
  _.getName = function getName_18(){
    return 'readObject';
  }
  ;
  _.getParameterTypes = function getParameterTypes_11(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [Ljava_io_ObjectInputStream_2_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_17(){
    return V_classLit;
  }
  ;
  function Histogram_m_resize_0(){
    Method_0.call(this, invoker_25());
  }

  function invoker_25(){
    return function(o, A){
      nullCheck(o);
      o.resize(A.longValue());
    }
        ;
  }

  defineSeed(213, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_resize_0);
  _.getDeclaringClass = function getDeclaringClass_18(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_18(){
    return 0;
  }
  ;
  _.getName = function getName_19(){
    return 'resize';
  }
  ;
  _.getParameterTypes = function getParameterTypes_12(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_18(){
    return V_classLit;
  }
  ;
  function Histogram_m_setCountAtIndex_0(){
    Method_0.call(this, invoker_26());
  }

  function invoker_26(){
    return function(o, A, B){
      nullCheck(o);
      o.setCountAtIndex(A.doubleValue(), B.longValue());
    }
        ;
  }

  defineSeed(214, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_setCountAtIndex_0);
  _.getDeclaringClass = function getDeclaringClass_19(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_19(){
    return 0;
  }
  ;
  _.getName = function getName_20(){
    return 'setCountAtIndex';
  }
  ;
  _.getParameterTypes = function getParameterTypes_13(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit, J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_19(){
    return V_classLit;
  }
  ;
  function Histogram_m_setCountAtNormalizedIndex_0(){
    Method_0.call(this, invoker_27());
  }

  function invoker_27(){
    return function(o, A, B){
      nullCheck(o);
      o.setCountAtNormalizedIndex(A.doubleValue(), B.longValue());
    }
        ;
  }

  defineSeed(215, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_setCountAtNormalizedIndex_0);
  _.getDeclaringClass = function getDeclaringClass_20(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_20(){
    return 0;
  }
  ;
  _.getName = function getName_21(){
    return 'setCountAtNormalizedIndex';
  }
  ;
  _.getParameterTypes = function getParameterTypes_14(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit, J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_20(){
    return V_classLit;
  }
  ;
  function Histogram_m_setNormalizingIndexOffset_0(){
    Method_0.call(this, invoker_28());
  }

  function invoker_28(){
    return function(o, A){
      nullCheck(o);
      o.setNormalizingIndexOffset(A.doubleValue());
    }
        ;
  }

  defineSeed(216, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_setNormalizingIndexOffset_0);
  _.getDeclaringClass = function getDeclaringClass_21(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_21(){
    return 0;
  }
  ;
  _.getName = function getName_22(){
    return 'setNormalizingIndexOffset';
  }
  ;
  _.getParameterTypes = function getParameterTypes_15(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_21(){
    return V_classLit;
  }
  ;
  function Histogram_m_setTotalCount_0(){
    Method_0.call(this, invoker_29());
  }

  function invoker_29(){
    return function(o, A){
      nullCheck(o);
      o.setTotalCount(A.longValue());
    }
        ;
  }

  defineSeed(217, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_setTotalCount_0);
  _.getDeclaringClass = function getDeclaringClass_22(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_22(){
    return 0;
  }
  ;
  _.getName = function getName_23(){
    return 'setTotalCount';
  }
  ;
  _.getParameterTypes = function getParameterTypes_16(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [J_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_22(){
    return V_classLit;
  }
  ;
  function Histogram_m_shiftNormalizingIndexByOffset_0(){
    Method_0.call(this, invoker_30());
  }

  function invoker_30(){
    return function(o, A, B){
      nullCheck(o);
      o.shiftNormalizingIndexByOffset(A.doubleValue(), B.booleanValue());
    }
        ;
  }

  defineSeed(218, 81, makeCastMap([Q$AnnotatedElement, Q$GenericDeclaration, Q$Method]), Histogram_m_shiftNormalizingIndexByOffset_0);
  _.getDeclaringClass = function getDeclaringClass_23(){
    return Lorg_HdrHistogram_Histogram_2_classLit;
  }
  ;
  _.getModifiers = function getModifiers_23(){
    return 0;
  }
  ;
  _.getName = function getName_24(){
    return 'shiftNormalizingIndexByOffset';
  }
  ;
  _.getParameterTypes = function getParameterTypes_17(){
    return initValues(_3Ljava_lang_Class_2_classLit, makeCastMap([Q$Serializable]), Q$Class, [I_classLit, Z_classLit]);
  }
  ;
  _.getReturnType = function getReturnType_23(){
    return V_classLit;
  }
  ;
  function $copy_0(this$static){
    var copy;
    copy = new IntCountsHistogram_4(this$static);
    $add_1(copy, this$static);
    return copy;
  }

  function $copyCorrectedForCoordinatedOmission_0(this$static, expectedIntervalBetweenValueSamples){
    var toHistogram;
    toHistogram = new IntCountsHistogram_4(this$static);
    $addWhileCorrectingForCoordinatedOmission(toHistogram, this$static, expectedIntervalBetweenValueSamples);
    return toHistogram;
  }

  function $getCountAtIndex_0(this$static, index){
    return fromInt(this$static.counts[$normalizeIndex(this$static, index, this$static.normalizingIndexOffset)]);
  }

  function $setCountAtNormalizedIndex(this$static, index, value){
    if (lt(value, P0_longLit) || gt(value, P7fffffff_longLit)) {
      throw new IllegalArgumentException_1('would overflow short integer count');
    }
    this$static.counts[index] = toInt(value);
  }

  function IntCountsHistogram_0(lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    IntCountsHistogram_3.call(this, fromDouble(lowestDiscernibleValue), fromDouble(highestTrackableValue), numberOfSignificantValueDigits);
  }

  function IntCountsHistogram_1(highestTrackableValue, numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    IntCountsHistogram_0.call(this, 1, highestTrackableValue, numberOfSignificantValueDigits);
  }

  function IntCountsHistogram_2(numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    IntCountsHistogram_3.call(this, P1_longLit, P2_longLit, numberOfSignificantValueDigits);
    this.autoResize = true;
  }

  function IntCountsHistogram_3(lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits){
    AbstractHistogram_0.call(this, lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits);
    this.counts = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, this.countsArrayLength, 1);
    this.wordSizeInBytes = 4;
  }

  function IntCountsHistogram_4(source){
    AbstractHistogram_1.call(this, source);
    this.counts = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, this.countsArrayLength, 1);
    this.wordSizeInBytes = 4;
  }

  defineSeed(219, 132, makeCastMap([Q$Serializable, Q$AbstractHistogram, Q$AbstractHistogramBase, Q$IntCountsHistogram, Q$Exportable]), IntCountsHistogram_0, IntCountsHistogram_1, IntCountsHistogram_2, IntCountsHistogram_3, IntCountsHistogram_4);
  _._getEstimatedFootprintInBytes = function _getEstimatedFootprintInBytes_0(){
    return 512 + 4 * this.counts.length;
  }
  ;
  _.addToCountAtIndex = function addToCountAtIndex_0(index, value){
    var currentCount, newCount, normalizedIndex;
    normalizedIndex = $normalizeIndex(this, index, this.normalizingIndexOffset);
    currentCount = this.counts[normalizedIndex];
    if (lt(value, P0_longLit) || gt(value, P7fffffff_longLit)) {
      throw new IllegalArgumentException_1('would overflow short integer count');
    }
    newCount = toInt(add(fromInt(currentCount), value));
    if (newCount < 0) {
      throw new IllegalStateException_1('would overflow short integer count');
    }
    this.counts[normalizedIndex] = newCount;
  }
  ;
  _.addToTotalCount = function addToTotalCount_0(value){
    this.totalCount = add(this.totalCount, value);
  }
  ;
  _.clearCounts = function clearCounts_0(){
    fill(this.counts);
    this.totalCount = P0_longLit;
  }
  ;
  _.copy_0 = function copy_3(){
    return $copy_0(this);
  }
  ;
  _.copy_3 = function copy_4(){
    return $copy_0(this);
  }
  ;
  _.copyCorrectedForCoordinatedOmission_0 = function copyCorrectedForCoordinatedOmission_2(expectedIntervalBetweenValueSamples){
    return $copyCorrectedForCoordinatedOmission_0(this, expectedIntervalBetweenValueSamples);
  }
  ;
  _.fillBufferFromCountsArray = function fillBufferFromCountsArray_0(buffer, length_0){
    if (!this.cachedDstIntBuffer || buffer != this.cachedDstByteBuffer || buffer.position_0 != this.cachedDstByteBufferPosition) {
      this.cachedDstByteBuffer = buffer;
      this.cachedDstByteBufferPosition = buffer.position_0;
      this.cachedDstIntBuffer = new IntToByteBufferAdapter_0($slice(buffer));
    }
    $rewind(this.cachedDstIntBuffer);
    $put(this.cachedDstIntBuffer, this.counts, length_0);
  }
  ;
  _.getCountAtIndex = function getCountAtIndex_0(index){
    return $getCountAtIndex_0(this, index);
  }
  ;
  _.getCountAtNormalizedIndex = function getCountAtNormalizedIndex_0(index){
    return fromInt(this.counts[index]);
  }
  ;
  _.getNormalizingIndexOffset = function getNormalizingIndexOffset_0(){
    return this.normalizingIndexOffset;
  }
  ;
  _.getTotalCount_0 = function getTotalCount_0(){
    return this.totalCount;
  }
  ;
  _.incrementCountAtIndex = function incrementCountAtIndex_0(index){
    var currentCount, newCount, normalizedIndex;
    normalizedIndex = $normalizeIndex(this, index, this.normalizingIndexOffset);
    currentCount = this.counts[normalizedIndex];
    newCount = currentCount + 1;
    if (newCount < 0) {
      throw new IllegalStateException_1('would overflow integer count');
    }
    this.counts[normalizedIndex] = newCount;
  }
  ;
  _.incrementTotalCount = function incrementTotalCount_0(){
    this.totalCount = add(this.totalCount, P1_longLit);
  }
  ;
  _.resize = function resize_0(newHighestTrackableValue){
    var countsDelta, lengthToCopy, newNormalizedZeroIndex, oldNormalizedZeroIndex;
    oldNormalizedZeroIndex = $normalizeIndex(this, 0, this.normalizingIndexOffset);
    $establishSize(this, newHighestTrackableValue);
    countsDelta = this.countsArrayLength - this.counts.length;
    this.counts = copyOf(this.counts, this.countsArrayLength);
    if (oldNormalizedZeroIndex != 0) {
      newNormalizedZeroIndex = oldNormalizedZeroIndex + countsDelta;
      lengthToCopy = this.countsArrayLength - countsDelta - oldNormalizedZeroIndex;
      arraycopy(this.counts, oldNormalizedZeroIndex, this.counts, newNormalizedZeroIndex, lengthToCopy);
    }
  }
  ;
  _.setCountAtIndex = function setCountAtIndex_0(index, value){
    $setCountAtNormalizedIndex(this, $normalizeIndex(this, index, this.normalizingIndexOffset), value);
  }
  ;
  _.setCountAtNormalizedIndex = function setCountAtNormalizedIndex_0(index, value){
    $setCountAtNormalizedIndex(this, index, value);
  }
  ;
  _.setNormalizingIndexOffset = function setNormalizingIndexOffset_0(normalizingIndexOffset){
    this.normalizingIndexOffset = normalizingIndexOffset;
  }
  ;
  _.setTotalCount = function setTotalCount_0(totalCount){
    this.totalCount = totalCount;
  }
  ;
  _.shiftNormalizingIndexByOffset = function shiftNormalizingIndexByOffset_0(offsetToAdd, lowestHalfBucketPopulated){
    $nonConcurrentNormalizingIndexShift(this, offsetToAdd, lowestHalfBucketPopulated);
  }
  ;
  _.cachedDstByteBuffer = null;
  _.cachedDstByteBufferPosition = 0;
  _.cachedDstIntBuffer = null;
  _.counts = null;
  _.normalizingIndexOffset = 0;
  _.totalCount = P0_longLit;
  function $export_17(this$static){
    if (!exported_17) {
      exported_17 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_IntCountsHistogram_2_classLit, this$static);
      new AbstractHistogram_ExporterImpl_0;
      $export0_17(this$static);
    }
  }

  function $export0_17(this$static){
    var pkg = declarePackage('org.HdrHistogram.IntCountsHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.IntCountsHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 1?(g = new IntCountsHistogram_2(a[0])):a.length == 2?(g = new IntCountsHistogram_1(a[0], a[1])):a.length == 3 && (g = new IntCountsHistogram_0(a[0], a[1], a[2]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.IntCountsHistogram.prototype = new Object;
    __0._getCountAtIndex = $entry(function(a0){
          return __static_wrapper__getCountAtIndex_1(this.g, a0);
        }
    );
    __0.add = $entry(function(a0){
          this.g.add_1(gwtInstance(a0));
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_addWhileCorrectingForCoordinatedOmission_1(this.g, gwtInstance(a0), a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_0();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_3());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(__static_wrapper_copyCorrectedForCoordinatedOmission_1(this.g, a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_0(gwtInstance(a0));
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_copyIntoCorrectedForCoordinatedOmission_1(this.g, gwtInstance(a0), a1);
        }
    );
    $wnd.org.HdrHistogram.IntCountsHistogram.decodeFromByteBuffer = $entry(function(a0, a1){
          return wrap_2(__static_wrapper_decodeFromByteBuffer_2(gwtInstance(a0), a1));
        }
    );
    $wnd.org.HdrHistogram.IntCountsHistogram.decodeFromCompressedByteBuffer = $entry(function(a0, a1){
          return wrap_2(__static_wrapper_decodeFromCompressedByteBuffer_2(gwtInstance(a0), a1));
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_IntCountsHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_IntCountsHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.getBucketCount = $entry(function(){
          return this.g.getBucketCount_0();
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_3(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return __static_wrapper_getCountBetweenValues_1(this.g, a0, a1);
        }
    );
    __0.getCountsArrayLength = $entry(function(){
          return this.g.getCountsArrayLength_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_3(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestTrackableValue = $entry(function(){
          return __static_wrapper_getHighestTrackableValue_1(this.g);
        }
    );
    __0.getLowestDiscernibleValue = $entry(function(){
          return __static_wrapper_getLowestDiscernibleValue_1(this.g);
        }
    );
    __0.getMaxValue = $entry(function(){
          return __static_wrapper_getMaxValue_1(this.g);
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return __static_wrapper_getMinNonZeroValue_1(this.g);
        }
    );
    __0.getMinValue = $entry(function(){
          return __static_wrapper_getMinValue_1(this.g);
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return __static_wrapper_getPercentileAtOrBelowValue_1(this.g, a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_3(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getSubBucketCount = $entry(function(){
          return this.g.getSubBucketCount_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount_2(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return __static_wrapper_getValueAtPercentile_1(this.g, a0);
        }
    );
    __0.getWordSizeInBytes = $entry(function(){
          return this.g.getWordSizeInBytes_0();
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return __static_wrapper_highestEquivalentValue_1(this.g, a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return __static_wrapper_linearBucketValues_1(this.g, a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return __static_wrapper_logarithmicBucketValues_1(this.g, a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return __static_wrapper_lowestEquivalentValue_1(this.g, a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return __static_wrapper_medianEquivalentValue_1(this.g, a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return __static_wrapper_nextNonEquivalentValue_1(this.g, a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_IntCountsHistogram_2_classLit, 3, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_0(a0);
        }
    );
    __0.recordValue = $entry(function(a0, a1){
          runDispatch(this.g, Lorg_HdrHistogram_IntCountsHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_3(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          __static_wrapper_recordValueWithExpectedInterval_1(this.g, a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_0();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_3(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_3(this.g, a0);
        }
    );
    __0.shiftValuesLeft = $entry(function(a0){
          this.g.shiftValuesLeft_0(a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return __static_wrapper_sizeOfEquivalentValueRange_1(this.g, a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_0(gwtInstance(a0));
        }
    );
    __0.valueFromIndex = $entry(function(a0){
          return __static_wrapper_valueFromIndex_1(this.g, a0);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return __static_wrapper_valuesAreEquivalent_1(this.g, a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_IntCountsHistogram_2_classLit, {0:{1:[[__static_wrapper_recordValue_3, null, unshift, 'number']], 2:[[__static_wrapper_recordValue_4, null, unshift, 'number', 'number']]}, 1:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 2:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 3:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.IntCountsHistogram[p] === undefined && ($wnd.org.HdrHistogram.IntCountsHistogram[p] = pkg[p]);
  }

  function IntCountsHistogram_ExporterImpl_0(){
    $export_17(this);
  }

  function __static_wrapper__getCountAtIndex_1(instance, a0){
    return toDouble($getCountAtIndex_0(instance, a0));
  }

  function __static_wrapper_addWhileCorrectingForCoordinatedOmission_1(instance, a0, a1){
    $addWhileCorrectingForCoordinatedOmission(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_copyCorrectedForCoordinatedOmission_1(instance, a0){
    return $copyCorrectedForCoordinatedOmission_0(instance, fromDouble(a0));
  }

  function __static_wrapper_copyIntoCorrectedForCoordinatedOmission_1(instance, a0, a1){
    $copyIntoCorrectedForCoordinatedOmission(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_decodeFromByteBuffer_2(a0, a1){
    return $clinit_AbstractHistogram() , decodeFromByteBuffer(a0, Lorg_HdrHistogram_IntCountsHistogram_2_classLit, fromDouble(a1));
  }

  function __static_wrapper_decodeFromCompressedByteBuffer_2(a0, a1){
    return $clinit_AbstractHistogram() , decodeFromCompressedByteBuffer(a0, Lorg_HdrHistogram_IntCountsHistogram_2_classLit, fromDouble(a1));
  }

  function __static_wrapper_getCountAtValue_3(instance, a0){
    return toDouble($getCountAtValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_getCountBetweenValues_1(instance, a0, a1){
    return toDouble($getCountBetweenValues(instance, fromDouble(a0), fromDouble(a1)));
  }

  function __static_wrapper_getEndTimeStamp_3(instance){
    return toDouble(instance.endTimeStampMsec);
  }

  function __static_wrapper_getHighestTrackableValue_1(instance){
    return toDouble(instance.highestTrackableValue);
  }

  function __static_wrapper_getLowestDiscernibleValue_1(instance){
    return toDouble(instance.lowestDiscernibleValue);
  }

  function __static_wrapper_getMaxValue_1(instance){
    return toDouble(eq(instance.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(instance, instance.maxValue));
  }

  function __static_wrapper_getMinNonZeroValue_1(instance){
    return toDouble(eq(instance.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(instance, instance.minNonZeroValue));
  }

  function __static_wrapper_getMinValue_1(instance){
    return toDouble($getMinValue(instance));
  }

  function __static_wrapper_getPercentileAtOrBelowValue_1(instance, a0){
    return $getPercentileAtOrBelowValue(instance, fromDouble(a0));
  }

  function __static_wrapper_getStartTimeStamp_3(instance){
    return toDouble(instance.startTimeStampMsec);
  }

  function __static_wrapper_getTotalCount_2(instance){
    return toDouble(instance.totalCount);
  }

  function __static_wrapper_getValueAtPercentile_1(instance, a0){
    return toDouble($getValueAtPercentile(instance, a0));
  }

  function __static_wrapper_highestEquivalentValue_1(instance, a0){
    return toDouble($highestEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_linearBucketValues_1(instance, a0){
    return new AbstractHistogram$LinearBucketValues_0(fromDouble(a0));
  }

  function __static_wrapper_logarithmicBucketValues_1(instance, a0, a1){
    return new AbstractHistogram$LogarithmicBucketValues_0(fromDouble(a0));
  }

  function __static_wrapper_lowestEquivalentValue_1(instance, a0){
    return toDouble($lowestEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_medianEquivalentValue_1(instance, a0){
    return toDouble($medianEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_nextNonEquivalentValue_1(instance, a0){
    return toDouble($nextNonEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_recordValue_3(instance, a0){
    $recordSingleValue(instance, fromDouble(a0));
  }

  function __static_wrapper_recordValue_4(instance, a0, a1){
    $recordSingleValueWithExpectedInterval(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithCount_3(instance, a0, a1){
    $recordValueWithCount(instance, fromDouble(a0), fromDouble(a1));
  }



  function __static_wrapper_recordValueWithExpectedInterval_1(instance, a0, a1){
    $recordSingleValueWithExpectedInterval(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_3(instance, a0){
    $setEndTimeStamp(instance, fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_3(instance, a0){
    $setStartTimeStamp(instance, fromDouble(a0));
  }

  function __static_wrapper_sizeOfEquivalentValueRange_1(instance, a0){
    return toDouble($sizeOfEquivalentValueRange(instance, fromDouble(a0)));
  }

  function __static_wrapper_valueFromIndex_1(instance, a0){
    return toDouble($valueFromIndex(instance, a0));
  }

  function __static_wrapper_valuesAreEquivalent_1(instance, a0, a1){
    return $valuesAreEquivalent(instance, fromDouble(a0), fromDouble(a1));
  }

  defineSeed(220, 1, {}, IntCountsHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_17(){
    return $wnd.org.HdrHistogram.IntCountsHistogram;
  }
  ;
  _.isAssignable = function isAssignable_17(o){
    return o != null && instanceOf(o, Q$IntCountsHistogram);
  }
  ;
  var exported_17 = false;
  function $hasNext_1(this$static){
    if ($hasNext_0(this$static)) {
      return true;
    }
    return lt(this$static.nextValueReportingLevelLowestEquivalent, this$static.nextValueAtIndex);
  }

  function $reset_6(this$static, valueUnitsPerBucket){
    $reset_7(this$static, this$static.histogram, valueUnitsPerBucket);
  }

  function $reset_7(this$static, histogram, valueUnitsPerBucket){
    $resetIterator(this$static, histogram);
    this$static.valueUnitsPerBucket = valueUnitsPerBucket;
    this$static.nextValueReportingLevel = valueUnitsPerBucket;
    this$static.nextValueReportingLevelLowestEquivalent = $lowestEquivalentValue(histogram, this$static.nextValueReportingLevel);
  }

  function LinearIterator_0(histogram, valueUnitsPerBucket){
    AbstractHistogramIterator_0.call(this);
    $reset_7(this, histogram, fromDouble(valueUnitsPerBucket));
  }

  function LinearIterator_1(histogram, valueUnitsPerBucket){
    AbstractHistogramIterator_0.call(this);
    $reset_7(this, histogram, valueUnitsPerBucket);
  }

  defineSeed(221, 144, makeCastMap([Q$LinearIterator, Q$Exportable]), LinearIterator_0, LinearIterator_1);
  _.getValueIteratedTo_0 = function getValueIteratedTo_1(){
    return this.nextValueReportingLevel;
  }
  ;
  _.hasNext_0 = function hasNext_7(){
    return $hasNext_1(this);
  }
  ;
  _.incrementIterationLevel = function incrementIterationLevel_0(){
    this.nextValueReportingLevel = add(this.nextValueReportingLevel, this.valueUnitsPerBucket);
    this.nextValueReportingLevelLowestEquivalent = $lowestEquivalentValue(this.histogram, this.nextValueReportingLevel);
  }
  ;
  _.reachedIterationLevel = function reachedIterationLevel_0(){
    return gte_0(this.currentValueAtIndex, this.nextValueReportingLevelLowestEquivalent);
  }
  ;
  _.nextValueReportingLevel = P0_longLit;
  _.nextValueReportingLevelLowestEquivalent = P0_longLit;
  _.valueUnitsPerBucket = P0_longLit;
  function $export_18(this$static){
    if (!exported_18) {
      exported_18 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_LinearIterator_2_classLit, this$static);
      $export0_18(this$static);
    }
  }

  function $export0_18(this$static){
    var pkg = declarePackage('org.HdrHistogram.LinearIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.LinearIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 2 && (g = ___create_4(($clinit_ExporterUtil() , $gwtInstance(a[0])), a[1]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.LinearIterator.prototype = new Object;
    __0.hasNext = $entry(function(){
          return this.g.hasNext_0();
        }
    );
    __0.reset = $entry(function(a0){
          __static_wrapper_reset(this.g, a0);
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.LinearIterator[p] === undefined && ($wnd.org.HdrHistogram.LinearIterator[p] = pkg[p]);
  }

  function LinearIterator_ExporterImpl_0(){
    $export_18(this);
  }

  function ___create_4(a0, a1){
    return new LinearIterator_0(a0, a1);
  }

  function __static_wrapper_reset(instance, a0){
    $reset_6(instance, fromDouble(a0));
  }

  defineSeed(222, 1, {}, LinearIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_18(){
    return $wnd.org.HdrHistogram.LinearIterator;
  }
  ;
  _.isAssignable = function isAssignable_18(o){
    return o != null && instanceOf(o, Q$LinearIterator);
  }
  ;
  var exported_18 = false;
  function $hasNext_2(this$static){
    if ($hasNext_0(this$static)) {
      return true;
    }
    return lt(this$static.nextValueReportingLevelLowestEquivalent, this$static.nextValueAtIndex);
  }

  function $reset_8(this$static, valueUnitsInFirstBucket, logBase){
    $reset_9(this$static, this$static.histogram, valueUnitsInFirstBucket, logBase);
  }

  function $reset_9(this$static, histogram, valueUnitsInFirstBucket, logBase){
    $resetIterator(this$static, histogram);
    this$static.logBase = logBase;
    this$static.nextValueReportingLevel = valueUnitsInFirstBucket;
    this$static.nextValueReportingLevelLowestEquivalent = $lowestEquivalentValue(histogram, this$static.nextValueReportingLevel);
  }

  function LogarithmicIterator_0(histogram, valueUnitsInFirstBucket, logBase){
    AbstractHistogramIterator_0.call(this);
    $reset_9(this, histogram, fromDouble(valueUnitsInFirstBucket), logBase);
  }

  function LogarithmicIterator_1(histogram, valueUnitsInFirstBucket, logBase){
    AbstractHistogramIterator_0.call(this);
    $reset_9(this, histogram, valueUnitsInFirstBucket, logBase);
  }

  defineSeed(223, 144, makeCastMap([Q$LogarithmicIterator, Q$Exportable]), LogarithmicIterator_0, LogarithmicIterator_1);
  _.getValueIteratedTo_0 = function getValueIteratedTo_2(){
    return this.nextValueReportingLevel;
  }
  ;
  _.hasNext_0 = function hasNext_8(){
    return $hasNext_2(this);
  }
  ;
  _.incrementIterationLevel = function incrementIterationLevel_1(){
    this.nextValueReportingLevel = fromDouble(toDouble(this.nextValueReportingLevel) * this.logBase);
    this.nextValueReportingLevelLowestEquivalent = $lowestEquivalentValue(this.histogram, this.nextValueReportingLevel);
  }
  ;
  _.reachedIterationLevel = function reachedIterationLevel_1(){
    return gte_0(this.currentValueAtIndex, this.nextValueReportingLevelLowestEquivalent);
  }
  ;
  _.logBase = 0;
  _.nextValueReportingLevel = P0_longLit;
  _.nextValueReportingLevelLowestEquivalent = P0_longLit;
  function $export_19(this$static){
    if (!exported_19) {
      exported_19 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_LogarithmicIterator_2_classLit, this$static);
      $export0_19(this$static);
    }
  }

  function $export0_19(this$static){
    var pkg = declarePackage('org.HdrHistogram.LogarithmicIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.LogarithmicIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 3 && (g = ___create_5(($clinit_ExporterUtil() , $gwtInstance(a[0])), a[1], a[2]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.LogarithmicIterator.prototype = new Object;
    __0.hasNext = $entry(function(){
          return this.g.hasNext_0();
        }
    );
    __0.reset = $entry(function(a0, a1){
          __static_wrapper_reset_0(this.g, a0, a1);
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.LogarithmicIterator[p] === undefined && ($wnd.org.HdrHistogram.LogarithmicIterator[p] = pkg[p]);
  }

  function LogarithmicIterator_ExporterImpl_0(){
    $export_19(this);
  }

  function ___create_5(a0, a1, a2){
    return new LogarithmicIterator_0(a0, a1, a2);
  }

  function __static_wrapper_reset_0(instance, a0, a1){
    $reset_8(instance, fromDouble(a0), a1);
  }

  defineSeed(224, 1, {}, LogarithmicIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_19(){
    return $wnd.org.HdrHistogram.LogarithmicIterator;
  }
  ;
  _.isAssignable = function isAssignable_19(o){
    return o != null && instanceOf(o, Q$LogarithmicIterator);
  }
  ;
  var exported_19 = false;
  function $hasNext_3(this$static){
    if ($hasNext_0(this$static))
      return true;
    if (!this$static.reachedLastRecordedValue && gt(this$static.arrayTotalCount, P0_longLit)) {
      this$static.percentileLevelToIterateTo = 100;
      this$static.reachedLastRecordedValue = true;
      return true;
    }
    return false;
  }

  function $reset_10(this$static, percentileTicksPerHalfDistance){
    $reset_11(this$static, this$static.histogram, percentileTicksPerHalfDistance);
  }

  function $reset_11(this$static, histogram, percentileTicksPerHalfDistance){
    $resetIterator(this$static, histogram);
    this$static.percentileTicksPerHalfDistance = percentileTicksPerHalfDistance;
    this$static.percentileLevelToIterateTo = 0;
    this$static.reachedLastRecordedValue = false;
  }

  function PercentileIterator_0(histogram, percentileTicksPerHalfDistance){
    AbstractHistogramIterator_0.call(this);
    $reset_11(this, histogram, percentileTicksPerHalfDistance);
  }

  defineSeed(225, 144, makeCastMap([Q$PercentileIterator, Q$Exportable]), PercentileIterator_0);
  _.getPercentileIteratedTo = function getPercentileIteratedTo_0(){
    return this.percentileLevelToIterateTo;
  }
  ;
  _.hasNext_0 = function hasNext_9(){
    return $hasNext_3(this);
  }
  ;
  _.incrementIterationLevel = function incrementIterationLevel_2(){
    var percentileReportingTicks;
    percentileReportingTicks = mul(fromInt(this.percentileTicksPerHalfDistance), fromDouble(pow(2, toDouble(add(fromDouble(log(100 / (100 - this.percentileLevelToIterateTo)) / Math.log(2)), P1_longLit)))));
    this.percentileLevelToIterateTo += 100 / toDouble(percentileReportingTicks);
  }
  ;
  _.reachedIterationLevel = function reachedIterationLevel_2(){
    var currentPercentile;
    if (eq(this.countAtThisValue, P0_longLit))
      return false;
    currentPercentile = 100 * toDouble(this.totalCountToCurrentIndex) / toDouble(this.arrayTotalCount);
    return currentPercentile >= this.percentileLevelToIterateTo;
  }
  ;
  _.reset_3 = function reset_7(percentileTicksPerHalfDistance){
    $reset_10(this, percentileTicksPerHalfDistance);
  }
  ;
  _.percentileLevelToIterateTo = 0;
  _.percentileTicksPerHalfDistance = 0;
  _.reachedLastRecordedValue = false;
  function $export_20(this$static){
    if (!exported_20) {
      exported_20 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_PercentileIterator_2_classLit, this$static);
      $export0_20(this$static);
    }
  }

  function $export0_20(this$static){
    var pkg = declarePackage('org.HdrHistogram.PercentileIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.PercentileIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 2 && (g = ___create_6(($clinit_ExporterUtil() , $gwtInstance(a[0])), a[1]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.PercentileIterator.prototype = new Object;
    __0.hasNext = $entry(function(){
          return this.g.hasNext_0();
        }
    );
    __0.reset = $entry(function(a0){
          this.g.reset_3(a0);
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.PercentileIterator[p] === undefined && ($wnd.org.HdrHistogram.PercentileIterator[p] = pkg[p]);
  }

  function PercentileIterator_ExporterImpl_0(){
    $export_20(this);
  }

  function ___create_6(a0, a1){
    return new PercentileIterator_0(a0, a1);
  }

  defineSeed(226, 1, {}, PercentileIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_20(){
    return $wnd.org.HdrHistogram.PercentileIterator;
  }
  ;
  _.isAssignable = function isAssignable_20(o){
    return o != null && instanceOf(o, Q$PercentileIterator);
  }
  ;
  var exported_20 = false;
  function $reset_12(this$static){
    $reset_13(this$static, this$static.histogram);
  }

  function $reset_13(this$static, histogram){
    $resetIterator(this$static, histogram);
    this$static.visitedIndex = -1;
  }

  function RecordedValuesIterator_0(histogram){
    AbstractHistogramIterator_0.call(this);
    $resetIterator(this, histogram);
    this.visitedIndex = -1;
  }

  defineSeed(227, 144, makeCastMap([Q$RecordedValuesIterator, Q$Exportable]), RecordedValuesIterator_0);
  _.incrementIterationLevel = function incrementIterationLevel_3(){
    this.visitedIndex = this.currentIndex;
  }
  ;
  _.reachedIterationLevel = function reachedIterationLevel_3(){
    var currentCount;
    currentCount = this.histogram.getCountAtIndex(this.currentIndex);
    return neq(currentCount, P0_longLit) && this.visitedIndex != this.currentIndex;
  }
  ;
  _.reset_0 = function reset_8(){
    $reset_12(this);
  }
  ;
  _.visitedIndex = 0;
  function $export_21(this$static){
    if (!exported_21) {
      exported_21 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_RecordedValuesIterator_2_classLit, this$static);
      $export0_21(this$static);
    }
  }

  function $export0_21(this$static){
    var pkg = declarePackage('org.HdrHistogram.RecordedValuesIterator');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.RecordedValuesIterator = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 1 && (g = ___create_7(($clinit_ExporterUtil() , $gwtInstance(a[0]))));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.RecordedValuesIterator.prototype = new Object;
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.RecordedValuesIterator[p] === undefined && ($wnd.org.HdrHistogram.RecordedValuesIterator[p] = pkg[p]);
  }

  function RecordedValuesIterator_ExporterImpl_0(){
    $export_21(this);
  }

  function ___create_7(a0){
    return new RecordedValuesIterator_0(a0);
  }

  defineSeed(228, 1, {}, RecordedValuesIterator_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_21(){
    return $wnd.org.HdrHistogram.RecordedValuesIterator;
  }
  ;
  _.isAssignable = function isAssignable_21(o){
    return o != null && instanceOf(o, Q$RecordedValuesIterator);
  }
  ;
  var exported_21 = false;
  function $export_22(this$static){
    if (!exported_22) {
      exported_22 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_Recorder$InternalAtomicHistogram_2_classLit, this$static);
      new AbstractHistogram_ExporterImpl_0;
      new Histogram_ExporterImpl_0;
      $export0_22(this$static);
    }
  }

  function $export0_22(this$static){
    var pkg = declarePackage('org.HdrHistogram.Recorder.InternalAtomicHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.Recorder.InternalAtomicHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.Recorder.InternalAtomicHistogram.prototype = new Object;
    __0._getCountAtIndex = $entry(function(a0){
          return __static_wrapper__getCountAtIndex_2(this.g, a0);
        }
    );
    __0.add = $entry(function(a0){
          this.g.add_1(gwtInstance(a0));
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_addWhileCorrectingForCoordinatedOmission_2(this.g, gwtInstance(a0), a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_0();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_2());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(__static_wrapper_copyCorrectedForCoordinatedOmission_2(this.g, a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_0(gwtInstance(a0));
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_copyIntoCorrectedForCoordinatedOmission_2(this.g, gwtInstance(a0), a1);
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_Recorder$InternalAtomicHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_Recorder$InternalAtomicHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.getBucketCount = $entry(function(){
          return this.g.getBucketCount_0();
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_4(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return __static_wrapper_getCountBetweenValues_2(this.g, a0, a1);
        }
    );
    __0.getCountsArrayLength = $entry(function(){
          return this.g.getCountsArrayLength_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_4(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestTrackableValue = $entry(function(){
          return __static_wrapper_getHighestTrackableValue_2(this.g);
        }
    );
    __0.getLowestDiscernibleValue = $entry(function(){
          return __static_wrapper_getLowestDiscernibleValue_2(this.g);
        }
    );
    __0.getMaxValue = $entry(function(){
          return __static_wrapper_getMaxValue_2(this.g);
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return __static_wrapper_getMinNonZeroValue_2(this.g);
        }
    );
    __0.getMinValue = $entry(function(){
          return __static_wrapper_getMinValue_2(this.g);
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return __static_wrapper_getPercentileAtOrBelowValue_2(this.g, a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_4(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getSubBucketCount = $entry(function(){
          return this.g.getSubBucketCount_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount_3(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return __static_wrapper_getValueAtPercentile_2(this.g, a0);
        }
    );
    __0.getWordSizeInBytes = $entry(function(){
          return this.g.getWordSizeInBytes_0();
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return __static_wrapper_highestEquivalentValue_2(this.g, a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return __static_wrapper_linearBucketValues_2(this.g, a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return __static_wrapper_logarithmicBucketValues_2(this.g, a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return __static_wrapper_lowestEquivalentValue_2(this.g, a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return __static_wrapper_medianEquivalentValue_2(this.g, a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return __static_wrapper_nextNonEquivalentValue_2(this.g, a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_Recorder$InternalAtomicHistogram_2_classLit, 3, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_0(a0);
        }
    );
    __0.recordValue = $entry(function(a0, a1){
          runDispatch(this.g, Lorg_HdrHistogram_Recorder$InternalAtomicHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_4(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          __static_wrapper_recordValueWithExpectedInterval_2(this.g, a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_0();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_4(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_4(this.g, a0);
        }
    );
    __0.shiftValuesLeft = $entry(function(a0){
          this.g.shiftValuesLeft_0(a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return __static_wrapper_sizeOfEquivalentValueRange_2(this.g, a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_0(gwtInstance(a0));
        }
    );
    __0.valueFromIndex = $entry(function(a0){
          return __static_wrapper_valueFromIndex_2(this.g, a0);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return __static_wrapper_valuesAreEquivalent_2(this.g, a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_Recorder$InternalAtomicHistogram_2_classLit, {0:{1:[[__static_wrapper_recordValue_5, null, unshift, 'number']], 2:[[__static_wrapper_recordValue_6, null, unshift, 'number', 'number']]}, 1:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 2:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 3:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.Recorder.InternalAtomicHistogram[p] === undefined && ($wnd.org.HdrHistogram.Recorder.InternalAtomicHistogram[p] = pkg[p]);
  }

  function Recorder_InternalAtomicHistogram_ExporterImpl_0(){
    $export_22(this);
  }

  function __static_wrapper__getCountAtIndex_2(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_addWhileCorrectingForCoordinatedOmission_2(instance, a0, a1){
    null.nullMethod(fromDouble(a1));
  }

  function __static_wrapper_copyCorrectedForCoordinatedOmission_2(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_copyIntoCorrectedForCoordinatedOmission_2(instance, a0, a1){
    null.nullMethod(fromDouble(a1));
  }

  function __static_wrapper_getCountAtValue_4(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_getCountBetweenValues_2(instance, a0, a1){
    return toDouble(null.nullMethod(fromDouble(a0), fromDouble(a1)));
  }

  function __static_wrapper_getEndTimeStamp_4(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getHighestTrackableValue_2(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getLowestDiscernibleValue_2(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMaxValue_2(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMinNonZeroValue_2(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMinValue_2(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getPercentileAtOrBelowValue_2(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_getStartTimeStamp_4(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getTotalCount_3(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getValueAtPercentile_2(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_highestEquivalentValue_2(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_linearBucketValues_2(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_logarithmicBucketValues_2(instance, a0, a1){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_lowestEquivalentValue_2(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_medianEquivalentValue_2(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_nextNonEquivalentValue_2(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_recordValue_5(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_recordValue_6(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithCount_4(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithExpectedInterval_2(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_4(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_4(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_sizeOfEquivalentValueRange_2(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_valueFromIndex_2(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_valuesAreEquivalent_2(instance, a0, a1){
    return null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  defineSeed(229, 1, {}, Recorder_InternalAtomicHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_22(){
    return $wnd.org.HdrHistogram.Recorder.InternalAtomicHistogram;
  }
  ;
  _.isAssignable = function isAssignable_22(o){
    return false;
  }
  ;
  var exported_22 = false;
  function $export_23(this$static){
    if (!exported_23) {
      exported_23 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_Recorder$InternalConcurrentHistogram_2_classLit, this$static);
      new AbstractHistogram_ExporterImpl_0;
      new Histogram_ExporterImpl_0;
      $export0_23(this$static);
    }
  }



  function $export0_23(this$static){
    var pkg = declarePackage('org.HdrHistogram.Recorder.InternalConcurrentHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.Recorder.InternalConcurrentHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.Recorder.InternalConcurrentHistogram.prototype = new Object;
    __0._getCountAtIndex = $entry(function(a0){
          return __static_wrapper__getCountAtIndex_3(this.g, a0);
        }
    );
    __0.add = $entry(function(a0){
          this.g.add_1(gwtInstance(a0));
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_addWhileCorrectingForCoordinatedOmission_3(this.g, gwtInstance(a0), a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_0();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_2());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(__static_wrapper_copyCorrectedForCoordinatedOmission_3(this.g, a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_0(gwtInstance(a0));
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_copyIntoCorrectedForCoordinatedOmission_3(this.g, gwtInstance(a0), a1);
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_Recorder$InternalConcurrentHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_Recorder$InternalConcurrentHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.getBucketCount = $entry(function(){
          return this.g.getBucketCount_0();
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_5(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return __static_wrapper_getCountBetweenValues_3(this.g, a0, a1);
        }
    );
    __0.getCountsArrayLength = $entry(function(){
          return this.g.getCountsArrayLength_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_5(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestTrackableValue = $entry(function(){
          return __static_wrapper_getHighestTrackableValue_3(this.g);
        }
    );
    __0.getLowestDiscernibleValue = $entry(function(){
          return __static_wrapper_getLowestDiscernibleValue_3(this.g);
        }
    );
    __0.getMaxValue = $entry(function(){
          return __static_wrapper_getMaxValue_3(this.g);
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return __static_wrapper_getMinNonZeroValue_3(this.g);
        }
    );
    __0.getMinValue = $entry(function(){
          return __static_wrapper_getMinValue_3(this.g);
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return __static_wrapper_getPercentileAtOrBelowValue_3(this.g, a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_5(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getSubBucketCount = $entry(function(){
          return this.g.getSubBucketCount_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount_4(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return __static_wrapper_getValueAtPercentile_3(this.g, a0);
        }
    );
    __0.getWordSizeInBytes = $entry(function(){
          return this.g.getWordSizeInBytes_0();
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return __static_wrapper_highestEquivalentValue_3(this.g, a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return __static_wrapper_linearBucketValues_3(this.g, a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return __static_wrapper_logarithmicBucketValues_3(this.g, a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return __static_wrapper_lowestEquivalentValue_3(this.g, a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return __static_wrapper_medianEquivalentValue_3(this.g, a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return __static_wrapper_nextNonEquivalentValue_3(this.g, a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_Recorder$InternalConcurrentHistogram_2_classLit, 3, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_0(a0);
        }
    );
    __0.recordValue = $entry(function(a0, a1){
          runDispatch(this.g, Lorg_HdrHistogram_Recorder$InternalConcurrentHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_5(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          __static_wrapper_recordValueWithExpectedInterval_3(this.g, a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_0();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_5(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_5(this.g, a0);
        }
    );
    __0.shiftValuesLeft = $entry(function(a0){
          this.g.shiftValuesLeft_0(a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return __static_wrapper_sizeOfEquivalentValueRange_3(this.g, a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_0(gwtInstance(a0));
        }
    );
    __0.valueFromIndex = $entry(function(a0){
          return __static_wrapper_valueFromIndex_3(this.g, a0);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return __static_wrapper_valuesAreEquivalent_3(this.g, a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_Recorder$InternalConcurrentHistogram_2_classLit, {0:{1:[[__static_wrapper_recordValue_7, null, unshift, 'number']], 2:[[__static_wrapper_recordValue_8, null, unshift, 'number', 'number']]}, 1:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 2:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 3:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.Recorder.InternalConcurrentHistogram[p] === undefined && ($wnd.org.HdrHistogram.Recorder.InternalConcurrentHistogram[p] = pkg[p]);
  }

  function Recorder_InternalConcurrentHistogram_ExporterImpl_0(){
    $export_23(this);
  }

  function __static_wrapper__getCountAtIndex_3(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_addWhileCorrectingForCoordinatedOmission_3(instance, a0, a1){
    null.nullMethod(fromDouble(a1));
  }

  function __static_wrapper_copyCorrectedForCoordinatedOmission_3(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_copyIntoCorrectedForCoordinatedOmission_3(instance, a0, a1){
    null.nullMethod(fromDouble(a1));
  }

  function __static_wrapper_getCountAtValue_5(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_getCountBetweenValues_3(instance, a0, a1){
    return toDouble(null.nullMethod(fromDouble(a0), fromDouble(a1)));
  }

  function __static_wrapper_getEndTimeStamp_5(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getHighestTrackableValue_3(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getLowestDiscernibleValue_3(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMaxValue_3(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMinNonZeroValue_3(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMinValue_3(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getPercentileAtOrBelowValue_3(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_getStartTimeStamp_5(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getTotalCount_4(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getValueAtPercentile_3(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_highestEquivalentValue_3(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_linearBucketValues_3(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_logarithmicBucketValues_3(instance, a0, a1){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_lowestEquivalentValue_3(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_medianEquivalentValue_3(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_nextNonEquivalentValue_3(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_recordValue_7(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_recordValue_8(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithCount_5(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithExpectedInterval_3(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_5(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_5(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_sizeOfEquivalentValueRange_3(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_valueFromIndex_3(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_valuesAreEquivalent_3(instance, a0, a1){
    return null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  defineSeed(230, 1, {}, Recorder_InternalConcurrentHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_23(){
    return $wnd.org.HdrHistogram.Recorder.InternalConcurrentHistogram;
  }
  ;
  _.isAssignable = function isAssignable_23(o){
    return false;
  }
  ;
  var exported_23 = false;
  function $copy_1(this$static){
    var copy;
    copy = new ShortCountsHistogram_3(this$static);
    $add_1(copy, this$static);
    return copy;
  }

  function $copyCorrectedForCoordinatedOmission_1(this$static, expectedIntervalBetweenValueSamples){
    var toHistogram;
    toHistogram = new ShortCountsHistogram_3(this$static);
    $addWhileCorrectingForCoordinatedOmission(toHistogram, this$static, expectedIntervalBetweenValueSamples);
    return toHistogram;
  }

  function $getCountAtIndex_1(this$static, index){
    return fromInt(this$static.counts[$normalizeIndex(this$static, index, this$static.normalizingIndexOffset)]);
  }

  function $setCountAtNormalizedIndex_0(this$static, index, value){
    if (lt(value, P0_longLit) || gt(value, P7fff_longLit)) {
      throw new IllegalArgumentException_1('would overflow short integer count');
    }
    this$static.counts[index] = toInt(value) << 16 >> 16;
  }

  function CopyOf(source){
    $clinit_AbstractHistogram();
    return new ShortCountsHistogram_3(source);
  }

  function ShortCountsHistogram_0(lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    AbstractHistogram_0.call(this, fromDouble(lowestDiscernibleValue), fromDouble(highestTrackableValue), numberOfSignificantValueDigits);
    this.counts = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, this.countsArrayLength, 1);
    this.wordSizeInBytes = 2;
  }

  function ShortCountsHistogram_1(highestTrackableValue, numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    ShortCountsHistogram_0.call(this, 1, highestTrackableValue, numberOfSignificantValueDigits);
  }

  function ShortCountsHistogram_2(numberOfSignificantValueDigits){
    $clinit_AbstractHistogram();
    ShortCountsHistogram_0.call(this, 1, 2, numberOfSignificantValueDigits);
    this.autoResize = true;
  }

  function ShortCountsHistogram_3(source){
    AbstractHistogram_1.call(this, source);
    this.counts = initDim(_3S_classLit, makeCastMap([Q$Serializable]), -1, this.countsArrayLength, 1);
    this.wordSizeInBytes = 2;
  }

  defineSeed(231, 132, makeCastMap([Q$Serializable, Q$AbstractHistogram, Q$AbstractHistogramBase, Q$ShortCountsHistogram, Q$Exportable]), ShortCountsHistogram_0, ShortCountsHistogram_1, ShortCountsHistogram_2, ShortCountsHistogram_3);
  _._getEstimatedFootprintInBytes = function _getEstimatedFootprintInBytes_1(){
    return 512 + 2 * this.counts.length;
  }
  ;
  _.addToCountAtIndex = function addToCountAtIndex_1(index, value){
    var currentCount, newCount, normalizedIndex;
    normalizedIndex = $normalizeIndex(this, index, this.normalizingIndexOffset);
    currentCount = this.counts[normalizedIndex];
    if (lt(value, P0_longLit) || gt(value, P7fff_longLit)) {
      throw new IllegalArgumentException_1('would overflow short integer count');
    }
    newCount = toInt(add(fromInt(currentCount), value)) << 16 >> 16;
    if (newCount < 0) {
      throw new IllegalStateException_1('would overflow short integer count');
    }
    this.counts[normalizedIndex] = newCount;
  }
  ;
  _.addToTotalCount = function addToTotalCount_1(value){
    this.totalCount = add(this.totalCount, value);
  }
  ;
  _.clearCounts = function clearCounts_1(){
    fill_4(this.counts);
    this.totalCount = P0_longLit;
  }
  ;
  _.copy_0 = function copy_5(){
    return $copy_1(this);
  }
  ;
  _.copy_4 = function copy_6(){
    return $copy_1(this);
  }
  ;
  _.copyCorrectedForCoordinatedOmission_0 = function copyCorrectedForCoordinatedOmission_3(expectedIntervalBetweenValueSamples){
    return $copyCorrectedForCoordinatedOmission_1(this, expectedIntervalBetweenValueSamples);
  }
  ;
  _.fillBufferFromCountsArray = function fillBufferFromCountsArray_1(buffer, length_0){
    if (!this.cachedDstShortBuffer || buffer != this.cachedDstByteBuffer || buffer.position_0 != this.cachedDstByteBufferPosition) {
      this.cachedDstByteBuffer = buffer;
      this.cachedDstByteBufferPosition = buffer.position_0;
      this.cachedDstShortBuffer = new ShortToByteBufferAdapter_0($slice(buffer));
    }
    $rewind(this.cachedDstShortBuffer);
    $put_3(this.cachedDstShortBuffer, this.counts, length_0);
  }
  ;
  _.getCountAtIndex = function getCountAtIndex_1(index){
    return $getCountAtIndex_1(this, index);
  }
  ;
  _.getCountAtNormalizedIndex = function getCountAtNormalizedIndex_1(index){
    return fromInt(this.counts[index]);
  }
  ;
  _.getNormalizingIndexOffset = function getNormalizingIndexOffset_1(){
    return this.normalizingIndexOffset;
  }
  ;
  _.getTotalCount_0 = function getTotalCount_1(){
    return this.totalCount;
  }
  ;
  _.incrementCountAtIndex = function incrementCountAtIndex_1(index){
    var currentCount, newCount, normalizedIndex;
    normalizedIndex = $normalizeIndex(this, index, this.normalizingIndexOffset);
    currentCount = this.counts[normalizedIndex];
    newCount = currentCount + 1 << 16 >> 16;
    if (newCount < 0) {
      throw new IllegalStateException_1('would overflow short integer count');
    }
    this.counts[normalizedIndex] = newCount;
  }
  ;
  _.incrementTotalCount = function incrementTotalCount_1(){
    this.totalCount = add(this.totalCount, P1_longLit);
  }
  ;
  _.resize = function resize_1(newHighestTrackableValue){
    var countsDelta, lengthToCopy, newNormalizedZeroIndex, oldNormalizedZeroIndex;
    oldNormalizedZeroIndex = $normalizeIndex(this, 0, this.normalizingIndexOffset);
    $establishSize(this, newHighestTrackableValue);
    countsDelta = this.countsArrayLength - this.counts.length;
    this.counts = copyOf_1(this.counts, this.countsArrayLength);
    if (oldNormalizedZeroIndex != 0) {
      newNormalizedZeroIndex = oldNormalizedZeroIndex + countsDelta;
      lengthToCopy = this.countsArrayLength - countsDelta - oldNormalizedZeroIndex;
      arraycopy(this.counts, oldNormalizedZeroIndex, this.counts, newNormalizedZeroIndex, lengthToCopy);
    }
  }
  ;
  _.setCountAtIndex = function setCountAtIndex_1(index, value){
    $setCountAtNormalizedIndex_0(this, $normalizeIndex(this, index, this.normalizingIndexOffset), value);
  }
  ;
  _.setCountAtNormalizedIndex = function setCountAtNormalizedIndex_1(index, value){
    $setCountAtNormalizedIndex_0(this, index, value);
  }
  ;
  _.setNormalizingIndexOffset = function setNormalizingIndexOffset_1(normalizingIndexOffset){
    this.normalizingIndexOffset = normalizingIndexOffset;
  }
  ;
  _.setTotalCount = function setTotalCount_1(totalCount){
    this.totalCount = totalCount;
  }
  ;
  _.shiftNormalizingIndexByOffset = function shiftNormalizingIndexByOffset_1(offsetToAdd, lowestHalfBucketPopulated){
    $nonConcurrentNormalizingIndexShift(this, offsetToAdd, lowestHalfBucketPopulated);
  }
  ;
  _.cachedDstByteBuffer = null;
  _.cachedDstByteBufferPosition = 0;
  _.cachedDstShortBuffer = null;
  _.counts = null;
  _.normalizingIndexOffset = 0;
  _.totalCount = P0_longLit;
  function $export_24(this$static){
    if (!exported_24) {
      exported_24 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_ShortCountsHistogram_2_classLit, this$static);
      new AbstractHistogram_ExporterImpl_0;
      $export0_24(this$static);
    }
  }

  function $export0_24(this$static){
    var pkg = declarePackage('org.HdrHistogram.ShortCountsHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.ShortCountsHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 1?(g = new ShortCountsHistogram_2(a[0])):a.length == 2?(g = new ShortCountsHistogram_1(a[0], a[1])):a.length == 3 && (g = new ShortCountsHistogram_0(a[0], a[1], a[2]));
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.ShortCountsHistogram.prototype = new Object;
    $wnd.org.HdrHistogram.ShortCountsHistogram.CopyOf = $entry(function(a0){
          return wrap_2(CopyOf(gwtInstance(a0)));
        }
    );
    __0._getCountAtIndex = $entry(function(a0){
          return __static_wrapper__getCountAtIndex_4(this.g, a0);
        }
    );
    __0.add = $entry(function(a0){
          this.g.add_1(gwtInstance(a0));
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_addWhileCorrectingForCoordinatedOmission_4(this.g, gwtInstance(a0), a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_0();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_4());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(__static_wrapper_copyCorrectedForCoordinatedOmission_4(this.g, a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_0(gwtInstance(a0));
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_copyIntoCorrectedForCoordinatedOmission_4(this.g, gwtInstance(a0), a1);
        }
    );
    $wnd.org.HdrHistogram.ShortCountsHistogram.decodeFromByteBuffer = $entry(function(a0, a1){
          return wrap_2(__static_wrapper_decodeFromByteBuffer_3(gwtInstance(a0), a1));
        }
    );
    $wnd.org.HdrHistogram.ShortCountsHistogram.decodeFromCompressedByteBuffer = $entry(function(a0, a1){
          return wrap_2(__static_wrapper_decodeFromCompressedByteBuffer_3(gwtInstance(a0), a1));
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_ShortCountsHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_ShortCountsHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.getBucketCount = $entry(function(){
          return this.g.getBucketCount_0();
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_6(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return __static_wrapper_getCountBetweenValues_4(this.g, a0, a1);
        }
    );
    __0.getCountsArrayLength = $entry(function(){
          return this.g.getCountsArrayLength_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_6(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestTrackableValue = $entry(function(){
          return __static_wrapper_getHighestTrackableValue_4(this.g);
        }
    );
    __0.getLowestDiscernibleValue = $entry(function(){
          return __static_wrapper_getLowestDiscernibleValue_4(this.g);
        }
    );
    __0.getMaxValue = $entry(function(){
          return __static_wrapper_getMaxValue_4(this.g);
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return __static_wrapper_getMinNonZeroValue_4(this.g);
        }
    );
    __0.getMinValue = $entry(function(){
          return __static_wrapper_getMinValue_4(this.g);
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return __static_wrapper_getPercentileAtOrBelowValue_4(this.g, a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_6(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getSubBucketCount = $entry(function(){
          return this.g.getSubBucketCount_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount_5(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return __static_wrapper_getValueAtPercentile_4(this.g, a0);
        }
    );
    __0.getWordSizeInBytes = $entry(function(){
          return this.g.getWordSizeInBytes_0();
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return __static_wrapper_highestEquivalentValue_4(this.g, a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return __static_wrapper_linearBucketValues_4(this.g, a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return __static_wrapper_logarithmicBucketValues_4(this.g, a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return __static_wrapper_lowestEquivalentValue_4(this.g, a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return __static_wrapper_medianEquivalentValue_4(this.g, a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return __static_wrapper_nextNonEquivalentValue_4(this.g, a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_ShortCountsHistogram_2_classLit, 3, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_0(a0);
        }
    );
    __0.recordValue = $entry(function(a0, a1){
          runDispatch(this.g, Lorg_HdrHistogram_ShortCountsHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_6(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          __static_wrapper_recordValueWithExpectedInterval_4(this.g, a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_0();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_6(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_6(this.g, a0);
        }
    );
    __0.shiftValuesLeft = $entry(function(a0){
          this.g.shiftValuesLeft_0(a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return __static_wrapper_sizeOfEquivalentValueRange_4(this.g, a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_0(gwtInstance(a0));
        }
    );
    __0.valueFromIndex = $entry(function(a0){
          return __static_wrapper_valueFromIndex_4(this.g, a0);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return __static_wrapper_valuesAreEquivalent_4(this.g, a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_ShortCountsHistogram_2_classLit, {0:{1:[[__static_wrapper_recordValue_9, null, unshift, 'number']], 2:[[__static_wrapper_recordValue_10, null, unshift, 'number', 'number']]}, 1:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 2:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 3:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.ShortCountsHistogram[p] === undefined && ($wnd.org.HdrHistogram.ShortCountsHistogram[p] = pkg[p]);
  }

  function ShortCountsHistogram_ExporterImpl_0(){
    $export_24(this);
  }

  function __static_wrapper__getCountAtIndex_4(instance, a0){
    return toDouble($getCountAtIndex_1(instance, a0));
  }

  function __static_wrapper_addWhileCorrectingForCoordinatedOmission_4(instance, a0, a1){
    $addWhileCorrectingForCoordinatedOmission(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_copyCorrectedForCoordinatedOmission_4(instance, a0){
    return $copyCorrectedForCoordinatedOmission_1(instance, fromDouble(a0));
  }

  function __static_wrapper_copyIntoCorrectedForCoordinatedOmission_4(instance, a0, a1){
    $copyIntoCorrectedForCoordinatedOmission(instance, a0, fromDouble(a1));
  }

  function __static_wrapper_decodeFromByteBuffer_3(a0, a1){
    return $clinit_AbstractHistogram() , decodeFromByteBuffer(a0, Lorg_HdrHistogram_ShortCountsHistogram_2_classLit, fromDouble(a1));
  }

  function __static_wrapper_decodeFromCompressedByteBuffer_3(a0, a1){
    return $clinit_AbstractHistogram() , decodeFromCompressedByteBuffer(a0, Lorg_HdrHistogram_ShortCountsHistogram_2_classLit, fromDouble(a1));
  }

  function __static_wrapper_getCountAtValue_6(instance, a0){
    return toDouble($getCountAtValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_getCountBetweenValues_4(instance, a0, a1){
    return toDouble($getCountBetweenValues(instance, fromDouble(a0), fromDouble(a1)));
  }

  function __static_wrapper_getEndTimeStamp_6(instance){
    return toDouble(instance.endTimeStampMsec);
  }

  function __static_wrapper_getHighestTrackableValue_4(instance){
    return toDouble(instance.highestTrackableValue);
  }

  function __static_wrapper_getLowestDiscernibleValue_4(instance){
    return toDouble(instance.lowestDiscernibleValue);
  }

  function __static_wrapper_getMaxValue_4(instance){
    return toDouble(eq(instance.maxValue, P0_longLit)?P0_longLit:$highestEquivalentValue(instance, instance.maxValue));
  }

  function __static_wrapper_getMinNonZeroValue_4(instance){
    return toDouble(eq(instance.minNonZeroValue, P7fffffffffffffff_longLit)?P7fffffffffffffff_longLit:$lowestEquivalentValue(instance, instance.minNonZeroValue));
  }



  function __static_wrapper_getMinValue_4(instance){
    return toDouble($getMinValue(instance));
  }

  function __static_wrapper_getPercentileAtOrBelowValue_4(instance, a0){
    return $getPercentileAtOrBelowValue(instance, fromDouble(a0));
  }

  function __static_wrapper_getStartTimeStamp_6(instance){
    return toDouble(instance.startTimeStampMsec);
  }

  function __static_wrapper_getTotalCount_5(instance){
    return toDouble(instance.totalCount);
  }

  function __static_wrapper_getValueAtPercentile_4(instance, a0){
    return toDouble($getValueAtPercentile(instance, a0));
  }

  function __static_wrapper_highestEquivalentValue_4(instance, a0){
    return toDouble($highestEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_linearBucketValues_4(instance, a0){
    return new AbstractHistogram$LinearBucketValues_0(fromDouble(a0));
  }

  function __static_wrapper_logarithmicBucketValues_4(instance, a0, a1){
    return new AbstractHistogram$LogarithmicBucketValues_0(fromDouble(a0));
  }

  function __static_wrapper_lowestEquivalentValue_4(instance, a0){
    return toDouble($lowestEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_medianEquivalentValue_4(instance, a0){
    return toDouble($medianEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_nextNonEquivalentValue_4(instance, a0){
    return toDouble($nextNonEquivalentValue(instance, fromDouble(a0)));
  }

  function __static_wrapper_recordValue_9(instance, a0){
    $recordSingleValue(instance, fromDouble(a0));
  }

  function __static_wrapper_recordValue_10(instance, a0, a1){
    $recordSingleValueWithExpectedInterval(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithCount_6(instance, a0, a1){
    $recordValueWithCount(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithExpectedInterval_4(instance, a0, a1){
    $recordSingleValueWithExpectedInterval(instance, fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_6(instance, a0){
    $setEndTimeStamp(instance, fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_6(instance, a0){
    $setStartTimeStamp(instance, fromDouble(a0));
  }

  function __static_wrapper_sizeOfEquivalentValueRange_4(instance, a0){
    return toDouble($sizeOfEquivalentValueRange(instance, fromDouble(a0)));
  }

  function __static_wrapper_valueFromIndex_4(instance, a0){
    return toDouble($valueFromIndex(instance, a0));
  }

  function __static_wrapper_valuesAreEquivalent_4(instance, a0, a1){
    return $valuesAreEquivalent(instance, fromDouble(a0), fromDouble(a1));
  }

  defineSeed(232, 1, {}, ShortCountsHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_24(){
    return $wnd.org.HdrHistogram.ShortCountsHistogram;
  }
  ;
  _.isAssignable = function isAssignable_24(o){
    return o != null && instanceOf(o, Q$ShortCountsHistogram);
  }
  ;
  var exported_24 = false;
  function $export_25(this$static){
    if (!exported_25) {
      exported_25 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_SingleWriterDoubleRecorder$InternalDoubleHistogram_2_classLit, this$static);
      new DoubleHistogram_ExporterImpl_0;
      $export0_25(this$static);
    }
  }

  function $export0_25(this$static){
    var pkg = declarePackage('org.HdrHistogram.SingleWriterDoubleRecorder.InternalDoubleHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.SingleWriterDoubleRecorder.InternalDoubleHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.SingleWriterDoubleRecorder.InternalDoubleHistogram.prototype = new Object;
    __0.add = $entry(function(a0){
          this.g.add_2(a0 == null?null:a0.g);
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          this.g.addWhileCorrectingForCoordinatedOmission_0(a0 == null?null:a0.g, a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_1();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_1());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(this.g.copyCorrectedForCoordinatedOmission_1(a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_1(a0 == null?null:a0.g);
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          this.g.copyIntoCorrectedForCoordinatedOmission_0(a0 == null?null:a0.g, a1);
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_SingleWriterDoubleRecorder$InternalDoubleHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_SingleWriterDoubleRecorder$InternalDoubleHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_7(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return this.g.getCountBetweenValues_0(a0, a1);
        }
    );
    __0.getCurrentLowestTrackableNonZeroValue = $entry(function(){
          return this.g.getCurrentLowestTrackableNonZeroValue_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_7(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestToLowestValueRatio = $entry(function(){
          return __static_wrapper_getHighestToLowestValueRatio_1(this.g);
        }
    );
    __0.getIntegerToDoubleValueConversionRatio = $entry(function(){
          return this.g.getIntegerToDoubleValueConversionRatio_0();
        }
    );
    __0.getMaxValue = $entry(function(){
          return this.g.getMaxValue_0();
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return this.g.getMinNonZeroValue_0();
        }
    );
    __0.getMinValue = $entry(function(){
          return this.g.getMinValue_0();
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return this.g.getPercentileAtOrBelowValue_0(a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_7(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount_6(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return this.g.getValueAtPercentile_0(a0);
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return this.g.highestEquivalentValue_0(a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return this.g.linearBucketValues_0(a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return this.g.logarithmicBucketValues_0(a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return this.g.lowestEquivalentValue_0(a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return this.g.medianEquivalentValue_0(a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return this.g.nextNonEquivalentValue_0(a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_SingleWriterDoubleRecorder$InternalDoubleHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_1(a0);
        }
    );
    __0.recordValue = $entry(function(a0){
          this.g.recordValue_0(a0);
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_7(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          this.g.recordValueWithExpectedInterval_0(a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_1();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_7(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_7(this.g, a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return this.g.sizeOfEquivalentValueRange_0(a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_1(a0 == null?null:a0.g);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return this.g.valuesAreEquivalent_0(a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_SingleWriterDoubleRecorder$InternalDoubleHistogram_2_classLit, {0:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 1:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 2:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.SingleWriterDoubleRecorder.InternalDoubleHistogram[p] === undefined && ($wnd.org.HdrHistogram.SingleWriterDoubleRecorder.InternalDoubleHistogram[p] = pkg[p]);
  }

  function SingleWriterDoubleRecorder_InternalDoubleHistogram_ExporterImpl_0(){
    $export_25(this);
  }

  function __static_wrapper_getCountAtValue_7(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getEndTimeStamp_7(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getHighestToLowestValueRatio_1(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getStartTimeStamp_7(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getTotalCount_6(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_recordValueWithCount_7(instance, a0, a1){
    null.nullMethod(fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_7(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_7(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  defineSeed(233, 1, {}, SingleWriterDoubleRecorder_InternalDoubleHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_25(){
    return $wnd.org.HdrHistogram.SingleWriterDoubleRecorder.InternalDoubleHistogram;
  }
  ;
  _.isAssignable = function isAssignable_25(o){
    return false;
  }
  ;
  var exported_25 = false;
  function $export_26(this$static){
    if (!exported_26) {
      exported_26 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_SingleWriterRecorder$InternalHistogram_2_classLit, this$static);
      new AbstractHistogram_ExporterImpl_0;
      new Histogram_ExporterImpl_0;
      $export0_26(this$static);
    }
  }

  function $export0_26(this$static){
    var pkg = declarePackage('org.HdrHistogram.SingleWriterRecorder.InternalHistogram');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.SingleWriterRecorder.InternalHistogram = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0]) && (g = a[0]);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.SingleWriterRecorder.InternalHistogram.prototype = new Object;
    __0._getCountAtIndex = $entry(function(a0){
          return __static_wrapper__getCountAtIndex_5(this.g, a0);
        }
    );
    __0.add = $entry(function(a0){
          this.g.add_1(gwtInstance(a0));
        }
    );
    __0.addWhileCorrectingForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_addWhileCorrectingForCoordinatedOmission_5(this.g, gwtInstance(a0), a1);
        }
    );
    __0.allValues = $entry(function(){
          return this.g.allValues_0();
        }
    );
    __0.copy = $entry(function(){
          return wrap_2(this.g.copy_2());
        }
    );
    __0.copyCorrectedForCoordinatedOmission = $entry(function(a0){
          return wrap_2(__static_wrapper_copyCorrectedForCoordinatedOmission_5(this.g, a0));
        }
    );
    __0.copyInto = $entry(function(a0){
          this.g.copyInto_0(gwtInstance(a0));
        }
    );
    __0.copyIntoCorrectedForCoordinatedOmission = $entry(function(a0, a1){
          __static_wrapper_copyIntoCorrectedForCoordinatedOmission_5(this.g, gwtInstance(a0), a1);
        }
    );
    __0.encodeIntoByteBuffer = $entry(function(a0){
          return this.g.encodeIntoByteBuffer_0(gwtInstance(a0));
        }
    );
    __0.encodeIntoCompressedByteBuffer = $entry(function(a0, a1){
          return runDispatch(this.g, Lorg_HdrHistogram_SingleWriterRecorder$InternalHistogram_2_classLit, 1, arguments, false, false)[0];
        }
    );
    __0.equals = $entry(function(a0){
          return runDispatch(this.g, Lorg_HdrHistogram_SingleWriterRecorder$InternalHistogram_2_classLit, 2, arguments, false, false)[0];
        }
    );
    __0.getBucketCount = $entry(function(){
          return this.g.getBucketCount_0();
        }
    );
    __0.getCountAtValue = $entry(function(a0){
          return __static_wrapper_getCountAtValue_8(this.g, a0);
        }
    );
    __0.getCountBetweenValues = $entry(function(a0, a1){
          return __static_wrapper_getCountBetweenValues_5(this.g, a0, a1);
        }
    );
    __0.getCountsArrayLength = $entry(function(){
          return this.g.getCountsArrayLength_0();
        }
    );
    __0.getEndTimeStamp = $entry(function(){
          return __static_wrapper_getEndTimeStamp_8(this.g);
        }
    );
    __0.getEstimatedFootprintInBytes = $entry(function(){
          return this.g.getEstimatedFootprintInBytes_0();
        }
    );
    __0.getHighestTrackableValue = $entry(function(){
          return __static_wrapper_getHighestTrackableValue_5(this.g);
        }
    );
    __0.getLowestDiscernibleValue = $entry(function(){
          return __static_wrapper_getLowestDiscernibleValue_5(this.g);
        }
    );
    __0.getMaxValue = $entry(function(){
          return __static_wrapper_getMaxValue_5(this.g);
        }
    );
    __0.getMaxValueAsDouble = $entry(function(){
          return this.g.getMaxValueAsDouble_0();
        }
    );
    __0.getMean = $entry(function(){
          return this.g.getMean_0();
        }
    );
    __0.getMinNonZeroValue = $entry(function(){
          return __static_wrapper_getMinNonZeroValue_5(this.g);
        }
    );
    __0.getMinValue = $entry(function(){
          return __static_wrapper_getMinValue_5(this.g);
        }
    );
    __0.getNeededByteBufferCapacity = $entry(function(){
          return this.g.getNeededByteBufferCapacity_0();
        }
    );
    __0.getNumberOfSignificantValueDigits = $entry(function(){
          return this.g.getNumberOfSignificantValueDigits_0();
        }
    );
    __0.getPercentileAtOrBelowValue = $entry(function(a0){
          return __static_wrapper_getPercentileAtOrBelowValue_5(this.g, a0);
        }
    );
    __0.getStartTimeStamp = $entry(function(){
          return __static_wrapper_getStartTimeStamp_8(this.g);
        }
    );
    __0.getStdDeviation = $entry(function(){
          return this.g.getStdDeviation_0();
        }
    );
    __0.getSubBucketCount = $entry(function(){
          return this.g.getSubBucketCount_0();
        }
    );
    __0.getTotalCount = $entry(function(){
          return __static_wrapper_getTotalCount_7(this.g);
        }
    );
    __0.getValueAtPercentile = $entry(function(a0){
          return __static_wrapper_getValueAtPercentile_5(this.g, a0);
        }
    );
    __0.getWordSizeInBytes = $entry(function(){
          return this.g.getWordSizeInBytes_0();
        }
    );
    __0.highestEquivalentValue = $entry(function(a0){
          return __static_wrapper_highestEquivalentValue_5(this.g, a0);
        }
    );
    __0.isAutoResize = $entry(function(){
          return this.g.isAutoResize_0();
        }
    );
    __0.linearBucketValues = $entry(function(a0){
          return __static_wrapper_linearBucketValues_5(this.g, a0);
        }
    );
    __0.logarithmicBucketValues = $entry(function(a0, a1){
          return __static_wrapper_logarithmicBucketValues_5(this.g, a0, a1);
        }
    );
    __0.lowestEquivalentValue = $entry(function(a0){
          return __static_wrapper_lowestEquivalentValue_5(this.g, a0);
        }
    );
    __0.medianEquivalentValue = $entry(function(a0){
          return __static_wrapper_medianEquivalentValue_5(this.g, a0);
        }
    );
    __0.nextNonEquivalentValue = $entry(function(a0){
          return __static_wrapper_nextNonEquivalentValue_5(this.g, a0);
        }
    );
    __0.outputPercentileDistribution = $entry(function(a0, a1, a2, a3){
          runDispatch(this.g, Lorg_HdrHistogram_SingleWriterRecorder$InternalHistogram_2_classLit, 3, arguments, false, false)[0];
        }
    );
    __0.percentiles = $entry(function(a0){
          return this.g.percentiles_0(a0);
        }
    );
    __0.recordValue = $entry(function(a0, a1){
          runDispatch(this.g, Lorg_HdrHistogram_SingleWriterRecorder$InternalHistogram_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.recordValueWithCount = $entry(function(a0, a1){
          __static_wrapper_recordValueWithCount_8(this.g, a0, a1);
        }
    );
    __0.recordValueWithExpectedInterval = $entry(function(a0, a1){
          __static_wrapper_recordValueWithExpectedInterval_5(this.g, a0, a1);
        }
    );
    __0.recordedValues = $entry(function(){
          return this.g.recordedValues_0();
        }
    );
    __0.reset = $entry(function(){
          this.g.reset_0();
        }
    );
    __0.setAutoResize = $entry(function(a0){
          this.g.setAutoResize_0(a0);
        }
    );
    __0.setEndTimeStamp = $entry(function(a0){
          __static_wrapper_setEndTimeStamp_8(this.g, a0);
        }
    );
    __0.setStartTimeStamp = $entry(function(a0){
          __static_wrapper_setStartTimeStamp_8(this.g, a0);
        }
    );
    __0.shiftValuesLeft = $entry(function(a0){
          this.g.shiftValuesLeft_0(a0);
        }
    );
    __0.sizeOfEquivalentValueRange = $entry(function(a0){
          return __static_wrapper_sizeOfEquivalentValueRange_5(this.g, a0);
        }
    );
    __0.subtract = $entry(function(a0){
          this.g.subtract_0(gwtInstance(a0));
        }
    );
    __0.valueFromIndex = $entry(function(a0){
          return __static_wrapper_valueFromIndex_5(this.g, a0);
        }
    );
    __0.valuesAreEquivalent = $entry(function(a0, a1){
          return __static_wrapper_valuesAreEquivalent_5(this.g, a0, a1);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_SingleWriterRecorder$InternalHistogram_2_classLit, {0:{1:[[__static_wrapper_recordValue_11, null, unshift, 'number']], 2:[[__static_wrapper_recordValue_12, null, unshift, 'number', 'number']]}, 1:{1:[[function(){
      return this.encodeIntoCompressedByteBuffer_0.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit]], 2:[[function(){
      return this.encodeIntoCompressedByteBuffer_1.apply(this, arguments);
    }
      , null, undefined, Ljava_nio_ByteBuffer_2_classLit, 'number']]}, 2:{1:[[function(){
      return this.equals$.apply(this, arguments);
    }
      , null, undefined, Ljava_lang_Object_2_classLit]]}, 3:{2:[[function(){
      return this.outputPercentileDistribution_2.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, Ljava_lang_Double_2_classLit]], 3:[[function(){
      return this.outputPercentileDistribution_0.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit]], 4:[[function(){
      return this.outputPercentileDistribution_1.apply(this, arguments);
    }
      , null, undefined, Ljava_io_PrintStream_2_classLit, 'number', Ljava_lang_Double_2_classLit, 'boolean']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.SingleWriterRecorder.InternalHistogram[p] === undefined && ($wnd.org.HdrHistogram.SingleWriterRecorder.InternalHistogram[p] = pkg[p]);
  }

  function SingleWriterRecorder_InternalHistogram_ExporterImpl_0(){
    $export_26(this);
  }

  function __static_wrapper__getCountAtIndex_5(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_addWhileCorrectingForCoordinatedOmission_5(instance, a0, a1){
    null.nullMethod(fromDouble(a1));
  }

  function __static_wrapper_copyCorrectedForCoordinatedOmission_5(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_copyIntoCorrectedForCoordinatedOmission_5(instance, a0, a1){
    null.nullMethod(fromDouble(a1));
  }

  function __static_wrapper_getCountAtValue_8(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_getCountBetweenValues_5(instance, a0, a1){
    return toDouble(null.nullMethod(fromDouble(a0), fromDouble(a1)));
  }

  function __static_wrapper_getEndTimeStamp_8(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getHighestTrackableValue_5(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getLowestDiscernibleValue_5(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMaxValue_5(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMinNonZeroValue_5(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getMinValue_5(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getPercentileAtOrBelowValue_5(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_getStartTimeStamp_8(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getTotalCount_7(instance){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_getValueAtPercentile_5(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_highestEquivalentValue_5(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_linearBucketValues_5(instance, a0){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_logarithmicBucketValues_5(instance, a0, a1){
    return null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_lowestEquivalentValue_5(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_medianEquivalentValue_5(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_nextNonEquivalentValue_5(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_recordValue_11(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_recordValue_12(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithCount_8(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_recordValueWithExpectedInterval_5(instance, a0, a1){
    null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  function __static_wrapper_setEndTimeStamp_8(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_setStartTimeStamp_8(instance, a0){
    null.nullMethod(fromDouble(a0));
  }

  function __static_wrapper_sizeOfEquivalentValueRange_5(instance, a0){
    return toDouble(null.nullMethod(fromDouble(a0)));
  }

  function __static_wrapper_valueFromIndex_5(instance, a0){
    return toDouble(null.nullMethod());
  }

  function __static_wrapper_valuesAreEquivalent_5(instance, a0, a1){
    return null.nullMethod(fromDouble(a0), fromDouble(a1));
  }

  defineSeed(234, 1, {}, SingleWriterRecorder_InternalHistogram_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_26(){
    return $wnd.org.HdrHistogram.SingleWriterRecorder.InternalHistogram;
  }
  ;
  _.isAssignable = function isAssignable_26(o){
    return false;
  }
  ;
  var exported_26 = false;
  function $flipPhase(this$static){
    var caughtUp, initialStartValue, nextPhaseIsEven, startValueAtFlip;
    if (this$static.readerLock_0.lockCount <= 0) {
      throw new IllegalStateException_1('flipPhase() can only be called while holding the readerLock()');
    }
    nextPhaseIsEven = lt(this$static.startEpoch, P0_longLit);
    nextPhaseIsEven?(this$static.evenEndEpoch = initialStartValue = P0_longLit):(this$static.oddEndEpoch = initialStartValue = N8000000000000000_longLit);
    startValueAtFlip = $getAndSet(this$static.startEpochUpdater, initialStartValue);
    do {
      nextPhaseIsEven?(caughtUp = eq(this$static.oddEndEpoch, startValueAtFlip)):(caughtUp = eq(this$static.evenEndEpoch, startValueAtFlip));
    }
    while (!caughtUp);
  }

  function $writerCriticalSectionExit(this$static, criticalValueAtEnter){
    lt(criticalValueAtEnter, P0_longLit)?$getAndIncrement(this$static.oddEndEpochUpdater):$getAndIncrement(this$static.evenEndEpochUpdater);
  }

  function WriterReaderPhaser_0(){
    this.readerLock_0 = new ReentrantLock_0;
    this.startEpochUpdater = new WriterReaderPhaser$1_0(this);
    this.evenEndEpochUpdater = new WriterReaderPhaser$2_0(this);
    this.oddEndEpochUpdater = new WriterReaderPhaser$3_0(this);
  }

  defineSeed(235, 1, makeCastMap([Q$WriterReaderPhaser, Q$Exportable]), WriterReaderPhaser_0);
  _.flipPhase_0 = function flipPhase(){
    $flipPhase(this);
  }
  ;
  _.readerLock_1 = function readerLock(){
    this.readerLock_0.lockCount += 1;
  }
  ;
  _.readerUnlock_0 = function readerUnlock(){
    $unlock(this.readerLock_0);
  }
  ;
  _.evenEndEpoch = P0_longLit;
  _.oddEndEpoch = N8000000000000000_longLit;
  _.startEpoch = P0_longLit;
  function WriterReaderPhaser$1_0(this$0){
    this.this$0 = this$0;
  }

  defineSeed(236, 136, {}, WriterReaderPhaser$1_0);
  _.getValue_0 = function getValue_4(){
    return this.this$0.startEpoch;
  }
  ;
  _.setValue_0 = function setValue_4(x){
    this.this$0.startEpoch = x;
  }
  ;
  _.this$0 = null;
  function WriterReaderPhaser$2_0(this$0){
    this.this$0 = this$0;
  }

  defineSeed(237, 136, {}, WriterReaderPhaser$2_0);
  _.getValue_0 = function getValue_5(){
    return this.this$0.evenEndEpoch;
  }
  ;
  _.setValue_0 = function setValue_5(x){
    this.this$0.evenEndEpoch = x;
  }
  ;
  _.this$0 = null;
  function WriterReaderPhaser$3_0(this$0){
    this.this$0 = this$0;
  }

  defineSeed(238, 136, {}, WriterReaderPhaser$3_0);
  _.getValue_0 = function getValue_6(){
    return this.this$0.oddEndEpoch;
  }
  ;
  _.setValue_0 = function setValue_6(x){
    this.this$0.oddEndEpoch = x;
  }
  ;
  _.this$0 = null;
  function $export_27(this$static){
    if (!exported_27) {
      exported_27 = true;
      $clinit_ExporterUtil();
      $addExporter(impl, Lorg_HdrHistogram_WriterReaderPhaser_2_classLit, this$static);
      $export0_27(this$static);
    }
  }

  function $export0_27(this$static){
    var pkg = declarePackage('org.HdrHistogram.WriterReaderPhaser');
    var __0, __ = this$static;
    $wnd.org.HdrHistogram.WriterReaderPhaser = $entry(function(){
          var g, j = this, a = arguments;
          a.length == 1 && __.isAssignable(a[0])?(g = a[0]):a.length == 0 && (g = new WriterReaderPhaser_0);
          j.g = g;
          setWrapper(g, j);
          return j;
        }
    );
    __0 = $wnd.org.HdrHistogram.WriterReaderPhaser.prototype = new Object;
    __0.flipPhase = $entry(function(a0){
          runDispatch(this.g, Lorg_HdrHistogram_WriterReaderPhaser_2_classLit, 0, arguments, false, false)[0];
        }
    );
    __0.readerLock = $entry(function(){
          this.g.readerLock_1();
        }
    );
    __0.readerUnlock = $entry(function(){
          this.g.readerUnlock_0();
        }
    );
    __0.writerCriticalSectionEnter = $entry(function(){
          return __static_wrapper_writerCriticalSectionEnter(this.g);
        }
    );
    __0.writerCriticalSectionExit = $entry(function(a0){
          __static_wrapper_writerCriticalSectionExit(this.g, a0);
        }
    );
    registerDispatchMap(Lorg_HdrHistogram_WriterReaderPhaser_2_classLit, {0:{0:[[function(){
      return this.flipPhase_0.apply(this, arguments);
    }
      , null, undefined]], 1:[[__static_wrapper_flipPhase, null, unshift, 'number']]}}, false);
    if (pkg)
      for (p in pkg)
        $wnd.org.HdrHistogram.WriterReaderPhaser[p] === undefined && ($wnd.org.HdrHistogram.WriterReaderPhaser[p] = pkg[p]);
  }

  function WriterReaderPhaser_ExporterImpl_0(){
    $export_27(this);
  }

  function __static_wrapper_flipPhase(instance, a0){
    $flipPhase(instance, fromDouble(a0));
  }

  function __static_wrapper_writerCriticalSectionEnter(instance){
    return toDouble($getAndIncrement(instance.startEpochUpdater, instance));
  }

  function __static_wrapper_writerCriticalSectionExit(instance, a0){
    $writerCriticalSectionExit(instance, fromDouble(a0));
  }

  defineSeed(239, 1, {}, WriterReaderPhaser_ExporterImpl_0);
  _.getJsConstructor = function getJsConstructor_27(){
    return $wnd.org.HdrHistogram.WriterReaderPhaser;
  }
  ;
  _.isAssignable = function isAssignable_27(o){
    return o != null && instanceOf(o, Q$WriterReaderPhaser);
  }
  ;
  var exported_27 = false;
  defineSeed(241, 1, {});
  function $addExporter(this$static, c, o){
    $put_5(this$static.exporterMap, c, o);
  }

  function $computeVarArguments(len, args){
    var ret = [];
    for (i = 0; i < len - 1; i++)
      ret.push(args[i]);
    var alen = args.length;
    var p_0 = len - 1;
    if (alen >= len && Object.prototype.toString.apply(args[p_0]) === '[object Array]') {
      ret.push(args[p_0]);
    }
    else {
      var a = [];
      for (i = p_0; i < alen; i++)
        a.push(args[i]);
      ret.push(a);
    }
    return ret;
  }



  function $declarePackage(qualifiedExportName){
    var i_0, l_0, o, prefix, superPackages;
    superPackages = $split(qualifiedExportName, '\\.', 0);
    prefix = $wnd;
    i_0 = 0;
    for (l_0 = superPackages.length - 1; i_0 < l_0; ++i_0) {
      if (!$equals(superPackages[i_0], 'client')) {
        prefix[superPackages[i_0]] || (prefix[superPackages[i_0]] = {});
        prefix = prefix != null?prefix[superPackages[i_0]]:null;
      }
    }
    o = prefix != null?prefix[superPackages[i_0]]:null;
    return o;
  }

  function $getMaxArity(jsoMap, meth){
    var o = jsoMap[meth];
    var r = 0;
    for (k in o)
      r = Math.max(r, k);
    return r;
  }

  function $gwtInstance(o){
    var g;
    return o != null && instanceOfJso(o) && (g = getGwtInstance(o)) != null?g:o;
  }

  function $registerDispatchMap(this$static, clazz, dispMap, isStatic){
    var jso, map;
    map = isStatic?this$static.staticDispatchMap:this$static.dispatchMap;
    jso = !clazz?map.nullSlot:$getHashValue(map, clazz, ~~getHashCode(clazz));
    !jso?(jso = dispMap):mergeJso(jso, dispMap);
    !clazz?$putNullSlot(map, jso):$putHashValue(map, clazz, jso, ~~getHashCode(clazz));
  }

  function $runDispatch(this$static, instance, clazz, meth, arguments_0, isStatic, isVarArgs){
    var args, dmap, i_0, l_0, ret;
    dmap = isStatic?this$static.staticDispatchMap:this$static.dispatchMap;
    if (isVarArgs) {
      for (l_0 = $getMaxArity(!clazz?dmap.nullSlot:$getHashValue(dmap, clazz, ~~getHashCode(clazz)), meth) , i_0 = l_0; i_0 >= 1; --i_0) {
        args = $computeVarArguments(i_0, arguments_0);
        ret = $runDispatch_0(instance, dmap, clazz, meth, args);
        if (!ret) {
          args = $unshift(instance, args);
          ret = $runDispatch_0(instance, dmap, clazz, meth, args);
        }
        if (ret) {
          return ret;
        }
      }
    }
    else {
      ret = $runDispatch_0(instance, dmap, clazz, meth, arguments_0);
      if (!ret) {
        arguments_0 = $unshift(instance, arguments_0);
        ret = $runDispatch_0(instance, dmap, clazz, meth, arguments_0);
      }
      if (ret) {
        return ret;
      }
    }
    throw new RuntimeException_0("Can't find exported method for given arguments: " + meth + ':' + arguments_0.length + '\n');
  }

  function $runDispatch_0(instance, dmap, clazz, meth, arguments_0){
    var aFunc, i_0, jFunc, l_0, r, sig, sigs, wFunc, x;
    sigs = (!clazz?dmap.nullSlot:$getHashValue(dmap, clazz, ~~getHashCode(clazz)))[meth][arguments_0.length];
    jFunc = null;
    wFunc = null;
    aFunc = null;
    for (i_0 = 0 , l_0 = !sigs?0:sigs.length; i_0 < l_0; ++i_0) {
      sig = sigs[i_0];
      if ($matches(sig, arguments_0)) {
        jFunc = sig[0];
        wFunc = sig[1];
        aFunc = sig[2];
        break;
      }
    }
    if (!jFunc) {
      return null;
    }
    else {
      arguments_0 = aFunc?aFunc(instance, arguments_0):arguments_0;
      r = (x = jFunc.apply(instance, arguments_0) , [wFunc?wFunc(x):x]);
      return r;
    }
  }

  function $setWrapper(this$static, type){
    var a, cons, i_0, wrapper, wrapperArray;
    if ((getClass__devirtual$(type).modifiers & 4) != 0) {
      a = type;
      wrapperArray = [];
      for (i_0 = 0; i_0 < a.length; ++i_0) {
        wrapperArray[i_0] = $setWrapper(this$static, a[i_0]);
      }
      return wrapperArray;
    }
    cons = $typeConstructor_0(this$static, type);
    wrapper = cons && typeof cons == 'function'?new cons(type):type;
    type['__gwtex_wrap'] = wrapper;
    return wrapper;
  }

  function $toArrByte(s){
    var i_0, l_0, ret;
    l_0 = s.length;
    ret = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, l_0, 1);
    for (i_0 = 0; i_0 < l_0; ++i_0) {
      ret[i_0] = round_int(s[i_0]) << 24 >> 24;
    }
    return ret;
  }

  function $typeConstructor(this$static, clz){
    var e, sup;
    e = $get_7(this$static.exporterMap, clz);
    sup = clz.superclass;
    if (!e && !!sup && sup != Ljava_lang_Object_2_classLit) {
      return $typeConstructor(this$static, sup);
    }
    return e?e.getJsConstructor():null;
  }

  function $typeConstructor_0(this$static, type){
    var e, e$iterator, jso;
    jso = $typeConstructor(this$static, getClass__devirtual$(type));
    if (!jso) {
      for (e$iterator = $iterator($values(this$static.exporterMap)); $hasNext(e$iterator.val$outerIter.iter);) {
        e = $next_0(e$iterator);
        if (e.isAssignable(type)) {
          jso = e.getJsConstructor();
          break;
        }
      }
    }
    return jso;
  }

  function $unshift(o, arr){
    var ret = [o];
    for (i = 0; i < arr.length; i++)
      ret.push(arr[i]);
    return ret;
  }

  function $wrap(this$static, type){
    var wrapper;
    if (type == null) {
      return null;
    }
    return wrapper = type['__gwtex_wrap'] , !wrapper && (wrapper = $setWrapper(this$static, type)) , wrapper;
  }

  function ExporterBaseActual_0(){
    this.exporterMap = new HashMap_0;
    this.dispatchMap = new HashMap_0;
    this.staticDispatchMap = new HashMap_0;
  }

  function getGwtInstance(o){
    return o && o.g?o.g:null;
  }

  function isAssignableToClass(o, clazz){
    var sup;
    if (Ljava_lang_Object_2_classLit == clazz) {
      return true;
    }
    if (Lorg_timepedia_exporter_client_Exportable_2_classLit == clazz && instanceOf(o, Q$Exportable)) {
      return true;
    }
    if (o != null) {
      for (sup = getClass__devirtual$(o); !!sup && sup != Ljava_lang_Object_2_classLit; sup = sup.superclass) {
        if (sup == clazz) {
          return true;
        }
      }
    }
    return false;
  }

  function mergeJso(o1, o2){
    for (p in o2) {
      o1[p] = o2[p];
    }
  }

  defineSeed(240, 241, {}, ExporterBaseActual_0);
  function $matches(this$static, arguments_0){
    var argJsType, gwt, i_0, isBoolean, isClass, isNumber, isPrimitive, jsType, l_0, o;
    for (i_0 = 0 , l_0 = arguments_0.length; i_0 < l_0; ++i_0) {
      jsType = this$static[i_0 + 3];
      argJsType = typeof_$(arguments_0, i_0);
      if ($equals(argJsType, jsType)) {
        continue;
      }
      if ($equals('string', jsType) && $equals('null', argJsType)) {
        continue;
      }
      isNumber = $equals('number', argJsType);
      isBoolean = $equals('boolean', argJsType);
      if (Ljava_lang_Object_2_classLit === jsType) {
        isNumber && (arguments_0[i_0] = ($clinit_Double() , new Double_0(arguments_0[i_0])) , undefined);
        isBoolean && (arguments_0[i_0] = ($clinit_Boolean() , arguments_0[i_0]?TRUE:FALSE) , undefined);
        continue;
      }
      isPrimitive = isNumber || isBoolean;
      isClass = !isPrimitive && jsType != null && getClass__devirtual$(jsType) == Ljava_lang_Class_2_classLit;
      if (isClass) {
        o = arguments_0[i_0];
        if (o == null || isAssignableToClass(o, jsType)) {
          continue;
        }
        if (instanceOfJso(o)) {
          gwt = getGwtInstance(o);
          if (gwt != null) {
            if (isAssignableToClass(gwt, jsType)) {
              arguments_0[i_0] = gwt;
              continue;
            }
          }
        }
      }
      if ($equals('object', jsType) && !isNumber && !isBoolean) {
        continue;
      }
      return false;
    }
    return true;
  }

  function typeof_$(args, i_0){
    var o = args[i_0];
    var t = o == null?'null':typeof o;
    if (t == 'object') {
      return Object.prototype.toString.call(o) == '[object Array]' || typeof o.length == 'number'?'array':t;
    }
    return t;
  }

  function $clinit_ExporterUtil(){
    $clinit_ExporterUtil = nullMethod;
    impl = new ExporterBaseActual_0;
  }

  function declarePackage(qualifiedExportName){
    $clinit_ExporterUtil();
    return $declarePackage(qualifiedExportName);
  }

  function gwtInstance(o){
    $clinit_ExporterUtil();
    return $gwtInstance(o);
  }

  function registerDispatchMap(clazz, dispMap, isStatic){
    $clinit_ExporterUtil();
    $registerDispatchMap(impl, clazz, dispMap, isStatic);
  }

  function runDispatch(instance, clazz, meth, arguments_0, isStatic, isVarArgs){
    $clinit_ExporterUtil();
    return $runDispatch(impl, instance, clazz, meth, arguments_0, isStatic, isVarArgs);
  }

  function setWrapper(instance, wrapper){
    $clinit_ExporterUtil();
    instance['__gwtex_wrap'] = wrapper;
  }

  function unshift(o, arr){
    $clinit_ExporterUtil();
    return $unshift(o, arr);
  }

  function wrap_2(type){
    $clinit_ExporterUtil();
    return $wrap(impl, type);
  }

  var impl;
  var $entry = entry_0;
  function gwtOnLoad(errFn, modName, modBase, softPermutationId){
    $moduleName = modName;
    $moduleBase = modBase;
    if (errFn)
      try {
        $entry(init)();
      }
      catch (e) {
        errFn(modName);
      }
    else {
      $entry(init)();
    }
  }



  var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object', 1, null), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$', 9, Ljava_lang_Object_2_classLit), I_classLit = createForPrimitive('int', ' I'), _3I_classLit = createForArray('', '[I', 254, I_classLit), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;', 251, Ljava_lang_Object_2_classLit), Z_classLit = createForPrimitive('boolean', ' Z'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable', 8, Ljava_lang_Object_2_classLit), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception', 7, Ljava_lang_Throwable_2_classLit), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException', 6, Ljava_lang_Exception_2_classLit), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement', 70, Ljava_lang_Object_2_classLit), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;', 255, Ljava_lang_StackTraceElement_2_classLit), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang.', 'LongLibBase$LongEmul', 35, Ljava_lang_Object_2_classLit), _3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForArray('[Lcom.google.gwt.lang.', 'LongLibBase$LongEmul;', 256, Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit), Lcom_google_gwt_lang_SeedUtil_2_classLit = createForClass('com.google.gwt.lang.', 'SeedUtil', 36, Ljava_lang_Object_2_classLit), Ljava_lang_Error_2_classLit = createForClass('java.lang.', 'Error', 56, Ljava_lang_Throwable_2_classLit), Ljava_lang_Boolean_2_classLit = createForClass('java.lang.', 'Boolean', 52, Ljava_lang_Object_2_classLit), B_classLit = createForPrimitive('byte', ' B'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number', 55, Ljava_lang_Object_2_classLit), C_classLit = createForPrimitive('char', ' C'), _3C_classLit = createForArray('', '[C', 257, C_classLit), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class', 53, Ljava_lang_Object_2_classLit), D_classLit = createForPrimitive('double', ' D'), _3D_classLit = createForArray('', '[D', 258, D_classLit), Ljava_lang_Double_2_classLit = createForClass('java.lang.', 'Double', 54, Ljava_lang_Number_2_classLit), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer', 59, Ljava_lang_Number_2_classLit), _3Ljava_lang_Integer_2_classLit = createForArray('[Ljava.lang.', 'Integer;', 259, Ljava_lang_Integer_2_classLit), J_classLit = createForPrimitive('long', ' J'), Ljava_lang_Long_2_classLit = createForClass('java.lang.', 'Long', 63, Ljava_lang_Number_2_classLit), _3Ljava_lang_Long_2_classLit = createForArray('[Ljava.lang.', 'Long;', 260, Ljava_lang_Long_2_classLit), S_classLit = createForPrimitive('short', ' S'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String', 2, Ljava_lang_Object_2_classLit), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;', 252, Ljava_lang_String_2_classLit), Lorg_HdrHistogram_HdrHistogram_2_classLit = createForClass('org.HdrHistogram.', 'HdrHistogram', 171, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_EncodableHistogram_2_classLit = createForClass('org.HdrHistogram.', 'EncodableHistogram', 134, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AbstractHistogramBase_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogramBase', 133, Lorg_HdrHistogram_EncodableHistogram_2_classLit), Lorg_HdrHistogram_AbstractHistogram_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram', 132, Lorg_HdrHistogram_AbstractHistogramBase_2_classLit), Lorg_HdrHistogram_Histogram_2_classLit = createForClass('org.HdrHistogram.', 'Histogram', 176, Lorg_HdrHistogram_AbstractHistogram_2_classLit), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder', 73, Ljava_lang_Object_2_classLit), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException', 51, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException', 5, Ljava_lang_RuntimeException_2_classLit), _3J_classLit = createForArray('', '[J', 253, J_classLit), _3Ljava_lang_Class_2_classLit = createForArray('[Ljava.lang.', 'Class;', 261, Ljava_lang_Class_2_classLit), Lorg_HdrHistogram_IntCountsHistogram_2_classLit = createForClass('org.HdrHistogram.', 'IntCountsHistogram', 219, Lorg_HdrHistogram_AbstractHistogram_2_classLit), Lorg_HdrHistogram_AbstractHistogram$Percentiles_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram$Percentiles', 141, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AbstractHistogram$LinearBucketValues_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram$LinearBucketValues', 139, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AbstractHistogram$LogarithmicBucketValues_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram$LogarithmicBucketValues', 140, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AbstractHistogram$RecordedValues_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram$RecordedValues', 142, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AbstractHistogram$AllValues_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram$AllValues', 138, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_StoopidALFieldUpdater_2_classLit = createForClass('org.HdrHistogram.', 'StoopidALFieldUpdater', 136, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AbstractHistogram$1_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram$1', 135, Lorg_HdrHistogram_StoopidALFieldUpdater_2_classLit), Lorg_HdrHistogram_AbstractHistogram$2_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram$2', 137, Lorg_HdrHistogram_StoopidALFieldUpdater_2_classLit), Lcom_google_gwt_reflect_shared_ClassMap_2_classLit = createForClass('com.google.gwt.reflect.shared.', 'ClassMap', 40, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_Histogram_1MC_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_MC', 180, Lcom_google_gwt_reflect_shared_ClassMap_2_classLit), Lorg_timepedia_exporter_client_Exportable_2_classLit = createForInterface('org.timepedia.exporter.client.', 'Exportable'), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException', 48, Ljava_lang_RuntimeException_2_classLit), Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImpl', 21, Ljava_lang_Object_2_classLit), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException', 68, Ljava_lang_RuntimeException_2_classLit), Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit = createForClass('org.timepedia.exporter.client.', 'ExporterBaseImpl', 241, Ljava_lang_Object_2_classLit), Lorg_timepedia_exporter_client_ExporterBaseActual_2_classLit = createForClass('org.timepedia.exporter.client.', 'ExporterBaseActual', 240, Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit), _3B_classLit = createForArray('', '[B', 247, B_classLit), Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImplAppend', 22, Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler', 13, Ljava_lang_Object_2_classLit), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl', 15, Lcom_google_gwt_core_client_Scheduler_2_classLit), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap', 98, Ljava_lang_Object_2_classLit), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap', 97, Ljava_util_AbstractMap_2_classLit), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection', 96, Ljava_lang_Object_2_classLit), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet', 100, Ljava_util_AbstractCollection_2_classLit), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet', 99, Ljava_util_AbstractSet_2_classLit), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator', 101, Ljava_lang_Object_2_classLit), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry', 103, Ljava_lang_Object_2_classLit), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull', 102, Ljava_util_AbstractMapEntry_2_classLit), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString', 104, Ljava_util_AbstractMapEntry_2_classLit), Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util.', 'AbstractMap$2', 107, Ljava_util_AbstractCollection_2_classLit), Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util.', 'AbstractMap$2$1', 108, Ljava_lang_Object_2_classLit), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException', 57, Ljava_lang_RuntimeException_2_classLit), Ljava_util_concurrent_atomic_AtomicLong_2_classLit = createForClass('java.util.concurrent.atomic.', 'AtomicLong', 117, Ljava_lang_Number_2_classLit), Ljava_lang_reflect_AccessibleObject_2_classLit = createForClass('java.lang.reflect.', 'AccessibleObject', 76, Ljava_lang_Object_2_classLit), Ljava_lang_reflect_Method_2_classLit = createForClass('java.lang.reflect.', 'Method', 81, Ljava_lang_reflect_AccessibleObject_2_classLit), Lorg_HdrHistogram_Histogram_1m_1getCountAtIndex_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_getCountAtIndex', 206, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1getCountAtNormalizedIndex_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_getCountAtNormalizedIndex', 207, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1incrementCountAtIndex_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_incrementCountAtIndex', 210, Ljava_lang_reflect_Method_2_classLit), V_classLit = createForPrimitive('void', ' V'), Lorg_HdrHistogram_Histogram_1m_1addToCountAtIndex_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_addToCountAtIndex', 197, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1setCountAtIndex_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_setCountAtIndex', 214, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1setCountAtNormalizedIndex_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_setCountAtNormalizedIndex', 215, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1getNormalizingIndexOffset_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_getNormalizingIndexOffset', 208, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1setNormalizingIndexOffset_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_setNormalizingIndexOffset', 216, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1shiftNormalizingIndexByOffset_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_shiftNormalizingIndexByOffset', 218, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1clearCounts_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_clearCounts', 199, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1copy_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_copy', 200, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1copyCorrectedForCoordinatedOmission_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_copyCorrectedForCoordinatedOmission', 201, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1getTotalCount_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_getTotalCount', 209, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1setTotalCount_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_setTotalCount', 217, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1incrementTotalCount_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_incrementTotalCount', 211, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1addToTotalCount_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_addToTotalCount', 198, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1_1getEstimatedFootprintInBytes_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m__getEstimatedFootprintInBytes', 196, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1resize_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_resize', 213, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1CopyLike_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_CopyLike', 195, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1decodeFromByteBuffer_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_decodeFromByteBuffer', 202, Ljava_lang_reflect_Method_2_classLit), Ljava_nio_Buffer_2_classLit = createForClass('java.nio.', 'Buffer', 85, Ljava_lang_Object_2_classLit), Ljava_nio_ByteBuffer_2_classLit = createForClass('java.nio.', 'ByteBuffer', 84, Ljava_nio_Buffer_2_classLit), Lorg_HdrHistogram_Histogram_1m_1decodeFromCompressedByteBuffer_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_decodeFromCompressedByteBuffer', 203, Ljava_lang_reflect_Method_2_classLit), Ljava_util_zip_DataFormatException_2_classLit = createForClass('java.util.zip.', 'DataFormatException', 120, Ljava_lang_Exception_2_classLit), Lorg_HdrHistogram_Histogram_1m_1readObject_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_readObject', 212, Ljava_lang_reflect_Method_2_classLit), Ljava_io_ObjectInputStream_2_classLit = createForClass('java.io.', 'ObjectInputStream', null, Ljava_lang_Object_2_classLit), Ljava_io_IOException_2_classLit = createForClass('java.io.', 'IOException', null, Ljava_lang_Exception_2_classLit), Ljava_lang_ClassNotFoundException_2_classLit = createForClass('java.lang.', 'ClassNotFoundException', null, Ljava_lang_Exception_2_classLit), Lorg_HdrHistogram_Histogram_1m_1fillCountsArrayFromBuffer_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_fillCountsArrayFromBuffer', 205, Ljava_lang_reflect_Method_2_classLit), Lorg_HdrHistogram_Histogram_1m_1fillBufferFromCountsArray_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_m_fillBufferFromCountsArray', 204, Ljava_lang_reflect_Method_2_classLit), Ljava_lang_reflect_Field_2_classLit = createForClass('java.lang.reflect.', 'Field', 78, Ljava_lang_reflect_AccessibleObject_2_classLit), Ljava_nio_LongBuffer_2_classLit = createForClass('java.nio.', 'LongBuffer', 91, Ljava_nio_Buffer_2_classLit), Ljava_lang_reflect_Constructor_2_classLit = createForClass('java.lang.reflect.', 'Constructor', 77, Ljava_lang_reflect_AccessibleObject_2_classLit), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap', 112, Ljava_util_AbstractHashMap_2_classLit), Ljava_io_OutputStream_2_classLit = createForClass('java.io.', 'OutputStream', null, Ljava_lang_Object_2_classLit), Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io.', 'FilterOutputStream', null, Ljava_io_OutputStream_2_classLit), Ljava_io_PrintStream_2_classLit = createForClass('java.io.', 'PrintStream', null, Ljava_io_FilterOutputStream_2_classLit), Ljava_lang_reflect_Long_1Field_2_classLit = createForClass('java.lang.reflect.', 'Long_Field', 80, Ljava_lang_reflect_Field_2_classLit), Ljava_lang_reflect_Int_1Field_2_classLit = createForClass('java.lang.reflect.', 'Int_Field', 79, Ljava_lang_reflect_Field_2_classLit), _3S_classLit = createForArray('', '[S', 262, S_classLit), Lorg_HdrHistogram_AbstractHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogram_ExporterImpl', 145, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AbstractHistogramBase_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogramBase_ExporterImpl', 143, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AllValuesIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'AllValuesIterator_ExporterImpl', 147, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AbstractHistogramIterator_2_classLit = createForClass('org.HdrHistogram.', 'AbstractHistogramIterator', 144, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_AllValuesIterator_2_classLit = createForClass('org.HdrHistogram.', 'AllValuesIterator', 146, Lorg_HdrHistogram_AbstractHistogramIterator_2_classLit), Lorg_HdrHistogram_DoubleHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogram_ExporterImpl', 158, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleHistogram_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogram', 150, Lorg_HdrHistogram_EncodableHistogram_2_classLit), Lorg_HdrHistogram_DoubleHistogramIterationValue_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogramIterationValue_ExporterImpl', 157, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleHistogramIterationValue_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogramIterationValue', 156, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleLinearIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'DoubleLinearIterator_ExporterImpl', 160, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleLinearIterator_2_classLit = createForClass('org.HdrHistogram.', 'DoubleLinearIterator', 159, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleLogarithmicIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'DoubleLogarithmicIterator_ExporterImpl', 162, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleLogarithmicIterator_2_classLit = createForClass('org.HdrHistogram.', 'DoubleLogarithmicIterator', 161, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoublePercentileIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'DoublePercentileIterator_ExporterImpl', 164, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoublePercentileIterator_2_classLit = createForClass('org.HdrHistogram.', 'DoublePercentileIterator', 163, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleRecordedValuesIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'DoubleRecordedValuesIterator_ExporterImpl', 166, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleRecordedValuesIterator_2_classLit = createForClass('org.HdrHistogram.', 'DoubleRecordedValuesIterator', 165, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleRecorder_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'DoubleRecorder_ExporterImpl', 169, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleRecorder_2_classLit = createForClass('org.HdrHistogram.', 'DoubleRecorder', 167, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleRecorder_1InternalDoubleHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'DoubleRecorder_InternalDoubleHistogram_ExporterImpl', 170, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleRecorder$InternalDoubleHistogram_2_classLit = createForClass('org.HdrHistogram.', 'DoubleRecorder$InternalDoubleHistogram', 168, Lorg_HdrHistogram_DoubleHistogram_2_classLit), Lorg_HdrHistogram_Histogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'Histogram_ExporterImpl', 179, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_IntCountsHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'IntCountsHistogram_ExporterImpl', 220, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_LinearIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'LinearIterator_ExporterImpl', 222, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_LinearIterator_2_classLit = createForClass('org.HdrHistogram.', 'LinearIterator', 221, Lorg_HdrHistogram_AbstractHistogramIterator_2_classLit), Lorg_HdrHistogram_LogarithmicIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'LogarithmicIterator_ExporterImpl', 224, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_LogarithmicIterator_2_classLit = createForClass('org.HdrHistogram.', 'LogarithmicIterator', 223, Lorg_HdrHistogram_AbstractHistogramIterator_2_classLit), Lorg_HdrHistogram_PercentileIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'PercentileIterator_ExporterImpl', 226, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_PercentileIterator_2_classLit = createForClass('org.HdrHistogram.', 'PercentileIterator', 225, Lorg_HdrHistogram_AbstractHistogramIterator_2_classLit), Lorg_HdrHistogram_RecordedValuesIterator_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'RecordedValuesIterator_ExporterImpl', 228, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_RecordedValuesIterator_2_classLit = createForClass('org.HdrHistogram.', 'RecordedValuesIterator', 227, Lorg_HdrHistogram_AbstractHistogramIterator_2_classLit), Lorg_HdrHistogram_Recorder_1InternalAtomicHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'Recorder_InternalAtomicHistogram_ExporterImpl', 229, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_Recorder$InternalAtomicHistogram_2_classLit = createForClass('org.HdrHistogram.', 'Recorder$InternalAtomicHistogram', null, Lorg_HdrHistogram_Histogram_2_classLit), Lorg_HdrHistogram_Recorder_1InternalConcurrentHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'Recorder_InternalConcurrentHistogram_ExporterImpl', 230, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_Recorder$InternalConcurrentHistogram_2_classLit = createForClass('org.HdrHistogram.', 'Recorder$InternalConcurrentHistogram', null, Lorg_HdrHistogram_Histogram_2_classLit), Lorg_HdrHistogram_ShortCountsHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'ShortCountsHistogram_ExporterImpl', 232, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_ShortCountsHistogram_2_classLit = createForClass('org.HdrHistogram.', 'ShortCountsHistogram', 231, Lorg_HdrHistogram_AbstractHistogram_2_classLit), Lorg_HdrHistogram_SingleWriterDoubleRecorder_1InternalDoubleHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'SingleWriterDoubleRecorder_InternalDoubleHistogram_ExporterImpl', 233, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_SingleWriterDoubleRecorder$InternalDoubleHistogram_2_classLit = createForClass('org.HdrHistogram.', 'SingleWriterDoubleRecorder$InternalDoubleHistogram', null, Lorg_HdrHistogram_DoubleHistogram_2_classLit), Lorg_HdrHistogram_SingleWriterRecorder_1InternalHistogram_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'SingleWriterRecorder_InternalHistogram_ExporterImpl', 234, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_SingleWriterRecorder$InternalHistogram_2_classLit = createForClass('org.HdrHistogram.', 'SingleWriterRecorder$InternalHistogram', null, Lorg_HdrHistogram_Histogram_2_classLit), Lorg_HdrHistogram_HdrHistogram_1XArrayIndexOutOfBoundsException_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'HdrHistogram_XArrayIndexOutOfBoundsException_ExporterImpl', 172, Ljava_lang_Object_2_classLit), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException', 50, Ljava_lang_RuntimeException_2_classLit), Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'ArrayIndexOutOfBoundsException', 49, Ljava_lang_IndexOutOfBoundsException_2_classLit), Lorg_HdrHistogram_HdrHistogram_1XIllegalArgumentException_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'HdrHistogram_XIllegalArgumentException_ExporterImpl', 173, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_HdrHistogram_1XIllegalStateException_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'HdrHistogram_XIllegalStateException_ExporterImpl', 174, Ljava_lang_Object_2_classLit), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException', 58, Ljava_lang_RuntimeException_2_classLit), Lorg_HdrHistogram_HdrHistogram_1XThrowable_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'HdrHistogram_XThrowable_ExporterImpl', 175, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_ByteBufferLike_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'ByteBufferLike_ExporterImpl', 149, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_ByteBufferLike_2_classLit = createForClass('org.HdrHistogram.', 'ByteBufferLike', 148, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_HistogramIterationValue_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'HistogramIterationValue_ExporterImpl', 178, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_HistogramIterationValue_2_classLit = createForClass('org.HdrHistogram.', 'HistogramIterationValue', 177, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_WriterReaderPhaser_1ExporterImpl_2_classLit = createForClass('org.HdrHistogram.', 'WriterReaderPhaser_ExporterImpl', 239, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_WriterReaderPhaser_2_classLit = createForClass('org.HdrHistogram.', 'WriterReaderPhaser', 235, Ljava_lang_Object_2_classLit), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer', 72, Ljava_lang_Object_2_classLit), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl', 114, Ljava_util_AbstractMapEntry_2_classLit), Lorg_HdrHistogram_DoubleHistogram$Percentiles_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogram$Percentiles', 154, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleHistogram$LinearBucketValues_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogram$LinearBucketValues', 152, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleHistogram$LogarithmicBucketValues_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogram$LogarithmicBucketValues', 153, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleHistogram$RecordedValues_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogram$RecordedValues', 155, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_DoubleHistogram$AllValues_2_classLit = createForClass('org.HdrHistogram.', 'DoubleHistogram$AllValues', 151, Ljava_lang_Object_2_classLit), Lorg_HdrHistogram_WriterReaderPhaser$1_2_classLit = createForClass('org.HdrHistogram.', 'WriterReaderPhaser$1', 236, Lorg_HdrHistogram_StoopidALFieldUpdater_2_classLit), Lorg_HdrHistogram_WriterReaderPhaser$2_2_classLit = createForClass('org.HdrHistogram.', 'WriterReaderPhaser$2', 237, Lorg_HdrHistogram_StoopidALFieldUpdater_2_classLit), Lorg_HdrHistogram_WriterReaderPhaser$3_2_classLit = createForClass('org.HdrHistogram.', 'WriterReaderPhaser$3', 238, Lorg_HdrHistogram_StoopidALFieldUpdater_2_classLit), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList', 105, Ljava_util_AbstractCollection_2_classLit), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl', 106, Ljava_lang_Object_2_classLit), Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util.', 'ConcurrentModificationException', 111, Ljava_lang_RuntimeException_2_classLit), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException', 75, Ljava_lang_RuntimeException_2_classLit), Ljava_util_zip_Inflater_2_classLit = createForClass('java.util.zip.', 'Inflater', 127, Ljava_lang_Object_2_classLit), Ljava_nio_BufferUnderflowException_2_classLit = createForClass('java.nio.', 'BufferUnderflowException', 87, Ljava_lang_RuntimeException_2_classLit), Ljava_nio_BufferOverflowException_2_classLit = createForClass('java.nio.', 'BufferOverflowException', 86, Ljava_lang_RuntimeException_2_classLit), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList', 109, Ljava_util_AbstractList_2_classLit), Ljava_util_zip_Deflater_2_classLit = createForClass('java.util.zip.', 'Deflater', 121, Ljava_lang_Object_2_classLit), Ljava_util_Locale_2_classLit = createForClass('java.util.', 'Locale', 113, Ljava_lang_Object_2_classLit), Ljava_util_concurrent_locks_ReentrantLock_2_classLit = createForClass('java.util.concurrent.locks.', 'ReentrantLock', 118, Ljava_lang_Object_2_classLit), Ljava_lang_ReflectiveOperationException_2_classLit = createForClass('java.lang.', 'ReflectiveOperationException', 67, Ljava_lang_Exception_2_classLit), Ljava_lang_NoSuchMethodException_2_classLit = createForClass('java.lang.', 'NoSuchMethodException', 66, Ljava_lang_ReflectiveOperationException_2_classLit), Ljava_util_zip_StreamManipulator_2_classLit = createForClass('java.util.zip.', 'StreamManipulator', 131, Ljava_lang_Object_2_classLit), Ljava_util_zip_DeflaterEngine_2_classLit = createForClass('java.util.zip.', 'DeflaterEngine', 122, Ljava_lang_Object_2_classLit), Ljava_util_zip_PendingBuffer_2_classLit = createForClass('java.util.zip.', 'PendingBuffer', 126, Ljava_lang_Object_2_classLit), Ljava_util_zip_DeflaterPending_2_classLit = createForClass('java.util.zip.', 'DeflaterPending', 125, Ljava_util_zip_PendingBuffer_2_classLit), Ljava_nio_ShortBuffer_2_classLit = createForClass('java.nio.', 'ShortBuffer', 94, Ljava_nio_Buffer_2_classLit), Ljava_nio_IntBuffer_2_classLit = createForClass('java.nio.', 'IntBuffer', 89, Ljava_nio_Buffer_2_classLit), Ljava_util_zip_Adler32_2_classLit = createForClass('java.util.zip.', 'Adler32', 119, Ljava_lang_Object_2_classLit), Ljava_util_zip_OutputWindow_2_classLit = createForClass('java.util.zip.', 'OutputWindow', 130, Ljava_lang_Object_2_classLit), Ljava_util_zip_InflaterDynHeader_2_classLit = createForClass('java.util.zip.', 'InflaterDynHeader', 128, Ljava_lang_Object_2_classLit), Ljava_util_zip_InflaterHuffmanTree_2_classLit = createForClass('java.util.zip.', 'InflaterHuffmanTree', 129, Ljava_lang_Object_2_classLit), Ljava_nio_BaseByteBuffer_2_classLit = createForClass('java.nio.', 'BaseByteBuffer', 83, Ljava_nio_ByteBuffer_2_classLit), Ljava_nio_HeapByteBuffer_2_classLit = createForClass('java.nio.', 'HeapByteBuffer', 88, Ljava_nio_BaseByteBuffer_2_classLit), Ljava_nio_ReadWriteHeapByteBuffer_2_classLit = createForClass('java.nio.', 'ReadWriteHeapByteBuffer', 93, Ljava_nio_HeapByteBuffer_2_classLit), Ljava_lang_VirtualMachineError_2_classLit = createForClass('java.lang.', 'VirtualMachineError', 62, Ljava_lang_Error_2_classLit), Ljava_lang_InternalError_2_classLit = createForClass('java.lang.', 'InternalError', 61, Ljava_lang_VirtualMachineError_2_classLit), Ljava_util_zip_DeflaterHuffman_2_classLit = createForClass('java.util.zip.', 'DeflaterHuffman', 123, Ljava_lang_Object_2_classLit), Ljava_util_zip_DeflaterHuffman$Tree_2_classLit = createForClass('java.util.zip.', 'DeflaterHuffman$Tree', 124, Ljava_lang_Object_2_classLit), Ljava_nio_IntToByteBufferAdapter_2_classLit = createForClass('java.nio.', 'IntToByteBufferAdapter', 90, Ljava_nio_IntBuffer_2_classLit), Ljava_nio_LongToByteBufferAdapter_2_classLit = createForClass('java.nio.', 'LongToByteBufferAdapter', 92, Ljava_nio_LongBuffer_2_classLit), Ljava_nio_ShortToByteBufferAdapter_2_classLit = createForClass('java.nio.', 'ShortToByteBufferAdapter', 95, Ljava_nio_ShortBuffer_2_classLit), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException', 115, Ljava_lang_RuntimeException_2_classLit);
  $stats && $stats({moduleName:'HdrHistogram',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
  if ($wnd.HdrHistogram) $wnd.HdrHistogram.onScriptLoad();



  Object.defineProperty(Number, "EPSILON", {
    value: 2.220446049250313e-16
  });

  /** @export */
  Number.EPSILON;

  var MIN_NORMALIZED_VALUE = 2.2250738585072014e-308; // Math.pow(2, -1022)
// denormalized values may be not supported
// MIN_VALUE is 2.2250738585072014e-308, when should be 5e-324 on Opera Mobile
  var MIN_VALUE = 5e-324 === 0 ? MIN_NORMALIZED_VALUE : 5e-324;

  var special = [
    Number.NaN,
    Number.POSITIVE_INFINITY,
    Number.MAX_VALUE,
    1,
    MIN_VALUE,
    0
  ];
  /** @export */
  Math.nextDown = function (x) {
    x = Number(x);
    return -Math.nextUp(-x);
  };
  /** @export */
  Math.nextAfter = function (x, y) {
    x = Number(x);
    y = Number(y);
    if (y < x) {
      return -Math.nextUp(-x)
    }
    if (y > x) {
      return Math.nextUp(x);
    }
    return x !== x ? x : y;
  };
  /** @export */
  Math.ulp = function (x) {
    x = Number(x);
    return x < 0 ? Math.nextUp(x) - x : x - (-Math.nextUp(-x));
  };
  /** @export */
  Math.nextUp = function (x) {
    x = Number(x);
    if (x !== x) {
      return x;
    }
    if (x === -Number.POSITIVE_INFINITY) {
      return -Number.MAX_VALUE;
    }
    if (x === Number.POSITIVE_INFINITY) {
      return Number.POSITIVE_INFINITY;
    }
    if (x === +Number.MAX_VALUE) {
      return Number.POSITIVE_INFINITY;
    }
    var y = x * (x < 0 ? 1 - Number.EPSILON : 1 + Number.EPSILON);
    if (y === x) {
      var MIN_VALUE = Number.MIN_VALUE;
      if (MIN_VALUE === 0) {
        MIN_VALUE = 2.2250738585072014e-308;
      }
      if (5e-324 !== 0 && 5e-324 < MIN_VALUE) {
        MIN_VALUE = 5e-324;
      }
      y = x + MIN_VALUE;
    }
    if (y === Number.POSITIVE_INFINITY) {
      y = Number.MAX_VALUE;
    }
    var b = x + (y - x) / 2;
    if (x < b && b < y) {
      y = b;
    }
    var c = (y + x) / 2;
    if (x < c && c < y) {
      y = c;
    }
    return y === 0 ? -0 : y;
  };

  function assertEquals(actual, expected) {
    var ok = (actual === expected && (actual !== 0 || 1 / actual === 1 / expected)) || (actual !== actual && expected !== expected);
    console.assert(ok, {actual: actual, expected: expected}, "math.js advanced floating point");
  }
  /*
   assertEquals(Math.nextUp(+Number.NaN), Number.NaN);
   assertEquals(Math.nextUp(-Number.NaN), Number.NaN);
   assertEquals(Math.nextUp(+Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY);
   assertEquals(Math.nextUp(-Number.POSITIVE_INFINITY), -Number.MAX_VALUE);
   assertEquals(Math.nextUp(+Number.MAX_VALUE), Number.POSITIVE_INFINITY);
   assertEquals(Math.nextUp(-Number.MAX_VALUE), -1.7976931348623155e+308);
   assertEquals(Math.nextUp(+1), 1 + Number.EPSILON);
   assertEquals(Math.nextUp(-1), -0.9999999999999999);
   assertEquals(Math.nextUp(+MIN_VALUE), MIN_VALUE > 1e-323 ? 2.225073858507202e-308 : 1e-323);
   assertEquals(Math.nextUp(-MIN_VALUE), -0);
   assertEquals(Math.nextUp(+0), MIN_VALUE);
   assertEquals(Math.nextUp(-0), MIN_VALUE);

   var i = -1;
   while (++i < special.length) {
   var value = special[i];
   if (value !== Number.POSITIVE_INFINITY) {
   var j = -1;
   while (++j < 2) {
   assertEquals(0 + Math.nextUp(-Math.nextUp(-value)), 0 + value);
   value = -value;
   }
   }
   }*/



  /*
   https://github.com/beatgammit/base64-js

   The MIT License (MIT)

   Copyright (c) 2014

   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software and associated documentation files (the "Software"), to deal
   in the Software without restriction, including without limitation the rights
   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   copies of the Software, and to permit persons to whom the Software is
   furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   THE SOFTWARE.
   */

  var B64_EXPORTS = {};

  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  var Base64 = {
    parseBase64: function(str) {
      //return (new Buffer(str, 'base64')).toByteArray();
      return B64_EXPORTS.toByteArray(str);
    },
    encodeToBase64: function(bytes) {
      //return (new Buffer(bytes)).toString('base64');
      return B64_EXPORTS.fromByteArray(bytes);
    }
  };
  Base64.encode = Base64.encodeToBase64;
  Base64.decode = Base64.parseBase64;

  ;(function (exports) {
    'use strict';

    var Arr = /*(typeof Uint8Array !== 'undefined')
     ? Uint8Array
     : */Array;

    var PLUS   = '+'.charCodeAt(0)
    var SLASH  = '/'.charCodeAt(0)
    var NUMBER = '0'.charCodeAt(0)
    var LOWER  = 'a'.charCodeAt(0)
    var UPPER  = 'A'.charCodeAt(0)

    function decode (elt) {
      var code = elt.charCodeAt(0)
      if (code === PLUS)
        return 62 // '+'
      if (code === SLASH)
        return 63 // '/'
      if (code < NUMBER)
        return -1 //no match
      if (code < NUMBER + 10)
        return code - NUMBER + 26 + 26
      if (code < UPPER + 26)
        return code - UPPER
      if (code < LOWER + 26)
        return code - LOWER + 26
    }

    function b64ToByteArray (b64) {
      var i, j, l, tmp, placeHolders, arr

      if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      var len = b64.length
      placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr(b64.length * 3 / 4 - placeHolders)

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? b64.length - 4 : b64.length

      var L = 0

      function push (v) {
        arr[L++] = v
      }

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
        push((tmp & 0xFF0000) >>> 16)
        push((tmp & 0xFF00) >>> 8)
        push(tmp & 0xFF)
      }

      if (placeHolders === 2) {
        tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >>> 4)
        push(tmp & 0xFF)
      } else if (placeHolders === 1) {
        tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >>> 2)
        push((tmp >>> 8) & 0xFF)
        push(tmp & 0xFF)
      }

      return arr
    }

    function uint8ToBase64 (uint8) {
      var i,
          extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
          output = "",
          temp, length

      function encode (num) {
        return lookup.charAt(num)
      }

      function tripletToBase64 (num) {
        return encode(num >>> 18 & 0x3F) + encode(num >>> 12 & 0x3F) + encode(num >>> 6 & 0x3F) + encode(num & 0x3F)
      }

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = ((uint8[i] & 0xFF) << 16) + ((uint8[i + 1] & 0xFF) << 8) + (uint8[i + 2] & 0xFF)
        output += tripletToBase64(temp)
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1] & 0xFF
          output += encode(temp >>> 2)
          output += encode((temp << 4) & 0x3F)
          output += '=='
          break
        case 2:
          temp = ((uint8[uint8.length - 2] & 0xFF) << 8) + (uint8[uint8.length - 1] & 0xFF)
          output += encode(temp >>> 10)
          output += encode((temp >>> 4) & 0x3F)
          output += encode((temp << 2) & 0x3F)
          output += '='
          break
      }

      return output
    }

    exports.toByteArray = b64ToByteArray
    exports.fromByteArray = uint8ToBase64
  }(B64_EXPORTS));

//$entry(init)();
//$wnd._WEIRD_CLOSURE_WORKAROUND();

  gwtOnLoad(function(err) {
    console.error(err);
    throw err;
  }, "HdrHistogram", "base", "permId");

  var org = global.org;

  function extendedInstanceOf(inst) {
    var newClass = function () {};
    newClass.prototype = inst;

    return new newClass();
  }

  function aExtendsB(a, b) {
    //a.prototype = extendedInstanceOf(b.prototype);
    /** @export */
    a.prototype.__proto__ = b.prototype;
  }

  aExtendsB(org.HdrHistogram.Histogram, org.HdrHistogram.AbstractHistogram)
  aExtendsB(org.HdrHistogram.IntCountsHistogram, org.HdrHistogram.AbstractHistogram)
  aExtendsB(org.HdrHistogram.ShortCountsHistogram, org.HdrHistogram.AbstractHistogram)

  org.HdrHistogram.IntCountsHistogram.prototype.histogramType = "IntCountsHistogram";
  org.HdrHistogram.ShortCountsHistogram.prototype.histogramType = "ShortCountsHistogram";
  org.HdrHistogram.Histogram.prototype.histogramType = "Histogram";

//aExtendsB(org.HdrHistogram.AtomicHistogram, org.HdrHistogram.Histogram)
//aExtendsB(org.HdrHistogram.ConcurrentHistogram, org.HdrHistogram.Histogram)

  org.HdrHistogram.ArrayIndexOutOfBoundsException.prototype.toString = function() {
    return "ArrayIndexOutOfBoundsException(" + this.detailMessage + ")";
  };
  org.HdrHistogram.ArrayIndexOutOfBoundsException.toString = function() {
    return "ArrayIndexOutOfBoundsException";
  };

  org.HdrHistogram.IllegalArgumentException.prototype.toString = function() {
    return "IllegalArgumentException(" + this.detailMessage + ")";
  };
  org.HdrHistogram.IllegalArgumentException.toString = function() {
    return "IllegalArgumentException";
  };

  org.HdrHistogram.IllegalStateException.prototype.toString = function() {
    return "IllegalStateException(" + this.detailMessage + ")";
  };
  org.HdrHistogram.IllegalStateException.toString = function() {
    return "IllegalStateException";
  };

  LongLibBase$LongEmul_0.prototype.l =
      LongLibBase$LongEmul_0.prototype.m =
          LongLibBase$LongEmul_0.prototype.h = 0;

  var _oldinitDim = initDim;
  var _typeArrays = typeof Uint8Array !== 'undefined';
  initDimX = function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
    var result;
    if(arrayClass == _3B_classLit && _typeArrays) {
      result = new Int8Array(length_0);
      console.log("typed bytes")
    } /*else if(arrayClass == _3I_classLit && _typeArrays)
     result = new Int32Array(length_0);
     else if(arrayClass == _3S_classLit && _typeArrays)
     result = new Int16Array(length_0);*/
    else
      result = createFromSeed(seedType, length_0);

    if(!result.slice)
      result.slice = Array.prototype.slice;

    initValues(arrayClass, castableTypeMap, queryId, result);
    return result;
  };
//console.log("_typeArrays", _typeArrays);

  createFromSeed = function createFromSeed(seedType, length_0){
    var array = new Array(length_0);
    if (seedType == 3) {
      for (var i_0 = 0; i_0 < length_0; ++i_0) {
        //var value = new Object;
        //value.l = value.m = value.h = 0;
        array[i_0] = new LongLibBase$LongEmul_0;
      }
    }
    else if (seedType > 0) {
      var value = [null, 0, false][seedType];
      for (var i_0 = 0; i_0 < length_0; ++i_0) {
        array[i_0] = value;
      }
    }
    return array;
  }

  $toArrByte = function $toArrByte(s){
    /*var i_0, l_0, ret;
     l_0 = s.length;
     //ret = initDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, l_0, 1);
     ret = fastInitDim(_3B_classLit, makeCastMap([Q$Serializable]), -1, l_0, 1);
     for (i_0 = 0; i_0 < l_0; ++i_0) {
     ret[i_0] = round_int(s[i_0]) << 24 >> 24;
     }
     return ret;
     */

    //just decorate the existing array
    initValues(_3B_classLit, makeCastMap([Q$Serializable]), -1, s);

    return s;
  }

  round_int = function round_int(x){
    //return ~~Math.max(Math.min(x, 2147483647), -2147483648);
    if(x > 2147483647) return 2147483647;
    else if(x < -2147483648) return -2147483648;

    return x | 0;
  };

  gt = function gt(a, b){
    var signa, signb;
    signa = a.h >> 19;
    signb = b.h >> 19;
    return signa === 0?signb !== 0 || a.h > b.h || a.h === b.h && a.m > b.m || a.h === b.h && a.m === b.m && a.l > b.l:!(signb === 0 || a.h < b.h || a.h === b.h && a.m < b.m || a.h === b.h && a.m === b.m && a.l <= b.l);
  }

  gte_0 = function gte_0(a, b){
    var signa, signb;
    signa = a.h >> 19;
    signb = b.h >> 19;
    return signa === 0?signb !== 0 || a.h > b.h || a.h === b.h && a.m > b.m || a.h === b.h && a.m === b.m && a.l >= b.l:!(signb === 0 || a.h < b.h || a.h === b.h && a.m < b.m || a.h === b.h && a.m === b.m && a.l < b.l);
  }

  function createInheritence() {

//TODO: if we want to turn off pretty, this needs to use JSNI so it cant hold reference to constructor
    ArrayIndexOutOfBoundsException_0.prototype.__proto__ =
        ArrayIndexOutOfBoundsException_1.prototype.__proto__ =
            org.HdrHistogram.ArrayIndexOutOfBoundsException.prototype;

    IllegalArgumentException_0.prototype.__proto__ =
        IllegalArgumentException_1.prototype.__proto__ =
            IllegalArgumentException_2.prototype.__proto__ =
                org.HdrHistogram.IllegalArgumentException.prototype;

    IllegalStateException_0.prototype.__proto__ =
        IllegalStateException_1.prototype.__proto__ =
            org.HdrHistogram.IllegalStateException.prototype;

    /*aExtendsB(org.HdrHistogram.ArrayIndexOutOfBoundsException, org.HdrHistogram.Throwable)
     aExtendsB(org.HdrHistogram.IllegalArgumentException, org.HdrHistogram.Throwable)
     aExtendsB(org.HdrHistogram.IllegalStateException, org.HdrHistogram.Throwable)*/

    function decorateWithJavaStack() {
      var jstack = $stack_0.slice();
      var jlocation = $location_0.slice();
      /** @export */
      this.jstackArr = [];

      for (var i in jstack) {
        this.jstackArr[i] =
            jlocation[i] + ": " + (jstack[i] || {}).name;
      }

      /** @export */
      this.jstack = "    java...\n    at " + this.jstackArr.join("\n    at ");
    }

    var old_Exception_0 = Exception_0;
    /** @export */
    Exception_0 = function () {
      decorateWithJavaStack.call(this);
      old_Exception_0.apply(this, arguments);
      /** @export */
      this.stack = [];//this.jstack;
    };
    Exception_0.prototype = old_Exception_0.prototype;

    var old_JavaScriptException_0 = JavaScriptException_0;
    /** @export */
    JavaScriptException_0 = function (e) {
      /*decorateWithJavaStack.call(this);
       old_JavaScriptException_0.call(this, e);
       e.jstack = this.jstack = this.jstackArr.join("\n")
       this.stack = e.stack + "\n";*/

      /*var res = extendedInstanceOf(e);

       for(var i in this) if(this[i]) res[i] = this[i];

       decorateWithJavaStack.call(res);
       return res;*/

      /*this.__proto__ = e;

       var pr = JavaScriptException_0.prototype;
       for(var i in pr) if(pr[i]) this[i] = pr[i];

       old_JavaScriptException_0.call(this, e);
       decorateWithJavaStack.call(this);*/

      decorateWithJavaStack.call(e);
      return e;
    };
    JavaScriptException_0.prototype = old_JavaScriptException_0.prototype;
  }
  /*
   org.HdrHistogram.ByteBuffer.allocate = function(cap) {
   return org.HdrHistogram.ByteBuffer.wrap(new Array(cap))
   };*/

  createInheritence();

  org.HdrHistogram.ByteBuffer.allocateX = function(n) {
    var Arr = _typeArrays
        ? Uint8Array
        : Array;

    return org.HdrHistogram.ByteBuffer.wrap(new Arr(n))
  }

  org.HdrHistogram.Base64 = Base64;
  global['org'] = org;
  /*global['Math'] = Math;

   for(var i in org) goog.exportSymbol('org.' + i, org[i]);
   for(var i in org.HdrHistogram.prototype)
   goog.exportSymbol('org.HdrHistogram.prototype.' + i, org.HdrHistogram[i]);*/

  return org.HdrHistogram;
}

define(__hdrhistogramoutput__);
