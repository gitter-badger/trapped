smalltalk.addPackage('Trapped-Backend', {});
smalltalk.addClass('EavModel', smalltalk.Object, ['getBlock', 'putBlock'], 'Trapped-Backend');
smalltalk.addMethod(
"_getBlock_",
smalltalk.method({
selector: "getBlock:",
fn: function (aBlock){
var self=this;
self["@getBlock"]=aBlock;
return self}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@getBlock"]=(function(){
return smalltalk.send(self,"_error_",["No getter block."]);
});
self["@putBlock"]=(function(){
return smalltalk.send(self,"_error_",["No putter block."]);
});
return self}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self["@getBlock"],"_value_",[anObject]);
return $1;
}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_put_",
smalltalk.method({
selector: "on:put:",
fn: function (anObject,anObject2){
var self=this;
var $1;
$1=smalltalk.send(self["@putBlock"],"_value_value_",[anObject,anObject2]);
return $1;
}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_putBlock_",
smalltalk.method({
selector: "putBlock:",
fn: function (aBlock){
var self=this;
self["@putBlock"]=aBlock;
return self}
}),
smalltalk.EavModel);



smalltalk.addClass('Isolator', smalltalk.Object, ['root'], 'Trapped-Backend');
smalltalk.addMethod(
"_model_modify_",
smalltalk.method({
selector: "model:modify:",
fn: function (anEavModel,aBlock){
var self=this;
var newValue;
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(anEavModel,"_on_",[self])]);
smalltalk.send(anEavModel,"_on_put_",[self,smalltalk.send(newValue,"_deepCopy",[])]);
return self}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_model_read_",
smalltalk.method({
selector: "model:read:",
fn: function (anEavModel,aBlock){
var self=this;
smalltalk.send(aBlock,"_value_",[smalltalk.send(smalltalk.send(anEavModel,"_on_",[self]),"_deepCopy",[])]);
return self}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return self["@root"];
}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root_",
smalltalk.method({
selector: "root:",
fn: function (anObject){
var self=this;
self["@root"]=anObject;
return self}
}),
smalltalk.Isolator);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_root_",[anObject]);
return $1;
}
}),
smalltalk.Isolator.klass);


smalltalk.addClass('TrappedDispatcher', smalltalk.Object, [], 'Trapped-Backend');
smalltalk.addMethod(
"_changed_",
smalltalk.method({
selector: "changed:",
fn: function (path){
var self=this;
var $1;
var needsToRun;
needsToRun=false;
smalltalk.send(self,"_do_",[(function(each){
var aPath;
var lesser;
aPath=smalltalk.send(each,"_second",[]);
aPath;
lesser=smalltalk.send(smalltalk.send(aPath,"_size",[]),"_min_",[smalltalk.send(path,"_size",[])]);
lesser;
$1=smalltalk.send(smalltalk.send(path,"_copyFrom_to_",[(1),lesser]),"__eq",[smalltalk.send(aPath,"_copyFrom_to_",[(1),lesser])]);
if(smalltalk.assert($1)){
smalltalk.send(each,"_at_put_",[(1),true]);
needsToRun=true;
return needsToRun;
};
})]);
smalltalk.send(self,"_dirty_",[needsToRun]);
return self}
}),
smalltalk.TrappedDispatcher);

smalltalk.addMethod(
"_dirty_",
smalltalk.method({
selector: "dirty:",
fn: function (aBoolean){
var self=this;
if(smalltalk.assert(aBoolean)){
smalltalk.send((function(){
return smalltalk.send(self,"_run",[]);
}),"_fork",[]);
};
return self}
}),
smalltalk.TrappedDispatcher);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
var $1;
var needsClean;
needsClean=false;
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(each,"_first",[]);
if(smalltalk.assert($1)){
return smalltalk.send((function(){
return smalltalk.send((function(){
return smalltalk.send(smalltalk.send(each,"_third",[]),"_value",[]);
}),"_ensure_",[(function(){
return smalltalk.send(each,"_at_put_",[(1),false]);
})]);
}),"_on_do_",[(smalltalk.TrappedUnwatch || TrappedUnwatch),(function(){
smalltalk.send(each,"_at_put_",[(3),nil]);
needsClean=true;
return needsClean;
})]);
};
})]);
if(smalltalk.assert(needsClean)){
smalltalk.send(self,"_clean",[]);
};
return self}
}),
smalltalk.TrappedDispatcher);



smalltalk.addClass('TrappedUnwatch', smalltalk.Error, [], 'Trapped-Backend');


smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return nil;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
smalltalk.send(self,"_error_",[smalltalk.send(smalltalk.send("Trapped cannot put at ","__comma",[smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[])]),"__comma",[" type key."])]);
return self}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asEavModel",
smalltalk.method({
selector: "asEavModel",
fn: function (){
var self=this;
var $1;
var model;
model=smalltalk.send((smalltalk.EavModel || EavModel),"_new",[]);
smalltalk.send(model,"_getBlock_",[(function(anObject){
return smalltalk.send(self,"_inject_into_",[anObject,(function(soFar,segment){
if(($receiver = soFar) == nil || $receiver == undefined){
return soFar;
} else {
return smalltalk.send(segment,"_reverseTrapAt_",[soFar]);
};
})]);
})]);
$1=smalltalk.send(self,"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(model,"_putBlock_",[(function(anObject,value){
var penultimate;
penultimate=smalltalk.send(smalltalk.send(self,"_allButLast",[]),"_inject_into_",[anObject,(function(soFar,segment){
if(($receiver = soFar) == nil || $receiver == undefined){
return soFar;
} else {
return smalltalk.send(segment,"_reverseTrapAt_",[soFar]);
};
})]);
penultimate;
return smalltalk.send(smalltalk.send(self,"_last",[]),"_reverseTrapAt_put_",[penultimate,value]);
})]);
};
return model;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_ifAbsent_",[self,(function(){
return nil;
})]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_put_",[self,value]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
var $1;
var $early={};
try {
$1=smalltalk.send((function(){
return smalltalk.send(anObject,"_perform_",[self]);
}),"_on_do_",[(smalltalk.MessageNotUnderstood || MessageNotUnderstood),(function(){
throw $early=[nil];
})]);
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_perform_withArguments_",[smalltalk.send(smalltalk.send(self,"__comma",[":"]),"_asSymbol",[]),[value]]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_ifAbsent_",[self,(function(){
return nil;
})]);
return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_put_",[self,value]);
return $1;
}
}),
smalltalk.Number);

