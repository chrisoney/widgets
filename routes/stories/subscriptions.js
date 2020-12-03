var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');
const { Subscription } = require('../../db/models');

router.post("/toggle", asyncHandler( async (req, res) => {
  const { oldStoryId } = req.body;
  const storyId = parseInt(oldStoryId, 10);
  const userId = req.session.auth.userId;
  const subscription = await Subscription.findOne({
    where: {userId, storyId}
  })
  if (subscription){
    await subscription.destroy();
  } else {
    await Subscription.create({ userId, storyId });
  }
  res.send({ message: 'Success!' })
 }))


module.exports = router;