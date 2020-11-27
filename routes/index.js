var express = require('express');
var router = express.Router();
const { restoreUser } = require('../auth');


/* GET home page. */
router.get('/', restoreUser, function(req, res, next) {
  res.render('index', { title: 'Widgets' });
});

module.exports = router;
