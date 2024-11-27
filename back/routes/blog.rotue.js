const router = require('express').Router();
const { createBlog , checkBlog , deleteBlog , getsingleBlog , getALlBlogs} = require("../controller/blogs.controller");
const {upload_blog_featured_image} = require('../resusable/file.upload');
const {is_User_loggedIn} = require('../verification/user.verification')


// ruote's
// for create userID
router.post('/create/' , is_User_loggedIn , upload_blog_featured_image.single('blogImage') , createBlog)
router.post('/delete/:blogid' , is_User_loggedIn , deleteBlog)



router.get('/all' , getALlBlogs)
router.get('/getsingle/:blogid' , getsingleBlog)

module.exports = router