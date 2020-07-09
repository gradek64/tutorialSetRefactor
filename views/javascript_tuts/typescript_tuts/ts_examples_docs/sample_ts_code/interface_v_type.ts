/*
  typescirpt intruduces interface which type check (construction) of any 
  javascript object including function wich is called function signature
  INTERFACE HAS TO BE ALWAYS start with capital letter so camelized
*/

//object interface

interface objectStructure {
  name: string;
  lastname: string;
  age: number;
}

const person: objectStructure = { name: 'greg', lastname: 'gil', age: 38 };
//wich is the same as:
const personInlineObject: {
  name: string;
  lastname: string;
  age: number;
} = { name: 'greg', lastname: 'gil', age: 38 };

interface IAnyKeyUnknownValue {
  [key: string]: unknown;
}
const person1: IAnyKeyUnknownValue = {
  name: 'greg',
  lastname: { greg: 'greg' },
  age: 38,
  arr: [{}],
};

//-----------------------------------------

/*
    Interfaces and types can represent the same data as below:
*/
//---------
type DudeType = {
  name: string;
  age: number;
};

interface DudeInterface {
  name: string;
  age: number;
}
//---------

const pawel: DudeInterface = {
  name: 'Pawel',
  age: 31,
};

const darek: DudeType = {
  name: 'Darek',
  age: 31,
};

/**
 * Intersecitons for both
 * **/
//---- 2a. Interface  combined naturally by intface duplication (not reccomended though)
interface Dude {
  name: string;
  age: number;
}

interface Dude {
  job: string;
  position: string;
}

let myEmployee10: Dude;
myEmployee10 = {
  name: 'Darek',
  age: 31,
  job: 'contract',
  position: 'developer',
};
//---- 2b. Interface can be extended as well (recommended)
interface Dude1 {
  name: string;
  age: number;
}

interface Dude2 extends Dude1 {
  job: string;
  position: string;
}

let myEmployee11 = {} as Dude2;
myEmployee11 = {
  name: 'Darek',
  age: 31,
  job: 'contract',
  position: 'developer',
};
//---- 2b. with Types can be combined as type1 & type2
type Dude10 = {
  name: string;
  age: number;
};

type Dude20 = {
  job: string;
  position: string;
};
//----
let myEmployee12 = {} as Dude10 & Dude20;
myEmployee12 = {
  name: 'Darek',
  age: 31,
  job: 'contract',
  position: 'developer',
};

//union types - those alows to use either one type or another
let myEmployee13: Dude10 | Dude20;
myEmployee13 = {
  name: 'Darek',
  position: 'string',
  job: 'contract',
}; // a bit buggy cause it accepts 3 arguments it should accpet 2 or 4

//the same done with interfaces
interface Dude100 {
  name: string;
  age: number;
}

interface Dude200 {
  job: string;
  position: string;
}
let myEmployee14: Dude100 | Dude200;
myEmployee14 = {
  name: 'string',
  job: 'contract',
  position: 'developer',
}; // a bit buggy cause it accepts 3 arguments it should accpet 2 or 4

//---------
/*
    Diffrences 
*/

//---- 1. Interface can only represent object type data type can represent any data also litral data

type GregorDaniel = 'Greg' | 'Daniel';

const myEmployee1: GregorDaniel = 'Greg';
const myEmployee2: GregorDaniel = 'Daniel';
const myEmployee3: GregorDaniel = 'Michal'; //opps he is not specified in type

//or tuples declarion can not be done by interface
type Reponse = [string, number];
const x: Reponse = ['value', 5];

//Disjoint unions only in types
type DomesticAnimals = { type: 'Dog' } | { type: 'Cat' };

export type NonUndefined<A> = A extends undefined ? never : A;

const failwith = <T>(message?: NonUndefined<T>) => {
  if (typeof message === 'string') {
    return message;
  }
  throw new Error('type not specified');
};

failwith<string>('greg');
failwith<undefined>();
