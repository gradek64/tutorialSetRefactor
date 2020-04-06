(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function sumTwo(number1, number2) {
    return number1 + number2;
}

exports.sumTwo = sumTwo;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//you can still export by its name even if you use default already;
var add = exports.add = function add(a, b) {
  return a + b;
};

//U can only have one default, but as many name Export as you wish;
var multiply = function multiply(a, b) {
  return a * b;
};
exports.default = multiply;
},{}],3:[function(require,module,exports){
'use strict';

var _calculate = require('./calculate.js');

var _entireFile = require('./entireFile');

var _entireFile2 = _interopRequireDefault(_entireFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _entireFile.add)(4, 6));

//import entire file

console.log((0, _entireFile2.default)(4, 6));

console.log("2 + 3 = ", (0, _calculate.sumTwo)(2, 3));
},{"./calculate.js":1,"./entireFile":2}]},{},[3]);
