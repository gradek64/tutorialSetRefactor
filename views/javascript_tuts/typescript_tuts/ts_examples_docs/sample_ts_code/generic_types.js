//Typescript allows U to assgign a dynamic type so which is called: generic type;
//normally your function will specify types on the values as:
function paint(arg) {
  switch (arg) {
    case typeof 'string':
      return 'You room has been painted ' + arg;
    case typeof 'number':
      return 'You room has been painted with brush size' + arg;
    default:
      break;
  }
}
paint('BLUE');
paint(33);
var paintExtended = function(arg) {
  switch (arg) {
    case typeof 'string':
      return 'You room has been painted ' + arg;
    case typeof 'number':
      return 'You room has been painted with brush size' + arg;
    default:
      break;
  }
};
paintExtended('BLUE');
paintExtended(33);
var paintGenericType = function(arg) {
  switch (typeof arg) {
    case 'string':
      return 'You room has been painted ' + arg;
    case 'number':
      return 'You room has been painted with brush size' + arg;
    default:
      return 'greg';
  }
};
var results = paintGenericType('argument 1');
var resultsNumero = paintGenericType(1);
var resultsNumero1 = paintGenericType(null);
console.log(results);
console.log(resultsNumero);
console.log(resultsNumero1);
/* interface funcArgs1 {
  length: number;
  name?:string
}

function getLength<T extends funcArgs1>(args:T) : number {
  if(args.length)
  return args.length;
  if(args.name)
  return name
}

let result = getLength(3);  // throw an exception
let result1 = getLength({ length: 5});
 */
