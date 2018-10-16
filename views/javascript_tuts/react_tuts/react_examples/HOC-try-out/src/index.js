import React from 'react';
import ReactDOM from 'react-dom';
import SimpleHOC from './simple_HOC';
import HOCWithState from './HOC_with_state';
import './assets/scss/app.scss';

const starWarsChars = [
    { name:'Luke', side:'light' },
    { name:'Darth Vader', side:'dark' },
    { name:'Obi-wan Kenobi', side:'light'},
    { name:'Palpatine', side:'dark'},
];

ReactDOM.render(<HOCWithState list={starWarsChars} side={'light'}/>, document.getElementById('app'));
