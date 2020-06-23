//type casting is the way to tell typescritp that we know what type to use and dont take typescript assuptions

const set1 = 1;
const inputElement2 = <HTMLInputElement>document.getElementById('ss');

//by Defautl typescirpt takes input as Element and tells that value doesnt exists on Element type
//thefore cast it to the right type
inputElement2.value = 'gg';

const set3 = 1;
const inputElement3 = document.getElementById('ss') as HTMLInputElement;

//by Defautl typescirpt takes input as Element and tells that value doesnt exists on Element type
//thefore cast it to the right type
inputElement3.value = 'gg';

//with no null values value!
const set4 = 1;
const inputElementnotNull = <HTMLInputElement>document.getElementById('ss');
