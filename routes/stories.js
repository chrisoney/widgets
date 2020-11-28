const express = require('express');
const { check, validationResult } = require('express-validator');
const { asyncHandler } = require('./utils');
const { Story, User, Subscription, Recommendation, Follow } = require('../db/models')

const router = express.Router();

router.get("/dashboard", asyncHandler( async (req,res) =>{
    console.log("HELLO")
    const stories = await Story.findAll({ 
        include: { 
            model:User,
            as: 'subscribedStory',
            through: { attributes: [] }
        }
    }).filter(story => {
        const users = story.subscribedStory.map(user => user.id);
        console.log(users);
        return users.some(id => id === req.session.auth.userId)
    });
    res.render("stories/dashboard", { title:"Dashboard", stories })
}))

router.get("/discover", asyncHandler( async (req,res) =>{
    const stories = await Story.findAll({ 
        include: { 
            model:User,
            as: 'subscribedStory',
            through: { attributes: [] }
        }
    }).filter(story => {
        const users = story.subscribedStory.map(user => user.id);
        return users.every(id => id !== req.session.auth.userId)
    });

    res.render("stories/discover", { title:"Discover", stories })
}))

module.exports = router;
