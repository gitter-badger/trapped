define("gh_herby_trapped/Trapped-Processors", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "gh_herby_trapped/Trapped-Frontend"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Processors');
smalltalk.packages["Trapped-Processors"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('TrappedProcessorAttribute', smalltalk.TrappedDataExpectingProcessor, ['attrName'], 'Trapped-Processors');
smalltalk.TrappedProcessorAttribute.comment="I set the data into an attribute speciried when creating me.\x0aNo observing and sending back, atm.";
smalltalk.addMethod(
smalltalk.method({
selector: "attrName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attrName"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"attrName:",{aString:aString},smalltalk.TrappedProcessorAttribute)})},
args: ["aString"],
source: "attrName: aString\x0a\x09attrName := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorAttribute);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetAttr_(self["@attrName"]);
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorAttribute)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetAttr: attrName",
messageSends: ["toTargetAttr:"],
referencedClasses: []
}),
smalltalk.TrappedProcessorAttribute);


smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._attrName_(aString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aString:aString},smalltalk.TrappedProcessorAttribute.klass)})},
args: ["aString"],
source: "new: aString\x0a\x09^self new\x0a\x09\x09attrName: aString;\x0a\x09\x09yourself",
messageSends: ["attrName:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedProcessorAttribute.klass);


smalltalk.addClass('TrappedProcessorDataAdhoc', smalltalk.TrappedDataExpectingProcessor, ['toViewBlock'], 'Trapped-Processors');
smalltalk.TrappedProcessorDataAdhoc.comment="I put data into target via contents: in toView:";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@toViewBlock"])._value_(aDataCarrier);
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorDataAdhoc)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09toViewBlock value: aDataCarrier",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.TrappedProcessorDataAdhoc);

smalltalk.addMethod(
smalltalk.method({
selector: "toViewBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@toViewBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"toViewBlock:",{aBlock:aBlock},smalltalk.TrappedProcessorDataAdhoc)})},
args: ["aBlock"],
source: "toViewBlock: aBlock\x0a\x09toViewBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorDataAdhoc);


smalltalk.addMethod(
smalltalk.method({
selector: "newToView:",
category: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._toViewBlock_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newToView:",{aBlock:aBlock},smalltalk.TrappedProcessorDataAdhoc.klass)})},
args: ["aBlock"],
source: "newToView: aBlock\x0a\x09^self new\x0a\x09\x09toViewBlock: aBlock;\x0a\x09\x09yourself",
messageSends: ["toViewBlock:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedProcessorDataAdhoc.klass);


smalltalk.addClass('TrappedProcessorDescend', smalltalk.TrappedProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorDescend.comment="I intepret data-trap in descendants of my brush.";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Trapped())._current())._injectToChildren_(_st(_st(aDataCarrier)._target())._element());
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorDescend)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09Trapped current injectToChildren: aDataCarrier target element",
messageSends: ["injectToChildren:", "current", "element", "target"],
referencedClasses: ["Trapped"]
}),
smalltalk.TrappedProcessorDescend);



smalltalk.addClass('TrappedProcessorGuardBase', smalltalk.TrappedProcessor, ['guardPath'], 'Trapped-Processors');
smalltalk.TrappedProcessorGuardBase.comment="I serve as base class for brush-guarding processors.\x0a\x0aI cover instantiation and subclasses have to provide\x0aimplementation of toVIew: that react appropriately to guard releasing.";
smalltalk.addMethod(
smalltalk.method({
selector: "guardPath:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@guardPath"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"guardPath:",{anArray:anArray},smalltalk.TrappedProcessorGuardBase)})},
args: ["anArray"],
source: "guardPath: anArray\x0a\x09guardPath := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuardBase);

smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorGuardBase)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09\x22stop\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuardBase);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorGuardBase)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuardBase);


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
}, function($ctx1) {$ctx1.fill(self,"new:",{anArray:anArray},smalltalk.TrappedProcessorGuardBase.klass)})},
args: ["anArray"],
source: "new: anArray\x0a\x09^ self new\x0a\x09\x09guardPath: anArray;\x0a\x09\x09yourself",
messageSends: ["guardPath:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuardBase.klass);


smalltalk.addClass('TrappedProcessorGuard', smalltalk.TrappedProcessorGuardBase, [], 'Trapped-Processors');
smalltalk.TrappedProcessorGuard.comment="I am used to guard contents filling process of the brush I am installed on.\x0a\x0aI observe guard expression in the model,\x0aand when it changes to nil or false, I delete the brush contents;\x0aon the other hand, when it changes to non-nil and non-false,\x0aI run the rest on the chain, which should be one-time\x0athat sets up the contents,";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var frozen,xon;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
frozen=_st(aDataCarrier)._copy();
$ctx1.sendIdx["copy"]=1;
xon=_st(frozen)._xontent();
_st(_st(frozen)._target())._trapGuard_contents_(self["@guardPath"],(function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(frozen)._copy();
_st($1)._target_(_st(html)._root());
_st($1)._xontent_(xon);
$2=_st($1)._proceed();
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier,frozen:frozen,xon:xon},smalltalk.TrappedProcessorGuard)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09| frozen xon |\x0a\x09frozen := aDataCarrier copy.\x0a\x09xon := frozen xontent.\x0a\x09frozen target trapGuard: guardPath contents: [ :html | frozen copy target: html root; xontent: xon; proceed ]",
messageSends: ["copy", "xontent", "trapGuard:contents:", "target", "target:", "root", "xontent:", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorGuard);



smalltalk.addClass('TrappedProcessorInputChecked', smalltalk.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorInputChecked.comment="I bind to checkbox checked state.";
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
_st($1)._value_(_st(_st(brush)._asJQuery())._prop_("checked"));
$2=_st($1)._proceed();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,brush:brush},smalltalk.TrappedProcessorInputChecked)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| brush |\x0a\x09brush := aDataCarrier target.\x0a\x09brush onChange: [ anotherDataCarrier copy value: (brush asJQuery prop: 'checked'); proceed ]",
messageSends: ["target", "onChange:", "value:", "copy", "prop:", "asJQuery", "proceed"],
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
_st(aDataCarrier)._toTargetProp_("checked");
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorInputChecked)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetProp: 'checked'",
messageSends: ["toTargetProp:"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputChecked);



smalltalk.addClass('TrappedProcessorInputValue', smalltalk.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
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



smalltalk.addClass('TrappedProcessorLoopBase', smalltalk.TrappedProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorLoopBase.comment="I serve as base class for looping processors.\x0a\x0aI cover instantiation and subclasses have to provide\x0aimplementation of toVIew: that loops appropriately.";
smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorLoopBase)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09\x22stop\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorLoopBase);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorLoopBase)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TrappedProcessorLoopBase);



smalltalk.addClass('TrappedProcessorLoopZ', smalltalk.TrappedProcessorLoopBase, [], 'Trapped-Processors');
smalltalk.TrappedProcessorLoopZ.comment="I am used to loop over data and repeat the contents filling process\x0aof the brush I am installed on.\x0a\x0aI observe the data in the model,\x0aand when it changes, I loop over it\x0aand run the rest of the processing chain\x0afor each element, putting the result _after_ my brush.\x0a\x0aMy brush itself should be as least visible as possible,\x0aas it only serve as a position flag (use for example\x0ascript type=application/x-beacon, noscript, ins or del).";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var frozen,xon;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
frozen=_st(aDataCarrier)._copy();
$ctx1.sendIdx["copy"]=1;
xon=_st(frozen)._xontent();
_st(_st(frozen)._target())._trapIter_after_([],(function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(frozen)._copy();
_st($1)._target_(_st(html)._root());
_st($1)._xontent_(xon);
$2=_st($1)._proceed();
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier,frozen:frozen,xon:xon},smalltalk.TrappedProcessorLoopZ)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09| frozen xon |\x0a\x09frozen := aDataCarrier copy.\x0a\x09xon := frozen xontent.\x0a\x09frozen target trapIter: #() after: [ :html | frozen copy target: html root; xontent: xon; proceed ]",
messageSends: ["copy", "xontent", "trapIter:after:", "target", "target:", "root", "xontent:", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorLoopZ);



smalltalk.addClass('TrappedProcessorOptionValue', smalltalk.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorOptionValue.comment="I set the option value.\x0a\x0aAdditionally, when changed (by toView:),\x0aI ping closest <select> with 'trappedselectreplay' event.";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetValue();
_st(_st(_st(_st(aDataCarrier)._target())._asJQuery())._closest_("select"))._trigger_("trappedselectreplay");
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorOptionValue)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetValue.\x0a\x09(aDataCarrier target asJQuery closest: 'select')\x0a\x09\x09trigger: 'trappedselectreplay'",
messageSends: ["toTargetValue", "trigger:", "closest:", "asJQuery", "target"],
referencedClasses: []
}),
smalltalk.TrappedProcessorOptionValue);



smalltalk.addClass('TrappedProcessorReplace', smalltalk.TrappedProcessor, ['left', 'right'], 'Trapped-Processors');
smalltalk.TrappedProcessorReplace.comment="I convert data to string representation and do a regex replace.\x0aI get two parameters, in toView:, first is replaced with second,\x0aand in toModel:, the second is replaced with first.\x0a\x0aI remove leading '^' and ending '$' from the string used as replacement,\x0aso it safe to replace ^to with ^To, for example.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "left:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@left"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aString:aString},smalltalk.TrappedProcessorReplace)})},
args: ["aString"],
source: "left: aString\x0a\x09left := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorReplace);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@right"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"right:",{aString:aString},smalltalk.TrappedProcessorReplace)})},
args: ["aString"],
source: "right: aString\x0a\x09right := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessorReplace);

smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var replacement,old;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@left"])._replace_with_("^\x5c^","");
$ctx1.sendIdx["replace:with:"]=2;
replacement=_st($1)._replace_with_("\x5c$$","");
$ctx1.sendIdx["replace:with:"]=1;
old=_st(_st(aDataCarrier)._value())._asString();
_st(aDataCarrier)._value_whenDifferentFrom_(_st(old)._replace_with_(self["@right"],replacement),old);
$2=_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier,replacement:replacement,old:old},smalltalk.TrappedProcessorReplace)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09| replacement old |\x0a\x09replacement := (left replace: '^\x5c^' with: '') replace: '\x5c$$' with: ''.\x0a\x09old := aDataCarrier value asString.\x0a\x09aDataCarrier\x0a\x09\x09value: (old replace: right with: replacement) whenDifferentFrom: old;\x0a\x09\x09proceed",
messageSends: ["replace:with:", "asString", "value", "value:whenDifferentFrom:", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorReplace);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var replacement,old;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@right"])._replace_with_("^\x5c^","");
$ctx1.sendIdx["replace:with:"]=2;
replacement=_st($1)._replace_with_("\x5c$$","");
$ctx1.sendIdx["replace:with:"]=1;
old=_st(_st(aDataCarrier)._value())._asString();
_st(aDataCarrier)._value_whenDifferentFrom_(_st(old)._replace_with_(self["@left"],replacement),old);
$2=_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier,replacement:replacement,old:old},smalltalk.TrappedProcessorReplace)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09| replacement old |\x0a\x09replacement := (right replace: '^\x5c^' with: '') replace: '\x5c$$' with: ''.\x0a\x09old := aDataCarrier value asString.\x0a\x09aDataCarrier\x0a\x09\x09value: (old replace: left with: replacement) whenDifferentFrom: old;\x0a\x09\x09proceed",
messageSends: ["replace:with:", "asString", "value", "value:whenDifferentFrom:", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorReplace);


smalltalk.addMethod(
smalltalk.method({
selector: "new:with:",
category: 'instance creation',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=self._new();
$3=$2;
$4=_st(aString)._asString();
$ctx1.sendIdx["asString"]=1;
_st($3)._left_($4);
_st($2)._right_(_st(anotherString)._asString());
$5=_st($2)._yourself();
$1=$5;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:with:",{aString:aString,anotherString:anotherString},smalltalk.TrappedProcessorReplace.klass)})},
args: ["aString", "anotherString"],
source: "new: aString with: anotherString\x0a\x09^ self new\x0a\x09\x09left: aString asString;\x0a\x09\x09right: anotherString asString;\x0a\x09\x09yourself",
messageSends: ["left:", "new", "asString", "right:", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedProcessorReplace.klass);


smalltalk.addClass('TrappedProcessorSelectValue', smalltalk.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorSelectValue.comment="I bind to select value.\x0a\x0aWhen changed (by toView: or by user),\x0aI remember the selected set.\x0a\x0aWhen pinged by 'trappedselectreplay',\x0aI set the remembered value.\x0a\x0aThis allows to have select-option groups\x0awith later setting of option values\x0a(if those are set via related processor 'optionValue',\x0awhich pings me with 'trappedselectreplay').";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var jq,val;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
jq=_st(_st(aDataCarrier)._target())._asJQuery();
val=_st(jq)._val();
$ctx1.sendIdx["val"]=1;
$1=jq;
_st($1)._data_("trapped.saved.val");
$ctx1.sendIdx["data:"]=1;
_st($1)._on_bind_("change",(function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(anotherDataCarrier)._copy();
_st($2)._value_(_st(jq)._val());
$3=_st($2)._proceed();
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["on:bind:"]=1;
$4=_st($1)._on_bind_("trappedselectreplay",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(jq)._val_(_st(jq)._data_("trapped.saved.val"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,jq:jq,val:val},smalltalk.TrappedProcessorSelectValue)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| jq val |\x0a\x09jq := aDataCarrier target asJQuery.\x0a\x09val := jq val.\x0a\x09jq\x0a\x09\x09data: 'trapped.saved.val';\x0a\x09\x09on: 'change' bind: [ anotherDataCarrier copy value: jq val; proceed ];\x0a\x09\x09on: 'trappedselectreplay' bind: [ jq val: (jq data: 'trapped.saved.val') ]",
messageSends: ["asJQuery", "target", "val", "data:", "on:bind:", "value:", "copy", "proceed", "val:"],
referencedClasses: []
}),
smalltalk.TrappedProcessorSelectValue);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetValue();
_st(_st(_st(aDataCarrier)._target())._asJQuery())._data_put_("trapped.saved.val",_st(aDataCarrier)._value());
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorSelectValue)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetValue.\x0a\x09aDataCarrier target asJQuery data: 'trapped.saved.val' put: aDataCarrier value",
messageSends: ["toTargetValue", "data:put:", "asJQuery", "target", "value"],
referencedClasses: []
}),
smalltalk.TrappedProcessorSelectValue);



smalltalk.addClass('TrappedProcessorSignal', smalltalk.TrappedProcessor, ['selector'], 'Trapped-Processors');
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


smalltalk.addClass('TrappedProcessorToBlackboard', smalltalk.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorToBlackboard.comment="I save the data to blackboard in toModel:, to position specified by path.";
smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aDataCarrier)._target())._modify_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aDataCarrier)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorToBlackboard)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier target modify: [ aDataCarrier value ]",
messageSends: ["modify:", "target", "value"],
referencedClasses: []
}),
smalltalk.TrappedProcessorToBlackboard);



smalltalk.addClass('TrappedProcessorUriComponentDecode', smalltalk.TrappedProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorUriComponentDecode.comment="I uriComponentDecode in toView:\x0aand encode in toModel:";
smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aDataCarrier)._value_(_st(_st(aDataCarrier)._value())._uriComponentEncoded());
$1=_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorUriComponentDecode)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier\x0a\x09\x09value: aDataCarrier value uriComponentEncoded;\x0a\x09\x09proceed",
messageSends: ["value:", "uriComponentEncoded", "value", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorUriComponentDecode);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aDataCarrier)._value_(_st(_st(aDataCarrier)._value())._uriComponentDecoded());
$1=_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorUriComponentDecode)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier\x0a\x09\x09value: aDataCarrier value uriComponentDecoded;\x0a\x09\x09proceed",
messageSends: ["value:", "uriComponentDecoded", "value", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorUriComponentDecode);



smalltalk.addClass('TrappedProcessorUriComponentEncode', smalltalk.TrappedProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorUriComponentEncode.comment="I uriComponentEncode in toView:\x0aand decode in toModel:";
smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aDataCarrier)._value_(_st(_st(aDataCarrier)._value())._uriComponentDecoded());
$1=_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorUriComponentEncode)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier\x0a\x09\x09value: aDataCarrier value uriComponentDecoded;\x0a\x09\x09proceed",
messageSends: ["value:", "uriComponentDecoded", "value", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorUriComponentEncode);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(aDataCarrier)._value_(_st(_st(aDataCarrier)._value())._uriComponentEncoded());
$1=_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorUriComponentEncode)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier\x0a\x09\x09value: aDataCarrier value uriComponentEncoded;\x0a\x09\x09proceed",
messageSends: ["value:", "uriComponentEncoded", "value", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorUriComponentEncode);



smalltalk.addClass('TrappedProcessorWhenClicked', smalltalk.TrappedProcessor, [], 'Trapped-Processors');
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



smalltalk.addClass('TrappedProcessorWhenSubmitted', smalltalk.TrappedProcessor, [], 'Trapped-Processors');
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



smalltalk.addClass('TrappedProcessorWidget', smalltalk.TrappedProcessor, ['viewName'], 'Trapped-Processors');
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


smalltalk.addClass('TrappedProcessorXontent', smalltalk.TrappedProcessor, [], 'Trapped-Processors');
smalltalk.TrappedProcessorXontent.comment="I am used to show xontent of the brush I am installed on\x0a(see jQuery plugin Xontent for details).\x0a\x0aI clone xontent of the brush, put it into HTML\x0aand interpret all contained data-trap attributes.";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aDataCarrier)._target())._asJQuery())._append_(_st(_st($Trapped())._current())._cloneAndInject_(_st(_st(aDataCarrier)._xontent())._get_((0))));
_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorXontent)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier target asJQuery append: (Trapped current cloneAndInject: (aDataCarrier xontent get: 0)).\x0a\x09aDataCarrier proceed",
messageSends: ["append:", "asJQuery", "target", "cloneAndInject:", "current", "get:", "xontent", "proceed"],
referencedClasses: ["Trapped"]
}),
smalltalk.TrappedProcessorXontent);


smalltalk.addMethod(
smalltalk.method({
selector: "modifyTarget",
category: '*Trapped-Processors',
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
category: '*Trapped-Processors',
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
selector: "primitive:",
category: '*Trapped-Processors',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return anObject === nil ? null : anObject.valueOf();
return self}, function($ctx1) {$ctx1.fill(self,"primitive:",{anObject:anObject},smalltalk.TrappedDataCarrier)})},
args: ["anObject"],
source: "primitive: anObject\x0a\x09<return anObject === nil ? null : anObject.valueOf()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetAttr:",
category: '*Trapped-Processors',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$4;
$1=self._falseAsNilValue();
if(($receiver = $1) == nil || $receiver == null){
$2=self._target();
$ctx1.sendIdx["target"]=1;
_st($2)._removeAt_(aString);
} else {
var value,bvalue;
bvalue=$receiver;
value=self._primitive_(bvalue);
value;
$3=self._target();
$5=_st(value).__eq(true);
if(smalltalk.assert($5)){
$4=aString;
} else {
$4=value;
};
_st($3)._at_put_(aString,$4);
};
return self}, function($ctx1) {$ctx1.fill(self,"toTargetAttr:",{aString:aString},smalltalk.TrappedDataCarrier)})},
args: ["aString"],
source: "toTargetAttr: aString\x0a\x09self falseAsNilValue\x0a\x09\x09ifNil: [ self target removeAt: aString ]\x0a\x09\x09ifNotNil: [ :bvalue |\x0a\x09\x09\x09| value |\x0a\x09\x09\x09value := self primitive: bvalue.\x0a\x09\x09\x09self target at: aString put: (value = true ifTrue: [ aString ] ifFalse: [ value ]) ]",
messageSends: ["ifNil:ifNotNil:", "falseAsNilValue", "removeAt:", "target", "primitive:", "at:put:", "ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetContents",
category: '*Trapped-Processors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._target())._contents_(self._primitive_(self._value()));
return self}, function($ctx1) {$ctx1.fill(self,"toTargetContents",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "toTargetContents\x0a\x09self target contents: (self primitive: self value)",
messageSends: ["contents:", "target", "primitive:", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetProp:",
category: '*Trapped-Processors',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._target())._element())._at_put_(aString,self._primitive_(self._value()));
return self}, function($ctx1) {$ctx1.fill(self,"toTargetProp:",{aString:aString},smalltalk.TrappedDataCarrier)})},
args: ["aString"],
source: "toTargetProp: aString\x0a\x09self target element at: aString put: (self primitive: self value)",
messageSends: ["at:put:", "element", "target", "primitive:", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetValue",
category: '*Trapped-Processors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._target())._asJQuery())._val_(self._primitive_(self._value()));
return self}, function($ctx1) {$ctx1.fill(self,"toTargetValue",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "toTargetValue\x0a\x09self target asJQuery val: (self primitive: self value)",
messageSends: ["val:", "asJQuery", "target", "primitive:", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "xontent",
category: '*Trapped-Processors',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._target())._asJQuery())._xontent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xontent",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "xontent\x0a\x09^self target asJQuery xontent",
messageSends: ["xontent", "asJQuery", "target"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "xontent:",
category: '*Trapped-Processors',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._target())._asJQuery())._xontent_data_("set",anObject);
return self}, function($ctx1) {$ctx1.fill(self,"xontent:",{anObject:anObject},smalltalk.TrappedDataCarrier)})},
args: ["anObject"],
source: "xontent: anObject\x0a\x09self target asJQuery xontent: 'set' data: anObject",
messageSends: ["xontent:data:", "asJQuery", "target"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "attr:",
category: '*Trapped-Processors',
fn: function (aString){
var self=this;
function $TrappedProcessorAttribute(){return smalltalk.TrappedProcessorAttribute||(typeof TrappedProcessorAttribute=="undefined"?nil:TrappedProcessorAttribute)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorAttribute())._new_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attr:",{aString:aString},smalltalk.TrappedProcessor.klass)})},
args: ["aString"],
source: "attr: aString\x0a\x09^TrappedProcessorAttribute new: aString",
messageSends: ["new:"],
referencedClasses: ["TrappedProcessorAttribute"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "dataToView:",
category: '*Trapped-Processors',
fn: function (aBlock){
var self=this;
function $TrappedProcessorDataAdhoc(){return smalltalk.TrappedProcessorDataAdhoc||(typeof TrappedProcessorDataAdhoc=="undefined"?nil:TrappedProcessorDataAdhoc)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorDataAdhoc())._newToView_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"dataToView:",{aBlock:aBlock},smalltalk.TrappedProcessor.klass)})},
args: ["aBlock"],
source: "dataToView: aBlock\x0a\x09^TrappedProcessorDataAdhoc newToView: aBlock",
messageSends: ["newToView:"],
referencedClasses: ["TrappedProcessorDataAdhoc"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "deuric",
category: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorUriComponentDecode(){return smalltalk.TrappedProcessorUriComponentDecode||(typeof TrappedProcessorUriComponentDecode=="undefined"?nil:TrappedProcessorUriComponentDecode)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorUriComponentDecode())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deuric",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "deuric\x0a\x09^TrappedProcessorUriComponentDecode new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorUriComponentDecode"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "guard:",
category: '*Trapped-Processors',
fn: function (anArray){
var self=this;
function $TrappedProcessorGuard(){return smalltalk.TrappedProcessorGuard||(typeof TrappedProcessorGuard=="undefined"?nil:TrappedProcessorGuard)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorGuard())._new_(anArray);
return $1;
}, function($ctx1) {$ctx1.fill(self,"guard:",{anArray:anArray},smalltalk.TrappedProcessor.klass)})},
args: ["anArray"],
source: "guard: anArray\x0a\x09^TrappedProcessorGuard new: anArray",
messageSends: ["new:"],
referencedClasses: ["TrappedProcessorGuard"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inputChecked",
category: '*Trapped-Processors',
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
category: '*Trapped-Processors',
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
selector: "loopZ",
category: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorLoopZ(){return smalltalk.TrappedProcessorLoopZ||(typeof TrappedProcessorLoopZ=="undefined"?nil:TrappedProcessorLoopZ)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorLoopZ())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"loopZ",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "loopZ\x0a\x09^TrappedProcessorLoopZ new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorLoopZ"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "optionValue",
category: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorOptionValue(){return smalltalk.TrappedProcessorOptionValue||(typeof TrappedProcessorOptionValue=="undefined"?nil:TrappedProcessorOptionValue)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorOptionValue())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"optionValue",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "optionValue\x0a\x09^TrappedProcessorOptionValue new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorOptionValue"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
category: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorDescend(){return smalltalk.TrappedProcessorDescend||(typeof TrappedProcessorDescend=="undefined"?nil:TrappedProcessorDescend)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorDescend())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "path\x0a\x09^TrappedProcessorDescend new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorDescend"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:with:",
category: '*Trapped-Processors',
fn: function (aString,anotherString){
var self=this;
function $TrappedProcessorReplace(){return smalltalk.TrappedProcessorReplace||(typeof TrappedProcessorReplace=="undefined"?nil:TrappedProcessorReplace)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorReplace())._new_with_(aString,anotherString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString},smalltalk.TrappedProcessor.klass)})},
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^TrappedProcessorReplace new: aString with: anotherString",
messageSends: ["new:with:"],
referencedClasses: ["TrappedProcessorReplace"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "selectValue",
category: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorSelectValue(){return smalltalk.TrappedProcessorSelectValue||(typeof TrappedProcessorSelectValue=="undefined"?nil:TrappedProcessorSelectValue)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorSelectValue())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectValue",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "selectValue\x0a\x09^TrappedProcessorSelectValue new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorSelectValue"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "signal:",
category: '*Trapped-Processors',
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
selector: "toBlackboard",
category: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorToBlackboard(){return smalltalk.TrappedProcessorToBlackboard||(typeof TrappedProcessorToBlackboard=="undefined"?nil:TrappedProcessorToBlackboard)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorToBlackboard())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"toBlackboard",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "toBlackboard\x0a\x09^TrappedProcessorToBlackboard new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorToBlackboard"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "uric",
category: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorUriComponentEncode(){return smalltalk.TrappedProcessorUriComponentEncode||(typeof TrappedProcessorUriComponentEncode=="undefined"?nil:TrappedProcessorUriComponentEncode)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorUriComponentEncode())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"uric",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "uric\x0a\x09^TrappedProcessorUriComponentEncode new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorUriComponentEncode"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "whenClicked",
category: '*Trapped-Processors',
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
category: '*Trapped-Processors',
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
category: '*Trapped-Processors',
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

smalltalk.addMethod(
smalltalk.method({
selector: "xontent",
category: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorXontent(){return smalltalk.TrappedProcessorXontent||(typeof TrappedProcessorXontent=="undefined"?nil:TrappedProcessorXontent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorXontent())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xontent",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "xontent\x0a\x09^TrappedProcessorXontent new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorXontent"]
}),
smalltalk.TrappedProcessor.klass);

});
