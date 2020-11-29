const express = require('express');
const { check, validationResult } = require('express-validator');
const { asyncHandler } = require('./utils');
const { Story, User, Subscription, Recommendation, Follow } = require('../db/models')

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect('/stories/dashboard');
})

router.get("/dashboard", asyncHandler( async (req,res) =>{
    const stories = await Story.findAll({ 
        include: { 
            model:User,
            as: 'subscribingUsers',
            through: { attributes: [] }
        }
    }).filter(story => {
        const users = story.subscribingUsers.map(user => user.id);
        console.log(users);
        return users.some(id => id === req.session.auth.userId)
    });
    res.render("stories/dashboard", { title:"Dashboard", stories })
}))

router.get("/discover", asyncHandler( async (req,res) =>{
    const stories = await Story.findAll({ 
        include: { 
            model:User,
            as: 'subscribingUsers',
            through: { attributes: [] }
        }
    }).filter(story => {
        const users = story.subscribingUsers.map(user => user.id);
        return users.every(id => id !== req.session.auth.userId)
    });

    res.render("stories/discover", { title:"Discover", stories })
}))

router.get("/discover-stories", asyncHandler( async (req,res) =>{
    const stories = await Story.findAll({ 
        include: { 
            model:User,
            as: 'subscribingUsers',
            through: { attributes: [] }
        }
    }).filter(story => {
        const users = story.subscribingUsers.map(user => user.id);
        return users.every(id => id !== req.session.auth.userId)
    });

    res.json(stories);
}))

router.get("/discover-users", asyncHandler( async (req, res) => {
    const users = await User.findAll({
        attributes: ["id", "username"],
        include: [{
            model:User,
            as: 'followers',
            attributes: ["id","username"],
            through: { attributes: []}
        },
        {
            model: Story,
            as: 'recommendedStories',
            through: { attributes: ["rating"]}
        }]
    }).filter(user => {
        const users = user.followers.map(user => user.id);
        return user.id !== req.session.auth.userId && 
                users.every(id => id !== req.session.auth.userId);
    })
    res.json(users);
}))

router.get("/discover-follows", asyncHandler( async (req,res) =>{

    const user = await User.findOne({
        where: {id: req.session.auth.userId},
        include: { 
            model:User,
            as: 'followings',
            through: { attributes: [] },
            include: { 
                model: Story,
                as: 'recommendedStories',
                through: { attributes: [] }
            }
        }
    });
    res.json(user.followings);
}));
module.exports = router;
