const express = require("express");
const router = express.Router();


router.get('/:otherId', (req, res) => {
  res.send(`otherId: ${req.params.otherId} and storyId: ${req.storyId}`)
})

module.exports = router;