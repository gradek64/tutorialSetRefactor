//we have a function that takes either string or number

//type StringOrNumber = string | number;

const adder = (n: string | number, n2: string | number) => {
  //type guads need to be used
  if (typeof n === 'string' || typeof n2 === 'string') {
    return n.toString() + n2.toString();
  }
  return n + n2;
};

const result = adder(3, 4);
const result1 = adder('3, 4', 4); //we can still sneak in diffrent types of each other !
//both of them are of type StringOrNumber typescirpt is not able to detect what is the result of adder method
result1.split(','); //thefore string split method is not known to StringOrNumber type

//1. one solution is to use type casting (means function returns string)
const result2 = adder('3, 4', 'gr') as string;
result2.split(',');
//or
const result3 = <string>adder('3, 4', 'gr');
result3.split(',');

//2 anther solution is to use function overloads

function adderOverloads(n: number, n2: number): number;
function adderOverloads(n: string, n2: string): string;
//last overload must be combination of obove overloads
function adderOverloads(n: string | number, n2: string | number) {
  //type guads need to be used
  if (typeof n === 'string' || typeof n2 === 'string') {
    return 'this' + n.toString() + n2.toString();
  }
  return n + n2;
}

const resultOver = adderOverloads(3, 4); //now it knows that it needs to return a number
const resultOver1 = adderOverloads('3', '4'); //now it knows that it needs to return a number
//const resultOver2 = adderOverloads('3', 4); //not longer it will accept arguments of diffrent types

function processNumKeyPairs(n: number, n2: number): number;
function processNumKeyPairs(n: string, n2: string): string;
function processNumKeyPairs(
  n: string | number,
  n2: string | number
): string | number {
  return n + n2;
}
//3 with function generics

function reverse(string: string): string;
function reverse(array: string[]): string[];
function reverse(stringOrArray: string | string[]) {
  return stringOrArray.split('').reverse().join('');
}

reverse('name');
reverse([6, 6]);

processNumKeyPairs(9, 5);
processNumKeyPairs('9', '5');

function adderGenerics<T, U>(n: T, n2: U): T | U {
  if (typeof n === 'string' && typeof n2 === 'string') {
    return <T | U>(n.toString() + n2.toString());
  }
  if (typeof n === 'number' && typeof n2 === 'number') {
    return (n + n2) as T | U;
  }
  return 'none' as T | U;
}
adderGenerics<number, number>(5, 3);
adderGenerics<string, string>('5', '3');
adderGenerics<[], []>(['5'], ['3']);

const returnValue = <T, Y>(v: T, v1: Y) => {
  return { v, v1 };
};

returnValue<number, number>(4, 6);
returnValue<string, string>('rr', 'greg');
const obj = returnValue<
  { rr: string; greg: string },
  { rr: string; greg: string }
>({ rr: 'rr', greg: 'greg' }, { rr: 'rr', greg: 'greg' });
obj.v;
