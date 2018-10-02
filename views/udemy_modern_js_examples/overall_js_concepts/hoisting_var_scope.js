function hoist() {
  a = 20; //this is global attached to window object; and it not declared with var 
  var b = 100;
}

hoist();





console.log('..................hoisting and var scope ...............'); 
console.log(a); 
/* 
Accessible as a global variable outside hoist() function
Output: 20
*/

//console.log(b); 
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/

console.log('this'); 
console.log(this); 


console.log(typeof variable); // Output: undefined  notice that variable is not decleare anywhere;

//if you do console.log(variable) //it will throw error since we ReferenceError is thrown when trying to access a previously undeclared variable.
var c;
console.log(c); //now we got undefined since we declare it but it has not value;


console.log('..................hoisting and var scope ...............'); 



				/*

						Hoisting is a JavaScript mechanism 
						where variables and function declarations 
						are moved to the top of their scope before code execution.

						example;


						var temp; 

						if(temp)  //it is undified since nothing has been assing to it but still it works wont throw error;

						{
							temp = "temporary value"


						}


						//when you check var temp now it will print its value , since was assing in If() statement 

						console.log(temp); //prints "temporary value";
		


							Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

							Of note however, is the fact that the hoisting mechanism only moves the declaration. The assignments are left in place.




					

				*/