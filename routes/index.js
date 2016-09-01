var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Atomic SCSS Starter Kit', dynamicText: 'This text is loaded by the controller' });
});

module.exports = router;
