//Typescript allows U to assgign a dynamic type so which is called: generic type;
//normally your function will specify types on the values as:
//generic constrains is the way to tell typescript that you only want to work with certain types.

//-------- single type generic

function createArray2<T>(...arg: T[]) {
  return [...arg];
}

createArray2(2, 4, 5);
createArray2('2', '4', '5');
createArray2([2], [4], [5]);

//-------- multiple types generics

function createArray2MultipleTypes<T, U>(n: T, u: U): [T, U] {
  return [n, u];
}

createArray2MultipleTypes<string, number>('2', 4);
createArray2MultipleTypes<string, number[]>('2', [4]);
createArray2MultipleTypes<number, number[]>(2, [4]);
