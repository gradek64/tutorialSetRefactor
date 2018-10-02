'use strict';

import PanelComponent from './PanelComponent';


console.log("2 + 3 = ",sumTwo(2,3));

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup is set';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);


/******** with jsx function**********/
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

//create element no JSX

console.log(createElementSimple);

const noJSX = React.createElement('div', null, 
        [
          React.createElement('header', {key:5353}, React.createElement('h1', null, createElementSimple)),
          React.createElement('article', {key:535}, React.createElement('ol', null, createElementArray)),
          React.createElement(CreateElementFunctionalComponent,{key:535555, toWhat:'toWhat syntax Functional'}),
          React.createElement('footer', {key:2535}, React.createElement('footer', null, "Copyright goes here")
          )
        ]);



// functional_components no JSX

    /*
       
       Multiple components have to be wrapped in div !

    */
function App() {
  return (
    <div>
      <Welcome name='Phil' />
      <WelcomeRender name='setfgeg' />
      <CreateElementFunctionalComponent toWhat='toWhat'/>
      <h1>{simpleJSX}</h1>
      <h3>{arrayJSX}</h3>
    </div>
  );
}

React.createElement(CreateElementFunctionalComponent, {toWhat:'toWhat syntax'}, null)



/*
    JSX syntax {JSX syntax interpolated}
    ReactComponent as class statefull
    Functional Component as stateless
*/

ReactDOM.render(
  React.createElement('div', null, noJSX),
  document.getElementById('app')
);


ReactDOM.render(
  <App/>,
  document.getElementById('app1')
);

/*
it is posible to that but not recomended !

      ReactDOM.render(
        <div>
            <Welcome name='Philafga' />
            <WelcomeRender name='setetert' />
            <h1>{simpleJSX}</h1>
            <h3>{arrayJSX}</h3>
          </div>,
        document.getElementById('app1')
      );
*/