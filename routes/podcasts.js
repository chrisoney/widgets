const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  res.send(req._parsedOriginalUrl.path)
})

module.exports = router;