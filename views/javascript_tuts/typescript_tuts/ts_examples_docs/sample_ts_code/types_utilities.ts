/*1.**************  Partial<T> *****************/

/*
  * Partial will take one generic type and make it all properties 
  * from required to optional
  *
*/

interface motorbike {
    color:string,
    engineSize:number
}
let kawasaki:motorbike = {
  color:'green',
  engineSize:1200
}
//Partial will make all properties optional
let kawasakiSport:Partial<motorbike> = {
  engineSize:1000
}
let kawasakiCruizer:Partial<motorbike> = {
  color:'black'
}

/*2.**************  Required<T> *****************/

/*
  * Oposite to Partial will take one generic type and make it all properties 
  * from optional to required
  *
*/
interface classicMotorbike {
  color?:string,
  engineSize?:number,
  old:Boolean
}
let BSA:classicMotorbike = {
  old:true
}
//now convert all properties to mandatory;
let Triumph:Required<classicMotorbike> = {
  color:'blue',
  engineSize:865,
  old:false
}

/*3.**************  ReadOnly<T> *****************/

/*
  * Makes all propeties readonly so they can not be changed 
  *
*/
interface classicMotorbikeCollection {
  color:string,
  engineSize:number,
  old:Boolean
}

//now convert all properties to mandatory;
let Vincent: Readonly<classicMotorbikeCollection> = {
  color:'blue',
  engineSize:865,
  old:false
}

//Vincent.color:'green', //error cause we try to update

/*4.**************  Record<T,G> *****************/

/*
  * Record takes 2 generic types one for object Property, the other for type what property 
  * represent as Array, Object, string etc ...
  * Record are used for objects literals mainly
*/
interface Motorbikes {
  make:string,
  type:string,
}

const shoppingList:Record<string,Motorbikes> = {
  owner1:{
    make:'Honda',
    type:'sport',
  },
  owner2:{
    make:'Yamaha',
    type:'sport',
  },
}
//record as array of objects
const shoppingListArray:Record<number,Motorbikes> = {
  0:{
    make:'Honda',
    type:'sport',
  },
  1:{
    make:'Yamaha',
    type:'sport',
  },
}

/*5.**************  Pick<T,G> *****************/

/*
  * Pick will take only properties picked, selected from the type
*/

interface MotorbikesSet {
  make:string,
  speed:number,
  type:string,
}
//pick only make and type in this case pipe is not or ;)
let newBike:Pick<MotorbikesSet,'make'|'type'> = {make:'Triumph',type:'classic'}


/*6.**************  Omit<T,G> *****************/
/*
  * Omit is the opposite to Pick so omit some properties
  *
*/
//pick only speed so omit make and type
let newBike2:Omit<MotorbikesSet,'make'|'type'> = {speed:70}


/*7.**************  Exlude<T,U> with union types*****************/
/*
  * when you create type value it becomes tyoe on itslelf
  *
*/
interface Cars {
  takeof:number,
  speed:number
}
interface ExcludeSpeedPropertyI {
  speed:number
}
//those nubers are types on its own they not just const value:number = 2332
type RegistrationNumbers = 2332 | 34343 | 53453 | 53535353
type updatedRegistrationNumbers = Exclude<RegistrationNumbers,34343>

/*
  * when want to exclude some object properties from one type 
  *
*/

interface CombinedProps {
  prop1:string,
  prop2:number,
  prop3:number,
  prop4:number,
  prop5:number,
}
interface HOCprops {
  prop4:number,
  prop5:number,
}

type props = Exclude<keyof CombinedProps, keyof HOCprops> 
/*8.**************  NonNulable<T,G> *****************/
/*
  * Prior to TypeScript 2.0, the type checker considered null and undefined to be valid values of every type. 
  * Basically, null and undefined could be assigned to anything.
  * TypeScript 2.0 adds support for non-nullable types so you can not assing null to property if you 
  * dont specify as type null {s:null}
  *
*/
//in order this to work U need turn this on in configuaration: 
let names: string;
names = "Marius";  // OK
names = null;      // Error
names = undefined; // Error


const setNumberPlate  = (who:string, how?:NonNullable<RegistrationNumbers>)=>{}

setNumberPlate('Greg')
setNumberPlate('Greg',2332)
setNumberPlate('Greg',44) //is not part of RegistrationNumbers list
setNumberPlate('Greg',null) //is not part of RegistrationNumbers list



/*9.**************  Extract<T,G> *****************/
/*
  * Extract is the oposite to exlude so it will only take extracted values as final value
  *
*/

interface Cars1 {
  takeof:number,
  speed:number
}
interface ExcludeSpeedPropertyI1 {
  speed:number
}
//those nubers are types on its own they not just const value:number = 2332
type RegistrationNumbers1 = 2332 | 34343 | 53453 | 53535353
type updatedRegistrationNumbers1 = Extract<RegistrationNumbers,34343>
/*
  * when want to extract certian object properties from one type 
  *
*/

interface CombinedProps {
  prop1:string,
  prop2:number,
  prop3:number,
  prop4:number,
  prop5:number,
}
interface HOCprops {
  prop4:number,
  prop5:number,
}

type propsExtracted = Extract<keyof CombinedProps, keyof HOCprops> 

/*10.**************  ReturnTyoe<T,G> *****************/
/*
  * Return type allows you to set funnction singnatrue
  *
*/
type hW= ReturnType<typeof helloWorld>
function helloWorld(){
 return 'helloWorld' 
}
function helloWorldN():number{
  return 1 
 }

