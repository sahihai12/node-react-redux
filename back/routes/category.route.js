const router = require('express').Router();
const {is_User_loggedIn , is_User_admin} = require('../verification/user.verification')
const {createCategory , deleteCategory , getAllCategory} = require('../controller/category.controller')

router.get('/all' , getAllCategory)
router.post('/create' , is_User_loggedIn, createCategory)
router.post('/delete/:name' , is_User_admin , deleteCategory)


module.exports = router