/**
 * Generic interface expect extends other types, makes them constrained to certain types only
 */

/**
 * REMEMBER !!!
 *
 * extens with generic always create a contstrain (so limits what generic can take !! limits its types)
 */

//same could be achived with much cleaner syntax
interface someI<T extends string, U> {
  job: T;
  value: U;
}
const obj1: someI<string, number> = { job: 'greg', value: 45 };
const obj10: someI<number, number> = { job: 66, value: 45 }; //T was constrain to string so it doesnt accept number

//this interface accpets:  key of type string , generic to be specified with call
interface KeyP<G> {
  [key: string]: G;
}
//this inteface accets: Generic <T> that is constain to be of shape of KeyP
//KeyP is also generic so it needs to specify what types it works with therefore  KeyP<string | number>
interface KeyPairExtended<T extends KeyP<string | number>, U> {
  job: T;
  value: U;
}

//call generic that needs generic types config: KeyP<string> and string
let gg: KeyPairExtended<KeyP<string>, string> = {
  job: { someProp: 'set' },
  value: 'Steve',
}; // OK
//call generic that needs generic types config: KeyP<number> and string
let gg1: KeyPairExtended<KeyP<number>, string> = {
  job: { set: 66 },
  value: 'Steve',
}; // OK

//call generic that needs generic types config: KeyP<number> and string
let ggset: KeyPairExtended<KeyP<number>, string> = {
  job: { someother: 66 },
  value: 'Steve',
}; // OK

//same could be achived with much cleaner syntax
interface KeyPairExtended2<T extends { [key: string]: string }, U> {
  job: T;
  value: U;
}
let gg12: KeyPairExtended2<{}, string> = {
  //job: { set: {set:44} },
  job: 1,
  value: 'Steve',
}; // OK
