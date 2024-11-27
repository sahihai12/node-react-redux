const router = require('express').Router();
const {createComment , deleteComment} = require('../controller/comment.controller')
const {is_User_loggedIn} = require('../verification/user.verification')


// ruote's
router.post('/create' , is_User_loggedIn , createComment)

router.post('/delete' , is_User_loggedIn , deleteComment)

router.post('/get/:itemId' , is_User_loggedIn , deleteComment)

module.exports = router