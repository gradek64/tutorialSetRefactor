var express = require('express');
var router = express.Router();
//this is always there  process.env.USER no need to pass it

var customUser = process.env.CUSTOM_USER || 'unknown User, use npm run start USER or process.env.CUSTOM_USER to override';

console.log(process.env)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user:customUser });
});

module.exports = router;
