//Typescript allows U to assgign a dynamic type so which is called: generic type;

//normally your function will specify types on the values as:
function paint1(arg:string|number):string {
  switch (arg) {
    case typeof 'string':
      return `You room has been painted ${arg}`
      case typeof 'number':
      return `You room has been painted with brush size${arg}`
    default:
      break;
  }
}

paint1('BLUE')
paint1(33)

//or you can define function signature by extending function interface
//iterface always starts with capital;
interface FuncArgs {
  //function signature : function return type
  (arg: string | number):string | number;
}
const  paintExtended1:FuncArgs = (arg: string | number) => {
  switch (arg) {
    case typeof 'string':
      return `You room has been painted ${arg}`
      case typeof 'number':
      return `You room has been painted with brush size${arg}`
    default:
      break;
  }
}

paintExtended1('BLUE')
paintExtended1(33)

//this approach is just fine but it has one limitation it only 
//serve the data that as set in advanced they can not be set dynamicaly 

//type generics alow to set dynamic type once the function is being called 
//by setting it as that callfunction<type>(args)


/****** 1.a  generic type no contrains on type   *********/
function getLengthNoConstrains1<T>(arg:T) : number | string {
  switch (typeof arg) {
    case 'string':
      return `You room has been painted ${arg}`
      case  'number':
      return `You room has been painted with brush size${arg}`
    default:
      break;
  }
}

getLengthNoConstrains1('BLUE')
getLengthNoConstrains1(33)

/****** 1.b  generic type no contrains on type (with function interface) *********/
//it is done with function signature as interface but can be ommited 
//the function getLengthNoConstrains1 = getLengthNoConstrains is the same!
//so cosmetic change
interface GenericFnInterface {
  <T>(arg: T): number | string;
}

function getLengthNoConstrains<T>(arg:T) {
  switch (typeof arg) {
    case 'string':
      return `You room has been painted ${arg}`
      case  'number':
      return `You room has been painted with brush size${arg}`
    default:
      break;
  }
}

getLengthNoConstrains('BLUE')
getLengthNoConstrains(33)

let result1No:GenericFnInterface = getLengthNoConstrains
result1No('greg');
let result1No2:GenericFnInterface = getLengthNoConstrains
result1No(1);
let result2No3:GenericFnInterface = getLengthNoConstrains
result2No3({'greg':'greg'}); 
//U need to tell typscript what time you pass it wont guess as it did for number
let result2No4:GenericFnInterface = getLengthNoConstrains
result2No4<null>(null)

/****** 2.  generic type WITH contrains on type   *********/

//with generics U might constrain the type you want to pass to the funciton 
//the one below is constrain to only pass string or number

function getLengthInterface<T extends string | number>(arg:T) : number | string {
  switch (typeof arg) {
    case 'string':
      return `You room has been painted ${arg}`
      case  'number':
      return `You room has been painted with brush size${arg}`
    default:
      break;
  }
}


let result12 = getLengthInterface(3);  
let result13 = getLengthInterface('greg');

 

