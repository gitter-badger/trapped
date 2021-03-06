define("gh_herby_trapped/Trapped-Frontend", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Frontend');
smalltalk.packages["Trapped-Frontend"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('TrappedDataCarrier', smalltalk.Object, ['target', 'model', 'chain', 'source'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "chain:",
category: 'accessing',
fn: function (aProcessingChain){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@chain"]=aProcessingChain;
return self}, function($ctx1) {$ctx1.fill(self,"chain:",{aProcessingChain:aProcessingChain},smalltalk.TrappedDataCarrier)})},
args: ["aProcessingChain"],
source: "chain: aProcessingChain\x0a\x09chain := aProcessingChain",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "falseAsNilValue",
category: 'converting',
fn: function (){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
value=self._value();
$1=_st(value).__eq(false);
if(smalltalk.assert($1)){
return nil;
} else {
$2=value;
return $2;
};
return self}, function($ctx1) {$ctx1.fill(self,"falseAsNilValue",{value:value},smalltalk.TrappedDataCarrier)})},
args: [],
source: "falseAsNilValue\x0a\x09| value |\x0a\x09value := self value.\x0a\x09value = false ifTrue: [ ^nil ] ifFalse: [ ^value ]",
messageSends: ["value", "ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TrappedDataCarrier.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@model"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09model := true",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "source",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@source"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"source",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "source\x0a\x09^source",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "source:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@source"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"source:",{anObject:anObject},smalltalk.TrappedDataCarrier)})},
args: ["anObject"],
source: "source: anObject\x0a\x09source := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "target",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@target"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"target",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "target\x0a\x09^target",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "target:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@target"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"target:",{anObject:anObject},smalltalk.TrappedDataCarrier)})},
args: ["anObject"],
source: "target: anObject\x0a\x09target := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "value\x0a\x09^model",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.TrappedDataCarrier)})},
args: ["anObject"],
source: "value: anObject\x0a\x09model := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "value:whenDifferentFrom:",
category: 'accessing',
fn: function (anObject,anotherObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject).__eq(anotherObject);
if(! smalltalk.assert($1)){
self._value_(anObject);
};
return self}, function($ctx1) {$ctx1.fill(self,"value:whenDifferentFrom:",{anObject:anObject,anotherObject:anotherObject},smalltalk.TrappedDataCarrier)})},
args: ["anObject", "anotherObject"],
source: "value: anObject whenDifferentFrom: anotherObject\x0a\x09anObject = anotherObject ifFalse: [ self value: anObject ]",
messageSends: ["ifFalse:", "=", "value:"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);


smalltalk.addMethod(
smalltalk.method({
selector: "on:target:",
category: 'not yet classified',
fn: function (aProcessingChain,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._chain_(aProcessingChain);
_st($2)._target_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:target:",{aProcessingChain:aProcessingChain,anObject:anObject},smalltalk.TrappedDataCarrier.klass)})},
args: ["aProcessingChain", "anObject"],
source: "on: aProcessingChain target: anObject\x0a\x09^self new\x0a\x09\x09chain: aProcessingChain;\x0a\x09\x09target: anObject;\x0a\x09\x09yourself",
messageSends: ["chain:", "new", "target:", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier.klass);


smalltalk.addClass('TrappedDataCarrierToModel', smalltalk.TrappedDataCarrier, ['index'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
if(($receiver = $1) == nil || $receiver == null){
self["@index"]=_st(self["@chain"])._lastProcessorNo();
} else {
self["@index"]=_st(self["@index"]).__minus((1));
};
_st(_st(self["@chain"])._processorNo_(self["@index"]))._toModel_(self);
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.TrappedDataCarrierToModel)})},
args: [],
source: "proceed\x0a\x09index := index ifNil: [ chain lastProcessorNo ] ifNotNil: [ index - 1 ].\x0a\x09(chain processorNo: index) toModel: self",
messageSends: ["ifNil:ifNotNil:", "lastProcessorNo", "-", "toModel:", "processorNo:"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrierToModel);



smalltalk.addClass('TrappedDataCarrierToView', smalltalk.TrappedDataCarrier, ['index'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
if(($receiver = $1) == nil || $receiver == null){
self["@index"]=_st(self["@chain"])._firstProcessorNo();
} else {
self["@index"]=_st(self["@index"]).__plus((1));
};
_st(_st(self["@chain"])._processorNo_(self["@index"]))._toView_(self);
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.TrappedDataCarrierToView)})},
args: [],
source: "proceed\x0a\x09index := index ifNil: [ chain firstProcessorNo ] ifNotNil: [ index + 1 ].\x0a\x09(chain processorNo: index) toView: self",
messageSends: ["ifNil:ifNotNil:", "firstProcessorNo", "+", "toView:", "processorNo:"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrierToView);



smalltalk.addClass('TrappedProcessingChain', smalltalk.Object, ['processors'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "firstProcessorNo",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1);
}, function($ctx1) {$ctx1.fill(self,"firstProcessorNo",{},smalltalk.TrappedProcessingChain)})},
args: [],
source: "firstProcessorNo\x0a\x09^1",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessingChain);

smalltalk.addMethod(
smalltalk.method({
selector: "forSnapshot:andBrush:",
category: 'action',
fn: function (aSnapshot,aTagBrush){
var self=this;
var toViewCarrier,toModelCarrier;
function $TrappedDataCarrierToView(){return smalltalk.TrappedDataCarrierToView||(typeof TrappedDataCarrierToView=="undefined"?nil:TrappedDataCarrierToView)}
function $TrappedDataCarrierToModel(){return smalltalk.TrappedDataCarrierToModel||(typeof TrappedDataCarrierToModel=="undefined"?nil:TrappedDataCarrierToModel)}
return smalltalk.withContext(function($ctx1) { 
var $1;
toViewCarrier=_st($TrappedDataCarrierToView())._on_target_(self,aTagBrush);
$ctx1.sendIdx["on:target:"]=1;
toModelCarrier=_st($TrappedDataCarrierToModel())._on_target_(self,aSnapshot);
_st(self["@processors"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._installToView_toModel_(toViewCarrier,toModelCarrier);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(toViewCarrier)._source_(aSnapshot);
$ctx1.sendIdx["source:"]=1;
_st(toModelCarrier)._source_(aTagBrush);
$1=_st(_st(toViewCarrier)._value()).__eq(true);
if(smalltalk.assert($1)){
_st(_st(toViewCarrier)._copy())._proceed();
};
return self}, function($ctx1) {$ctx1.fill(self,"forSnapshot:andBrush:",{aSnapshot:aSnapshot,aTagBrush:aTagBrush,toViewCarrier:toViewCarrier,toModelCarrier:toModelCarrier},smalltalk.TrappedProcessingChain)})},
args: ["aSnapshot", "aTagBrush"],
source: "forSnapshot: aSnapshot andBrush: aTagBrush\x0a\x09| toViewCarrier toModelCarrier |\x0a\x09toViewCarrier := TrappedDataCarrierToView on: self target: aTagBrush.\x0a\x09toModelCarrier := TrappedDataCarrierToModel on: self target: aSnapshot.\x0a\x09processors do: [ :each | each installToView: toViewCarrier toModel: toModelCarrier ].\x0a\x09toViewCarrier source: aSnapshot.\x0a\x09toModelCarrier source: aTagBrush.\x0a\x09toViewCarrier value = true ifTrue: [ toViewCarrier copy proceed ]",
messageSends: ["on:target:", "do:", "installToView:toModel:", "source:", "ifTrue:", "=", "value", "proceed", "copy"],
referencedClasses: ["TrappedDataCarrierToView", "TrappedDataCarrierToModel"]
}),
smalltalk.TrappedProcessingChain);

smalltalk.addMethod(
smalltalk.method({
selector: "lastProcessorNo",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@processors"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastProcessorNo",{},smalltalk.TrappedProcessingChain)})},
args: [],
source: "lastProcessorNo\x0a\x09^processors size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TrappedProcessingChain);

smalltalk.addMethod(
smalltalk.method({
selector: "processorNo:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@processors"])._at_(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"processorNo:",{aNumber:aNumber},smalltalk.TrappedProcessingChain)})},
args: ["aNumber"],
source: "processorNo: aNumber\x0a\x09^processors at: aNumber",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.TrappedProcessingChain);

smalltalk.addMethod(
smalltalk.method({
selector: "processors:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@processors"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"processors:",{anArray:anArray},smalltalk.TrappedProcessingChain)})},
args: ["anArray"],
source: "processors: anArray\x0a\x09processors := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessingChain);


smalltalk.addMethod(
smalltalk.method({
selector: "blackboardReaderWriter",
category: 'private',
fn: function (){
var self=this;
function $TrappedProcessorBlackboard(){return smalltalk.TrappedProcessorBlackboard||(typeof TrappedProcessorBlackboard=="undefined"?nil:TrappedProcessorBlackboard)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorBlackboard())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"blackboardReaderWriter",{},smalltalk.TrappedProcessingChain.klass)})},
args: [],
source: "blackboardReaderWriter\x0a\x09^TrappedProcessorBlackboard new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorBlackboard"]
}),
smalltalk.TrappedProcessingChain.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "dataTerminator",
category: 'private',
fn: function (){
var self=this;
function $TrappedProcessorTerminator(){return smalltalk.TrappedProcessorTerminator||(typeof TrappedProcessorTerminator=="undefined"?nil:TrappedProcessorTerminator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorTerminator())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataTerminator",{},smalltalk.TrappedProcessingChain.klass)})},
args: [],
source: "dataTerminator\x0a\x09^TrappedProcessorTerminator new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorTerminator"]
}),
smalltalk.TrappedProcessingChain.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(anArray)._anySatisfy_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isExpectingModelData();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
if(smalltalk.assert($1)){
_st(anArray)._addFirst_(self._blackboardReaderWriter());
} else {
_st(anArray)._add_(self._dataTerminator());
};
$3=self._new();
_st($3)._processors_(anArray);
$4=_st($3)._yourself();
$2=$4;
return $2;
}, function($ctx1) {$ctx1.fill(self,"new:",{anArray:anArray},smalltalk.TrappedProcessingChain.klass)})},
args: ["anArray"],
source: "new: anArray\x0a\x09(anArray anySatisfy: [ :each | each isExpectingModelData ])\x0a\x09\x09ifFalse: [ anArray add: self dataTerminator ]\x0a\x09\x09ifTrue: [ anArray addFirst: self blackboardReaderWriter ].\x0a\x09^self new\x0a\x09\x09processors: anArray;\x0a\x09\x09yourself",
messageSends: ["ifFalse:ifTrue:", "anySatisfy:", "isExpectingModelData", "add:", "dataTerminator", "addFirst:", "blackboardReaderWriter", "processors:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedProcessingChain.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFromProcessorSpecs:",
category: 'instance creation',
fn: function (anArray){
var self=this;
function $TrappedProcessor(){return smalltalk.TrappedProcessor||(typeof TrappedProcessor=="undefined"?nil:TrappedProcessor)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_(_st(_st(anArray)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return ["contents"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._asTrapProcSendTo_($TrappedProcessor());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})})));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFromProcessorSpecs:",{anArray:anArray},smalltalk.TrappedProcessingChain.klass)})},
args: ["anArray"],
source: "newFromProcessorSpecs: anArray\x0a\x09^self new: ((anArray ifEmpty: [ #(contents) ]) collect: [ :each | each asTrapProcSendTo: TrappedProcessor ])",
messageSends: ["new:", "collect:", "ifEmpty:", "asTrapProcSendTo:"],
referencedClasses: ["TrappedProcessor"]
}),
smalltalk.TrappedProcessingChain.klass);


smalltalk.addClass('TrappedProcessor', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.TrappedProcessor.comment="I am a processing step in TrappedProcessingChain.\x0aI am stateless flyweight (aka servant)\x0aand will get all necessary data as arguments in API calls.\x0a\x0aMy public API is:\x0a - installToView:toModel:\x0a   This gets two TrappedDataCarriers set up without actual data\x0a   and at the beginning of their chains. It should do one-time\x0a   installation task needed (install event handlers etc.).\x0a   To start a chain, do: dataCarrier copy value: data; proceed.\x0a - toView:\x0a   This performs transformation of TrappedDataCarrier on its way from model to view.\x0a   Should call aDataCarrier proceed to proceed to subsequent step.\x0a - toModel:\x0a   This performs transformation of TrappedDataCarrier on its way from view to model.\x0a   Should call aDataCarrier proceed to proceed to subsequent step.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier},smalltalk.TrappedProcessor)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09\x22by default, do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessor);

smalltalk.addMethod(
smalltalk.method({
selector: "isExpectingModelData",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isExpectingModelData",{},smalltalk.TrappedProcessor)})},
args: [],
source: "isExpectingModelData\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessor);

smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessor)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09\x22by default, proceed\x22\x0a\x09aDataCarrier proceed",
messageSends: ["proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessor);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessor)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09\x22by default, proceed\x22\x0a\x09aDataCarrier proceed",
messageSends: ["proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessor);


smalltalk.addMethod(
smalltalk.method({
selector: "contents",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorContents(){return smalltalk.TrappedProcessorContents||(typeof TrappedProcessorContents=="undefined"?nil:TrappedProcessorContents)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorContents())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "contents\x0a\x09^TrappedProcessorContents new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorContents"]
}),
smalltalk.TrappedProcessor.klass);


smalltalk.addClass('TrappedDataExpectingProcessor', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedDataExpectingProcessor.comment="I answer true to isExpectingModelData and serve as a base class\x0afor processor that present / change model data.\x0a\x0aWhen at least one of my instances is present in the chain,\x0aautomatic databinding processor is added at the beginning\x0a(the data-binding scenario); otherwise, the chain\x0ais run immediately with true as data (run-once scenario).";
smalltalk.addMethod(
smalltalk.method({
selector: "isExpectingModelData",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isExpectingModelData",{},smalltalk.TrappedDataExpectingProcessor)})},
args: [],
source: "isExpectingModelData\x0a\x09^true",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataExpectingProcessor);



smalltalk.addClass('TrappedProcessorContents', smalltalk.TrappedDataExpectingProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorContents.comment="I put data into target via contents: in toView:";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetContents();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorContents)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetContents",
messageSends: ["toTargetContents"],
referencedClasses: []
}),
smalltalk.TrappedProcessorContents);



smalltalk.addClass('TrappedProcessorBlackboard', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorBlackboard.comment="I am used internally to fetch data from blackboard\x0aor write it back.\x0a\x0aI am added to the beginning of the chain\x0awhen the chain contains at least one element\x0athat isExpectingModelData (see TrappedDataExpectingProcessor).";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var snap;
function $KeyedPubSubUnsubscribe(){return smalltalk.KeyedPubSubUnsubscribe||(typeof KeyedPubSubUnsubscribe=="undefined"?nil:KeyedPubSubUnsubscribe)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
snap=_st(anotherDataCarrier)._target();
$ctx1.sendIdx["target"]=1;
_st(snap)._watch_((function(data){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(_st(_st(aDataCarrier)._target())._asJQuery())._closest_("html"))._toArray())._isEmpty();
if(smalltalk.assert($1)){
_st($KeyedPubSubUnsubscribe())._signal();
};
return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx3) {
$2=_st(aDataCarrier)._copy();
_st($2)._value_(data);
$ctx3.sendIdx["value:"]=1;
$3=_st($2)._proceed();
return $3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1,1)})}));
_st(aDataCarrier)._value_(false);
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,snap:snap},smalltalk.TrappedProcessorBlackboard)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| snap |\x0a\x09snap := anotherDataCarrier target.\x0a\x09snap watch: [ :data |\x0a\x09\x09(aDataCarrier target asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].\x0a        snap do: [ aDataCarrier copy value: data; proceed ] ].\x0a\x09aDataCarrier value: false",
messageSends: ["target", "watch:", "ifTrue:", "isEmpty", "toArray", "closest:", "asJQuery", "signal", "do:", "value:", "copy", "proceed"],
referencedClasses: ["KeyedPubSubUnsubscribe"]
}),
smalltalk.TrappedProcessorBlackboard);

smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._modifyTarget();
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorBlackboard)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier modifyTarget",
messageSends: ["modifyTarget"],
referencedClasses: []
}),
smalltalk.TrappedProcessorBlackboard);



smalltalk.addClass('TrappedProcessorTerminator', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorTerminator.comment="I do not proceed in toView:.\x0a\x0aI am added automatically to end of chain when it does not contain\x0aany element that isExpectingModelData (see TrappedDataExpectingProcessor).";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorTerminator)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09\x22stop\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorTerminator);



smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton)})},
args: ["args"],
source: "start: args\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TrappedSingleton);


smalltalk.TrappedSingleton.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.TrappedSingleton.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TrappedSingleton.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._start_(args);
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton.klass)})},
args: ["args"],
source: "start: args\x0a\x09self current start: args",
messageSends: ["start:", "current"],
referencedClasses: []
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "byName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@registry"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"byName:",{aString:aString},smalltalk.Trapped)})},
args: ["aString"],
source: "byName: aString\x0a\x09^ registry at: aString",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "cloneAndInject:",
category: 'private',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(anObject)._asJQuery())._clone();
_st($2)._each_((function(i,each){
return smalltalk.withContext(function($ctx2) {
return self._injectToElement_(each);
}, function($ctx2) {$ctx2.fillBlock({i:i,each:each},$ctx1,1)})}));
$3=_st($2)._get_((0));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"cloneAndInject:",{anObject:anObject},smalltalk.Trapped)})},
args: ["anObject"],
source: "cloneAndInject: anObject\x0a\x09^anObject asJQuery clone\x0a\x09\x09each: [ :i :each | self injectToElement: each ];\x0a\x09\x09get: 0",
messageSends: ["each:", "clone", "asJQuery", "injectToElement:", "get:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "descend:snapshotDo:",
category: 'private',
fn: function (anArray,aBlock){
var self=this;
var tpsc;
function $TrappedPathStack(){return smalltalk.TrappedPathStack||(typeof TrappedPathStack=="undefined"?nil:TrappedPathStack)}
function $TrappedSnapshot(){return smalltalk.TrappedSnapshot||(typeof TrappedSnapshot=="undefined"?nil:TrappedSnapshot)}
return smalltalk.withContext(function($ctx1) { 
tpsc=_st($TrappedPathStack())._current();
_st(tpsc)._append_do_(anArray,(function(){
var path,model;
return smalltalk.withContext(function($ctx2) {
path=_st(_st(tpsc)._elements())._copy();
path;
model=self._byName_(_st(path)._first());
model;
return _st(aBlock)._value_(_st(_st($TrappedSnapshot())._new())._path_model_(path,model));
}, function($ctx2) {$ctx2.fillBlock({path:path,model:model},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"descend:snapshotDo:",{anArray:anArray,aBlock:aBlock,tpsc:tpsc},smalltalk.Trapped)})},
args: ["anArray", "aBlock"],
source: "descend: anArray snapshotDo: aBlock\x0a\x09| tpsc |\x0a    tpsc := TrappedPathStack current.\x0a    tpsc append: anArray do: [\x0a        | path model |\x0a        path := tpsc elements copy.\x0a   \x09    model := self byName: path first.\x0a        aBlock value: (TrappedSnapshot new path: path model: model)\x0a    ]",
messageSends: ["current", "append:do:", "copy", "elements", "byName:", "first", "value:", "path:model:", "new"],
referencedClasses: ["TrappedPathStack", "TrappedSnapshot"]
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Trapped.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@registry"]=smalltalk.HashedCollection._from_([]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Trapped)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "injectToChildren:",
category: 'private',
fn: function (anElement){
var self=this;
var child;
return smalltalk.withContext(function($ctx1) { 
child=_st(anElement)._firstChild();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(child)._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
self._injectToElement_(child);
child=_st(child)._nextSibling();
return child;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"injectToChildren:",{anElement:anElement,child:child},smalltalk.Trapped)})},
args: ["anElement"],
source: "injectToChildren: anElement\x0a\x09| child |\x0a\x09child := anElement firstChild.\x0a\x09[ child isNil ] whileFalse: [ self injectToElement: child. child := child nextSibling ]",
messageSends: ["firstChild", "whileFalse:", "isNil", "injectToElement:", "nextSibling"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "injectToElement:",
category: 'private',
fn: function (anElement){
var self=this;
var jq;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
jq=_st(anElement)._asJQuery();
$1=_st(jq)._attr_("data-trap");
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
var attr;
attr=$receiver;
_st(jq)._removeAttr_("data-trap");
_st(_st($Trapped())._parse_(attr))._do_((function(rule){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st($HTMLCanvas())._onJQuery_(jq))._root())._trap_processors_(_st(rule)._first(),_st(rule)._at_ifAbsent_((2),(function(){
return smalltalk.withContext(function($ctx3) {
return [];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})})));
}, function($ctx2) {$ctx2.fillBlock({rule:rule},$ctx1,2)})}));
};
self._injectToChildren_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"injectToElement:",{anElement:anElement,jq:jq},smalltalk.Trapped)})},
args: ["anElement"],
source: "injectToElement: anElement\x0a\x09| jq |\x0a\x09jq := anElement asJQuery.\x0a\x09(jq attr: 'data-trap') ifNotNil: [ :attr |\x0a\x09\x09jq removeAttr: 'data-trap'.\x0a\x09\x09(Trapped parse: attr) do: [ :rule |\x0a\x09\x09\x09(HTMLCanvas onJQuery: jq) root trap: rule first processors: (rule at: 2 ifAbsent: [#()]) ] ].\x0a\x09self injectToChildren: anElement",
messageSends: ["asJQuery", "ifNotNil:", "attr:", "removeAttr:", "do:", "parse:", "trap:processors:", "root", "onJQuery:", "first", "at:ifAbsent:", "injectToChildren:"],
referencedClasses: ["Trapped", "HTMLCanvas"]
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
category: 'accessing',
fn: function (aListKeyedEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register_name_(aListKeyedEntity,_st(_st(aListKeyedEntity)._class())._name());
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aListKeyedEntity:aListKeyedEntity},smalltalk.Trapped)})},
args: ["aListKeyedEntity"],
source: "register: aListKeyedEntity\x0a\x09self register: aListKeyedEntity name: aListKeyedEntity class name",
messageSends: ["register:name:", "name", "class"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "register:name:",
category: 'accessing',
fn: function (aListKeyedEntity,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@registry"])._at_put_(aString,aListKeyedEntity);
return self}, function($ctx1) {$ctx1.fill(self,"register:name:",{aListKeyedEntity:aListKeyedEntity,aString:aString},smalltalk.Trapped)})},
args: ["aListKeyedEntity", "aString"],
source: "register: aListKeyedEntity name: aString\x0a\x09registry at: aString put: aListKeyedEntity",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(args)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._register_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
self._injectToElement_(document);
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.Trapped)})},
args: ["args"],
source: "start: args\x0a\x09args do: [ :each | self register: each ].\x0a\x09self injectToElement: document",
messageSends: ["do:", "register:", "injectToElement:"],
referencedClasses: []
}),
smalltalk.Trapped);


smalltalk.addMethod(
smalltalk.method({
selector: "loop:before:do:",
category: 'private',
fn: function (aSequenceableCollection,aNode,aBlock){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
_st(aSequenceableCollection)._withIndexDo_((function(item,i){
var env;
return smalltalk.withContext(function($ctx2) {
env=_st(document)._createDocumentFragment();
env;
_st([i])._trapDescend_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st($HTMLCanvas())._onJQuery_(_st(env)._asJQuery()))._root())._with_(aBlock);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return _st(_st(aNode)._parentNode())._insertBefore_reference_(env,aNode);
}, function($ctx2) {$ctx2.fillBlock({item:item,i:i,env:env},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loop:before:do:",{aSequenceableCollection:aSequenceableCollection,aNode:aNode,aBlock:aBlock},smalltalk.Trapped.klass)})},
args: ["aSequenceableCollection", "aNode", "aBlock"],
source: "loop: aSequenceableCollection before: aNode do: aBlock\x0a\x09aSequenceableCollection withIndexDo: [ :item :i |\x0a\x09\x09| env |\x0a\x09\x09env := document createDocumentFragment.\x0a\x09\x09{i} trapDescend: [ (HTMLCanvas onJQuery: env asJQuery) root with: aBlock ].\x0a\x09\x09aNode parentNode insertBefore: env reference: aNode ]",
messageSends: ["withIndexDo:", "createDocumentFragment", "trapDescend:", "with:", "root", "onJQuery:", "asJQuery", "insertBefore:reference:", "parentNode"],
referencedClasses: ["HTMLCanvas"]
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loop:between:and:do:",
category: 'private',
fn: function (aSequenceableCollection,aTagBrush,anotherTagBrush,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(aTagBrush)._asJQuery();
$3=_st(anotherTagBrush)._element();
$ctx1.sendIdx["element"]=1;
$1=_st($2)._nextUntil_($3);
_st($1)._remove();
if(($receiver = aSequenceableCollection) == nil || $receiver == null){
aSequenceableCollection;
} else {
self._loop_before_do_(aSequenceableCollection,_st(anotherTagBrush)._element(),aBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"loop:between:and:do:",{aSequenceableCollection:aSequenceableCollection,aTagBrush:aTagBrush,anotherTagBrush:anotherTagBrush,aBlock:aBlock},smalltalk.Trapped.klass)})},
args: ["aSequenceableCollection", "aTagBrush", "anotherTagBrush", "aBlock"],
source: "loop: aSequenceableCollection between: aTagBrush and: anotherTagBrush do: aBlock\x0a\x09(aTagBrush asJQuery nextUntil: anotherTagBrush element) remove.\x0a\x09aSequenceableCollection ifNotNil: [\x0a\x09\x09self loop: aSequenceableCollection before: anotherTagBrush element do: aBlock\x0a\x09]",
messageSends: ["remove", "nextUntil:", "asJQuery", "element", "ifNotNil:", "loop:before:do:"],
referencedClasses: []
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$6,$8,$7,$9,$10,$11,$12,$13,$14,$1;
$2=_st(aString)._tokenize_(".");
$ctx1.sendIdx["tokenize:"]=1;
$1=_st($2)._collect_((function(rule){
return smalltalk.withContext(function($ctx2) {
$3=_st(rule)._tokenize_(":");
$ctx2.sendIdx["tokenize:"]=2;
return _st($3)._collect_((function(message){
var result,stack,anArray;
return smalltalk.withContext(function($ctx3) {
anArray=_st(message)._tokenize_(" ");
anArray;
result=[];
result;
stack=[result];
stack;
_st(anArray)._do_((function(each){
var asNum,inner,close;
return smalltalk.withContext(function($ctx4) {
close=(0);
close;
inner=each;
inner;
_st((function(){
return smalltalk.withContext(function($ctx5) {
$4=_st(inner)._notEmpty();
$ctx5.sendIdx["notEmpty"]=1;
return _st($4)._and_((function(){
return smalltalk.withContext(function($ctx6) {
$5=_st(inner)._first();
$ctx6.sendIdx["first"]=1;
return _st($5).__eq("(");
$ctx6.sendIdx["="]=1;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)})}));
$ctx5.sendIdx["and:"]=1;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx5) {
inner=_st(inner)._allButFirst();
$ctx5.sendIdx["allButFirst"]=1;
inner;
$6=stack;
$8=_st(stack)._last();
$ctx5.sendIdx["last"]=1;
$7=_st($8)._add_([]);
$ctx5.sendIdx["add:"]=2;
return _st($6)._add_($7);
$ctx5.sendIdx["add:"]=1;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
$ctx4.sendIdx["whileTrue:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx5) {
$9=_st(inner)._notEmpty();
$ctx5.sendIdx["notEmpty"]=2;
return _st($9)._and_((function(){
return smalltalk.withContext(function($ctx6) {
$10=_st(inner)._last();
$ctx6.sendIdx["last"]=2;
return _st($10).__eq(")");
$ctx6.sendIdx["="]=2;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,8)})}));
$ctx5.sendIdx["and:"]=2;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx5) {
inner=_st(inner)._allButLast();
inner;
close=_st(close).__plus((1));
return close;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,9)})}));
$11=_st(_st(inner)._notEmpty())._and_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(_st(inner)._first()).__eq("#");
$ctx5.sendIdx["="]=3;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,10)})}));
if(smalltalk.assert($11)){
inner=[_st(inner)._allButFirst()];
inner;
};
$12=_st(inner)._isString();
if(smalltalk.assert($12)){
asNum=_st(_st(inner)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx5) {
return "NaN";
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,13)})})))._asNumber();
} else {
asNum=inner;
};
asNum;
$13=_st(asNum).__eq(asNum);
if(smalltalk.assert($13)){
$14=_st(stack)._last();
$ctx4.sendIdx["last"]=3;
_st($14)._add_(asNum);
$ctx4.sendIdx["add:"]=3;
} else {
_st(inner)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(_st(stack)._last())._add_(inner);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,17)})}));
};
return _st(close)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(stack)._removeLast();
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,18)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each,asNum:asNum,inner:inner,close:close},$ctx3,3)})}));
return result;
}, function($ctx3) {$ctx3.fillBlock({message:message,result:result,stack:stack,anArray:anArray},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({rule:rule},$ctx1,1)})}));
$ctx1.sendIdx["collect:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.Trapped.klass)})},
args: ["aString"],
source: "parse: aString\x0a\x09^ (aString tokenize: '.') collect: [ :rule |\x0a\x09\x09(rule tokenize: ':') collect: [ :message |\x0a\x09\x09\x09| result stack anArray |\x0a\x09\x09\x09anArray := message tokenize: ' '.\x0a\x09\x09\x09result := #().\x0a\x09\x09\x09stack := { result }.\x0a\x09\x09\x09anArray do: [ :each |\x0a    \x09\x09\x09| asNum inner close |\x0a\x09\x09\x09\x09close := 0.\x0a\x09\x09\x09\x09inner := each.\x0a\x09\x09\x09\x09[ inner notEmpty and: [ inner first = '(' ]] whileTrue: [ inner := inner allButFirst. stack add: (stack last add: #()) ].\x0a\x09\x09\x09\x09[ inner notEmpty and: [ inner last = ')' ]] whileTrue: [ inner := inner allButLast. close := close + 1 ].\x0a\x09\x09\x09\x09(inner notEmpty and: [ inner first = '#' ]) ifTrue: [ inner := { inner allButFirst } ].\x0a\x09\x09       \x09asNum := inner isString ifTrue: [ (inner ifEmpty: [ 'NaN' ]) asNumber ] ifFalse: [ inner ].\x0a        \x09\x09asNum = asNum ifTrue: [ stack last add: asNum ] ifFalse: [\x0a\x09\x09\x09\x09\x09inner ifNotEmpty: [ stack last add: inner ] ].\x0a\x09\x09\x09\x09close timesRepeat: [ stack removeLast ] ].\x0a\x09\x09\x09result ] ]",
messageSends: ["collect:", "tokenize:", "do:", "whileTrue:", "and:", "notEmpty", "=", "first", "allButFirst", "add:", "last", "allButLast", "+", "ifTrue:", "ifTrue:ifFalse:", "isString", "asNumber", "ifEmpty:", "ifNotEmpty:", "timesRepeat:", "removeLast"],
referencedClasses: []
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "append:do:",
category: 'descending',
fn: function (anArray,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._with_do_(_st(self["@elements"]).__comma(anArray),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"append:do:",{anArray:anArray,aBlock:aBlock},smalltalk.TrappedPathStack)})},
args: ["anArray", "aBlock"],
source: "append: anArray do: aBlock\x0a    self with: elements, anArray do: aBlock",
messageSends: ["with:do:", ","],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.TrappedPathStack)})},
args: [],
source: "elements\x0a\x09^elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TrappedPathStack.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TrappedPathStack)})},
args: [],
source: "initialize\x0a    super initialize.\x0a\x09elements := #().",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: 'descending',
fn: function (anArray,aBlock){
var self=this;
var old;
return smalltalk.withContext(function($ctx1) { 
old=self["@elements"];
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@elements"]=anArray;
self["@elements"];
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
self["@elements"]=old;
return self["@elements"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anArray:anArray,aBlock:aBlock,old:old},smalltalk.TrappedPathStack)})},
args: ["anArray", "aBlock"],
source: "with: anArray do: aBlock\x0a\x09| old |\x0a    old := elements.\x0a    [ elements := anArray.\x0a\x09aBlock value ] ensure: [ elements := old ]",
messageSends: ["ensure:", "value"],
referencedClasses: []
}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSnapshot', smalltalk.Object, ['path', 'model'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'action',
fn: function (aBlock){
var self=this;
function $TrappedPathStack(){return smalltalk.TrappedPathStack||(typeof TrappedPathStack=="undefined"?nil:TrappedPathStack)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TrappedPathStack())._current())._with_do_(self["@path"],(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self["@model"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09TrappedPathStack current with: path do: [ aBlock value: model ]",
messageSends: ["with:do:", "current", "value:"],
referencedClasses: ["TrappedPathStack"]
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.TrappedSnapshot)})},
args: [],
source: "model\x0a\x09^model",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "modify:",
category: 'action',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._modify_do_(_st(self._path())._allButFirst(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"modify:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "modify: aBlock\x0a\x09self model modify: self path allButFirst do: aBlock",
messageSends: ["modify:do:", "model", "allButFirst", "path"],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@path"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.TrappedSnapshot)})},
args: [],
source: "path\x0a\x09^path",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "path:model:",
category: 'accessing',
fn: function (anArray,aTrappedMW){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=anArray;
self["@model"]=aTrappedMW;
return self}, function($ctx1) {$ctx1.fill(self,"path:model:",{anArray:anArray,aTrappedMW:aTrappedMW},smalltalk.TrappedSnapshot)})},
args: ["anArray", "aTrappedMW"],
source: "path: anArray model: aTrappedMW\x0a\x09path := anArray.\x0a    model := aTrappedMW",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "read:",
category: 'action',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._read_do_(_st(self._path())._allButFirst(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"read:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "read: aBlock\x0a\x09self model read: self path allButFirst do: aBlock",
messageSends: ["read:do:", "model", "allButFirst", "path"],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "watch:",
category: 'action',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._watch_do_(_st(self._path())._allButFirst(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"watch:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "watch: aBlock\x0a\x09self model watch: self path allButFirst do: aBlock",
messageSends: ["watch:do:", "model", "allButFirst", "path"],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);


smalltalk.addMethod(
smalltalk.method({
selector: "asTrapProcSendTo:",
category: '*Trapped-Frontend',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("Trapped cannot use processor descriptor of ".__comma(_st(self._class())._name())).__comma(" type.");
$ctx1.sendIdx[","]=1;
self._error_($1);
return self}, function($ctx1) {$ctx1.fill(self,"asTrapProcSendTo:",{anObject:anObject},smalltalk.Object)})},
args: ["anObject"],
source: "asTrapProcSendTo: anObject\x0a\x09self error: 'Trapped cannot use processor descriptor of ', self class name, ' type.'",
messageSends: ["error:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asTrapProcSendTo:",
category: '*Trapped-Frontend',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asTrapProcSendTo:",{anObject:anObject},smalltalk.String)})},
args: ["anObject"],
source: "asTrapProcSendTo: anObject\x0a\x09^anObject perform: self",
messageSends: ["perform:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "asTrapProcSendTo:",
category: '*Trapped-Frontend',
fn: function (anObject){
var self=this;
var selector,args;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
selector="";
args=[];
self._withIndexDo_((function(element,index){
return smalltalk.withContext(function($ctx2) {
$1=_st(index)._odd();
if(smalltalk.assert($1)){
selector=_st(selector).__comma(element);
$ctx2.sendIdx[","]=1;
return selector;
} else {
selector=_st(selector).__comma(":");
selector;
return _st(args)._add_(element);
};
}, function($ctx2) {$ctx2.fillBlock({element:element,index:index},$ctx1,1)})}));
$2=_st(anObject)._perform_withArguments_(selector,args);
return $2;
}, function($ctx1) {$ctx1.fill(self,"asTrapProcSendTo:",{anObject:anObject,selector:selector,args:args},smalltalk.Array)})},
args: ["anObject"],
source: "asTrapProcSendTo: anObject\x0a\x09| selector args |\x0a\x09selector := ''.\x0a\x09args := #().\x0a\x09\x09self withIndexDo: [ :element :index | index odd\x0a\x09\x09\x09ifTrue: [ selector := selector, element ]\x0a\x09\x09\x09ifFalse: [ selector := selector, ':'. args add: element ] ].\x0a\x09^anObject perform: selector withArguments: args",
messageSends: ["withIndexDo:", "ifTrue:ifFalse:", "odd", ",", "add:", "perform:withArguments:"],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "trapDescend:",
category: '*Trapped-Frontend',
fn: function (aBlock){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Trapped())._current())._descend_snapshotDo_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"trapDescend:",{aBlock:aBlock},smalltalk.Array)})},
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09Trapped current descend: self snapshotDo: aBlock",
messageSends: ["descend:snapshotDo:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "trapIter:do:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._with_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._tag_("script");
_st($1)._at_put_("type","application/x-beacon");
$2=_st($1)._trapIter_after_(path,aBlock);
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapIter:do:",{path:path,aBlock:aBlock},smalltalk.HTMLCanvas)})},
args: ["path", "aBlock"],
source: "trapIter: path do: aBlock\x0a    self with: [ :html | (html tag: 'script') at: 'type' put: 'application/x-beacon'; trapIter: path after: aBlock ]",
messageSends: ["with:", "at:put:", "tag:", "trapIter:after:"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "trap:",
category: '*Trapped-Frontend',
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._trap_processors_(path,[]);
return self}, function($ctx1) {$ctx1.fill(self,"trap:",{path:path},smalltalk.TagBrush)})},
args: ["path"],
source: "trap: path\x0a\x09self trap: path processors: #()",
messageSends: ["trap:processors:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trap:processors:",
category: '*Trapped-Frontend',
fn: function (path,anArray){
var self=this;
function $TrappedProcessingChain(){return smalltalk.TrappedProcessingChain||(typeof TrappedProcessingChain=="undefined"?nil:TrappedProcessingChain)}
return smalltalk.withContext(function($ctx1) { 
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return _st(_st($TrappedProcessingChain())._newFromProcessorSpecs_(anArray))._forSnapshot_andBrush_(snap,self);
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trap:processors:",{path:path,anArray:anArray},smalltalk.TagBrush)})},
args: ["path", "anArray"],
source: "trap: path processors: anArray\x0a\x09path trapDescend: [ :snap |\x0a\x09\x09(TrappedProcessingChain newFromProcessorSpecs: anArray)\x0a\x09\x09\x09forSnapshot: snap andBrush: self ]",
messageSends: ["trapDescend:", "forSnapshot:andBrush:", "newFromProcessorSpecs:"],
referencedClasses: ["TrappedProcessingChain"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trap:read:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
function $KeyedPubSubUnsubscribe(){return smalltalk.KeyedPubSubUnsubscribe||(typeof KeyedPubSubUnsubscribe=="undefined"?nil:KeyedPubSubUnsubscribe)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return _st(snap)._watch_((function(data){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(_st(self._asJQuery())._closest_("html"))._toArray())._isEmpty();
if(smalltalk.assert($1)){
_st($KeyedPubSubUnsubscribe())._signal();
};
return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {
return self._with_((function(html){
return smalltalk.withContext(function($ctx5) {
return _st(aBlock)._value_value_(data,html);
}, function($ctx5) {$ctx5.fillBlock({html:html},$ctx4,5)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({data:data},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trap:read:",{path:path,aBlock:aBlock},smalltalk.TagBrush)})},
args: ["path", "aBlock"],
source: "trap: path read: aBlock\x0a\x09path trapDescend: [ :snap |\x0a        snap watch: [ :data |\x0a            (self asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].\x0a        \x09snap do: [ self with: [ :html | aBlock value: data value: html ] ]\x0a    \x09]\x0a    ]",
messageSends: ["trapDescend:", "watch:", "ifTrue:", "isEmpty", "toArray", "closest:", "asJQuery", "signal", "do:", "with:", "value:value:"],
referencedClasses: ["KeyedPubSubUnsubscribe"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trapGuard:contents:",
category: '*Trapped-Frontend',
fn: function (anArray,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
[]._trapDescend_((function(snap){
var shown;
return smalltalk.withContext(function($ctx2) {
shown=nil;
shown;
return self._trap_read_(anArray,(function(gdata){
var sanitized;
return smalltalk.withContext(function($ctx3) {
if(($receiver = gdata) == nil || $receiver == null){
sanitized=false;
} else {
sanitized=gdata;
};
sanitized;
$1=_st(shown).__eq(sanitized);
if(! smalltalk.assert($1)){
shown=sanitized;
shown;
$2=shown;
if(smalltalk.assert($2)){
_st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {
return self._contents_(aBlock);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)})}));
$3=self._asJQuery();
$ctx3.sendIdx["asJQuery"]=1;
return _st($3)._show();
} else {
$4=self._asJQuery();
_st($4)._hide();
$5=_st($4)._empty();
return $5;
};
};
}, function($ctx3) {$ctx3.fillBlock({gdata:gdata,sanitized:sanitized},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap,shown:shown},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapGuard:contents:",{anArray:anArray,aBlock:aBlock},smalltalk.TagBrush)})},
args: ["anArray", "aBlock"],
source: "trapGuard: anArray contents: aBlock\x0a\x09#() trapDescend: [ :snap |\x0a\x09    | shown |\x0a    \x09shown := nil.\x0a\x09    self trap: anArray read: [ :gdata |\x0a\x09\x09\x09| sanitized |\x0a\x09\x09\x09sanitized := gdata ifNil: [ false ].\x0a    \x09    shown = sanitized ifFalse: [\x0a        \x09    shown := sanitized.\x0a            \x09shown\x0a\x09\x09\x09\x09\x09ifTrue: [ snap do: [ self contents: aBlock ]. self asJQuery show ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self asJQuery hide; empty ] ] ] ]",
messageSends: ["trapDescend:", "trap:read:", "ifNil:", "ifFalse:", "=", "ifTrue:ifFalse:", "do:", "contents:", "show", "asJQuery", "hide", "empty"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trapIter:after:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
var end;
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
end=_st($TagBrush())._fromJQuery_canvas_("<script type=\x22application/x-beacon\x22 />"._asJQuery(),self["@canvas"]);
$2=self._element();
$ctx1.sendIdx["element"]=1;
$1=_st($2)._parentNode();
$3=_st(end)._element();
$ctx1.sendIdx["element"]=2;
_st($1)._insertBefore_reference_($3,_st(self._element())._nextSibling());
self._trap_read_(path,(function(model){
return smalltalk.withContext(function($ctx2) {
return _st($Trapped())._loop_between_and_do_(model,self,end,aBlock);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapIter:after:",{path:path,aBlock:aBlock,end:end},smalltalk.TagBrush)})},
args: ["path", "aBlock"],
source: "trapIter: path after: aBlock\x0a\x09| end |\x0a\x09end := TagBrush fromJQuery: ('<script type=\x22application/x-beacon\x22 />' asJQuery) canvas: canvas.\x0a\x09self element parentNode insertBefore: end element reference: self element nextSibling.\x0a    self trap: path read: [ :model |\x0a    \x09Trapped loop: model between: self and: end do: aBlock.\x0a    ]",
messageSends: ["fromJQuery:canvas:", "asJQuery", "insertBefore:reference:", "parentNode", "element", "nextSibling", "trap:read:", "loop:between:and:do:"],
referencedClasses: ["TagBrush", "Trapped"]
}),
smalltalk.TagBrush);

});
