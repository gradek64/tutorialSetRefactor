//generic constrains is the way to tell typescript that you only want to work with certain types.
type stringOrNumber = string | number;
function createArray1<T extends stringOrNumber>(...arg: T[]) {
  return [...arg];
}

createArray1(2, 4, 5);
createArray1('2', '4', '5');
createArray1([2], [4], [5]); //not accepted

interface People {
  name: string;
}
interface Celebrity extends People {
  profession: string;
}
//generic constrains with object=> it means object must have certain property that is extending from
//either from Interface or object inline {property:type}

function printNameInterface<T extends People>(theInput: T): void {
  console.log(`My name is ${theInput.name}`);
}
function printName<T extends { name: string }>(theInput: T): void {
  console.log(`My name is ${theInput.name}`);
}

let serena: Celebrity = {
  name: 'Serena Williams',
  profession: 'Tennis Player',
};

printNameInterface(serena);
printName(serena);

//generic allows you to add addtional property to the functions arguments
interface Length {
  length: number;
}
//inline extesion
function identityLiteral<T extends { length: number }>(arg: T): T {
  // length property can now be called
  console.log(arg.length);
  return arg;
}
//with interface
function identity<T extends Length>(arg: T): T {
  // length property can now be called
  console.log(arg.length);
  return arg;
}

identity('greg');
identity(['greg']);
identity(3); //nuber doesnt not have length property

//constrain to the keys of the object
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getPropertyValue({ name: 'greg' }, 'name');
