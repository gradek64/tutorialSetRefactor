interface KeyPair<T, U> {
  key: T;
  value: U;
}

//generics gives multiple types options
const kv1: KeyPair<number, string> = { key: 1, value: 'Steve' }; // OK
const kv2: KeyPair<string, string> = { key: 'set', value: 'Steve' }; // OK
const kv3: KeyPair<{ [key: string]: string }, number> = {
  key: { prop: 'value' },
  value: 55,
}; // OK

//the same achived with type

type KeyPair1<T, U> = {
  key: T;
  value: U;
};

let kv1type: KeyPair1<number, string> = { key: 1, value: 'Steve' }; // OK
