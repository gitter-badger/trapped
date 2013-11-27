define("gh_herby_trapped/Trapped-Frontend", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Frontend');
smalltalk.packages["Trapped-Frontend"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('TrappedDataCarrier', smalltalk.Object, ['target', 'model', 'chain'], 'Trapped-Frontend');
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
selector: "modifyTarget",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._target())._modify_((function(){
return smalltalk.withContext(function($ctx2) {
return self._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"modifyTarget",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "modifyTarget\x0a\x09self target modify: [ self value ]",
messageSends: ["modify:", "target", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "modifyTargetByPerforming:",
category: 'action',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._target())._modify_((function(m){
return smalltalk.withContext(function($ctx2) {
return _st(m)._perform_(aString);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"modifyTargetByPerforming:",{aString:aString},smalltalk.TrappedDataCarrier)})},
args: ["aString"],
source: "modifyTargetByPerforming: aString\x0a\x09self target modify: [ :m | m perform: aString ]",
messageSends: ["modify:", "target", "perform:"],
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
selector: "toTargetAttr:",
category: 'action',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(self._target())._asJQuery();
$3=self._value();
$ctx1.sendIdx["value"]=1;
if(($receiver = $3) == nil || $receiver == null){
$2=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})});
} else {
var o;
o=$receiver;
$2=_st(o)._value();
};
_st($1)._attr_put_(aString,$2);
return self}, function($ctx1) {$ctx1.fill(self,"toTargetAttr:",{aString:aString},smalltalk.TrappedDataCarrier)})},
args: ["aString"],
source: "toTargetAttr: aString\x0a\x09self target asJQuery attr: aString put: (self value ifNotNil: [ :o | o value ] ifNil: [[]])",
messageSends: ["attr:put:", "asJQuery", "target", "ifNotNil:ifNil:", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetContents",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._target())._contents_(self._value());
return self}, function($ctx1) {$ctx1.fill(self,"toTargetContents",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "toTargetContents\x0a\x09self target contents: self value",
messageSends: ["contents:", "target", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetValue",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(self._target())._asJQuery();
$3=self._value();
$ctx1.sendIdx["value"]=1;
if(($receiver = $3) == nil || $receiver == null){
$2=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})});
} else {
var o;
o=$receiver;
$2=_st(o)._value();
};
_st($1)._val_($2);
return self}, function($ctx1) {$ctx1.fill(self,"toTargetValue",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "toTargetValue\x0a\x09self target asJQuery val: (self value ifNotNil: [ :o | o value ] ifNil: [[]])",
messageSends: ["val:", "asJQuery", "target", "ifNotNil:ifNil:", "value"],
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
$1=_st(_st(toViewCarrier)._value()).__eq(true);
if(smalltalk.assert($1)){
_st(_st(toViewCarrier)._copy())._proceed();
};
return self}, function($ctx1) {$ctx1.fill(self,"forSnapshot:andBrush:",{aSnapshot:aSnapshot,aTagBrush:aTagBrush,toViewCarrier:toViewCarrier,toModelCarrier:toModelCarrier},smalltalk.TrappedProcessingChain)})},
args: ["aSnapshot", "aTagBrush"],
source: "forSnapshot: aSnapshot andBrush: aTagBrush\x0a\x09| toViewCarrier toModelCarrier |\x0a\x09toViewCarrier := TrappedDataCarrierToView on: self target: aTagBrush.\x0a\x09toModelCarrier := TrappedDataCarrierToModel on: self target: aSnapshot.\x0a\x09processors do: [ :each | each installToView: toViewCarrier toModel: toModelCarrier ].\x0a\x09toViewCarrier value = true ifTrue: [ toViewCarrier copy proceed ]",
messageSends: ["on:target:", "do:", "installToView:toModel:", "ifTrue:", "=", "value", "proceed", "copy"],
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
$1=_st(anArray)._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isExpectingModelData();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
if(($receiver = $1) == nil || $receiver == null){
_st(anArray)._add_(self._dataTerminator());
} else {
_st(anArray)._addFirst_(self._blackboardReaderWriter());
};
$3=self._new();
_st($3)._processors_(anArray);
$4=_st($3)._yourself();
$2=$4;
return $2;
}, function($ctx1) {$ctx1.fill(self,"new:",{anArray:anArray},smalltalk.TrappedProcessingChain.klass)})},
args: ["anArray"],
source: "new: anArray\x0a\x09(anArray detect: [ :each | each isExpectingModelData ] ifNone: [ nil ])\x0a\x09\x09ifNil: [ anArray add: self dataTerminator ]\x0a\x09\x09ifNotNil: [ anArray addFirst: self blackboardReaderWriter ].\x0a\x09^self new\x0a\x09\x09processors: anArray;\x0a\x09\x09yourself",
messageSends: ["ifNil:ifNotNil:", "detect:ifNone:", "isExpectingModelData", "add:", "dataTerminator", "addFirst:", "blackboardReaderWriter", "processors:", "new", "yourself"],
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
var $2,$3,$1;
$1=self._new_(_st(_st(anArray)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return ["contents"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})})))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(each)._isString();
if(smalltalk.assert($2)){
return _st($TrappedProcessor())._perform_(each);
} else {
var selector,args;
selector="";
selector;
args=[];
args;
_st(each)._withIndexDo_((function(element,index){
return smalltalk.withContext(function($ctx3) {
$3=_st(index)._odd();
if(smalltalk.assert($3)){
selector=_st(selector).__comma(element);
$ctx3.sendIdx[","]=1;
return selector;
} else {
selector=_st(selector).__comma(":");
selector;
return _st(args)._add_(element);
};
}, function($ctx3) {$ctx3.fillBlock({element:element,index:index},$ctx2,5)})}));
return _st($TrappedProcessor())._perform_withArguments_(selector,args);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)})})));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFromProcessorSpecs:",{anArray:anArray},smalltalk.TrappedProcessingChain.klass)})},
args: ["anArray"],
source: "newFromProcessorSpecs: anArray\x0a\x09^self new: ((anArray ifEmpty: [ #(contents) ]) collect: [ :each | each isString\x0a\x09\x09ifTrue: [ TrappedProcessor perform: each ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09| selector args |\x0a\x09\x09\x09selector := ''.\x0a\x09\x09\x09args := #().\x0a\x09\x09\x09each withIndexDo: [ :element :index | index odd\x0a\x09\x09\x09\x09ifTrue: [ selector := selector, element ]\x0a\x09\x09\x09\x09ifFalse: [ selector := selector, ':'. args add: element ] ].\x0a\x09\x09\x09TrappedProcessor perform: selector withArguments: args ] ])",
messageSends: ["new:", "collect:", "ifEmpty:", "ifTrue:ifFalse:", "isString", "perform:", "withIndexDo:", "odd", ",", "add:", "perform:withArguments:"],
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

smalltalk.addMethod(
smalltalk.method({
selector: "guard:",
category: 'factory',
fn: function (aString){
var self=this;
function $TrappedProcessorGuard(){return smalltalk.TrappedProcessorGuard||(typeof TrappedProcessorGuard=="undefined"?nil:TrappedProcessorGuard)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorGuard())._new_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"guard:",{aString:aString},smalltalk.TrappedProcessor.klass)})},
args: ["aString"],
source: "guard: aString\x0a\x09^TrappedProcessorGuard new: aString",
messageSends: ["new:"],
referencedClasses: ["TrappedProcessorGuard"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inputChecked",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorInputChecked(){return smalltalk.TrappedProcessorInputChecked||(typeof TrappedProcessorInputChecked=="undefined"?nil:TrappedProcessorInputChecked)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorInputChecked())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputChecked",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "inputChecked\x0a\x09^TrappedProcessorInputChecked new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorInputChecked"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inputValue",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorInputValue(){return smalltalk.TrappedProcessorInputValue||(typeof TrappedProcessorInputValue=="undefined"?nil:TrappedProcessorInputValue)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorInputValue())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputValue",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "inputValue\x0a\x09^TrappedProcessorInputValue new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorInputValue"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "signal:",
category: 'factory',
fn: function (aString){
var self=this;
function $TrappedProcessorSignal(){return smalltalk.TrappedProcessorSignal||(typeof TrappedProcessorSignal=="undefined"?nil:TrappedProcessorSignal)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorSignal())._new_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},smalltalk.TrappedProcessor.klass)})},
args: ["aString"],
source: "signal: aString\x0a\x09^TrappedProcessorSignal new: aString",
messageSends: ["new:"],
referencedClasses: ["TrappedProcessorSignal"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "whenClicked",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorWhenClicked(){return smalltalk.TrappedProcessorWhenClicked||(typeof TrappedProcessorWhenClicked=="undefined"?nil:TrappedProcessorWhenClicked)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorWhenClicked())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"whenClicked",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "whenClicked\x0a\x09^TrappedProcessorWhenClicked new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorWhenClicked"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "whenSubmitted",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorWhenSubmitted(){return smalltalk.TrappedProcessorWhenSubmitted||(typeof TrappedProcessorWhenSubmitted=="undefined"?nil:TrappedProcessorWhenSubmitted)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorWhenSubmitted())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"whenSubmitted",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "whenSubmitted\x0a\x09^TrappedProcessorWhenSubmitted new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorWhenSubmitted"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "widget:",
category: 'factory',
fn: function (aString){
var self=this;
function $TrappedProcessorWidget(){return smalltalk.TrappedProcessorWidget||(typeof TrappedProcessorWidget=="undefined"?nil:TrappedProcessorWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorWidget())._new_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widget:",{aString:aString},smalltalk.TrappedProcessor.klass)})},
args: ["aString"],
source: "widget: aString\x0a\x09^TrappedProcessorWidget new: aString",
messageSends: ["new:"],
referencedClasses: ["TrappedProcessorWidget"]
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



smalltalk.addClass('TrappedProcessorInputChecked', smalltalk.TrappedDataExpectingProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorInputChecked.comment="I bind to checkbox checked attribute.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var brush;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
brush=_st(aDataCarrier)._target();
_st(brush)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(anotherDataCarrier)._copy();
_st($1)._value_(_st(_st(_st(brush)._asJQuery())._attr_("checked"))._notNil());
$2=_st($1)._proceed();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,brush:brush},smalltalk.TrappedProcessorInputChecked)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| brush |\x0a\x09brush := aDataCarrier target.\x0a\x09brush onChange: [ anotherDataCarrier copy value: (brush asJQuery attr: 'checked') notNil; proceed ]",
messageSends: ["target", "onChange:", "value:", "copy", "notNil", "attr:", "asJQuery", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputChecked);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetAttr_("checked");
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorInputChecked)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetAttr: 'checked'",
messageSends: ["toTargetAttr:"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputChecked);



smalltalk.addClass('TrappedProcessorInputValue', smalltalk.TrappedDataExpectingProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorInputValue.comment="I bind to input value.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var brush;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
brush=_st(aDataCarrier)._target();
_st(brush)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(anotherDataCarrier)._copy();
_st($1)._value_(_st(_st(brush)._asJQuery())._val());
$2=_st($1)._proceed();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,brush:brush},smalltalk.TrappedProcessorInputValue)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| brush |\x0a\x09brush := aDataCarrier target.\x0a\x09brush onChange: [ anotherDataCarrier copy value: brush asJQuery val; proceed ]",
messageSends: ["target", "onChange:", "value:", "copy", "val", "asJQuery", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputValue);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetValue();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorInputValue)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetValue",
messageSends: ["toTargetValue"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputValue);



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



smalltalk.addClass('TrappedProcessorGuard', smalltalk.TrappedProcessor, ['guardPath'], 'Trapped-Frontend');
smalltalk.TrappedProcessorGuard.comment="I am used to guard contants of the brush I am installed on.\x0a\x0aI observe guard expression in the model,\x0aand when it changes to nil or false, I delete the brush contents;\x0aon the other hand, when it changes to non-nil and non-false,\x0aI run the rest on the chain, which should be one-time\x0athat sets up the contents,";
smalltalk.addMethod(
smalltalk.method({
selector: "guardPath:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@guardPath"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"guardPath:",{anArray:anArray},smalltalk.TrappedProcessorGuard)})},
args: ["anArray"],
source: "guardPath: anArray\x0a\x09guardPath := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuard);

smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorGuard)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09\x22stop\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuard);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var frozen;
return smalltalk.withContext(function($ctx1) { 
frozen=_st(aDataCarrier)._copy();
$ctx1.sendIdx["copy"]=1;
_st(_st(frozen)._target())._trapGuard_contents_(self["@guardPath"],(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(frozen)._copy())._proceed();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier,frozen:frozen},smalltalk.TrappedProcessorGuard)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09| frozen |\x0a\x09frozen := aDataCarrier copy.\x0a\x09frozen target trapGuard: guardPath contents: [ frozen copy proceed ]",
messageSends: ["copy", "trapGuard:contents:", "target", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuard);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._guardPath_(anArray);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anArray:anArray},smalltalk.TrappedProcessorGuard.klass)})},
args: ["anArray"],
source: "new: anArray\x0a\x09^ self new\x0a\x09\x09guardPath: anArray;\x0a\x09\x09yourself",
messageSends: ["guardPath:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuard.klass);


smalltalk.addClass('TrappedProcessorSignal', smalltalk.TrappedProcessor, ['selector'], 'Trapped-Frontend');
smalltalk.TrappedProcessorSignal.comment="Instead of writing data directly to model,\x0aI instead modify it by sending a message specified when instantiating me.";
smalltalk.addMethod(
smalltalk.method({
selector: "selector:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selector"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"selector:",{aString:aString},smalltalk.TrappedProcessorSignal)})},
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorSignal);

smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._modifyTargetByPerforming_(self["@selector"]);
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorSignal)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier modifyTargetByPerforming: selector",
messageSends: ["modifyTargetByPerforming:"],
referencedClasses: []
}),
smalltalk.TrappedProcessorSignal);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorSignal)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09\x22stop\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorSignal);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._selector_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aString:aString},smalltalk.TrappedProcessorSignal.klass)})},
args: ["aString"],
source: "new: aString\x0a\x09^self new\x0a\x09\x09selector: aString;\x0a\x09\x09yourself",
messageSends: ["selector:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedProcessorSignal.klass);


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



smalltalk.addClass('TrappedProcessorWhenClicked', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorWhenClicked.comment="I bind to an element and send true to blackboard when clicked.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aDataCarrier)._target())._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(anotherDataCarrier)._copy())._proceed();
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier},smalltalk.TrappedProcessorWhenClicked)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09aDataCarrier target onClick: [ anotherDataCarrier copy proceed. false ]",
messageSends: ["onClick:", "target", "proceed", "copy"],
referencedClasses: []
}),
smalltalk.TrappedProcessorWhenClicked);



smalltalk.addClass('TrappedProcessorWhenSubmitted', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorWhenSubmitted.comment="I bind to a form and send true to blackboard when submitted.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aDataCarrier)._target())._onSubmit_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(anotherDataCarrier)._copy())._proceed();
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier},smalltalk.TrappedProcessorWhenSubmitted)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09aDataCarrier target onSubmit: [ anotherDataCarrier copy proceed. false ]",
messageSends: ["onSubmit:", "target", "proceed", "copy"],
referencedClasses: []
}),
smalltalk.TrappedProcessorWhenSubmitted);



smalltalk.addClass('TrappedProcessorWidget', smalltalk.TrappedProcessor, ['viewName'], 'Trapped-Frontend');
smalltalk.TrappedProcessorWidget.comment="I insert a widget instance of the class specified when creating me.";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(aDataCarrier)._target())._with_(_st(_st(_st($Smalltalk())._current())._at_(self["@viewName"]))._new());
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorWidget)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier target with: (Smalltalk current at: viewName) new",
messageSends: ["with:", "target", "new", "at:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.TrappedProcessorWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "viewName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@viewName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"viewName:",{aString:aString},smalltalk.TrappedProcessorWidget)})},
args: ["aString"],
source: "viewName: aString\x0a\x09viewName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._viewName_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aString:aString},smalltalk.TrappedProcessorWidget.klass)})},
args: ["aString"],
source: "new: aString\x0a\x09^self new\x0a\x09\x09viewName: aString;\x0a\x09\x09yourself",
messageSends: ["viewName:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedProcessorWidget.klass);


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
selector: "descend:snapshotDo:",
category: 'action',
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
selector: "injectToJQuery:",
category: 'action',
fn: function (aJQuery){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(aJQuery)._find_("[data-trap]"))._each_((function(index,elem){
var jq,parsed;
return smalltalk.withContext(function($ctx2) {
jq=_st(elem)._asJQuery();
jq;
parsed=_st($Trapped())._parse_(_st(jq)._attr_("data-trap"));
parsed;
_st(parsed)._do_((function(rule){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st($HTMLCanvas())._onJQuery_(jq))._root())._trap_processors_(_st(rule)._first(),_st(rule)._at_ifAbsent_((2),(function(){
return smalltalk.withContext(function($ctx4) {
return [];
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})})));
}, function($ctx3) {$ctx3.fillBlock({rule:rule},$ctx2,2)})}));
return _st(jq)._removeAttr_("data-trap");
}, function($ctx2) {$ctx2.fillBlock({index:index,elem:elem,jq:jq,parsed:parsed},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"injectToJQuery:",{aJQuery:aJQuery},smalltalk.Trapped)})},
args: ["aJQuery"],
source: "injectToJQuery: aJQuery\x0a\x09(aJQuery find: '[data-trap]') each: [ :index :elem |\x0a\x09\x09| jq parsed |\x0a\x09\x09jq := elem asJQuery.\x0a\x09\x09parsed := Trapped parse: (jq attr: 'data-trap').\x0a\x09\x09parsed do: [ :rule |\x0a\x09\x09\x09(HTMLCanvas onJQuery: jq) root trap: rule first processors: (rule at: 2 ifAbsent: [#()]) ].\x0a\x09\x09jq removeAttr: 'data-trap' ]",
messageSends: ["each:", "find:", "asJQuery", "parse:", "attr:", "do:", "trap:processors:", "root", "onJQuery:", "first", "at:ifAbsent:", "removeAttr:"],
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
self._injectToJQuery_("html"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.Trapped)})},
args: ["args"],
source: "start: args\x0a\x09args do: [ :each | self register: each ].\x0a\x09self injectToJQuery: 'html' asJQuery",
messageSends: ["do:", "register:", "injectToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.Trapped);


smalltalk.addMethod(
smalltalk.method({
selector: "envelope:loop:before:tag:do:",
category: 'private',
fn: function (envelope,model,endjq,aSymbol,aBlock){
var self=this;
var envjq;
return smalltalk.withContext(function($ctx1) { 
envjq=_st(envelope)._asJQuery();
_st(model)._withIndexDo_((function(item,i){
return smalltalk.withContext(function($ctx2) {
_st(envelope)._with_((function(html){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._perform_(aSymbol))._trap_read_([i],aBlock);
}, function($ctx3) {$ctx3.fillBlock({html:html},$ctx2,2)})}));
return _st(_st(_st(envjq)._children())._detach())._insertBefore_(endjq);
}, function($ctx2) {$ctx2.fillBlock({item:item,i:i},$ctx1,1)})}));
_st(envjq)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"envelope:loop:before:tag:do:",{envelope:envelope,model:model,endjq:endjq,aSymbol:aSymbol,aBlock:aBlock,envjq:envjq},smalltalk.Trapped.klass)})},
args: ["envelope", "model", "endjq", "aSymbol", "aBlock"],
source: "envelope: envelope loop: model before: endjq tag: aSymbol do: aBlock\x0a   \x09| envjq |\x0a    envjq := envelope asJQuery.\x0a    model withIndexDo: [ :item :i |\x0a        envelope with: [ :html | (html perform: aSymbol) trap: {i} read: aBlock ].\x0a        envjq children detach insertBefore: endjq.\x0a    ].\x0a    envjq remove",
messageSends: ["asJQuery", "withIndexDo:", "with:", "trap:read:", "perform:", "insertBefore:", "detach", "children", "remove"],
referencedClasses: []
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loop:between:and:tag:do:",
category: 'private',
fn: function (model,start,end,aSymbol,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(start)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st($2)._nextUntil_(_st(end)._element());
_st($1)._remove();
_st(start)._with_((function(html){
return smalltalk.withContext(function($ctx2) {
if(($receiver = model) == nil || $receiver == null){
return model;
} else {
return self._envelope_loop_before_tag_do_(_st(html)._div(),model,_st(end)._asJQuery(),aSymbol,aBlock);
};
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loop:between:and:tag:do:",{model:model,start:start,end:end,aSymbol:aSymbol,aBlock:aBlock},smalltalk.Trapped.klass)})},
args: ["model", "start", "end", "aSymbol", "aBlock"],
source: "loop: model between: start and: end tag: aSymbol do: aBlock\x0a    (start asJQuery nextUntil: end element) remove.\x0a    start with: [ :html | model ifNotNil: [\x0a    \x09self envelope: html div loop: model before: end asJQuery tag: aSymbol do: aBlock\x0a\x09]]",
messageSends: ["remove", "nextUntil:", "asJQuery", "element", "with:", "ifNotNil:", "envelope:loop:before:tag:do:", "div"],
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
var $2,$3,$4,$5,$7,$6,$8,$9,$10,$1;
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
return _st(_st(inner)._first()).__eq("(");
$ctx6.sendIdx["="]=1;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)})}));
$ctx5.sendIdx["and:"]=1;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx5) {
inner=_st(inner)._allButFirst();
inner;
$5=stack;
$7=_st(stack)._last();
$ctx5.sendIdx["last"]=1;
$6=_st($7)._add_([]);
$ctx5.sendIdx["add:"]=2;
return _st($5)._add_($6);
$ctx5.sendIdx["add:"]=1;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
$ctx4.sendIdx["whileTrue:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx5) {
return _st(_st(inner)._notEmpty())._and_((function(){
return smalltalk.withContext(function($ctx6) {
$8=_st(inner)._last();
$ctx6.sendIdx["last"]=2;
return _st($8).__eq(")");
$ctx6.sendIdx["="]=2;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,8)})}));
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx5) {
inner=_st(inner)._allButLast();
inner;
close=_st(close).__plus((1));
return close;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,9)})}));
asNum=_st(_st(inner)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx5) {
return "NaN";
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,10)})})))._asNumber();
asNum;
$9=_st(asNum).__eq(asNum);
if(smalltalk.assert($9)){
$10=_st(stack)._last();
$ctx4.sendIdx["last"]=3;
_st($10)._add_(asNum);
$ctx4.sendIdx["add:"]=3;
} else {
_st(inner)._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(_st(stack)._last())._add_(inner);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,13)})}));
};
return _st(close)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(stack)._removeLast();
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,14)})}));
}, function($ctx4) {$ctx4.fillBlock({each:each,asNum:asNum,inner:inner,close:close},$ctx3,3)})}));
return result;
}, function($ctx3) {$ctx3.fillBlock({message:message,result:result,stack:stack,anArray:anArray},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({rule:rule},$ctx1,1)})}));
$ctx1.sendIdx["collect:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},smalltalk.Trapped.klass)})},
args: ["aString"],
source: "parse: aString\x0a\x09^ (aString tokenize: '.') collect: [ :rule |\x0a\x09\x09(rule tokenize: ':') collect: [ :message |\x0a\x09\x09\x09| result stack anArray |\x0a\x09\x09\x09anArray := message tokenize: ' '.\x0a\x09\x09\x09result := #().\x0a\x09\x09\x09stack := { result }.\x0a\x09\x09\x09anArray do: [ :each |\x0a    \x09\x09\x09| asNum inner close |\x0a\x09\x09\x09\x09close := 0.\x0a\x09\x09\x09\x09inner := each.\x0a\x09\x09\x09\x09[ inner notEmpty and: [ inner first = '(' ]] whileTrue: [ inner := inner allButFirst. stack add: (stack last add: #()) ].\x0a\x09\x09\x09\x09[ inner notEmpty and: [ inner last = ')' ]] whileTrue: [ inner := inner allButLast. close := close + 1 ].\x0a\x09\x09       \x09asNum := (inner ifEmpty: [ 'NaN' ]) asNumber.\x0a        \x09\x09asNum = asNum ifTrue: [ stack last add: asNum ] ifFalse: [\x0a\x09\x09\x09\x09\x09inner ifNotEmpty: [ stack last add: inner ] ].\x0a\x09\x09\x09\x09close timesRepeat: [ stack removeLast ] ].\x0a\x09\x09\x09result ] ]",
messageSends: ["collect:", "tokenize:", "do:", "whileTrue:", "and:", "notEmpty", "=", "first", "allButFirst", "add:", "last", "allButLast", "+", "asNumber", "ifEmpty:", "ifTrue:ifFalse:", "ifNotEmpty:", "timesRepeat:", "removeLast"],
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
selector: "trapIter:tag:do:",
category: '*Trapped-Frontend',
fn: function (path,aSymbol,aBlock){
var self=this;
var start,end;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
self._with_((function(html){
return smalltalk.withContext(function($ctx2) {
start=_st(html)._script();
$ctx2.sendIdx["script"]=1;
start;
end=_st(html)._script();
return end;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
_st(start)._trap_read_(path,(function(model){
return smalltalk.withContext(function($ctx2) {
return _st($Trapped())._loop_between_and_tag_do_(model,start,end,aSymbol,aBlock);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapIter:tag:do:",{path:path,aSymbol:aSymbol,aBlock:aBlock,start:start,end:end},smalltalk.HTMLCanvas)})},
args: ["path", "aSymbol", "aBlock"],
source: "trapIter: path tag: aSymbol do: aBlock\x0a\x09| start end |\x0a    self with: [ :html | start := html script. end := html script ].\x0a    start trap: path read: [ :model |\x0a    \x09Trapped loop: model between: start and: end tag: aSymbol do: aBlock.\x0a    ]",
messageSends: ["with:", "script", "trap:read:", "loop:between:and:tag:do:"],
referencedClasses: ["Trapped"]
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

});
