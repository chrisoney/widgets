var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  const storiesDescription = "A widget to keep track of online stories that you're reading, and finding new ones that may interest you";
  const gurpsSkillsDescription = "A widget to keep track of skills for a GURPS Supers character";
  res.render('index', { title: 'Widgets', storiesDescription, gurpsSkillsDescription });
});

module.exports = router;
