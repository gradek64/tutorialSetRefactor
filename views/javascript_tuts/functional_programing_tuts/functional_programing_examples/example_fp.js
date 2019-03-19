/*
  *@the task is to find of peace fo data , format it and add currency to it;
  *@
*/

const data = [
  {name:'Greg', expenses:2},
  {name:'Kate', expenses:4},
  {name:'Mark', expenses:'1'},
  {name:'Libbty', expenses:5},
];

//1. One way to achive that is by chaning functions;
const getObjPropValue1 = (data,property)=>{ const prop = property ;return data.map((item)=>item[prop]);};

const total1 = getObjPropValue1(data,'expenses')
  .map(entry=>Number.isInteger(entry)?entry:Number(entry))
  .reduce((a,e)=>a+e,0);

/*
  *@chaining looks neat but it is no easy to read therefore you better of with composition
  *@
*/

console.log('total1 done with chaning',total1);



//1. Chaining with external callback functions;

const getObjPropValue = (data,property)=>{ const prop = property ;return data.map((item)=>item[prop]);};
const isNumberChain = entry=>Number.isInteger(entry)?entry:Number(entry);
const calculateTotalChain = (a,e)=>a+e;


const total2a = 
  getObjPropValue1(data,'expenses')
    .map(isNumberChain)
    .reduce(calculateTotalChain,0);


console.log('total2a',total2a);

//2. purely using composition; 

const getObjPropValueNEST = (data,property)=>{ const prop = property ;return data.map((item)=>item[prop]);};
const isNumber = (data)=>data.map(entry=>Number.isInteger(entry)?entry:Number(entry));
const calculateTotal = (data)=>data.reduce((a,e)=>a+e,0);

const total = calculateTotal( isNumber( getObjPropValueNEST(data,'expenses') ) );
console.log(total);
/*
  *@composition itself looks messy but declarion of pur function is perfect
  *@in next example will do composition with easy to read steps as function as well;
*/


//3. composition with one master declerative function;


const getDataC= (prop)=>(data)=> data.map((item)=>item[prop]);
const isNumberC = (data)=>data.map(entry=>Number.isInteger(entry)?entry:Number(entry));
const calculateTotalC = (data)=>data.reduce((a,e)=>a+e,0);
const addCurrency = (currency)=>(total)=>`${currency} ${total}`;


/*
  *@compose will start executing from bottom to top;
  *@
*/
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const totalCompose = compose(
  addCurrency('£'),
  calculateTotalC,
  isNumberC,
  getDataC('expenses')
)(data); 

console.log('totalCompose',totalCompose);


/*
  *@pipe will start executing from top to bottom
  *@
*/
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const totalComposePipe = pipe(
  getDataC('expenses'),
  isNumberC,
  calculateTotalC,
  addCurrency('£')
)(data); 


console.log('totalComposePipe',totalComposePipe);



/*
  *@the steps bellow always create a new copy of data
  *@this is not desirible in large application but it could be only dimnish with library as immutable.js 
*/
const getData = getObjPropValue(data,'expenses');
const checkDataTypes = isNumber(getData);
const getTotal = calculateTotal(checkDataTypes);

console.log('original Data', data);
console.log(getData);
console.log(checkDataTypes);
console.log(getTotal);



/**************** concept of currying**************/

//concept of converting funciton arguments into serious of funciton that each takes one argument;

//with defualt values
const addFunction = (a,b=0,c=0) => a + b + c;

//addFunction curry version;

const addFunctionCurry = (a)=> (b=0) => (c=0) => a+b+c;


console.log('addFunction', addFunction(1,2,3)); //3
console.log('addFunctionCurry',addFunctionCurry(1)(2)(3));//6


/**************** concept of partial Application **************/

//Partial applications can take as many or as few arguments a time as desired 

const add3 = (a,b,c)=>{
  const add2 = addFunction(a,b); //3
  //U would use partial outcome and pass it further to complete function 
  return addFunction(add2,c);
};
console.log('Partial applications add3',add3(1,2,3)); //6

//or
const add3withCurry = (a,b,c)=>{
  const add2 = addFunctionCurry(a)(b); //3
  //U would use partial outcome and pass it further to complete function 
  return add2(c);
};
console.log('Partial applications add3withCurry',add3withCurry(1,2,3)); //6

/****************/





