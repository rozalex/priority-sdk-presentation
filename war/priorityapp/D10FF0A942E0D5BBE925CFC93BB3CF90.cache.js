var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.priorityapp;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'D10FF0A942E0D5BBE925CFC93BB3CF90';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {4:1, 5:1}, $intern_1 = {4:1, 6:1, 5:1}, $intern_2 = {4:1, 134:1}, $intern_3 = {14:1, 4:1, 6:1, 5:1}, $intern_4 = {4:1}, $intern_5 = 4194303, $intern_6 = 1048575, $intern_7 = 524288, $intern_8 = 4194304, $intern_9 = 17592186044416, $intern_10 = -9223372036854775808, $intern_11 = {46:1}, $intern_12 = {11:1}, $intern_13 = {4:1, 20:1, 52:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i_0 = 3; i_0 < arguments.length; ++i_0) {
    arguments[i_0].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i_0 = 0; i_0 < initFnList.length; i_0++) {
      initFnList[i_0]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i_0 = 0; i_0 < arguments.length; i_0++) {
    initFnList.push(arguments[i_0]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
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
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {4:1, 161:1, 22:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i_0 = 0;
  while (!strings[i_0] || strings[i_0] == '') {
    i_0++;
  }
  var result = strings[i_0++];
  for (; i_0 < strings.length; i_0++) {
    if (!strings[i_0] || strings[i_0] == '') {
      continue;
    }
    result += separator + strings[i_0];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(53, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_13(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 53);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $initCause(this$static, cause){
  checkState(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static, out){
  var element, element$array, element$index, element$max, t, stackTrace;
  for (t = this$static; t; t = t.cause) {
    t != this$static && $append_0(out.builder, 'Caused by: ');
    $append_0(out.builder, '' + t);
    $append_0(out.builder, '\n');
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      $append_0(out.builder, '\tat ' + element);
      $append_0(out.builder, '\n');
    }
  }
}

function $toString(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

defineClass(5, 1, $intern_0);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  return $toString(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 5);
function Exception(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(6, 5, $intern_1);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 6);
function RuntimeException(){
  $fillInStackTrace(this);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

defineClass(13, 6, $intern_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 13);
defineClass(68, 13, $intern_1);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 68);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(17, 68, {17:1, 4:1, 6:1, 5:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 17);
function create(milliseconds){
  return new Date(milliseconds);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeValue(toEscape){
  var escapeTable = (!escapeTable_0 && (escapeTable_0 = initEscapeTable()) , escapeTable_0);
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

function safeEval(json){
  try {
    return JSON.parse(json);
  }
   catch (e) {
    return throwIllegalArgumentException('Error parsing JSON: ' + e, json);
  }
}

function throwIllegalArgumentException(message, data_0){
  throw new IllegalArgumentException_0(message + '\n' + data_0);
}

var escapeTable_0;
defineClass(135, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 135);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
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
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 5)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw unwrap_5($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit_0(initialEntry);
  }
}

function exit_0(initialEntry){
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

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $log_2(handler.val$log2, ($clinit_Level() , SEVERE), e.getMessage(), e);
    return;
  }
  reportToBrowser(instanceOf(e, 17)?dynamicCast(e, 17).getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
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

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i_0, j_0, t;
  for (i_0 = 0 , j_0 = tasks.length; i_0 < j_0; i_0++) {
    t = tasks[i_0];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  return rescheduled;
}

defineClass(117, 135, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 117);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i_0, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_0(stackTrace.length);
  for (i_0 = 0; i_0 < numberOfFrameToSearch; i_0++) {
    if ($equals(stackTrace[i_0].methodName, dropFrameUntilFnName)) {
      return dynamicCast((stackTrace.length >= i_0 + 1 && stackTrace.splice(0, i_0 + 1) , stackTrace), 134);
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || ANONYMOUS;
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || LINE_NUMBER_UNKNOWN;
}

var ANONYMOUS = 'anonymous', LINE_NUMBER_UNKNOWN = -1, collector;
defineClass(146, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 146);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(69, 146, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i_0, j_0;
      for (i_0 = 0 , j_0 = withThisName.length; i_0 < j_0; i_0++) {
        if (withThisName[i_0] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i_0, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 21, length_0, 0, 1);
  for (i_0 = 0; i_0 < length_0; i_0++) {
    stackTrace[i_0] = new StackTraceElement(stack_0[i_0], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 69);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(147, 146, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i_0, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_2, 21, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i_0 = 1; i_0 < length_0; i_0++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i_0]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 147);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(70, 147, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 70);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function $cancel(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel(this$static);
  new RequestTimeoutException(this$static.timeoutMillis);
}

function Request(xmlHttpRequest, timeoutMillis){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(120, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 120);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(122, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $fireOnTimeout(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 122);
function Request$1(this$0){
  this.this$01 = this$0;
}

defineClass(123, 122, {}, Request$1);
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 123);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 17)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap_5($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 17)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap_5($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_0 > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers)).this$01); $hasNext(header$iterator);) {
      header = (checkStructuralChange(header$iterator.this$01, header$iterator) , checkCriticalElement($hasNext(header$iterator)) , dynamicCast(header$iterator.current.next(), 11));
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 17)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else 
          throw unwrap_5($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(55, 1, {});
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 55);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(76, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 76);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(33, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_2(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 33);
function RequestException(message){
  Exception.call(this, message);
}

defineClass(14, 6, $intern_3, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 14);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(127, 14, $intern_3, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 127);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(131, 14, $intern_3, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 131);
defineClass(157, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 157);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(121, 157, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 121);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

defineClass(160, 1, {});
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 160);
function $get(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function $set(this$static, index_0, value_0){
  var previous;
  previous = $get(this$static, index_0);
  $set0(this$static, index_0, value_0);
  return previous;
}

function $set0(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.jsArray[index_0] = value_0;
}

function JSONArray(){
  this.jsArray = [];
}

function JSONArray_0(arr){
  this.jsArray = arr;
}

function unwrap(value_0){
  return value_0.jsArray;
}

defineClass(24, 160, {24:1}, JSONArray, JSONArray_0);
_.equals$ = function equals_0(other){
  if (!instanceOf(other, 24)) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 24).jsArray;
}
;
_.getUnwrapper = function getUnwrapper(){
  return unwrap;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this.jsArray);
}
;
_.toString$ = function toString_3(){
  var c, i_0, sb;
  sb = new StringBuilder_0('[');
  for (i_0 = 0 , c = this.jsArray.length; i_0 < c; i_0++) {
    i_0 > 0 && (sb.string += ',' , sb);
    $append(sb, $get(this, i_0));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 24);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

function unwrap_0(value_0){
  return value_0.value_0;
}

defineClass(62, 160, {}, JSONBoolean);
_.getUnwrapper = function getUnwrapper_0(){
  return unwrap_0;
}
;
_.toString$ = function toString_4(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 62);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

defineClass(132, 13, $intern_1, JSONException);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 132);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance = new JSONNull;
}

function JSONNull(){
}

function unwrap_1(){
  return null;
}

defineClass(133, 160, {}, JSONNull);
_.getUnwrapper = function getUnwrapper_1(){
  return unwrap_1;
}
;
_.toString$ = function toString_5(){
  return 'null';
}
;
var instance;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 133);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

function unwrap_2(value_0){
  return value_0.value_0;
}

defineClass(44, 160, {44:1}, JSONNumber);
_.equals$ = function equals_1(other){
  if (!instanceOf(other, 44)) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 44).value_0;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return unwrap_2;
}
;
_.hashCode$ = function hashCode_2(){
  return round_int((new Double(this.value_0)).value_0);
}
;
_.toString$ = function toString_6(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 44);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i_0 = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i_0++] = key);
  }
  return result;
}

function $get_0(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $put(this$static, key, jsonValue){
  var previous;
  previous = $get_0(this$static, key);
  $put0(this$static, key, jsonValue);
  return previous;
}

function $put0(this$static, key, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    this$static.jsObject[key] = func(value_0);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function $toString_0(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_0('{');
  first = true;
  keys_0 = $computeKeys0(this$static, initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_0(sb, escapeValue(key));
    sb.string += ':';
    $append(sb, $get_0(this$static, key));
  }
  sb.string += '}';
  return sb.string;
}

function JSONObject(){
  JSONObject_0.call(this, {});
}

function JSONObject_0(jsValue){
  this.jsObject = jsValue;
}

function unwrap_3(value_0){
  return value_0.jsObject;
}

defineClass(8, 160, {8:1}, JSONObject, JSONObject_0);
_.equals$ = function equals_2(other){
  if (!instanceOf(other, 8)) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 8).jsObject;
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return unwrap_3;
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode(this.jsObject);
}
;
_.toString$ = function toString_7(){
  return $toString_0(this);
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 8);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject, 'function':createObject, undefined:createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray_0(o);
  }
   else {
    return new JSONObject_0(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw new NullPointerException;
  }
  this.value_0 = value_0;
}

function unwrap_4(value_0){
  return value_0.value_0;
}

defineClass(7, 160, {7:1}, JSONString);
_.equals$ = function equals_3(other){
  if (!instanceOf(other, 7)) {
    return false;
  }
  return $equals(this.value_0, dynamicCast(other, 7).value_0);
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return unwrap_4;
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode_0(this.value_0);
}
;
_.toString$ = function toString_8(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 7);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case TYPE_PRIMITIVE_LONG:
      initValue = {l:0, m:0, h:0};
      break;
    case TYPE_PRIMITIVE_NUMBER:
      initValue = 0;
      break;
    case TYPE_PRIMITIVE_BOOLEAN:
      initValue = false;
      break;
    default:return array;
  }
  for (var i_0 = 0; i_0 < length_0; ++i_0) {
    array[i_0] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

var TYPE_PRIMITIVE_BOOLEAN = 8, TYPE_PRIMITIVE_LONG = 6, TYPE_PRIMITIVE_NUMBER = 7;
function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap_5(e){
  var jse;
  if (instanceOf(e, 17)) {
    jse = dynamicCast(e, 17);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 5)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_5;
  a1 = value_0 >> 22 & $intern_5;
  a2 = value_0 < 0?$intern_6:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_7 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg_0(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
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
    a = neg_0(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg_0(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
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
    aIsNegative?(remainder = neg_0(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg_0(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
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
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
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
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_8 + a.h * $intern_9;
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
  setL(a, sum0 & $intern_5);
  setM(a, sum1 & $intern_5);
  setH(a, sum2 & $intern_6);
  return true;
}

var remainder;
function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_10) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_9) {
    a2 = round_int(value_0 / $intern_9);
    value_0 -= a2 * $intern_9;
  }
  a1 = 0;
  if (value_0 >= $intern_8) {
    a1 = round_int(value_0 / $intern_8);
    value_0 -= a1 * $intern_8;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_4, 164, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value_0));
    return result;
  }
  return create_0(value_0);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function neg_0(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_5;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_5;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_6;
  return create0(neg0, neg1, neg2);
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
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_7) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_6:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_6:0;
    res1 = negative?$intern_5:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_6;
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
  return {l:res0 & $intern_5, m:res1 & $intern_5, h:res2 & $intern_6};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_5, m:sum1 & $intern_5, h:sum2 & $intern_6};
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_10;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg_0(a));
  }
  return a.l + a.m * $intern_8 + a.h * $intern_9;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_9(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_7 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_9(neg_0(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_5, $intern_5, 524287);
  MIN_VALUE = create0(0, 0, $intern_7);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad($clinit_LogConfiguration());
  $onModuleLoad_1(new PriorityApp);
}

function $getLevel(this$static){
  if (this$static.level_0) {
    return this$static.level_0;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level_0 = newLevel;
}

defineClass(36, 1, {36:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 36);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(118, 36, {36:1}, ConsoleLogHandler);
_.publish = function publish(record){
  var msg, val;
  if (!window.console || ($getLevel(this) , -2147483648 > record.level_0.intValue_0())) {
    return;
  }
  msg = $format(this.formatter, record);
  val = record.level_0.intValue_0();
  val >= ($clinit_Level() , 1000)?(window.console.error(msg) , undefined):val >= 900?(window.console.warn(msg) , undefined):val >= 800?(window.console.info(msg) , undefined):(window.console.log(msg) , undefined);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 118);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(119, 36, {36:1}, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 119);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl = new LogConfiguration$LogConfigurationImplRegular;
}

function $onModuleLoad(){
  var log_0;
  $configureClientSideLogging(impl);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

var impl;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(65, 1, {}, LogConfiguration$1);
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 65);
function $configureClientSideLogging(this$static){
  this$static.root = (new LoggerImplRegular , $ensureLogger(getLogManager(), ''));
  this$static.root.impl.useParentHandlers = false;
  $setLevels(this$static.root);
  $setDefaultHandlers(this$static.root);
}

function $setDefaultHandlers(l){
  var console_0, dev;
  console_0 = new ConsoleLogHandler;
  $addHandler(l.impl, console_0);
  dev = new DevelopmentModeLogHandler;
  $addHandler(l.impl, dev);
}

function $setLevels(l){
  var level, levelParam, paramsForName;
  levelParam = (ensureListParameterMap() , paramsForName = dynamicCast(listParamMap.get_0('logLevel'), 20) , !paramsForName?null:dynamicCastToString(paramsForName.get_1(paramsForName.size_1() - 1)));
  level = levelParam == null?null:($clinit_Level() , $parse_0(levelParam));
  level?$setLevel_0(l.impl, level):$setLevel_1(l, ($clinit_Level() , ALL));
}

function LogConfiguration$LogConfigurationImplRegular(){
}

defineClass(64, 1, {}, LogConfiguration$LogConfigurationImplRegular);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 64);
defineClass(158, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 158);
defineClass(159, 158, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 159);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append_0(message, (date = new Date_0(event_0.millis) , s = new StringBuilder , $append_0(s, $toString_2(date)) , s.string += ' ' , $append_0(s, event_0.loggerName) , s.string += '\n' , $append_0(s, event_0.level_0.getName()) , s.string += ': ' , s.string));
  $append_0(message, event_0.msg);
  this$static.showStackTraces && !!event_0.thrown && $printStackTrace(event_0.thrown, new StackTracePrintStream(message));
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(60, 159, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 60);
function $parse_0(name_0){
  name_0 = name_0.toUpperCase();
  if ($equals(name_0, 'ALL')) {
    return $clinit_Level() , ALL;
  }
   else if ($equals(name_0, 'CONFIG')) {
    return $clinit_Level() , CONFIG;
  }
   else if ($equals(name_0, 'FINE')) {
    return $clinit_Level() , FINE;
  }
   else if ($equals(name_0, 'FINER')) {
    return $clinit_Level() , FINER;
  }
   else if ($equals(name_0, 'FINEST')) {
    return $clinit_Level() , FINEST;
  }
   else if ($equals(name_0, 'INFO')) {
    return $clinit_Level() , INFO;
  }
   else if ($equals(name_0, 'OFF')) {
    return $clinit_Level() , OFF;
  }
   else if ($equals(name_0, 'SEVERE')) {
    return $clinit_Level() , SEVERE;
  }
   else if ($equals(name_0, 'WARNING')) {
    return $clinit_Level() , WARNING;
  }
  throw new IllegalArgumentException_0('Invalid level "' + name_0 + '"');
}

function $addHandler(this$static, handler){
  $add(this$static.handlers, handler);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level_0) {
    return this$static.level_0;
  }
  logger = this$static.parent_0;
  while (logger) {
    effectiveLevel = logger.impl.level_0;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = logger.impl.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  return dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, {4:1, 63:1}, 36, this$static.handlers.array.length, 0, 1)), 63);
}

function $isLoggable(this$static, messageLevel){
  return $getEffectiveLevel(this$static).intValue_0() <= messageLevel.intValue_0();
}

function $log(this$static, level, msg, thrown){
  var record;
  if ($getEffectiveLevel(this$static).intValue_0() <= level.intValue_0()) {
    record = new LogRecord(level, msg);
    record.thrown = thrown;
    $setLoggerName(record, this$static.name_0);
    $log_0(this$static, record);
  }
}

function $log_0(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if ($isLoggable(this$static, record.level_0)) {
    for (handler$array0 = dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, {4:1, 63:1}, 36, this$static.handlers.array.length, 0, 1)), 63) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish(record);
    }
    logger = this$static.useParentHandlers?this$static.parent_0:null;
    while (logger) {
      for (handler$array = $getHandlers(logger.impl) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish(record);
      }
      logger = logger.impl.useParentHandlers?logger.impl.parent_0:null;
    }
  }
}

function $setLevel_0(this$static, newLevel){
  this$static.level_0 = newLevel;
}

function $setName(this$static, newName){
  this$static.name_0 = newName;
}

function $setParent(this$static, newParent){
  !!newParent && (this$static.parent_0 = newParent);
}

function LoggerImplRegular(){
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

defineClass(41, 1, {}, LoggerImplRegular);
_.level_0 = null;
_.useParentHandlers = false;
var Lcom_google_gwt_logging_impl_LoggerImplRegular_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplRegular', 41);
defineClass(154, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 154);
defineClass(155, 154, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 155);
defineClass(156, 155, {});
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 156);
function StackTracePrintStream(builder){
  this.builder = builder;
}

defineClass(125, 156, {}, StackTracePrintStream);
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 125);
function $onModuleLoad_0(){
  var allowedModes, currentMode, i_0;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['CSS1Compat']);
  for (i_0 = 0; i_0 < allowedModes.length; i_0++) {
    if ($equals(allowedModes[i_0], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull('encodedURLComponent', val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 17))
          throw unwrap_5($e0);
      }
      values = dynamicCast(out.get_0(key), 20);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_1(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next(), 11);
    entry.setValue(unmodifiableList(dynamicCast(entry.getValue(), 20)));
  }
  out = new Collections$UnmodifiableMap(out);
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('gecko1_8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(47, 5, $intern_0);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 47);
defineClass(15, 47, $intern_0);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 15);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 5)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 5):null);
}

defineClass(66, 15, $intern_0, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 66);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $clinit_PriCommon(){
  $clinit_PriCommon = emptyMethod;
  logger_0 = (new LoggerImplRegular , $ensureLogger(getLogManager(), 'Pri'));
}

function b64encode(str){
  $clinit_PriCommon();
  return window.btoa(unescape(encodeURIComponent(str)));
}

function split_0(str, delim){
  $clinit_PriCommon();
  var i_0, jo, len, ret;
  jo = str.split(delim);
  if (jo) {
    len = jo.length;
    if (len >= 0) {
      ret = initDim(Ljava_lang_String_2_classLit, $intern_4, 2, len, 4, 1);
      for (i_0 = 0; i_0 < len; i_0++)
        ret[i_0] = jo[i_0];
      return ret;
    }
  }
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 0, 4, 1);
}

var AppMain, logger_0;
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(19, 1, {4:1, 22:1, 19:1});
_.equals$ = function equals_4(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this);
}
;
_.toString$ = function toString_10(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 19);
function $clinit_PriCommon$ChooseTypes(){
  $clinit_PriCommon$ChooseTypes = emptyMethod;
  Normal = new PriCommon$ChooseTypes('Normal', 0, -18);
  Zoom = new PriCommon$ChooseTypes('Zoom', 1, 0);
  Full = new PriCommon$ChooseTypes('Full', 2, 38);
  Alternate = new PriCommon$ChooseTypes('Alternate', 3, 39);
}

function PriCommon$ChooseTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.intValue = value_0;
  $put_0((!mappings && !mappings && (mappings = new HashMap) , mappings), valueOf(value_0), this);
}

function values_0(){
  $clinit_PriCommon$ChooseTypes();
  return initValues(getClassLiteralForArray(Lcom_priority_app_common_PriCommon$ChooseTypes_2_classLit, 1), $intern_4, 28, 0, [Normal, Zoom, Full, Alternate]);
}

defineClass(28, 19, {28:1, 4:1, 22:1, 19:1}, PriCommon$ChooseTypes);
_.intValue = 0;
var Alternate, Full, Normal, Zoom, mappings;
var Lcom_priority_app_common_PriCommon$ChooseTypes_2_classLit = createForEnum('com.priority.app.common', 'PriCommon/ChooseTypes', 28, values_0);
function $onResponseReceived(this$static, response){
  var e, res;
  try {
    if (response.xmlHttpRequest.status != 200) {
      response.xmlHttpRequest.status == 0?(this$static.error_0 = '@@@The server has failed to respond due to a communication error. Please try again later.\nIf this problem persists, please check your network/internet connection, and notify your system manager.\n'):(this$static.error_0 = "@@@Can't connect to server. HTTP Response: " + response.xmlHttpRequest.status + ', ' + response.xmlHttpRequest.statusText + '\ndetails: ' + response.xmlHttpRequest.responseText);
      this$static.OnPriError(this$static.error_0, this$static.data_0);
    }
     else {
      res = $ResponseResult(this$static.myWcf, response);
      this$static.OnPriResponse(($clinit_PriCommon() , decodeURIComponent(escape(window.atob(res)))), this$static.data_0);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      this$static.error_0 = $toString(e);
      this$static.OnPriError(this$static.error_0, this$static.data_0);
    }
     else 
      throw unwrap_5($e0);
  }
}

function WCFResponse(con){
  this.data_0 = null;
  this.myWcf = con;
}

defineClass(18, 1, {});
_.OnPriError = function OnPriError(error, data_0){
}
;
_.OnPriResponse = function OnPriResponse(response, data_0){
}
;
var Lcom_priority_app_common_WCFResponse_2_classLit = createForClass('com.priority.app.common', 'WCFResponse', 18);
function $FormExitFormMobAsync(this$static, statexml, callback){
  var data_0;
  this$static.curop = 'FormExitFormMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + '<OtherInfo xmlns="PriorityNS">app,<\/OtherInfo>' + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 14))
      throw unwrap_5($e0);
  }
}

function $FormJumpLineMobAsync(this$static, statexml, line, callback){
  var data_0;
  this$static.curop = 'FormJumpLineMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + '<OtherInfo xmlns="PriorityNS">app,<\/OtherInfo>' + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<line>' + ('' + toString_9(line)) + '<\/' + 'line' + '>') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 14))
      throw unwrap_5($e0);
  }
}

function $FormKeyMobAsync(this$static, statexml, key, callback){
  var data_0;
  this$static.curop = 'FormKeyMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + '<OtherInfo xmlns="PriorityNS">app,<\/OtherInfo>' + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<key>' + ('' + toString_9(key)) + '<\/' + 'key' + '>') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 14))
      throw unwrap_5($e0);
  }
}

function $FormSearchMobAsync(this$static, statexml, mode, editvalue, callback){
  var data_0;
  this$static.curop = 'FormSearchMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + '<OtherInfo xmlns="PriorityNS">app,<\/OtherInfo>' + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<mode>' + ('' + toString_9(mode)) + '<\/' + 'mode' + '>') + $OneParameter_0('editvalue', editvalue) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 14))
      throw unwrap_5($e0);
  }
}

function $FormStartMobAsync(this$static, form_0, callback){
  var data_0;
  this$static.curop = 'FormStartMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + '<OtherInfo xmlns="PriorityNS">app,<\/OtherInfo>' + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('form', form_0) + '<scrwidth>-1<\/scrwidth>' + $OneParameter_0('link', '') + $OneParameter_0('linkid', '') + '<zoomcolumn>0<\/zoomcolumn>' + $OneParameter_0('zoomname', '') + $OneParameter('debug', ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)) + $OneParameter('sendtitles', (null , FALSE_0)) + $OneParameter_0('zoomvalue', '') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 14))
      throw unwrap_5($e0);
  }
}

function $FormSubFormMobAsync(this$static, statexml, self_0, callback){
  var data_0;
  this$static.curop = 'FormSubFormMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + '<OtherInfo xmlns="PriorityNS">app,<\/OtherInfo>' + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + ('<self>' + ('' + toString_9(self_0)) + '<\/' + 'self' + '>') + $OneParameter('empty', ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 14))
      throw unwrap_5($e0);
  }
}

function $FormWarningMobAsync(this$static, statexml, wsql, wval, wline, wkey, wstep, callback){
  var data_0;
  this$static.curop = 'FormWarningMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + '<OtherInfo xmlns="PriorityNS">app,<\/OtherInfo>' + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('statexml', statexml) + $OneParameter_0('wsql', wsql) + ('<wval>' + ('' + toString_9(wval)) + '<\/' + 'wval' + '>') + ('<wline>' + ('' + toString_9(wline)) + '<\/' + 'wline' + '>') + ('<wkey>' + ('' + toString_9(wkey)) + '<\/' + 'wkey' + '>') + ('<wstep>' + ('' + toString_9(wstep)) + '<\/' + 'wstep' + '>') + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 14))
      throw unwrap_5($e0);
  }
}

function $GeneralValidPasswordMobAsync(this$static, password, callback){
  var data_0;
  this$static.curop = 'GeneralValidPasswordMob';
  !!this$static.conHolder && this$static.conHolder.SetIsGoneToServer(callback);
  $setHeader(this$static, 'SOAPAction', 'http://tempuri.org/IWCFService/' + this$static.curop);
  data_0 = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Header><Language xmlns="PriorityNS">' + ('' + this$static.Userlang) + '<\/Language><Hostname xmlns="PriorityNS">' + (this$static.Compname == null?'':this$static.Compname) + '<\/Hostname><WinUser xmlns="PriorityNS">' + (this$static.WindowsUser == null?'':this$static.WindowsUser) + '<\/WinUser><UtcOffset xmlns="PriorityNS">' + JSGetTimeAndPlace() + '<\/UtcOffset><Environment xmlns="PriorityNS">' + (this$static.Dname == null?'':this$static.Dname) + '<\/Environment><SilverLight xmlns="PriorityNS">2' + '<\/SilverLight>' + '<OtherInfo xmlns="PriorityNS">app,<\/OtherInfo>' + '<Security s:mustUnderstand="1" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <u:Timestamp u:Id="_0">' + GMTDates() + '<\/u:Timestamp> <UsernameToken><Username>' + this$static.Username + '<\/Username><Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">' + this$static.Password + '<\/Password><\/UsernameToken><\/Security><\/s:Header><s:Body><' + this$static.curop + ' xmlns="http://tempuri.org/">' + $OneParameter_0('password', password) + ('<\/' + this$static.curop + '><\/s:Body><\/s:Envelope>');
  try {
    throwIfNull('callback', callback);
    $doSend(this$static, data_0, callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (!instanceOf($e0, 14))
      throw unwrap_5($e0);
  }
}

function $OneParameter(name_0, value_0){
  return '<' + name_0 + '>' + (value_0.value_0?'true':'false') + '<\/' + name_0 + '>';
}

function $OneParameter_0(name_0, value_0){
  if (value_0 == null)
    return '';
  return '<' + name_0 + '>' + escapeString(value_0) + '<\/' + name_0 + '>';
}

function $ResponseResult(this$static, r){
  var a;
  a = split_0(r.xmlHttpRequest.responseText, this$static.curop + 'Result>');
  if (a.length < 2 || a[1].length <= 2)
    return '';
  return __substr(a[1], 0, a[1].length - 2);
}

function $SetComputerName(this$static, name_0){
  this$static.Compname = name_0 == null?'':name_0;
}

function $SetUsernamePassword(this$static, app, username, password){
  this$static.Username = username + '\t' + app;
  this$static.Password = password;
}

function $SetWindowsUser(this$static, name_0){
  this$static.WindowsUser = name_0 == null?'':name_0;
}

function GMTDates(){
  return $wnd.GMTDates();
}

function JSGetTimeAndPlace(){
  return -(new Date).getTimezoneOffset() + ($wnd.GPSLocation == null?'':$wnd.GPSLocation);
}

function WCFService(url_0, holder){
  $clinit_RequestBuilder();
  RequestBuilder.call(this, POST, url_0);
  $setHeader(this, 'content-type', 'text/xml; charset=utf-8');
  this.conHolder = holder;
}

function escapeString(str){
  str = str.indexOf('&') >= 0?str.replace(/&/g, '&amp;'):str;
  str = str.indexOf('<') >= 0?str.replace(/</g, '&lt;'):str;
  str = str.indexOf('>') >= 0?str.replace(/>/g, '&gt;'):str;
  return str;
}

defineClass(75, 55, {}, WCFService);
_.Userlang = 0;
var Lcom_priority_app_common_WCFService_2_classLit = createForClass('com.priority.app.common', 'WCFService', 75);
function GetWCFServiceClient(conHolder){
  var con;
  con = new WCFService(Host, conHolder);
  $SetUsernamePassword(con, App, Login, Pwd);
  $SetComputerName(con, ComputerName);
  $SetWindowsUser(con, WindowsUser);
  con.Userlang = Lang;
  con.Dname = DName;
  return con;
}

var App, ComputerName, DName, Host, Lang = 0, Login, Pwd, WindowsUser;
function $clinit_ColumnTypes(){
  $clinit_ColumnTypes = emptyMethod;
  None = new ColumnTypes('None', 0, 0, 'text');
  Char = new ColumnTypes('Char', 1, 99, 'text');
  Str = new ColumnTypes('Str', 2, 115, 'text');
  Rstr = new ColumnTypes('Rstr', 3, 83, 'text');
  Bool = new ColumnTypes('Bool', 4, 98, 'checkbox');
  Real = new ColumnTypes('Real', 5, 114, 'number');
  Int = new ColumnTypes('Int', 6, 105, 'number');
  Date8 = new ColumnTypes('Date8', 7, 100, 'date');
  Date10 = new ColumnTypes('Date10', 8, 101, 'date');
  Date14 = new ColumnTypes('Date14', 9, 68, 'date');
  Time5 = new ColumnTypes('Time5', 10, 116, 'time');
  Time6 = new ColumnTypes('Time6', 11, 84, 'time');
  Day = new ColumnTypes('Day', 12, 121, 'text');
  Unsigned = new ColumnTypes('Unsigned', 13, 117, 'number');
  Operator = new ColumnTypes('Operator', 14, 111, 'text');
}

function $getFormat(this$static){
  switch (this$static.ordinal) {
    case 7:
      return lang_1 == 3?'MM/DD/YY':'DD/MM/YY';
    case 8:
      return lang_1 == 3?'MM/DD/YYYY':'DD/MM/YYYY';
    case 9:
      return lang_1 == 3?'MM/DD/YY HH:mm':'DD/MM/YY HH:mm';
  }
  return '';
}

function ColumnTypes(enum$name, enum$ordinal, value_0, inputType){
  Enum.call(this, enum$name, enum$ordinal);
  this.inputType = inputType;
  $put_0((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(value_0), this);
}

function values_1(){
  $clinit_ColumnTypes();
  return initValues(getClassLiteralForArray(Lcom_priority_app_form_ColumnTypes_2_classLit, 1), $intern_4, 9, 0, [None, Char, Str, Rstr, Bool, Real, Int, Date8, Date10, Date14, Time5, Time6, Day, Unsigned, Operator]);
}

defineClass(9, 19, {9:1, 4:1, 22:1, 19:1}, ColumnTypes);
var Bool, Char, Date10, Date14, Date8, Day, Int, None, Operator, Real, Rstr, Str, Time5, Time6, Unsigned, mappings_0;
var Lcom_priority_app_form_ColumnTypes_2_classLit = createForEnum('com.priority.app.form', 'ColumnTypes', 9, values_1);
function $FormGoto(this$static, row, getData, onSuccess, onError){
  var firstrow, hasData, jo, lastrow, memento, retObj;
  if ($InvokeErrorIfRowChanged(this$static, onSuccess, onError))
    return;
  firstrow = this$static.curTab.line_0;
  lastrow = this$static.curTab.line_0 + this$static.curTab.rowcount;
  if (row >= firstrow && row <= lastrow + 1) {
    hasData = true;
    retObj = new JSONObject;
    getData && (hasData = $GetRowsData(this$static.curTab.table_0, row, retObj, this$static));
    if (hasData) {
      $SetRowClient(this$static, row);
      jo = {};
      InvokeCallback(jo, retObj, '', onSuccess, onError);
      return;
    }
  }
   else {
    memento = $CreateMemento(this$static.curTab);
    $FormJumpLineMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(row), new Form$5($GetConnection(this$static), this$static, getData, row, onSuccess, onError));
  }
}

function $FormKey(this$static, key, onSuccess, onError){
  var memento;
  memento = $CreateMemento(this$static.curTab);
  $FormKeyMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(-key.intValue), new Form$3($GetConnection(this$static), this$static, key, onSuccess, onError));
}

function $GetConnection(this$static){
  if (this$static.con)
    return this$static.con;
  this$static.con = GetWCFServiceClient(this$static);
  return this$static.con;
}

function $GetRowsData(table, fromRow, retObj, that){
  var gform = $wnd.FindJSByTable(table, that);
  if (gform == null)
    return false;
  if (!$wnd.global_forms_rows || !$wnd.global_forms_rows[table] || $wnd.global_forms_rows[table].length <= 0)
    return true;
  retObj.ReplaceText = {};
  retObj.ReplaceText[gform.name] = {};
  var offset = that.getRowOffset(table);
  var currow = fromRow - offset;
  var lines = that.getTableLines(table);
  var tab = $wnd.global_forms_rows[table];
  var hasRows = false;
  var curlines = lines - offset;
  var rowcount = that.getTableRowCount(table);
  curlines > rowcount && (curlines = rowcount);
  for (i = currow; i <= curlines; i++) {
    for (var field in tab[i]) {
      var colName = that.getColNameById(table, field);
      if (colName != null && colName.length > 0 && gform.columns[colName] != null) {
        !retObj.ReplaceText[gform.name][i + offset] && (retObj.ReplaceText[gform.name][i + offset] = {});
        var value_0 = tab[i][field];
        gform.columns[colName].type == 'date' && (value_0 = getISODate(value_0));
        retObj.ReplaceText[gform.name][i + offset][colName] = value_0;
        hasRows = true;
      }
    }
  }
  return hasRows;
}

function $InitDummyFormState(this$static){
  var jop, opTable, opsTable, ses, tableState;
  if (this$static.privateSession == null || !this$static.privateSession.length)
    return;
  tableState = new JSONObject;
  opTable = new JSONArray;
  opsTable = new JSONArray;
  $put(tableState, 'Operations', opsTable);
  $put(tableState, 'Operation', opTable);
  ses = new JSONObject;
  $put(ses, 'session', new JSONString(this$static.privateSession));
  $set(opsTable, opsTable.jsArray.length, ses);
  jop = new JSONObject;
  $put(jop, 'field', new JSONString('0'));
  $put(jop, 'line', new JSONString('0'));
  $put(jop, 'curtab', new JSONString('0'));
  $put(jop, 'value', new JSONString(''));
  $put(jop, 'active', new JSONString('1'));
  $put(jop, 'key', new JSONString('0'));
  $set(opTable, opTable.jsArray.length, jop);
  this$static.dummyFormState = b64encode($toString_0(tableState));
}

function $InvokeErrorIfRowChanged(this$static, onSuccess, onError){
  if (this$static.position.changed_0 == 1) {
    InvokeCallback(null, null, 'Must save/discard changes in current row first.', onSuccess, onError);
    return true;
  }
  return false;
}

function $SaveCurrentRow(this$static, exit, onSuccess, onError){
  var memento;
  memento = $CreateMemento(this$static.curTab);
  exit == 1 && this$static.curTab.level_0 > 0?$FormKey(this$static, ($clinit_PriKeys() , Tab), onSuccess, onError):$FormKeyMobAsync($GetConnection(this$static), b64encode($ToStringData(this$static._currentFormState, this$static.privateSession, memento)), fromInt(($clinit_PriKeys() , SaveRow).intValue), new Form$7($GetConnection(this$static), this$static, onSuccess, onError));
}

function $SetCurFieldValue(this$static){
  var value_0;
  value_0 = $getFieldValue(this$static.position.table_0, this$static.position.line_0, this$static.position.field_0);
  $SetField(this$static.curTab, this$static.position.field_0, value_0);
}

function $SetRowClient(this$static, row){
  var tab;
  tab = this$static.curTab;
  if (tab) {
    this$static.position.field_0 = 1;
    this$static.position.line_0 = row - tab.line_0 + 1;
    $SetCurRowInData(tab, row - tab.line_0 + 1);
    $SetCurFieldValue(this$static);
  }
}

function $getFieldValue(table, row, field){
  var value_0 = '';
  $wnd.global_forms_rows[table] && $wnd.global_forms_rows[table][row] && $wnd.global_forms_rows[table][row][field] && (value_0 = $wnd.global_forms_rows[table][row][field]);
  return value_0;
}

function Form_0(){
  this.FormTables = new HashMap;
  this.ActiveTables = new HashMap;
  this._currentFormState = new FormTableOperations;
  this.position = new Form$Position;
  this.warningData = new Form$WarningMessageData;
}

function ParseJO(jo, retObj, that, operation){
  SaveLastJO(jo, operation);
  !$wnd.lastJO && ($wnd.lastJO = {});
  $wnd.lastJO.operation = operation;
  $wnd.lastJO.data = jo;
  if (operation != 'FormKey_Normal' && operation != 'FormSearch') {
    if (jo.Form[0].FreeTable && jo.Form[0].FreeTable.length > 0) {
      for (i = 0; i < jo.Form[0].FreeTable.length; i++) {
        $wnd.global_forms_rows[i] = [];
      }
    }
    if (jo.Form[0].ClearLine && jo.Form[0].ClearLine.length > 0) {
      for (i = 0; i < jo.Form[0].ClearLine.length; i++) {
        var tab = jo.Form[0].ClearLine[i].table;
        var line = jo.Form[0].ClearLine[i].line;
        $wnd.global_forms_rows[tab][line] = [];
      }
    }
  }
  var allforms = [];
  if (jo.Form[0].NewTable && jo.Form[0].NewTable.length > 0) {
    for (i = 0; i < jo.Form[0].NewTable.length; i++) {
      var maintable = jo.Form[0].NewTable[i];
      var form_0 = parseInt(maintable.form);
      var table = parseInt(maintable.table);
      var self_0 = parseInt(maintable.self);
      var title_0 = maintable.title;
      var name_0 = maintable.name;
      var level = parseInt(maintable.level);
      var rowcount = 0;
      that.AddTable(form_0, table, title_0, name_0, level, self_0);
      allforms[level] = name_0;
      if (level == 0) {
        var gform = $wnd.global_forms_data[maintable.name];
        if (gform != null) {
          gform.SetActiveRow = function(row, onSuccess, onError){
            that.SetActiveRow_0(row, onSuccess, onError);
          }
          ;
          gform.Choose = function(fieldName, fieldValue, onSuccess, onError){
            that.FormChoose(fieldName, fieldValue, onSuccess, onError);
          }
          ;
          gform.SearchAction = function(action, searchText, onSuccess, onError){
            that.FormSearchAction(action, searchText, onSuccess, onError);
          }
          ;
          gform.FieldUpdate = function(fieldName, fieldValue, onSuccess, onError){
            that.FormFieldUpdate(fieldName, fieldValue, onSuccess, onError);
          }
          ;
          gform.Warning = function(onSuccess, onError){
            that.FormWarning(onSuccess, onError);
          }
          ;
          gform.SaveRow = function(backToParentForm, onSuccess, onError){
            that.SaveCurrentRow(backToParentForm, onSuccess, onError);
          }
          ;
          gform.StartSubForm = function(formName, onSuccess, onError){
            that.GotoSubForm(formName, onSuccess, onError);
          }
          ;
          gform.GetRows = function(fromRow, onSuccess, onError, filter){
            that.GetRows_0(fromRow, onSuccess, onError, filter);
          }
          ;
          gform.NewRow = function(onSuccess, onError){
            that.NewRow_0(onSuccess, onError);
          }
          ;
          gform.EndCurrentForm = function(onSuccess, onError){
            that.EndCurrentForm_0(onSuccess, onError);
          }
          ;
          gform.Undo = function(onSuccess, onError){
            that.Undo_0(onSuccess, onError);
          }
          ;
          gform.DelRow = function(onSuccess, onError){
            that.DelRow_0(onSuccess, onError);
          }
          ;
        }
      }
      if (maintable.NewColumn && maintable.NewColumn.length > 0) {
        for (j = 0; j < maintable.NewColumn.length; j++) {
          var zoomname = maintable.NewColumn[j].zoomname;
          var field = parseInt(maintable.NewColumn[j].field);
          var decimal = parseInt(maintable.NewColumn[j].decimal);
          var width_0 = parseInt(maintable.NewColumn[j].width);
          var zoom = parseInt(maintable.NewColumn[j].zoom);
          var rowcount = parseInt(maintable.NewColumn[j].height);
          var zoomstr = getZoomType(zoom);
          var type_0 = parseInt(maintable.NewColumn[j].type);
          var typestr = getColumnType(type_0);
          var format = getColumnFormat(type_0);
          parseInt(maintable.NewColumn[j].height) > rowcount && (rowcount = parseInt(maintable.NewColumn[j].height));
          that.AddColumn(self_0, zoomname, field);
          if (gform != null && gform.columns[zoomname] != null) {
            gform.columns[zoomname].field = field;
            gform.columns[zoomname].zoom = zoomstr;
            gform.columns[zoomname].type = typestr;
            gform.columns[zoomname].decimal = decimal;
            gform.columns[zoomname].maxLength = width_0;
            gform.columns[zoomname].format = format;
          }
        }
      }
      if (maintable.SubForm && maintable.SubForm.length > 0) {
        for (j = 0; j < maintable.SubForm.length; j++) {
          that.AddSubForm(self_0, maintable.SubForm[j].ename, maintable.SubForm[j].exec, maintable.SubForm[j].form, maintable.SubForm[j].self, maintable.SubForm[j].table, maintable.SubForm[j].title);
        }
      }
      that.SetTableRowCount(table, rowcount);
    }
  }
  if (jo.Form[0].Position && jo.Form[0].Position.length > 0) {
    if (jo.Form[0].Position[0].TableLines && jo.Form[0].Position[0].TableLines.length > 0) {
      var tableLines = jo.Form[0].Position[0].TableLines;
      for (i = 0; i < tableLines.length; i++) {
        that.SetTableLines(parseInt(tableLines[i].table), parseInt(tableLines[i].lines), parseInt(tableLines[i].line), parseInt(tableLines[i].curline));
      }
    }
    that.SetPosition(jo.Form[0].Position[0].session, jo.Form[0].Position[0].table, jo.Form[0].Position[0].field, jo.Form[0].Position[0].line, jo.Form[0].Position[0].lines, jo.Form[0].Position[0].curline, jo.Form[0].Position[0].changed, jo.Form[0].Position[0].isappend);
  }
  if (jo.Form[0].ClearLine && jo.Form[0].ClearLine.length > 0) {
    for (i = 0; i < jo.Form[0].ClearLine.length; i++) {
      var table = jo.Form[0].ClearLine[i].table;
      var line = jo.Form[0].ClearLine[i].line;
      var addline = that.getRowOffset(table);
      var formname = that.GetActiveTableName(table);
      !retObj.ReplaceText && (retObj.ClearLine = []);
      retObj.ClearLine[i] = {};
      retObj.ClearLine[i].line = line + addline;
      retObj.ClearLine[i].form = formname;
    }
  }
  if (jo.Form[0].RT && jo.Form[0].RT.length > 0) {
    for (i = 0; i < jo.Form[0].RT.length; i++) {
      var rt = jo.Form[0].RT[i].FV;
      var tabId = [];
      var colIdx = [];
      var line = [];
      var value_0 = [];
      ParseRT(rt, tabId, colIdx, line, value_0);
      !$wnd.global_forms_rows[tabId[0]] && ($wnd.global_forms_rows[tabId[0]] = []);
      !$wnd.global_forms_rows[tabId[0]][line[0]] && ($wnd.global_forms_rows[tabId[0]][line[0]] = []);
      $wnd.global_forms_rows[tabId[0]][line[0]][colIdx[0]] = value_0[0];
      if (operation == 'FormKey_Return' || operation == 'FormWarning' || operation == 'FormKey_Tab' || operation == 'FormKey_SaveRow' || operation == 'FormKey_Undo' || operation == 'FormKey_Del') {
        var gform = $wnd.FindJSByTable(tabId[0], that);
        if (gform != null) {
          var colName = that.getColNameById(tabId[0], colIdx[0]);
          if (colName != null && colName.length > 0 && gform != null && gform.columns[colName] != null) {
            !retObj.ReplaceText && (retObj.ReplaceText = {});
            !retObj.ReplaceText[gform.name] && (retObj.ReplaceText[gform.name] = {});
            var addline = that.getRowOffset(tabId[0]);
            !retObj.ReplaceText[gform.name][line[0] + addline] && (retObj.ReplaceText[gform.name][line[0] + addline] = {});
            gform.columns[colName].type == 'date' && (value_0[0] = getISODate(value_0[0]));
            retObj.ReplaceText[gform.name][line[0] + addline][colName] = value_0[0];
          }
        }
      }
    }
  }
  jo.Form[0].Position && jo.Form[0].Position.length > 0 && that.SetCurFieldValue();
  jo.Form[0].fatalerror == 1 && (retObj.fatalerror = 1);
  if (jo.Form[0].Error && jo.Form[0].Error.length > 0) {
    var msg = '';
    var err = jo.Form[0].Error[0];
    err.HyperLinkedText != null && err.HyperLinkedText.length > 0 && (msg = err.HyperLinkedText[0].text);
    msg == '' && (msg = err.message);
    retObj.Error = {};
    retObj.Error.message = msg;
    jo.Form[0].Error[0].messagetype && (retObj.Error.messagetype = jo.Form[0].Error[0].messagetype);
  }
  if (jo.Form[0].Warning && jo.Form[0].Warning.length > 0) {
    var msg = '';
    var wrn = jo.Form[0].Warning[0];
    wrn.HyperLinkedText != null && wrn.HyperLinkedText.length > 0 && (msg = wrn.HyperLinkedText[0].text);
    msg == '' && (msg = wrn.message);
    that.SetWarningData(wrn.warningsql, parseInt(wrn.warningvalue), parseInt(wrn.warningline), parseInt(wrn.warningkey), parseInt(wrn.warningstep));
    retObj.Warning = {};
    retObj.Warning.message = msg;
    jo.Form[0].Warning[0].messagetype && (retObj.Warning.messagetype = jo.Form[0].Warning[0].messagetype);
  }
  jo.Form[0].Choose && jo.Form[0].Choose.length > 0 && (retObj.Choose = jo.Form[0].Choose);
  jo.Form[0].Search && jo.Form[0].Search.length > 0 && (retObj.Search = jo.Form[0].Search);
}

function ParseRT(rt, tabId, colIdx, line, value_0){
  var i_0, index_0, len, neg;
  index_0 = 0;
  tabId[0] = colIdx[0] = line[0] = 0;
  neg = false;
  for (i_0 = 0 , len = rt.length; index_0 < 6 && i_0 < len; i_0++) {
    switch (rt.charCodeAt(i_0)) {
      case 9:
        if (neg) {
          switch (index_0) {
            case 0:
              tabId[0] = -tabId[0];
              break;
            case 1:
              colIdx[0] = -colIdx[0];
              break;
            case 2:
              line[0] = -line[0];
          }
        }

        ++index_0;
        neg = false;
        break;
      case 45:
        neg = true;
        index_0 == 5 && i_0 + 1 == len && (value_0[0] = '-');
        break;
      default:switch (index_0) {
          case 0:
            tabId[0] = tabId[0] * 10 + (rt.charCodeAt(i_0) - 48);
            break;
          case 1:
            colIdx[0] = colIdx[0] * 10 + (rt.charCodeAt(i_0) - 48);
            break;
          case 2:
            line[0] = line[0] * 10 + (rt.charCodeAt(i_0) - 48);
            break;
          case 5:
            value_0[0] = neg?'-' + __substr(rt, i_0, rt.length - i_0):__substr(rt, i_0, rt.length - i_0);
            ++index_0;
        }

    }
  }
}

function SaveLastJO(jo, operation){
}

function getColumnFormat(coltype){
  var ct;
  ct = ($clinit_ColumnTypes() , dynamicCast($get_1((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(coltype)), 9));
  return $getFormat(ct);
}

function getColumnType(coltype){
  var ct;
  ct = ($clinit_ColumnTypes() , dynamicCast($get_1((!mappings_0 && !mappings_0 && (mappings_0 = new HashMap) , mappings_0), valueOf(coltype)), 9));
  return ct.inputType;
}

function getISODate(dateStr){
  var lang_0 = '' + lang_1;
  var dateParts = dateStr.split('/');
  var year = dateParts[2];
  var month = lang_0 == '3'?Number(dateParts[0]) - 1:Number(dateParts[1]) - 1;
  var day = lang_0 == '3'?Number(dateParts[1]) + 1:Number(dateParts[0]) + 1;
  var hours = 0;
  var minutes = 0;
  var date;
  if (year.length > 4) {
    hours = year.substring(year.indexof(' '), year.indexof(':'));
    minutes = year.substring(year.indexof(':'));
    hours = Number(hours);
    minutes = Number(minutes);
    year = year.substring(0, year.indexof(' '));
  }
  year = Number(year);
  year >= 88 && year <= 99?(year = 1900 + year):year < 88 && (year = 2000 + year);
  date = new Date(year, month, day, hours, minutes, 0, 0);
  return date.toISOString();
}

function getZoomType(zoomtype){
  var zt;
  zt = ($clinit_ZoomTypes() , dynamicCast($get_1((!mappings_2 && !mappings_2 && (mappings_2 = new HashMap) , mappings_2), valueOf(zoomtype)), 12));
  return zt.name_0 != null?zt.name_0:'' + zt.ordinal;
}

defineClass(90, 1, {}, Form_0);
_.AddColumn = function AddColumn(form_0, name_0, field){
  var ft, fc;
  ft = dynamicCast($get_1(this.FormTables, valueOf(form_0)), 16);
  !!ft && (fc = new FormColumn(name_0, field) , $putStringValue(ft.FormColumns, name_0, fc) , $put_0(ft.FormColumnsI, valueOf(field), fc) , undefined);
}
;
_.AddSubForm = function AddSubForm(tabself, ename, exec_0, form_0, self_0, table, title_0){
  var ft, sb;
  ft = dynamicCast($get_1(this.FormTables, valueOf(tabself)), 16);
  !!ft && (sb = new SubForm(self_0) , $putStringValue(ft.SubForms, ename, sb) , undefined);
}
;
_.AddTable = function AddTable(form_0, table, title_0, name_0, level, self_0){
  var ft;
  ft = new FormTable(table, name_0, level);
  $put_0(this.FormTables, valueOf(self_0), ft);
  $put_0(this.ActiveTables, valueOf(table), ft);
}
;
_.DelRow_0 = function DelRow(onSuccess, onError){
  $FormKey(this, ($clinit_PriKeys() , Del), onSuccess, onError);
}
;
_.EndCurrentForm_0 = function EndCurrentForm(onSuccess, onError){
  var memento, thisForm;
  if ($InvokeErrorIfRowChanged(this, onSuccess, onError))
    return;
  if (this.curTab.level_0 == 0) {
    memento = $CreateMemento(this.curTab);
    thisForm = this;
    $FormExitFormMobAsync($GetConnection(this), b64encode($ToStringData(this._currentFormState, this.privateSession, memento)), new Form$4($GetConnection(this), thisForm, onSuccess, onError));
  }
   else {
    $SaveCurrentRow(this, 1, onSuccess, onError);
  }
}
;
_.FormChoose = function FormChoose(fieldName, fieldValue, onSuccess, onError){
  var col, memento, thisForm;
  col = $getCol(this.curTab, fieldName);
  if (!col) {
    InvokeFormChooseCallback(null, null, "Can't find column: " + fieldName, onSuccess, onError);
    return;
  }
  $SetField(this.curTab, col.field_0, fieldValue);
  memento = $CreateMemento(this.curTab);
  thisForm = this;
  $FormKeyMobAsync($GetConnection(this), b64encode($ToStringData(this._currentFormState, this.privateSession, memento)), fromInt(($clinit_PriCommon$ChooseTypes() , Normal).intValue), new Form$9($GetConnection(this), thisForm, onSuccess, onError));
}
;
_.FormFieldUpdate = function FormFieldUpdate(fieldName, value_0, onSuccess, onError){
  var col;
  col = $getCol(this.curTab, fieldName);
  if (!col) {
    InvokeCallback(null, null, "Can't find column: " + fieldName, onSuccess, onError);
    return;
  }
  $SetField(this.curTab, col.field_0, value_0);
  $FormKey(this, ($clinit_PriKeys() , Return), onSuccess, onError);
}
;
_.FormSearchAction = function FormSearchAction(action, searchText, onSuccess, onError){
  var thisForm;
  thisForm = this;
  $FormSearchMobAsync($GetConnection(this), ($InitDummyFormState(this) , this.dummyFormState), fromInt(action), searchText, new Form$8($GetConnection(this), thisForm, onSuccess, onError));
}
;
_.FormWarning = function FormWarning(onSuccess, onError){
  var thisForm;
  thisForm = this;
  $FormWarningMobAsync($GetConnection(this), b64encode($ToStringData(this._currentFormState, this.privateSession, $CreateMemento(this.curTab))), this.warningData.wsql, this.warningData.wval, this.warningData.wline, this.warningData.wkey, this.warningData.wstep, new Form$2($GetConnection(this), thisForm, onSuccess, onError));
}
;
_.GetActiveTableName = function GetActiveTableName(table){
  if ($containsKey(this.ActiveTables, valueOf(table)))
    return dynamicCast($get_1(this.ActiveTables, valueOf(table)), 16).name_0;
  return null;
}
;
_.GetRows_0 = function GetRows(fromRow, onSuccess, onError, filter){
  if ($InvokeErrorIfRowChanged(this, onSuccess, onError))
    return;
  (filter == null || filter.length <= 0) && $FormGoto(this, fromRow, true, onSuccess, onError);
}
;
_.GotoSubForm = function GotoSubForm(formName, onSuccess, onError){
  var ft, memento, thisForm;
  if ($InvokeErrorIfRowChanged(this, onSuccess, onError))
    return;
  ft = this.curTab;
  if (!$hasStringValue(ft.SubForms, formName)) {
    InvokeCallback(null, null, "Can't find Sub Form: " + formName, onSuccess, onError);
    return;
  }
  memento = $CreateMemento(this.curTab);
  thisForm = this;
  $FormSubFormMobAsync($GetConnection(this), b64encode($ToStringData(this._currentFormState, this.privateSession, memento)), fromInt(dynamicCast($getStringValue(ft.SubForms, formName), 51).self_0), new Form$6($GetConnection(this), thisForm, onSuccess, onError));
}
;
_.NewRow_0 = function NewRow(onSuccess, onError){
  if ($InvokeErrorIfRowChanged(this, onSuccess, onError))
    return;
  $FormGoto(this, this.curTab.lines_0 + 1, false, onSuccess, onError);
}
;
_.SaveCurrentRow = function SaveCurrentRow(exit, onSuccess, onError){
  $SaveCurrentRow(this, exit, onSuccess, onError);
}
;
_.SetActiveRow_0 = function SetActiveRow(row, onSuccess, onError){
  $FormGoto(this, row, false, onSuccess, onError);
}
;
_.SetCurFieldValue = function SetCurFieldValue(){
  $SetCurFieldValue(this);
}
;
_.SetIsGoneToServer = function SetIsGoneToServer(userState){
}
;
_.SetPosition = function SetPosition(session, table, field, line, lines, curline, changed, isappend){
  var tab;
  this.position.table_0 = table;
  this.position.field_0 = field;
  this.position.line_0 = line;
  this.position.changed_0 = changed;
  this.privateSession = session;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 16);
  if (tab) {
    this.curTab = tab;
    $SetCurRowInData(tab, this.position.line_0);
  }
}
;
_.SetTableLines = function SetTableLines(table, lines, line, curline){
  var ft;
  ft = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 16);
  !!ft && (ft.lines_0 = lines , ft.line_0 = line);
}
;
_.SetTableRowCount = function SetTableRowCount(table, rowcount){
  var ft;
  ft = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 16);
  !!ft && (ft.rowcount = rowcount);
}
;
_.SetWarningData = function SetWarningData(wsql, wval, wline, wkey, wstep){
  $SetData(this.warningData, wsql, fromInt(wval), fromInt(wline), fromInt(wkey), fromInt(wstep));
}
;
_.Undo_0 = function Undo(onSuccess, onError){
  $FormKey(this, ($clinit_PriKeys() , Undo_0), onSuccess, onError);
}
;
_.getColNameById = function getColNameById(table, colId){
  var col, ret, tab;
  ret = null;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 16);
  if (tab) {
    col = dynamicCast($get_1(tab.FormColumnsI, valueOf(colId)), 43);
    !!col && (ret = col.zoomname_0);
  }
  return ret;
}
;
_.getRowOffset = function getRowOffset(table){
  var offset, tab;
  offset = 0;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 16);
  !!tab && (offset = tab.line_0 - 1);
  return offset;
}
;
_.getTableLines = function getTableLines(table){
  var lines, tab;
  lines = 0;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 16);
  !!tab && (lines = tab.lines_0);
  return lines;
}
;
_.getTableRowCount = function getTableRowCount(table){
  var rowcount, tab;
  rowcount = 0;
  tab = dynamicCast($get_1(this.ActiveTables, valueOf(table)), 16);
  !!tab && (rowcount = tab.rowcount);
  return rowcount;
}
;
_.con = null;
var Lcom_priority_app_form_Form_2_classLit = createForClass('com.priority.app.form', 'Form', 90);
function Form$1($anonymous0, val$thisForm, val$name, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$name5 = val$name;
  this.val$onSuccess6 = val$onSuccess;
  this.val$onError7 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(93, 18, {}, Form$1);
_.OnPriError = function OnPriError_0(error, data_0){
  InvokeFormStartCallback(this.val$name5, null, null, error, this.val$onSuccess6, this.val$onError7);
}
;
_.OnPriResponse = function OnPriResponse_0(response, data_0){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormStart');
    InvokeFormStartCallback(this.val$name5, jo, retObj, null, this.val$onSuccess6, this.val$onError7);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeFormStartCallback(this.val$name5, null, null, e.getMessage(), this.val$onSuccess6, this.val$onError7);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$1_2_classLit = createForClass('com.priority.app.form', 'Form/1', 93);
function Form$2($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(94, 18, {}, Form$2);
_.OnPriError = function OnPriError_1(error, data_0){
  InvokeCallback(null, null, error, this.val$onSuccess5, this.val$onError6);
}
;
_.OnPriResponse = function OnPriResponse_1(response, data_0){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormWarning');
    InvokeCallback(jo, retObj, null, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeCallback(null, null, e.getMessage(), this.val$onSuccess5, this.val$onError6);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$2_2_classLit = createForClass('com.priority.app.form', 'Form/2', 94);
function Form$3($anonymous0, val$thisForm, val$key, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$key5 = val$key;
  this.val$onSuccess6 = val$onSuccess;
  this.val$onError7 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(95, 18, {}, Form$3);
_.OnPriError = function OnPriError_2(error, data_0){
  InvokeCallback(null, null, error, this.val$onSuccess6, this.val$onError7);
}
;
_.OnPriResponse = function OnPriResponse_2(response, data_0){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormKey_' + $name(this.val$key5));
    InvokeCallback(jo, retObj, null, this.val$onSuccess6, this.val$onError7);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeCallback(null, null, e.getMessage(), this.val$onSuccess6, this.val$onError7);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$3_2_classLit = createForClass('com.priority.app.form', 'Form/3', 95);
function Form$4($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(96, 18, {}, Form$4);
_.OnPriError = function OnPriError_3(error, data_0){
  InvokeCallback(null, null, error, this.val$onSuccess5, this.val$onError6);
}
;
_.OnPriResponse = function OnPriResponse_3(response, data_0){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormExitForm');
    InvokeCallback(jo, retObj, null, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeCallback(null, null, e.getMessage(), this.val$onSuccess5, this.val$onError6);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$4_2_classLit = createForClass('com.priority.app.form', 'Form/4', 96);
function Form$5($anonymous0, val$thisForm, val$getData, val$row, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$getData5 = val$getData;
  this.val$row6 = val$row;
  this.val$onSuccess7 = val$onSuccess;
  this.val$onError8 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(97, 18, {}, Form$5);
_.OnPriError = function OnPriError_4(error, data_0){
  InvokeCallback(null, null, error, this.val$onSuccess7, this.val$onError8);
}
;
_.OnPriResponse = function OnPriResponse_4(response, data_0){
  var e, hasData, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormJumpLine');
    hasData = true;
    this.val$getData5 && (hasData = $GetRowsData(this.val$thisForm4.curTab.table_0, this.val$row6, retObj, this.val$thisForm4));
    hasData?InvokeCallback(jo, retObj, '', this.val$onSuccess7, this.val$onError8):InvokeCallback(null, null, 'Error getting rows', this.val$onSuccess7, this.val$onError8);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeCallback(null, null, e.getMessage(), this.val$onSuccess7, this.val$onError8);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
_.val$getData5 = false;
_.val$row6 = 0;
var Lcom_priority_app_form_Form$5_2_classLit = createForClass('com.priority.app.form', 'Form/5', 97);
function Form$6($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(98, 18, {}, Form$6);
_.OnPriError = function OnPriError_5(error, data_0){
  InvokeCallback(null, null, error, this.val$onSuccess5, this.val$onError6);
}
;
_.OnPriResponse = function OnPriResponse_5(response, data_0){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormSubForm');
    InvokeCallback(jo, retObj, null, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeCallback(null, null, e.getMessage(), this.val$onSuccess5, this.val$onError6);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$6_2_classLit = createForClass('com.priority.app.form', 'Form/6', 98);
function Form$7($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(99, 18, {}, Form$7);
_.OnPriError = function OnPriError_6(error, data_0){
  InvokeCallback(null, null, error, this.val$onSuccess5, this.val$onError6);
}
;
_.OnPriResponse = function OnPriResponse_6(response, data_0){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormKey_SaveRow');
    InvokeCallback(jo, retObj, null, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeCallback(null, null, e.getMessage(), this.val$onSuccess5, this.val$onError6);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$7_2_classLit = createForClass('com.priority.app.form', 'Form/7', 99);
function Form$8($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(100, 18, {}, Form$8);
_.OnPriError = function OnPriError_7(error, data_0){
  InvokeFormSearchActionCallback(null, null, this.val$onSuccess5, this.val$onError6);
}
;
_.OnPriResponse = function OnPriResponse_7(response, data_0){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormSearch');
    InvokeFormSearchActionCallback(jo, retObj, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeFormSearchActionCallback(null, null, (e.getMessage() , this.val$onSuccess5), this.val$onError6);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$8_2_classLit = createForClass('com.priority.app.form', 'Form/8', 100);
function Form$9($anonymous0, val$thisForm, val$onSuccess, val$onError){
  this.val$thisForm4 = val$thisForm;
  this.val$onSuccess5 = val$onSuccess;
  this.val$onError6 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(101, 18, {}, Form$9);
_.OnPriError = function OnPriError_8(error, data_0){
  InvokeFormChooseCallback(null, null, error, this.val$onSuccess5, this.val$onError6);
}
;
_.OnPriResponse = function OnPriResponse_8(response, data_0){
  var e, jo, retObj;
  try {
    jo = safeEval(response);
    retObj = new JSONObject;
    ParseJO(jo, retObj, this.val$thisForm4, 'FormKey_Normal');
    InvokeFormChooseCallback(jo, retObj, null, this.val$onSuccess5, this.val$onError6);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokeFormChooseCallback(null, null, e.getMessage(), this.val$onSuccess5, this.val$onError6);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_Form$9_2_classLit = createForClass('com.priority.app.form', 'Form/9', 101);
function Form$Position(){
}

defineClass(91, 1, {}, Form$Position);
_.changed_0 = 0;
_.field_0 = 0;
_.line_0 = 0;
_.table_0 = 0;
var Lcom_priority_app_form_Form$Position_2_classLit = createForClass('com.priority.app.form', 'Form/Position', 91);
function $SetData(this$static, wsql, wval, wline, wkey, wstep){
  this$static.wsql = wsql;
  this$static.wval = wval;
  this$static.wline = wline;
  this$static.wkey = wkey;
  this$static.wstep = wstep;
}

function Form$WarningMessageData(){
}

defineClass(92, 1, {}, Form$WarningMessageData);
_.wkey = {l:0, m:0, h:0};
_.wline = {l:0, m:0, h:0};
_.wstep = {l:0, m:0, h:0};
_.wval = {l:0, m:0, h:0};
var Lcom_priority_app_form_Form$WarningMessageData_2_classLit = createForClass('com.priority.app.form', 'Form/WarningMessageData', 92);
function FormStart(name_0, onSuccess, onError){
  var f;
  f = new Form_0;
  $clinit_FormManager();
  $putStringValue(FormsMap, name_0, f);
  $FormStartMobAsync($GetConnection(f), name_0, new Form$1($GetConnection(f), f, name_0, onSuccess, onError));
}

function Init(username, pwd, computerName, windowsUserName, onSuccess, onError){
  Login = username;
  Pwd = pwd;
  ComputerName = computerName;
  WindowsUser = windowsUserName;
  $wnd.JSLoad(onSuccess, onError);
}

function InitContinue(forms_data, url_0, tabini, lang_0, dname, onSuccess, onError){
  lang_1 = lang_0;
  Host = url_0 + '/wcf/wcf/service.svc';
  App = tabini;
  Lang = lang_0;
  DName = dname;
  ($clinit_PriCommon() , AppMain).con = null;
  $GeneralValidPasswordMobAsync($GetConnection_0(AppMain), Pwd, new FormAPI$1($GetConnection_0(AppMain), forms_data, onSuccess, onError));
}

function InvokeCallback(jo, retObj, errorMsg, onSuccess, onError){
  if (jo == null || retObj == null) {
    onError(errorMsg, true);
    return;
  }
  retObj.fatalerror && retObj.fatalerror == 1?onError(retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, true):onSuccess(retObj);
}

function InvokeFormChooseCallback(jo, retObj, error, onSuccess, onError){
  if (jo == null || retObj == null) {
    onError(error, false);
    return;
  }
  retObj.fatalerror && retObj.fatalerror == 1?onError(retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, true):retObj.Search != null && retObj.Search.length > 0?onSuccess(retObj.Search[0], 'Search'):retObj.Choose != null && retObj.Choose.length > 0?onSuccess(retObj.Choose[0], 'Choose'):onSuccess(null, 'None');
}

function InvokeFormSearchActionCallback(jo, retObj, onSuccess, onError){
  if (jo == null || retObj == null) {
    onError(null, false);
    return;
  }
  retObj.fatalerror && retObj.fatalerror == 1?onError(retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, true):onSuccess(retObj.Search[0]);
}

function InvokeFormStartCallback(formName, jo, retObj, errorMsg, onSuccess, onError){
  if (jo == null || retObj == null) {
    onError(errorMsg, true);
    return;
  }
  retObj.fatalerror && retObj.fatalerror == 1?onError(retObj.Error != null && retObj.Error.message != null && retObj.Error.message.length > 0?retObj.Error.message:null, true):onSuccess($wnd.global_forms_data[formName], retObj);
}

function InvokePriInitError(error, onError){
  onError(error);
}

function InvokePriInitSuccess(data_0, onSuccess){
  var arr = Object.keys(data_0).map(function(key){
    var obj = {};
    obj.name = data_0[key].name;
    obj.title = data_0[key].title;
    return obj;
  }
  );
  onSuccess(arr);
}

function createJsHelperFunc(){
  $wnd.global_forms_data = {};
  $wnd.global_forms_rows = [];
  $wnd.FindJSByTable = function(table, that){
    var maintabname = that.GetActiveTableName(1);
    var gform = $wnd.global_forms_data[maintabname];
    if (!gform)
      return null;
    for (k = 2; k <= table; k++) {
      var tabname = that.GetActiveTableName(k);
      if (gform.subForms[tabname])
        gform = gform.subForms[tabname];
      else {
        gform = null;
        break;
      }
    }
    return gform;
  }
  ;
  $wnd.LoadJson = function(json, onSuccess, onError){
    var allforms = [];
    for (i = 0; i < json.forms_data.length; i++) {
      var subForms = [];
      var form_0 = {};
      var columns = {};
      form_0.subForms = subForms;
      form_0.id = json.forms_data[i].id;
      form_0.name = json.forms_data[i].name;
      form_0.title = json.forms_data[i].title;
      json.forms_data[i].fatname && (form_0.fatname = json.forms_data[i].fatname);
      for (j = 0; j < json.forms_data[i].columns.length; j++) {
        var column = {};
        var col = json.forms_data[i].columns[j];
        column.name = col.name;
        column.title = col.title;
        column.length = col.length;
        column.readonly = col.readonly;
        column.madatory = col.mandatory;
        column.tabview = col.tabview;
        column.lineview = col.lineview;
        column.titlefield = col.titlefield;
        column.iskey = col.iskey;
        columns[col.name] = column;
      }
      form_0.columns = columns;
      allforms[form_0.name] = form_0;
      !form_0.fatname && ($wnd.global_forms_data[form_0.name] = form_0);
    }
    for (var key in allforms) {
      if (key && allforms[key] && allforms[key].fatname) {
        var fatname = allforms[key].fatname;
        var name_0 = allforms[key].name;
        allforms[fatname] && (allforms[fatname].subForms[name_0] = allforms[key]);
      }
    }
    InitContinue($wnd.global_forms_data, json.url, json.tabulaini, parseInt(json.lang), json.dname, onSuccess, onError);
  }
  ;
  $wnd.JSLoad = function(onSuccess, onError){
    $wnd.$.getJSON('js/pridata.json', function(json){
      $wnd.LoadJson(json, onSuccess, onError);
    }
    ).fail(function(d, textStatus, error){
      onError('failed to load app data json');
    }
    );
  }
  ;
  $wnd.GMTTime = function(dt){
    var mon = 1 + dt.getUTCMonth();
    mon < 10 && (mon = '0' + mon);
    var day = dt.getUTCDate();
    day < 10 && (day = '0' + day);
    var hours = dt.getUTCHours();
    hours < 10 && (hours = '0' + hours);
    var minutes = dt.getUTCMinutes();
    minutes < 10 && (minutes = '0' + minutes);
    var sec = dt.getUTCSeconds();
    sec < 10 && (sec = '0' + sec);
    var msec = dt.getUTCMilliseconds();
    msec < 10?(msec = '00' + msec):msec < 100 && (msec = '0' + msec);
    var year = dt.getUTCFullYear();
    year < 1900 && (year += 1900);
    return year + '-' + mon + '-' + day + 'T' + hours + ':' + minutes + ':' + sec + '.' + msec + 'Z';
  }
  ;
  $wnd.GMTDates = function(){
    var cr = new Date;
    var exp_0 = new Date(cr);
    exp_0.setMinutes(cr.getMinutes() + 6);
    return '<u:Created>' + $wnd.GMTTime(cr) + '<\/u:Created><u:Expires>' + $wnd.GMTTime(exp_0) + '<\/u:Expires>';
  }
  ;
}

var lang_1 = 0;
function FormAPI$1($anonymous0, val$forms_data, val$onSuccess, val$onError){
  this.val$forms_data3 = val$forms_data;
  this.val$onSuccess4 = val$onSuccess;
  this.val$onError5 = val$onError;
  WCFResponse.call(this, $anonymous0);
}

defineClass(77, 18, {}, FormAPI$1);
_.OnPriError = function OnPriError_9(error, data_0){
  var response;
  response = "Can't connect to server.";
  error.indexOf('InvalidSecurityToken') != -1 && (response = 'Authorization failed. \nPlease check the username and password.');
  InvokePriInitError(response, this.val$onError5);
}
;
_.OnPriResponse = function OnPriResponse_9(response, data_0){
  var e, jo, ret, retStr, ret_0;
  try {
    jo = safeEval(response);
    retStr = initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 1, 4, 1);
    ret = (ret_0 = 0 , jo.General && jo.General.length > 0 && jo.General[0].ValidPassword && jo.General[0].ValidPassword.length > 0 && (ret_0 = jo.General[0].ValidPassword[0].valid) , jo.General && jo.General.length > 0 && jo.General[0].Message && jo.General[0].Message.length > 0?(retStr[0] = jo.General[0].Message[0].message):(retStr[0] = null) , ret_0);
    if (ret == 1)
      InvokePriInitSuccess(this.val$forms_data3, this.val$onSuccess4);
    else {
      (retStr[0] == null || retStr[0].length <= 0) && (retStr[0] = "Can't connect to server.");
      InvokePriInitError(retStr[0], this.val$onError5);
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 6)) {
      e = $e0;
      InvokePriInitError(e.getMessage(), this.val$onError5);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Lcom_priority_app_form_FormAPI$1_2_classLit = createForClass('com.priority.app.form', 'FormAPI/1', 77);
function FormColumn(zoomname, field){
  this.field_0 = field;
  this.zoomname_0 = zoomname;
}

defineClass(43, 1, {43:1}, FormColumn);
_.field_0 = 0;
var Lcom_priority_app_form_FormColumn_2_classLit = createForClass('com.priority.app.form', 'FormColumn', 43);
function $clinit_FormManager(){
  $clinit_FormManager = emptyMethod;
  FormsMap = new HashMap;
}

var FormsMap;
function $CreateMemento(this$static){
  return $CreateMemento_0(this$static, ($clinit_PriKeys() , None_0), this$static.curfield, this$static.rowInData, this$static.curfieldval);
}

function $CreateMemento_0(this$static, key, field, row, value_0){
  return new FormTableMemento(field, row, value_0, this$static._isQueryMode?-1:1, key);
}

function $SetCurRowInData(this$static, row){
  this$static.rowInData = row;
}

function $SetField(this$static, field, value_0){
  this$static.curfield = field;
  this$static.curfieldval = value_0;
}

function $getCol(this$static, fieldName){
  return dynamicCast($getStringValue(this$static.FormColumns, fieldName), 43);
}

function FormTable(table, name_0, level){
  this.FormColumns = new HashMap;
  this.FormColumnsI = new HashMap;
  this.SubForms = new HashMap;
  this.table_0 = table;
  this.name_0 = name_0;
  this.level_0 = level;
}

defineClass(16, 1, {16:1}, FormTable);
_._isQueryMode = false;
_.curfield = 0;
_.level_0 = 0;
_.line_0 = 0;
_.lines_0 = 0;
_.rowInData = 0;
_.rowcount = 0;
_.table_0 = 0;
var Lcom_priority_app_form_FormTable_2_classLit = createForClass('com.priority.app.form', 'FormTable', 16);
function FormTableMemento(currentFieldNum, currentLine, currentFieldValue, isActive, key){
  this.m_key = values_2()[0];
  $clinit_PriCommon();
  $log_1(logger_0, ($clinit_Level() , ALL), 'FormTableMemento. currentFieldNum: ' + currentFieldNum + '\ncurrentLine: ' + currentLine + '\ncurrentTab: ' + '0' + '\ncurrentFieldValue: ' + currentFieldValue + '\nisActive: ' + isActive + '\nkey: ' + key);
  this.m_currentFieldNum = currentFieldNum;
  this.m_currentLine = currentLine;
  this.m_currentTab = {l:0, m:0, h:0};
  this.m_currentFieldValue = currentFieldValue;
  this.m_isActive = isActive;
  this.m_key = key;
}

defineClass(50, 1, {50:1}, FormTableMemento);
_.m_currentFieldNum = 0;
_.m_currentLine = 0;
_.m_currentTab = {l:0, m:0, h:0};
_.m_isActive = 0;
var Lcom_priority_app_form_FormTableMemento_2_classLit = createForClass('com.priority.app.form', 'FormTableMemento', 50);
function $ToStringData(this$static, session, currState){
  var jop, op, op$iterator, opTable, opsTable, retData, ses, tableState;
  tableState = new JSONObject;
  opTable = new JSONArray;
  opsTable = new JSONArray;
  $put(tableState, 'Operations', opsTable);
  $put(tableState, 'Operation', opTable);
  ses = new JSONObject;
  $put(ses, 'session', new JSONString(session));
  $set(opsTable, opsTable.jsArray.length, ses);
  $add(this$static.operations, currState);
  if (this$static.operations.array.length > 0) {
    for (op$iterator = new AbstractList$IteratorImpl(this$static.operations); op$iterator.i < op$iterator.this$01.size_1();) {
      op = (checkCriticalElement(op$iterator.i < op$iterator.this$01.size_1()) , dynamicCast(op$iterator.this$01.get_1(op$iterator.i++), 50));
      jop = new JSONObject;
      $put(jop, 'field', new JSONString('' + op.m_currentFieldNum));
      $put(jop, 'line', new JSONString('' + op.m_currentLine));
      $put(jop, 'curtab', new JSONString('' + toString_9(op.m_currentTab)));
      $put(jop, 'value', new JSONString(op.m_currentFieldValue));
      $put(jop, 'active', new JSONString('' + op.m_isActive));
      $put(jop, 'key', new JSONString('' + toString_9(fromInt(-op.m_key.intValue))));
      $set(opTable, opTable.jsArray.length, jop);
    }
  }
   else {
    jop = new JSONObject;
    $put(jop, 'field', new JSONString('0'));
    $put(jop, 'line', new JSONString('0'));
    $put(jop, 'curtab', new JSONString('0'));
    $put(jop, 'value', new JSONString(''));
    $put(jop, 'active', new JSONString('1'));
    $put(jop, 'key', new JSONString('0'));
    $set(opTable, opTable.jsArray.length, jop);
  }
  retData = $toString_0(tableState);
  this$static.operations.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
  return retData;
}

function FormTableOperations(){
  this.operations = new ArrayList;
}

defineClass(126, 1, {}, FormTableOperations);
var Lcom_priority_app_form_FormTableOperations_2_classLit = createForClass('com.priority.app.form', 'FormTableOperations', 126);
function $clinit_PriKeys(){
  $clinit_PriKeys = emptyMethod;
  QueryIncr = new PriKeys('QueryIncr', 0, -5);
  QueryDecr = new PriKeys('QueryDecr', 1, -6);
  QueryEnd = new PriKeys('QueryEnd', 2, -7);
  FormBrother = new PriKeys('FormBrother', 3, -8);
  SaveHtml = new PriKeys('SaveHtml', 4, -10);
  FormZoom = new PriKeys('FormZoom', 5, -18);
  FormNavigateBack = new PriKeys('FormNavigateBack', 6, -27);
  PrevReturn = new PriKeys('PrevReturn', 7, -29);
  DebugMode = new PriKeys('DebugMode', 8, -32);
  SendLink = new PriKeys('SendLink', 9, -31);
  RestoreColumnWidths = new PriKeys('RestoreColumnWidths', 10, -33);
  FullZoom = new PriKeys('FullZoom', 11, -38);
  NotifyViewChange = new PriKeys('NotifyViewChange', 12, -39);
  CopyRecordLink = new PriKeys('CopyRecordLink', 13, -40);
  SaveChoose = new PriKeys('SaveChoose', 14, -43);
  MailTaskUsers = new PriKeys('MailTaskUsers', 15, -45);
  SendLabels = new PriKeys('SendLabels', 16, -46);
  GoogleMaps = new PriKeys('GoogleMaps', 17, -48);
  RefreshTimer = new PriKeys('RefreshTimer', 18, -51);
  SetFollowup = new PriKeys('SetFollowup', 19, -52);
  UnsetFollowup = new PriKeys('UnsetFollowup', 20, -52);
  SaveRow = new PriKeys('SaveRow', 21, -78);
  None_0 = new PriKeys('None', 22, 0);
  Return = new PriKeys('Return', 23, 4);
  Tab = new PriKeys('Tab', 24, 5);
  Up = new PriKeys('Up', 25, 6);
  Down = new PriKeys('Down', 26, 7);
  Right = new PriKeys('Right', 27, 8);
  Left = new PriKeys('Left', 28, 9);
  Del = new PriKeys('Del', 29, 10);
  Cont = new PriKeys('Cont', 30, 11);
  Srch = new PriKeys('Srch', 31, 12);
  App_0 = new PriKeys('App', 32, 13);
  Blk = new PriKeys('Blk', 33, 14);
  DefaultSubLevel = new PriKeys('DefaultSubLevel', 34, 15);
  Backs = new PriKeys('Backs', 35, 16);
  Allbacks = new PriKeys('Allbacks', 36, 17);
  Do = new PriKeys('Do', 37, 18);
  Hebeng = new PriKeys('Hebeng', 38, 19);
  Ins = new PriKeys('Ins', 39, 20);
  Copyf = new PriKeys('Copyf', 40, 21);
  Copyc = new PriKeys('Copyc', 41, 22);
  Setval = new PriKeys('Setval', 42, 23);
  Getval = new PriKeys('Getval', 43, 24);
  Help = new PriKeys('Help', 44, 25);
  Undo_0 = new PriKeys('Undo', 45, 26);
  Learn = new PriKeys('Learn', 46, 27);
  Autofill = new PriKeys('Autofill', 47, 28);
  Tquery = new PriKeys('Tquery', 48, 29);
  Total = new PriKeys('Total', 49, 30);
  Npage = new PriKeys('Npage', 50, 31);
  Ppage = new PriKeys('Ppage', 51, 32);
  Draw = new PriKeys('Draw', 52, 33);
  Prnt = new PriKeys('Prnt', 53, 34);
  Downfirst = new PriKeys('Downfirst', 54, 35);
  SubLevels = new PriKeys('SubLevels', 55, 36);
  Splitdef = new PriKeys('Splitdef', 56, 37);
  Clnln = new PriKeys('Clnln', 57, 38);
  Clntb = new PriKeys('Clntb', 58, 39);
  Lputscr = new PriKeys('Lputscr', 59, 40);
  Lgetscr = new PriKeys('Lgetscr', 60, 41);
  Hebengs = new PriKeys('Hebengs', 61, 42);
  Repins = new PriKeys('Repins', 62, 43);
  Activations = new PriKeys('Activations', 63, 44);
  Gotolin = new PriKeys('Gotolin', 64, 45);
  Gotolinn = new PriKeys('Gotolinn', 65, 46);
  FullMultiRecord = new PriKeys('FullMultiRecord', 66, 47);
  Element_0 = new PriKeys('Element', 67, 48);
  Begin = new PriKeys('Begin', 68, 49);
  Dolearn = new PriKeys('Dolearn', 69, 50);
  Lstlearn = new PriKeys('Lstlearn', 70, 51);
  Lstval = new PriKeys('Lstval', 71, 52);
  Lstscr = new PriKeys('Lstscr', 72, 53);
  Nframe = new PriKeys('Nframe', 73, 54);
  Pframe = new PriKeys('Pframe', 74, 55);
  Select_0 = new PriKeys('Select', 75, 56);
  Tabhelp = new PriKeys('Tabhelp', 76, 57);
  Refresh = new PriKeys('Refresh', 77, 58);
  Activate = new PriKeys('Activate', 78, 59);
  Gotopos = new PriKeys('Gotopos', 79, 60);
  Home = new PriKeys('Home', 80, 61);
  End = new PriKeys('End', 81, 62);
  Top = new PriKeys('Top', 82, 63);
  Bottom = new PriKeys('Bottom', 83, 64);
  Oneline = new PriKeys('Oneline', 84, 65);
  Printtofile = new PriKeys('Printtofile', 85, 66);
  Execute = new PriKeys('Execute', 86, 67);
  Phone = new PriKeys('Phone', 87, 68);
  Sort = new PriKeys('Sort', 88, 69);
  Wdel = new PriKeys('Wdel', 89, 70);
  Enlarge = new PriKeys('Enlarge', 90, 71);
  Mailinter = new PriKeys('Mailinter', 91, 72);
  Movetab = new PriKeys('Movetab', 92, 73);
  Splitempty = new PriKeys('Splitempty', 93, 74);
  DlgQuery = new PriKeys('DlgQuery', 94, 75);
  Execform = new PriKeys('Execform', 95, 76);
  Scroll = new PriKeys('Scroll', 96, 77);
  SelectAll = new PriKeys('SelectAll', 97, 78);
  StoreRecords = new PriKeys('StoreRecords', 98, 79);
  RetrieveRecords = new PriKeys('RetrieveRecords', 99, 80);
  IncrDecrValue = new PriKeys('IncrDecrValue', 100, 81);
  Macro = new PriKeys('Macro', 101, 82);
  ExecuteQuery = new PriKeys('ExecuteQuery', 102, 83);
  DlgBusiness = new PriKeys('DlgBusiness', 103, 84);
  DlgData = new PriKeys('DlgData', 104, 85);
  DlgFields = new PriKeys('DlgFields', 105, 86);
  DlgDirectActivations = new PriKeys('DlgDirectActivations', 106, 87);
  DlgSubLevels = new PriKeys('DlgSubLevels', 107, 88);
  RowColors = new PriKeys('RowColors', 108, 89);
  MacroList = new PriKeys('MacroList', 109, 90);
  DlgMultiComp = new PriKeys('DlgMultiComp', 110, 91);
  AttachActivateApp = new PriKeys('AttachActivateApp', 111, 92);
  AttachBrowse = new PriKeys('AttachBrowse', 112, 93);
  AttachImport = new PriKeys('AttachImport', 113, 94);
  AttachPasteImport = new PriKeys('AttachPasteImport', 114, 95);
  AttachClear = new PriKeys('AttachClear', 115, 96);
  AttachDelete = new PriKeys('AttachDelete', 116, 97);
  AttachSaveAs = new PriKeys('AttachSaveAs', 117, 98);
  AttachHelp = new PriKeys('AttachHelp', 118, 99);
  ShiftDo = new PriKeys('ShiftDo', 119, 100);
  ExecuteDirectAct = new PriKeys('ExecuteDirectAct', 120, 101);
  GotoSubForm_0 = new PriKeys('GotoSubForm', 121, 102);
  Navigate = new PriKeys('Navigate', 122, 103);
  SendExcel = new PriKeys('SendExcel', 123, 104);
  DesignExcel = new PriKeys('DesignExcel', 124, 105);
  SaveExcel = new PriKeys('SaveExcel', 125, 106);
  FormFontSize = new PriKeys('FormFontSize', 126, 107);
  CopyColumn = new PriKeys('CopyColumn', 127, 108);
  PasteColumn = new PriKeys('PasteColumn', 128, 109);
  Skype = new PriKeys('Skype', 129, 110);
  Messenger = new PriKeys('Messenger', 130, 111);
  Dialer = new PriKeys('Dialer', 131, 112);
  Calculator = new PriKeys('Calculator', 132, 113);
  MacroRecStart = new PriKeys('MacroRecStart', 133, 114);
  MacroRecStop = new PriKeys('MacroRecStop', 134, 115);
  RunApp = new PriKeys('RunApp', 135, 116);
  Browse = new PriKeys('Browse', 136, 117);
  Clnfld = new PriKeys('Clnfld', 137, 118);
  Pastec = new PriKeys('Pastec', 138, 119);
  SendWord = new PriKeys('SendWord', 139, 120);
  DesignWord = new PriKeys('DesignWord', 140, 121);
  SubLevelsQuery = new PriKeys('SubLevelsQuery', 141, 122);
  DefaultSubLevelQuery = new PriKeys('DefaultSubLevelQuery', 142, 123);
  MailInterface = new PriKeys('MailInterface', 143, 124);
  PasteOnServer = new PriKeys('PasteOnServer', 144, 125);
  AttachDuplicate = new PriKeys('AttachDuplicate', 145, 126);
  AutoSaveHtml = new PriKeys('AutoSaveHtml', 146, 127);
  Enter = new PriKeys('Enter', 147, 128);
  DynamicKeyboard = new PriKeys('DynamicKeyboard', 148, 129);
}

function PriKeys(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.intValue = value_0;
  $put_0((!mappings_1 && !mappings_1 && (mappings_1 = new HashMap) , mappings_1), valueOf(value_0), this);
}

function values_2(){
  $clinit_PriKeys();
  return initValues(getClassLiteralForArray(Lcom_priority_app_form_PriKeys_2_classLit, 1), $intern_4, 3, 0, [QueryIncr, QueryDecr, QueryEnd, FormBrother, SaveHtml, FormZoom, FormNavigateBack, PrevReturn, DebugMode, SendLink, RestoreColumnWidths, FullZoom, NotifyViewChange, CopyRecordLink, SaveChoose, MailTaskUsers, SendLabels, GoogleMaps, RefreshTimer, SetFollowup, UnsetFollowup, SaveRow, None_0, Return, Tab, Up, Down, Right, Left, Del, Cont, Srch, App_0, Blk, DefaultSubLevel, Backs, Allbacks, Do, Hebeng, Ins, Copyf, Copyc, Setval, Getval, Help, Undo_0, Learn, Autofill, Tquery, Total, Npage, Ppage, Draw, Prnt, Downfirst, SubLevels, Splitdef, Clnln, Clntb, Lputscr, Lgetscr, Hebengs, Repins, Activations, Gotolin, Gotolinn, FullMultiRecord, Element_0, Begin, Dolearn, Lstlearn, Lstval, Lstscr, Nframe, Pframe, Select_0, Tabhelp, Refresh, Activate, Gotopos, Home, End, Top, Bottom, Oneline, Printtofile, Execute, Phone, Sort, Wdel, Enlarge, Mailinter, Movetab, Splitempty, DlgQuery, Execform, Scroll, SelectAll, StoreRecords, RetrieveRecords, IncrDecrValue, Macro, ExecuteQuery, DlgBusiness, DlgData, DlgFields, DlgDirectActivations, DlgSubLevels, RowColors, MacroList, DlgMultiComp, AttachActivateApp, AttachBrowse, AttachImport, AttachPasteImport, AttachClear, AttachDelete, AttachSaveAs, AttachHelp, ShiftDo, ExecuteDirectAct, GotoSubForm_0, Navigate, SendExcel, DesignExcel, SaveExcel, FormFontSize, CopyColumn, PasteColumn, Skype, Messenger, Dialer, Calculator, MacroRecStart, MacroRecStop, RunApp, Browse, Clnfld, Pastec, SendWord, DesignWord, SubLevelsQuery, DefaultSubLevelQuery, MailInterface, PasteOnServer, AttachDuplicate, AutoSaveHtml, Enter, DynamicKeyboard]);
}

defineClass(3, 19, {3:1, 4:1, 22:1, 19:1}, PriKeys);
_.intValue = 0;
var Activate, Activations, Allbacks, App_0, AttachActivateApp, AttachBrowse, AttachClear, AttachDelete, AttachDuplicate, AttachHelp, AttachImport, AttachPasteImport, AttachSaveAs, AutoSaveHtml, Autofill, Backs, Begin, Blk, Bottom, Browse, Calculator, Clnfld, Clnln, Clntb, Cont, CopyColumn, CopyRecordLink, Copyc, Copyf, DebugMode, DefaultSubLevel, DefaultSubLevelQuery, Del, DesignExcel, DesignWord, Dialer, DlgBusiness, DlgData, DlgDirectActivations, DlgFields, DlgMultiComp, DlgQuery, DlgSubLevels, Do, Dolearn, Down, Downfirst, Draw, DynamicKeyboard, Element_0, End, Enlarge, Enter, Execform, Execute, ExecuteDirectAct, ExecuteQuery, FormBrother, FormFontSize, FormNavigateBack, FormZoom, FullMultiRecord, FullZoom, Getval, GoogleMaps, GotoSubForm_0, Gotolin, Gotolinn, Gotopos, Hebeng, Hebengs, Help, Home, IncrDecrValue, Ins, Learn, Left, Lgetscr, Lputscr, Lstlearn, Lstscr, Lstval, Macro, MacroList, MacroRecStart, MacroRecStop, MailInterface, MailTaskUsers, Mailinter, Messenger, Movetab, Navigate, Nframe, None_0, NotifyViewChange, Npage, Oneline, PasteColumn, PasteOnServer, Pastec, Pframe, Phone, Ppage, PrevReturn, Printtofile, Prnt, QueryDecr, QueryEnd, QueryIncr, Refresh, RefreshTimer, Repins, RestoreColumnWidths, RetrieveRecords, Return, Right, RowColors, RunApp, SaveChoose, SaveExcel, SaveHtml, SaveRow, Scroll, Select_0, SelectAll, SendExcel, SendLabels, SendLink, SendWord, SetFollowup, Setval, ShiftDo, Skype, Sort, Splitdef, Splitempty, Srch, StoreRecords, SubLevels, SubLevelsQuery, Tab, Tabhelp, Top, Total, Tquery, Undo_0, UnsetFollowup, Up, Wdel, mappings_1;
var Lcom_priority_app_form_PriKeys_2_classLit = createForEnum('com.priority.app.form', 'PriKeys', 3, values_2);
function SubForm(self_0){
  this.self_0 = self_0;
}

defineClass(51, 1, {51:1}, SubForm);
_.self_0 = 0;
var Lcom_priority_app_form_SubForm_2_classLit = createForClass('com.priority.app.form', 'SubForm', 51);
function $clinit_ZoomTypes(){
  $clinit_ZoomTypes = emptyMethod;
  None_1 = new ZoomTypes('None', 0, 0);
  Attach = new ZoomTypes('Attach', 1, 1);
  Search = new ZoomTypes('Search', 2, 2);
  Choose = new ZoomTypes('Choose', 3, 3);
  Zoom_0 = new ZoomTypes('Zoom', 4, 4);
  Date14_0 = new ZoomTypes('Date14', 5, 5);
  Date8_0 = new ZoomTypes('Date8', 6, 6);
  Date10_0 = new ZoomTypes('Date10', 7, 7);
  EMail = new ZoomTypes('EMail', 8, 8);
  URL_0 = new ZoomTypes('URL', 9, 9);
  HiddenZoom = new ZoomTypes('HiddenZoom', 10, 10);
  LinkFile = new ZoomTypes('LinkFile', 11, 11);
  QEdit = new ZoomTypes('QEdit', 12, 12);
  SpecialAttach = new ZoomTypes('SpecialAttach', 13, 99);
}

function ZoomTypes(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  $put_0((!mappings_2 && !mappings_2 && (mappings_2 = new HashMap) , mappings_2), valueOf(value_0), this);
}

function values_3(){
  $clinit_ZoomTypes();
  return initValues(getClassLiteralForArray(Lcom_priority_app_form_ZoomTypes_2_classLit, 1), $intern_4, 12, 0, [None_1, Attach, Search, Choose, Zoom_0, Date14_0, Date8_0, Date10_0, EMail, URL_0, HiddenZoom, LinkFile, QEdit, SpecialAttach]);
}

defineClass(12, 19, {12:1, 4:1, 22:1, 19:1}, ZoomTypes);
var Attach, Choose, Date10_0, Date14_0, Date8_0, EMail, HiddenZoom, LinkFile, None_1, QEdit, Search, SpecialAttach, URL_0, Zoom_0, mappings_2;
var Lcom_priority_app_form_ZoomTypes_2_classLit = createForEnum('com.priority.app.form', 'ZoomTypes', 12, values_3);
function $GetConnection_0(this$static){
  if (this$static.con)
    return this$static.con;
  this$static.con = GetWCFServiceClient(this$static);
  return this$static.con;
}

function $onModuleLoad_1(this$static){
  createJsHelperFunc();
  $wnd.PriInit = Init;
  $wnd.FormStart = FormStart;
  $wnd.JavaLoaded();
  $clinit_PriCommon();
  AppMain = this$static;
  $log_1(logger_0, ($clinit_Level() , ALL), 'onModuleLoad');
}

function PriorityApp(){
}

defineClass(67, 1, {}, PriorityApp);
_.SetIsGoneToServer = function SetIsGoneToServer_0(userState){
}
;
_.con = null;
var Lcom_priority_app_main_PriorityApp_2_classLit = createForClass('com.priority.app.main', 'PriorityApp', 67);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(54, 1, {});
_.toString$ = function toString_11(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 54);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(74, 13, $intern_1, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 74);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(37, 13, $intern_1, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 37);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE_0 = new Boolean_0(false);
  new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(31, 1, {4:1, 31:1, 22:1}, Boolean_0);
_.equals$ = function equals_5(o){
  return instanceOf(o, 31) && dynamicCast(o, 31).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_6(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_12(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE_0;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 31);
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(25, 13, $intern_1, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 25);
defineClass(48, 1, {4:1, 48:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 48);
function Double(value_0){
  this.value_0 = value_0;
}

defineClass(38, 48, {4:1, 22:1, 38:1, 48:1}, Double);
_.equals$ = function equals_6(o){
  return instanceOf(o, 38) && dynamicCast(o, 38).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_7(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_14(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 38);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(30, 13, $intern_1, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 30);
function IllegalStateException(){
  RuntimeException_0.call(this, "Can't overwrite cause");
}

defineClass(128, 13, $intern_1, IllegalStateException);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 128);
function IndexOutOfBoundsException(message){
  RuntimeException_0.call(this, message);
}

defineClass(61, 13, $intern_1, IndexOutOfBoundsException);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 61);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i_0){
  var m, n, y_0;
  if (i_0 < 0) {
    return 0;
  }
   else if (i_0 == 0) {
    return 32;
  }
   else {
    y_0 = -(i_0 >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i_0 = i_0 >> m;
    y_0 = i_0 - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i_0 <<= m;
    y_0 = i_0 - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i_0 <<= m;
    y_0 = i_0 - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i_0 <<= m;
    y_0 = i_0 >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
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

function valueOf(i_0){
  var rebase, result;
  if (i_0 > -129 && i_0 < 128) {
    rebase = i_0 + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i_0));
    return result;
  }
  return new Integer(i_0);
}

defineClass(26, 48, {4:1, 22:1, 26:1, 48:1}, Integer);
_.equals$ = function equals_7(o){
  return instanceOf(o, 26) && dynamicCast(o, 26).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_8(){
  return this.value_0;
}
;
_.toString$ = function toString_15(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 26);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_4, 26, 256, 0, 1);
}

var boxedValues_0;
function max_0(y_0){
  return 0 > y_0?0:y_0;
}

function min_0(x_0){
  return x_0 < 5?x_0:5;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(29, 13, $intern_1, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 29);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(21, 1, {4:1, 21:1}, StackTraceElement);
_.equals$ = function equals_8(other){
  var st;
  if (instanceOf(other, 21)) {
    st = dynamicCast(other, 21);
    return this.lineNumber == st.lineNumber && equals_19(this.methodName, st.methodName) && equals_19(this.className, st.className) && equals_19(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_9(){
  return hashCode_15(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_16(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 21);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $indexOf(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
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

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return valueOf_0(hiSurrogate) + valueOf_0(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function valueOf_0(x_0){
  return String.fromCharCode(x_0);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
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
    hashCode = str.charCodeAt(i_0 + 3) + 31 * (str.charCodeAt(i_0 + 2) + 31 * (str.charCodeAt(i_0 + 1) + 31 * (str.charCodeAt(i_0) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i_0 += 4;
  }
  while (i_0 < n) {
    hashCode = hashCode * 31 + $charAt(str, i_0++);
  }
  hashCode = ~~hashCode;
  return hashCode;
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
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(23, 54, {161:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 23);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(34, 13, $intern_1, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 34);
function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!$contains(this$static, e)) {
      return false;
    }
  }
  return true;
}

defineClass(149, 1, {});
_.toString$ = function toString_17(){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 149);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k_0;
  for (iter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); $hasNext(iter);) {
    entry = (checkStructuralChange(iter.this$01, iter) , checkCriticalElement($hasNext(iter)) , dynamicCast(iter.current.next(), 11));
    k_0 = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k_0) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k_0)) {
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(148, 1, {45:1});
_.equals$ = function equals_9(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 45)) {
    return false;
  }
  otherMap = dynamicCast(obj, 45);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next(), 11);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_0(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_16(new AbstractHashMap$EntrySet(this));
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.size_1 = function size_1(){
  return (new AbstractHashMap$EntrySet(this)).this$01.size_0;
}
;
_.toString$ = function toString_18(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , dynamicCast(entry$iterator.current.next(), 11));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 148);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $get_1(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined);
}

function $put_0(this$static, key, value_0){
  return $put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

defineClass(71, 148, {45:1});
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_1(key){
  return $get_1(this, key);
}
;
_.put = function put_0(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 71);
defineClass(150, 149, $intern_11);
_.equals$ = function equals_10(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 46)) {
    return false;
  }
  other = dynamicCast(o, 46);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_11(){
  return hashCode_16(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 150);
function $contains(this$static, o){
  if (instanceOf(o, 11)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 11));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(27, 150, $intern_11, AbstractHashMap$EntrySet);
_.iterator = function iterator_0(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_3(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 27);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(32, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext(){
  return $hasNext(this);
}
;
_.next = function next(){
  return checkStructuralChange(this.this$01, this) , checkCriticalElement($hasNext(this)) , dynamicCast(this.current.next(), 11);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 32);
defineClass(151, 149, {20:1});
_.add_0 = function add_0(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_1 = function add_1(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_11(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 20)) {
    return false;
  }
  other = dynamicCast(o, 20);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = new AbstractList$IteratorImpl(this); elem$iterator.i < elem$iterator.this$01.size_1();) {
    elem = (checkCriticalElement(elem$iterator.i < elem$iterator.this$01.size_1()) , elem$iterator.this$01.get_1(elem$iterator.i++));
    elemOther = iterOther.next();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_12(){
  return hashCode_17(this);
}
;
_.iterator = function iterator_1(){
  return new AbstractList$IteratorImpl(this);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 151);
function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(40, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_0(){
  return this.i < this.this$01.size_1();
}
;
_.next = function next_0(){
  return checkCriticalElement(this.i < this.this$01.size_1()) , this.this$01.get_1(this.i++);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 40);
defineClass(72, 1, $intern_12);
_.equals$ = function equals_12(other){
  var entry;
  if (!instanceOf(other, 11)) {
    return false;
  }
  entry = dynamicCast(other, 11);
  return equals_19(this.key, entry.getKey()) && equals_19(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_23(this.key) ^ hashCode_23(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_19(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 72);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(73, 72, $intern_12, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 73);
defineClass(152, 1, $intern_12);
_.equals$ = function equals_13(other){
  var entry;
  if (!instanceOf(other, 11)) {
    return false;
  }
  entry = dynamicCast(other, 11);
  return equals_19(this.getKey(), entry.getKey()) && equals_19(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_14(){
  return hashCode_23(this.getKey()) ^ hashCode_23(this.getValue());
}
;
_.toString$ = function toString_20(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 152);
function $add(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $toArray(this$static, out){
  var i_0, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i_0 = 0; i_0 < size_0; ++i_0) {
    setCheck(out, i_0, this$static.array[i_0]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(35, 151, $intern_13, ArrayList);
_.add_0 = function add_2(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice(this.array, index_0, 0, o);
}
;
_.add_1 = function add_3(o){
  return $add(this, o);
}
;
_.get_1 = function get_2(index_0){
  return checkElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_4(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 35);
function hashCode_15(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_16(collection){
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = new AbstractHashMap$EntrySetIterator(collection.this$01); $hasNext(e$iterator);) {
    e = (checkStructuralChange(e$iterator.this$01, e$iterator) , checkCriticalElement($hasNext(e$iterator)) , dynamicCast(e$iterator.current.next(), 11));
    hashCode = hashCode + (e?e.hashCode$():0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_17(list){
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = new AbstractList$IteratorImpl(list); e$iterator.i < e$iterator.this$01.size_1();) {
    e = (checkCriticalElement(e$iterator.i < e$iterator.this$01.size_1()) , e$iterator.this$01.get_1(e$iterator.i++));
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function unmodifiableList(list){
  return instanceOf(list, 52)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(56, 1, {});
_.add_1 = function add_4(o){
  throw new UnsupportedOperationException;
}
;
_.iterator = function iterator_2(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_5(){
  return this.coll.size_1();
}
;
_.toString$ = function toString_21(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 56);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(83, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_1(){
  return this.it.hasNext();
}
;
_.next = function next_1(){
  return this.it.next();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 83);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(57, 56, {20:1}, Collections$UnmodifiableList);
_.equals$ = function equals_14(o){
  return this.list.equals$(o);
}
;
_.get_1 = function get_3(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode$ = function hashCode_18(){
  return this.list.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 57);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(78, 1, {45:1}, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_0(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_15(o){
  return this.map_0.equals$(o);
}
;
_.get_0 = function get_4(key){
  return this.map_0.get_0(key);
}
;
_.hashCode$ = function hashCode_19(){
  return this.map_0.hashCode$();
}
;
_.put = function put_1(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_6(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_22(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 78);
defineClass(79, 56, $intern_11);
_.equals$ = function equals_16(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_20(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 79);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(80, 79, $intern_11, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_3(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 80);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(84, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_2(){
  return this.val$it2.hasNext();
}
;
_.next = function next_2(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(this.val$it2.next(), 11));
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 84);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(81, 1, $intern_12, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_17(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_0(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_21(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_0(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_23(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 81);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(82, 57, {20:1, 52:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 82);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(129, 13, $intern_1, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 129);
function $toString_2(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_0(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(42, 1, {4:1, 22:1, 42:1}, Date_0);
_.equals$ = function equals_18(obj){
  return instanceOf(obj, 42) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 42).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_22(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_24(){
  return $toString_2(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 42);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this.hashCodeMap = delegate.createJsHashCodeMap();
  this.hashCodeMap.host = this;
  this.stringMap = delegate.createJsStringMap();
  this.stringMap.host = this;
  this.size_0 = 0;
  structureChanged(this);
}

defineClass(10, 71, {4:1, 45:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 10);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, !key?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(59, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 59);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_4, 11, 0, 0, 1);
}

defineClass(116, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_3(){
  return $hasNext_0(this);
}
;
_.next = function next_3(){
  return checkCriticalElement($hasNext_0(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 116);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(114, 59, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i_0 = 0, c = array.length; i_0 < c; ++i_0) {
        list.add_1(array[i_0]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 114);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(115, 35, $intern_13, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 115);
function InternalJsMapFactory(){
}

defineClass(111, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 111);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(113, 111, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 113);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(112, 111, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 112);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_0(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $set_0(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(49, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_2 = function get_5(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_2(key, value_0){
  return $put_2(this, key, value_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 49);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(88, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_4(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_4(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 88);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(58, 152, $intern_12, InternalJsStringMap$2);
_.getKey = function getKey_1(){
  return this.val$key2;
}
;
_.getValue = function getValue_1(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_1(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 58);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(85, 49, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_6(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1;
}
;
_.put_0 = function put_3(key, value_0){
  return $put_2(this, ':' + key, value_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 85);
function InternalJsStringMap$InternalJsStringMapLegacy$1(){
  ArrayList.call(this);
}

defineClass(87, 35, $intern_13, InternalJsStringMap$InternalJsStringMapLegacy$1);
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 87);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(86, 49, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 86);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(130, 13, $intern_1, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 130);
function equals_19(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_23(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

defineClass(153, 1, $intern_4);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue_0 = function intValue(){
  return -1;
}
;
_.toString$ = function toString_25(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 153);
function Level$LevelAll(){
}

defineClass(102, 153, $intern_4, Level$LevelAll);
_.getName = function getName_1(){
  return 'ALL';
}
;
_.intValue_0 = function intValue_0(){
  return -2147483648;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 102);
function Level$LevelConfig(){
}

defineClass(103, 153, $intern_4, Level$LevelConfig);
_.getName = function getName_2(){
  return 'CONFIG';
}
;
_.intValue_0 = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 103);
function Level$LevelFine(){
}

defineClass(104, 153, $intern_4, Level$LevelFine);
_.getName = function getName_3(){
  return 'FINE';
}
;
_.intValue_0 = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 104);
function Level$LevelFiner(){
}

defineClass(105, 153, $intern_4, Level$LevelFiner);
_.getName = function getName_4(){
  return 'FINER';
}
;
_.intValue_0 = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 105);
function Level$LevelFinest(){
}

defineClass(106, 153, $intern_4, Level$LevelFinest);
_.getName = function getName_5(){
  return 'FINEST';
}
;
_.intValue_0 = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 106);
function Level$LevelInfo(){
}

defineClass(107, 153, $intern_4, Level$LevelInfo);
_.getName = function getName_6(){
  return 'INFO';
}
;
_.intValue_0 = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 107);
function Level$LevelOff(){
}

defineClass(108, 153, $intern_4, Level$LevelOff);
_.getName = function getName_7(){
  return 'OFF';
}
;
_.intValue_0 = function intValue_6(){
  return 2147483647;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 108);
function Level$LevelSevere(){
}

defineClass(109, 153, $intern_4, Level$LevelSevere);
_.getName = function getName_8(){
  return 'SEVERE';
}
;
_.intValue_0 = function intValue_7(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 109);
function Level$LevelWarning(){
}

defineClass(110, 153, $intern_4, Level$LevelWarning);
_.getName = function getName_9(){
  return 'WARNING';
}
;
_.intValue_0 = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 110);
function $addLoggerImpl(this$static, logger){
  $putStringValue(this$static.loggerMap, logger.impl.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = dynamicCast($getStringValue(this$static.loggerMap, name_0), 39);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = newLogger.impl.name_0;
    parentName = __substr(name_1, 0, max_0($lastIndexOf(name_1, fromCodePoint(46))));
    $setParent_0(newLogger, $ensureLogger(this$static, parentName));
    $putStringValue(this$static.loggerMap, newLogger.impl.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton) {
    singleton = new LogManager;
    rootLogger = new Logger('');
    $setLevel_1(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton, rootLogger);
  }
  return singleton;
}

defineClass(89, 1, {}, LogManager);
var singleton;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 89);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(level, msg){
  this.level_0 = level;
  this.msg = msg;
  this.millis = fromDouble(now_1());
}

defineClass(124, 1, $intern_4, LogRecord);
_.loggerName = '';
_.millis = {l:0, m:0, h:0};
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 124);
function $log_1(this$static, level, msg){
  $log(this$static.impl, level, msg, null);
}

function $log_2(this$static, level, msg, thrown){
  $log(this$static.impl, level, msg, thrown);
}

function $setLevel_1(this$static, newLevel){
  $setLevel_0(this$static.impl, newLevel);
}

function $setParent_0(this$static, newParent){
  $setParent(this$static.impl, newParent);
}

function Logger(name_0){
  this.impl = new LoggerImplRegular;
  $setName(this.impl, name_0);
}

function getLogger(name_0){
  new LoggerImplRegular;
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(39, 1, {39:1}, Logger);
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 39);
var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 137), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 139), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 142), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'gecko1_8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=priorityapp-0.js

