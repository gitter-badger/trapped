smalltalk.addPackage('Trapped-Frontend', {});
smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
}
}),
smalltalk.TrappedSingleton);


smalltalk.TrappedSingleton.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.send(self,"_new",[]);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
}
}),
smalltalk.TrappedSingleton.klass);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_start",[]);
return self}
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
"_byName_",
smalltalk.method({
selector: "byName:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self["@registry"],"_at_",[aString]);
return $1;
}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedSingleton);
self["@registry"]=smalltalk.HashedCollection._fromPairs_([]);
return self}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_name_",
smalltalk.method({
selector: "register:name:",
fn: function (aFly,aString){
var self=this;
smalltalk.send(self["@registry"],"_at_put_",[aString,aFly]);
return self}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
var $1,$2;
smalltalk.send(smalltalk.send("[data-trap]","_asJQuery",[]),"_each_",[(function(index,elem){
var trap;
var viewName;
var modelName;
var tokens;
var model;
var view;
trap=smalltalk.send(smalltalk.send(jQuery,"_value_",[elem]),"_attr_",["data-trap"]);
trap;
tokens=smalltalk.send(trap,"_tokenize_",[":"]);
tokens;
viewName=smalltalk.send(tokens,"_first",[]);
viewName;
modelName=smalltalk.send(tokens,"_second",[]);
modelName;
model=smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_byName_",[modelName]);
model;
$1=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_at_",[viewName]),"_new",[]);
smalltalk.send($1,"_startOn_",[elem]);
smalltalk.send($1,"_observe_",[model]);
$2=smalltalk.send($1,"_yourself",[]);
view=$2;
return view;
})]);
return self}
}),
smalltalk.Trapped);



smalltalk.addClass('TrappedFly', smalltalk.TrappedSingleton, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[]);
return $1;
}
}),
smalltalk.TrappedFly);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_register_name_",[self,smalltalk.send(self,"_name",[])]);
return self}
}),
smalltalk.TrappedFly);



smalltalk.addClass('TrappedView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_observe_",
smalltalk.method({
selector: "observe:",
fn: function (aFly){
var self=this;
return self}
}),
smalltalk.TrappedView);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(html,"_with_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[]),"__comma",[": contents"])]);
return self}
}),
smalltalk.TrappedView);

smalltalk.addMethod(
"_startOn_",
smalltalk.method({
selector: "startOn:",
fn: function (aHTMLElement){
var self=this;
var el;
el=smalltalk.send(jQuery,"_value_",[aHTMLElement]);
smalltalk.send(el,"_empty",[]);
smalltalk.send(self,"_appendToJQuery_",[el]);
return self}
}),
smalltalk.TrappedView);


