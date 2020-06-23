//Usually what can you achive with function overloads you can also achive with funnction with generic types
/*
      which should be used ?

        use generics for simple conversion as the one createArray (from any number of arguments of the same type)
        use function overloads for complex, more conditional return (diffrent depending on the arguments given)

*/

function createArray<T>(...arg: T[]) {
  return [...arg];
}

//below will work for any number of argument of consitent type
//pros: also return type seems to be correct assumed every time

createArray('one', 'two', 'three');
createArray(3, 1, 4);
createArray([3], [2], [4]);
//bellow should create an error
createArray({ ss: 3 }, { ee: 3 }, [6]); //sometimes you need to help typescript to lock values types you want to use as below
//with type locking
createArray<{ [key: string]: number }>({ ss: 3 }, { ee: 3 });

//Overloads are cumburstome for simple type returns (like array with specific types)
//but they are more suited for more complex, type related computation returns

//cons: return type not corect
//cons: need to specify every sintle scenario
//this one will need for every condtion new overlows sepearate for every scenario
function overload(...arg: string[]): [];
function overload(...arg: number[]): boolean[]; //the return type is not checked unfortunatelly
function overload(...arg: number[][]): number[][];
function overload(
  ...arg: (string | number | boolean | number[])[]
) {
  return [...arg];
}
overload('one', 'two', 'three');
overload(3, 1, 4);
overload([3], [2], [4]);

//overload({ a: 3 }, [2], [4]); //this is not specified in overloads conditions

//proper usege of overload functions

function passStringOrNumber(n: string): string;
function passStringOrNumber(n: number): string;
function passStringOrNumber(n: string | number):string {
  if (n === 'string') {
    return 'you passed string' + n;
  }
  if (n === 'number') {
    return 'you passed number' + n;
  }

  return ''
}

//concluesion function overload is not that diffrent from regular function only allows you to 
//specify exact type arguments aliminating union type (which btw is always last in function overload)

passStringOrNumber(4);
passStringOrNumber('4');
passStringOrNumber({4}); //not included in function overload
