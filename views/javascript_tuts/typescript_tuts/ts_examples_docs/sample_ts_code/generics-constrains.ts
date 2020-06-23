//generic constrains is the way to tell typescript that you only want to work with certain types.
type stringOrNumber = string | number;
function createArray1<T extends stringOrNumber>(...arg: T[]) {
  return [...arg];
}

createArray1(2, 4, 5);
createArray1('2', '4', '5');
createArray1([2], [4], [5]); //not accepted
