import React from 'react';


/* create Element Array Simple*/


 const simpleJSX = <div>this is valid simple JSX syntax</div>;


/* create Element Array every Array needs key !*/

 var pasta = [
"Spicy as JSX",
"Salmon as JSX",
"Carbonara as JSX",
"SpagBol as JSX",
"Ravioli as JSX"
];

//has to be inteporlated {e} or {pasta[i]} between curly braces; 
var arrayJSX = pasta.map(
	(e, i) => <li key={i.toString()}> {e} </li>
);

/*********/

export {simpleJSX, arrayJSX } ;