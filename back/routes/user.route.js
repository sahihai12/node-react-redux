const router = require('express').Router();
const {upload_user_profile} = require('../resusable/file.upload');

// import controller
const userController = require('../controller/user.controller');


router.post('/register', upload_user_profile.single('userimage') ,userController.register)

router.post('/login' , userController.login)

router.put('/update/:id' , userController.updateUser)

router.delete('/delete/:id' , userController.deleteUser)
router.get('/all' , userController.getALL)

module.exports = router


