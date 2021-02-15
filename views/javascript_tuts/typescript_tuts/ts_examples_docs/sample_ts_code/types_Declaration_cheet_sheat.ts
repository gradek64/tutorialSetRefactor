//java build-in types
//1.Array
const arra: string[] = ['greg'];
const arra2: Array<string> = ['greg'];
const customers: Array<string | number> = [2];
const customers2: (string | number)[] = ['str'];
//2. Tuple (controlled number array)
const address: [string, number] = ['Street', 99];
const address2: Array<string | number> = ['Street', 99];
//3 Object
const anyKeyObject: { [key: string]: string } = {
  greg: 'is cool',
  age: 'unknown',
};
//Object type assertion
const anyKeyObject2 = {
  greg: 'is cool',
  age: 'unknown',
  gre: '2',
} as { [key: string]: string };
//3a Object dusctructring
const scientist: { firstName: string; experience: number } = {
  firstName: 'Robert',
  experience: 9000,
};
const { firstName, experience } = scientist;

//4. functions args
//optional
const seter = (arg: string, arg2?: number | string) => {};
seter('first');
//optional and default
const seter2 = (arg: string, arg2 = 2) => {};
seter2('first');
//optional and default destructring object properties
const seter3 = ({ arg = 1, arg2 = 3 }) => {};
//both the same
const seter3a = ({ arg, arg2 } = { arg: 1, arg2: 3 }) => {};
seter3a();
//combination of obobe
const seter4 = ({ arg, arg2 = 2 } = { arg: 4 }) => {};
seter4();

//Typescript own data types
//1. Enums
enum Color {
  Red,
  Green,
  Blue = 4,
}

//exporting
export interface IAppState {
  counterValue: number;
}
//const
export const PI = 3.14;
//enum
export enum Color2 {
  Red,
  Green,
  Blue = 4,
}
