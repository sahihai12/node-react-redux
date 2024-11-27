const Blogs = require('../models/blog.model');
const Comments = require('../models/comments.model');
const User = require('../models/user.model');
const Joi = require('@hapi/joi');


const createComment = async(req, res) => {

    // res.send(req.body)
    const validateSchema = Joi.object({
        rating : Joi.number().required(),
        description : Joi.string().required()
    })

    const {error} = validateSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const getuser = await User.findOne({"_id": res.user.id})
    if(!getuser) return res.send('please first login') 

    console.log('params id ' , req.query.id);
    const getItem = await Blogs.find({"_id": req.query.id})
    if(!getItem) return res.send('please goto valid item') 

    const blog = new Comments({
        "item_user_id": res.user.id,
        "item_id": req.query.id,
        "item_type": req.body.type || 'blog', 
        "comment_description": req.body.description,
        "comment_rating": req.body.rating, 
    })
    
    try {
        const saveComment = await blog.save()
        res.send(saveComment);
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteComment = async (req, res) => {
    const {role} = res.user
    
    if(role !== "admin") {
        res.send('only admin are allowed')
    }

    const getBlog = await Comments.deleteOne({"_id": req.body.id})
    if(!getBlog) return res.send('blog not found')

    res.send('sucess')
}

// get all comments with items id 
const getALLComments = async(req, res) => {
    
}



module.exports = {createComment , deleteComment}