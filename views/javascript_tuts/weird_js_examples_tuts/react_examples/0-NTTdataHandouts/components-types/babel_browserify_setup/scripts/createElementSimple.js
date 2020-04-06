import React from 'react';


/*
			
			React.createElement(
			  type,
			  [props],
			  [...children]
			)


*/


/* create Element Array Simple*/


 const createElementSimple = React.createElement('div', null, 'Hello World');

 //as functional component;

 const CreateElementFunctionalComponent = (props) => 
 		React.createElement('div', null, `Hello create createElementFunctionalComponent ${props.toWhat}`);


/* create Element Array every Array needs key !*/

 var pasta = [
"Spicy",
"Salmon",
"Carbonara",
"SpagBol",
"Ravioli"
];

var createElementArray = pasta.map(
	(food, i) => React.createElement('li', {key:i}, food)
);

/*********/

export {createElementSimple, CreateElementFunctionalComponent, createElementArray } ;