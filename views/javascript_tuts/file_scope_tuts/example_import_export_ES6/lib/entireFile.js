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