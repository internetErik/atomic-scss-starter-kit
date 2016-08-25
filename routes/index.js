var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dynamicText: 'This text is loaded by the controller' });
});

module.exports = router;
