var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { Follow } = require('../db/models');

router.get("/toggle", (req, res) => {
  res.send("hello there");
})

router.post("/toggle", asyncHandler( async (req, res) => {
  const { followedId } = req.body;
  const followingId = parseInt(followedId, 10)
  const followerId = req.session.auth.userId;
  const follow = await Follow.findOne({
    where: {followerId, followingId}
  })
  if (follow){
    await follow.destroy();
  } else {
    follow.create({followerId, followingId});
  }
  res.send({ message: 'Success!' })
 }))


module.exports = router;