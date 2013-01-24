smalltalk.addPackage('Trapped-Backend', {});
smalltalk.addClass('EavModel', smalltalk.Object, ['getBlock', 'putBlock'], 'Trapped-Backend');
smalltalk.EavModel.comment="External actor value model."
smalltalk.addMethod(
"_getBlock_",
smalltalk.method({
selector: "getBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
self["@getBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "getBlock: aBlock\x0a\x0agetBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@getBlock"]=(function(){
return smalltalk.send(self,"_error_",["No getter block."]);
});
self["@putBlock"]=(function(){
return smalltalk.send(self,"_error_",["No putter block."]);
});
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09getBlock := [ self error: 'No getter block.' ].\x0a\x09putBlock := [ self error: 'No putter block.' ].",
messageSends: ["initialize", "error:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'accessing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self["@getBlock"],"_value_",[anObject]);
return $1;
},
args: ["anObject"],
source: "on: anObject\x0a\x22Returns value of model applied on object\x22\x0a\x0a^getBlock value: anObject",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_put_",
smalltalk.method({
selector: "on:put:",
category: 'accessing',
fn: function (anObject,anObject2){
var self=this;
var $1;
$1=smalltalk.send(self["@putBlock"],"_value_value_",[anObject,anObject2]);
return $1;
},
args: ["anObject", "anObject2"],
source: "on: anObject put: anObject2\x0a\x22Puts a value via model applied on object\x22\x0a\x0a^putBlock value: anObject value: anObject2",
messageSends: ["value:value:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_putBlock_",
smalltalk.method({
selector: "putBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
self["@putBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "putBlock: aBlock\x0a\x0aputBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.EavModel);



smalltalk.addClass('Isolator', smalltalk.Object, ['root'], 'Trapped-Backend');
smalltalk.addMethod(
"_model_modify_",
smalltalk.method({
selector: "model:modify:",
category: 'action',
fn: function (anEavModel,aBlock){
var self=this;
var newValue;
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(anEavModel,"_on_",[self])]);
smalltalk.send(anEavModel,"_on_put_",[self,smalltalk.send(newValue,"_deepCopy",[])]);
return self},
args: ["anEavModel", "aBlock"],
source: "model: anEavModel modify: aBlock\x0a\x0a| newValue |\x0anewValue := aBlock value: (anEavModel on: self).\x0aanEavModel on: self put: newValue deepCopy\x0a",
messageSends: ["value:", "on:", "on:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_model_read_",
smalltalk.method({
selector: "model:read:",
category: 'action',
fn: function (anEavModel,aBlock){
var self=this;
smalltalk.send(aBlock,"_value_",[smalltalk.send(smalltalk.send(anEavModel,"_on_",[self]),"_deepCopy",[])]);
return self},
args: ["anEavModel", "aBlock"],
source: "model: anEavModel read: aBlock\x0a\x0aaBlock value: (anEavModel on: self) deepCopy",
messageSends: ["value:", "deepCopy", "on:"],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return self["@root"];
},
args: [],
source: "root\x0a\x0a^root\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root_",
smalltalk.method({
selector: "root:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@root"]=anObject;
return self},
args: ["anObject"],
source: "root: anObject\x0a\x0aroot := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.Isolator);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_root_",[anObject]);
return $1;
},
args: ["anObject"],
source: "on: anObject\x0a^self new root: anObject",
messageSends: ["root:", "new"],
referencedClasses: []
}),
smalltalk.Isolator.klass);


smalltalk.addMethod(
"_asEavModel",
smalltalk.method({
selector: "asEavModel",
category: '*Trapped-Backend',
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
},
args: [],
source: "asEavModel\x0a    | model |\x0a    model := EavModel new.\x0a    model getBlock: [ :anObject |\x0a        self inject: anObject into: [ :soFar :segment |\x0a            soFar ifNotNil: [ segment reverseTrapAt: soFar ]]].\x0a    self isEmpty ifFalse: [\x0a        model putBlock: [ :anObject :value | | penultimate |\x0a            penultimate :=  self allButLast inject: anObject into: [ :soFar :segment |\x0a                soFar ifNotNil: [ segment reverseTrapAt: soFar ]].\x0a            self last reverseTrapAt: penultimate put: value ]].\x0a    ^model",
messageSends: ["new", "getBlock:", "inject:into:", "ifNotNil:", "reverseTrapAt:", "ifFalse:", "putBlock:", "allButLast", "reverseTrapAt:put:", "last", "isEmpty"],
referencedClasses: ["EavModel"]
}),
smalltalk.SequenceableCollection);

