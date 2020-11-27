const express = require('express');
const { check, validationResult } = require('express-validator');
const { asyncHandler } = require('./utils');

const router = express.Router();

router.get("/", asyncHandler( async (req,res) =>{
    res.render("stories/story-home", {})
}))

module.exports = router;
