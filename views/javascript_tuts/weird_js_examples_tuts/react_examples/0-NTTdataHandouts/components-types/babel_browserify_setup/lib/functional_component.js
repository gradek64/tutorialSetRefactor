'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Welcome = undefined;
exports.WelcomeRender = WelcomeRender;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Functional component excepts props object*/
var Welcome = exports.Welcome = function Welcome(props) {
  return _react2.default.createElement(
    'h1',
    null,
    'Hello, ',
    props.name
  );
};

/* Functional component excepts props object with Render*/
function WelcomeRender(props) {
  return _react2.default.createElement(
    'h1',
    null,
    'Hello, ',
    props.name
  );
}