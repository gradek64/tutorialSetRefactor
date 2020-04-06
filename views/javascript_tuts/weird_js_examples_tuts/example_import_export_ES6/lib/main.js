'use strict';

var _calculate = require('./calculate.js');

var _entireFile = require('./entireFile');

var _entireFile2 = _interopRequireDefault(_entireFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _entireFile.add)(4, 6));

//import entire file

console.log((0, _entireFile2.default)(4, 6));

console.log("2 + 3 = ", (0, _calculate.sumTwo)(2, 3));