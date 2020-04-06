'use strict';

var _calculate = require('./calculate.js');

var _createElementSimple = require('./createElementSimple');

var _no_createElement_just_JSX = require('./no_createElement_just_JSX');

var _functional_component = require('./functional_component');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("2 + 3 = ", (0, _calculate.sumTwo)(2, 3));

var title = 'My Minimal React Webpack Babel Setup is set';

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  title
), document.getElementById('app'));

/******** with jsx function**********/
var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

//create element no JSX

console.log(_createElementSimple.createElementSimple);

var noJSX = _react2.default.createElement('div', null, [_react2.default.createElement('header', { key: 5353 }, _react2.default.createElement('h1', null, _createElementSimple.createElementSimple)), _react2.default.createElement('article', { key: 535 }, _react2.default.createElement('ol', null, _createElementSimple.createElementArray)), _react2.default.createElement(_createElementSimple.CreateElementFunctionalComponent, { key: 535555, toWhat: 'toWhat syntax Functional' }), _react2.default.createElement('footer', { key: 2535 }, _react2.default.createElement('footer', null, "Copyright goes here"))]);

// functional_components no JSX

/*
   
   Multiple components have to be wrapped in div !
 */
function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_functional_component.Welcome, { name: 'Phil' }),
    _react2.default.createElement(_functional_component.WelcomeRender, { name: 'setfgeg' }),
    _react2.default.createElement(_createElementSimple.CreateElementFunctionalComponent, { toWhat: 'toWhat' }),
    _react2.default.createElement(
      'h1',
      null,
      _no_createElement_just_JSX.simpleJSX
    ),
    _react2.default.createElement(
      'h3',
      null,
      _no_createElement_just_JSX.arrayJSX
    )
  );
}

_react2.default.createElement(_createElementSimple.CreateElementFunctionalComponent, { toWhat: 'toWhat syntax' }, null);

/*
    JSX syntax {JSX syntax interpolated}
    ReactComponent as class statefull
    Functional Component as stateless
*/

_reactDom2.default.render(_react2.default.createElement('div', null, noJSX), document.getElementById('app'));

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app1'));

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