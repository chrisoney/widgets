var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');
const { Follow } = require('../../db/models');
const db = require('../../db/models');


router.get("/", asyncHandler( async (req, res) => {
  res.render("stories/dummy", {})
}))

router.post("/:id", asyncHandler( async (req, res) => {
  
  res.send({ message: 'Fail!' })
 }))

router.delete("/:id", asyncHandler( async (req, res) => {
  
  res.send({ message: 'Success!' })
 }))


module.exports = router;