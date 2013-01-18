Smalltalk current createPackage: 'Trapped-Backend' properties: #{}!
Object subclass: #EavModel
	instanceVariableNames: 'getBlock putBlock'
	package: 'Trapped-Backend'!
!EavModel commentStamp!
External actor value model.!

!EavModel methodsFor: 'accessing'!

getBlock: aBlock

getBlock := aBlock
!

on: anObject
"Returns value of model applied on object"

^getBlock value: anObject
!

on: anObject put: anObject2
"Puts a value via model applied on object"

^putBlock value: anObject value: anObject2
!

putBlock: aBlock

putBlock := aBlock
! !

!EavModel methodsFor: 'initialization'!

initialize
	super initialize.
	getBlock := [ self error: 'No getter block.' ].
	putBlock := [ self error: 'No putter block.' ].
! !

Object subclass: #Isolator
	instanceVariableNames: 'root'
	package: 'Trapped-Backend'!

!Isolator methodsFor: 'accessing'!

root

^root
!

root: anObject

root := anObject
! !

!Isolator methodsFor: 'action'!

model: anEavModel modify: aBlock

| newValue |
newValue := aBlock value: (anEavModel on: self).
anEavModel on: self put: newValue deepCopy
!

model: anEavModel read: aBlock

aBlock value: (anEavModel on: self) deepCopy
! !

!Isolator class methodsFor: 'instance creation'!

on: anObject
^self new root: anObject
! !
