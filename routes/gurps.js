const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  // console.log(req._parsedOriginalUrl.path);
  res.send(req._parsedOriginalUrl.path)
  // res.redirect('/dashboard');
})

module.exports = router;