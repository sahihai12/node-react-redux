const Blogs = require('../models/blog.model');
const User = require('../models/user.model');
const Joi = require('@hapi/joi');


const createBlog = async(req, res) => {
    console.log('headers' ,req.cookies.authorization)
    const validateSchema = Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        excerpt : Joi.string().required(),
        linkedIn : Joi.string(),
        wahtsapp : Joi.string(),
        twiter : Joi.string(),
        category: Joi.string(),
    })

    console.log('incoming data is ', req.body.category)

    const {error} = validateSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const getuser = await User.findOne({"_id" : res.user.id})
    // res.send(getuser)

    const blog = new Blogs({
        "userid": getuser._id,
        "title": req.body.title,
        "featured_image": req.file.filename,
        "author": getuser.full_name, 
        "description": req.body.description,
        "excerpt": req.body.excerpt, 
        "category" : [...JSON.parse(req.body.category)],
        "linkedIn": req.body.linkedIn,
        "twiter": req.body.twiter,
        "wahtsapp": req.body.twiter,
        "likes": []
    })

    try {
        const blogSave = await blog.save()
        const usersave = await User.findByIdAndUpdate(getuser._id ,
            { $push: { blogs: blogSave._id } },
            { new: true, useFindAndModify: false }
        )
        res.json({
            created_blog : blogSave,
            updated_user: usersave
        });
    } catch (error) {
        res.status(400).send(error);
    }
    
}

const deleteBlog = async (req, res) => {
    const {role } = res.user
    res.send(res.user);
    // if(role !== "admin") {
    //     res.send('only admin are allowed')
    // }

    const getBlog = await Blogs.deleteOne({"_id": req.params.id})


    if(!getBlog) return res.send('blog not found')

    res.send('sucess')

}

const getsingleBlog = async (req , res) => {
    const blogid = req.params.blogid
    console.log('blogid ' , blogid);
    const getSingleBlog = await Blogs.find({"_id" : blogid })

    res.json(getSingleBlog)
}

const checkBlog = async (req , res) => {
    const auth = res.user
    const getuser = await User.findOne({"_id": auth.id})
    if(!getuser) return res.send('user not found')
    res.send(getuser)
    // res.status(400).send(JSON.stringify(getuser.role))
    
}

const getALlBlogs = async (req , res) =>{
    const getAllBlog = await Blogs.find({})

    res.json(getAllBlog)
}

module.exports = {createBlog , checkBlog , deleteBlog , getsingleBlog  , getALlBlogs}
