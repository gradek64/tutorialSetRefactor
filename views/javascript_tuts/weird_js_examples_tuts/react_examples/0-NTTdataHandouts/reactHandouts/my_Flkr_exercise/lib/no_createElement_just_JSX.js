"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayJSX = exports.simpleJSX = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* create Element Array Simple*/

var simpleJSX = _react2.default.createElement(
  "div",
  null,
  "this is valid simple JSX syntax"
);

/* create Element Array every Array needs key !*/

var pasta = ["Spicy as JSX", "Salmon as JSX", "Carbonara as JSX", "SpagBol as JSX", "Ravioli as JSX"];

//has to be inteporlated {e} or {pasta[i]} between curly braces; 
var arrayJSX = pasta.map(function (e, i) {
  return _react2.default.createElement(
    "li",
    { key: i.toString() },
    " ",
    e,
    " "
  );
});

/*********/

exports.simpleJSX = simpleJSX;
exports.arrayJSX = arrayJSX;