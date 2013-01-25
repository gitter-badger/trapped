smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_h2",[]),"_trapShow_",[["title"]]);
smalltalk.send(smalltalk.send(html,"_div",[]),"_trap_toggle_ifNotPresent_",[["items"],(function(){
smalltalk.send(smalltalk.send(html,"_p",[]),"_with_",[(function(){
smalltalk.send(smalltalk.send(html,"_span",[]),"_trapShow_",[[smalltalk.symbolFor("size")]]);
return smalltalk.send(html,"_with_",[" item(s)."]);
})]);
return smalltalk.send(smalltalk.send(html,"_p",[]),"_trapShow_",[[]]);
}),(function(){
return smalltalk.send(html,"_with_",["Loading ..."]);
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html h2 trapShow: #('title').\x0a    html div trap: #('items') toggle: [\x0a        html p with: [ html span trapShow: #(#size). html with: ' item(s).' ].\x0a\x09\x09html p trapShow: #()\x0a    ] ifNotPresent: [ html with: 'Loading ...' ]",
messageSends: ["trapShow:", "h2", "trap:toggle:ifNotPresent:", "with:", "span", "p", "div"],
referencedClasses: []
}),
smalltalk.AppView);



smalltalk.addClass('TrappedDumbDispatcher', smalltalk.TrappedDispatcher, ['queue'], 'Trapped-Demo');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (aTriplet){
var self=this;
smalltalk.send(self["@queue"],"_add_",[aTriplet]);
smalltalk.send(self,"_dirty_",[smalltalk.send(aTriplet,"_first",[])]);
return self},
args: ["aTriplet"],
source: "add: aTriplet\x0a\x09queue add: aTriplet.\x0a    self dirty: aTriplet first\x0a\x09",
messageSends: ["add:", "dirty:", "first"],
referencedClasses: []
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_clean",
smalltalk.method({
selector: "clean",
category: 'bookkeeping',
fn: function (){
var self=this;
self["@queue"]=smalltalk.send(self["@queue"],"_select_",[(function(each){
return smalltalk.send(smalltalk.send(each,"_third",[]),"_notNil",[]);
})]);
return self},
args: [],
source: "clean\x0a\x09queue := queue select: [ :each | each third notNil ]",
messageSends: ["select:", "notNil", "third"],
referencedClasses: []
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumeration',
fn: function (aBlock){
var self=this;
smalltalk.send(self["@queue"],"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09queue do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
self["@queue"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09queue := OrderedCollection new",
messageSends: ["new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TrappedDumbDispatcher);



smalltalk.addClass('TrappedPlainModel', smalltalk.TrappedModelWrapper, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedModelWrapper);
smalltalk.send(self,"_dispatcher_",[smalltalk.send((smalltalk.TrappedDumbDispatcher || TrappedDumbDispatcher),"_new",[])]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self dispatcher: TrappedDumbDispatcher new",
messageSends: ["initialize", "dispatcher:", "new"],
referencedClasses: ["TrappedDumbDispatcher"]
}),
smalltalk.TrappedPlainModel);

smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
var newValue;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[smalltalk.send(self,"_payload",[])])]);
smalltalk.send((function(){
return smalltalk.send(eavModel,"_on_put_",[smalltalk.send(self,"_payload",[]),newValue]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self},
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a    | newValue eavModel |\x0a    eavModel := path asEavModel.\x0a    newValue := aBlock value: (eavModel on: self payload).\x0a    [ eavModel on: self payload put: newValue ] ensure: [ self dispatcher changed: path ]\x0a",
messageSends: ["asEavModel", "value:", "on:", "payload", "ensure:", "changed:", "dispatcher", "on:put:"],
referencedClasses: []
}),
smalltalk.TrappedPlainModel);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[smalltalk.send(self,"_payload",[])])]);
return self},
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a    | eavModel |\x0a    eavModel := path asEavModel.\x0a    aBlock value: (eavModel on: self payload)\x0a",
messageSends: ["asEavModel", "value:", "on:", "payload"],
referencedClasses: []
}),
smalltalk.TrappedPlainModel);



smalltalk.addClass('App', smalltalk.TrappedPlainModel, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedPlainModel);
smalltalk.send(self,"_payload_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("title","__minus_gt",["To-Do List"])])]);
smalltalk.send((function(){
smalltalk.send(smalltalk.send(self,"_payload",[]),"_at_put_",["items",["hello", "world"]]);
return smalltalk.send(self,"_payload_",[smalltalk.send(self,"_payload",[])]);
}),"_valueWithTimeout_",[(2000)]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self payload: #{'title' -> 'To-Do List'}.\x0a    [ self payload at: 'items' put: #('hello' 'world'). self payload: self payload ] valueWithTimeout: 2000\x0a",
messageSends: ["initialize", "payload:", "->", "valueWithTimeout:", "at:put:", "payload"],
referencedClasses: []
}),
smalltalk.App);



