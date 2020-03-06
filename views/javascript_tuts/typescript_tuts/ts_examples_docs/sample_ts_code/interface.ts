/*
  typescirpt intruduces interface which type check (construction) of any 
  javascript object including function wich is called function signature
  INTERFACE HAS TO BE ALWAYS start with capital letter so camelized
*/


//object interface

interface objectStructure {
  name:string;
  lastname:string;
  age:number;

}

const person:objectStructure = {name:'greg',lastname:'gil',age:38}
//wich is the same as:
const personInlineObject:
  {
  name:string,
  lastname:string,
  age:number,
} = {name:'greg',lastname:'gil',age:38}
