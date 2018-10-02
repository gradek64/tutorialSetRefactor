
//find all devision from the number;
function divisors(num) {
  
  var half = Math.floor(num/2),i,j,result=[],value;
  num % 2 === 0 ? (i=2,j=1) : ( i=3,j=2 );
  
 
  
  //loop
  for(i;i<=half;i+=j){
   num % i===0 ? result.push(i) :  num + 'is prime';

      var outcome = result.length>0 ? result : num + ' is prime';
    
  }
  
   return outcome;
};
var check = divisors(15)
console.log(check);


//filter number from array 

function filter_list(list) {
var result=[];
  
  list.map(function(key,index){
  
    console.log(typeof key)
    typeof key === "number" ? result.push(key) : false;
  
    //if(index == (list.length-1)) 
  });
  
 return result; 

}

filter_list([1,2,'a','b']);



//cound vowels in the string 

function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  var vowels = str.match(/[a,e,i,u,o]/gi);
  
  
  var i = vowels !== null ? vowels.length : false;
  
  console.log(i)
  while(i--){
      vowelsCount++;
  }
  
  return vowelsCount;
}


getCount('abracadeabra')