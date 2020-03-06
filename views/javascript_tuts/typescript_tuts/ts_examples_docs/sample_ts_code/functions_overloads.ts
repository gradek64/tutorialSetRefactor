/*
    it is possible in type script to declare functions that takes diffrent formats 
    so it could be declared more that one way

*/
let suits = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];

//takes an array of objects and returns an object
function pickCards(card:{suit: string, card: number}[]):{suit: string, card: number};
//takes a number and return an object {suit: string, card: number}
function pickCards(card:string):{suit: string, card: number};
//take anything and and it has to return any or void 
function pickCards(card):any {
  if(typeof card === "object"){
    let pickedCard = Math.floor(Math.random() * suits.length);
        return suits[pickedCard];
  }
  if(typeof card === "number"){
    let pickedCard = card>suits.length?suits.length:card;
    return suits[pickedCard]
  }
  if(typeof card !== "number" && typeof card !== "object"){
    return 'you need to pass object or number to the pickCards method'
  }
}

console.log(pickCards('2'))
console.log(pickCards([{ suit: "diamonds", card: 2 }]))

function colorShade(color: string): string;
function colorShade(color: number): number;
function colorShade(color: number | string): number | string {
  if(typeof color === 'string') return "color is"+ color
  if(typeof color === 'number') return color
}

//function assigment with function signature and function declaration
const newColor: string | number = colorShade("number(63,131,163)")
const newColor1: string | number = colorShade(555)

interface Data {
  postalCodes: string[];
  country: string;
}

const data: Data = {
  postalCodes: ['123', '422'],
  country: 'PL'
}
function getDataByKey(data: Data, key: 'postalCodes'): string[]
function getDataByKey(data: Data, key: 'country') : string
function getDataByKey(data: Data, key: 'postalCodes' | 'country') {
    return data[key];
}


getDataByKey(data,'postalCodes')
getDataByKey(data,'country')

//with function signature in interface
interface RGB {
  r: number;
  g: number;
  b: number;
};

function colorShadeInterface(color: string): string;
function colorShadeInterface(color: RGB): RGB;
function colorShadeInterface(color: RGB | string): RGB | string {
  return color
}

//function assigment with function signature and function declaration
const newColor2: string | RGB = colorShadeInterface("number(63,131,163)")
const newColor3: string | RGB = colorShadeInterface({r:2,g:5,b:6})
