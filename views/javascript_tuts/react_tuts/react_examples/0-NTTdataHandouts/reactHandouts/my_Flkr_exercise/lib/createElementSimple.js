'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createElementArray = exports.CreateElementFunctionalComponent = exports.createElementSimple = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
			
			React.createElement(
			  type,
			  [props],
			  [...children]
			)


*/

/* create Element Array Simple*/

var createElementSimple = _react2.default.createElement('div', null, 'Hello World');

//as functional component;

var CreateElementFunctionalComponent = function CreateElementFunctionalComponent(props) {
	return _react2.default.createElement('div', null, 'Hello create createElementFunctionalComponent ' + props.toWhat);
};

/* create Element Array every Array needs key !*/

var pasta = ["Spicy", "Salmon", "Carbonara", "SpagBol", "Ravioli"];

var createElementArray = pasta.map(function (food, i) {
	return _react2.default.createElement('li', { key: i }, food);
});

/*********/

exports.createElementSimple = createElementSimple;
exports.CreateElementFunctionalComponent = CreateElementFunctionalComponent;
exports.createElementArray = createElementArray;