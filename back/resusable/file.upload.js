// multer
const multer = require('multer');

// upload user profile image
const storageUser = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/userImage/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload_user_profile = multer({ storage: storageUser })

// upload user profile image
const storageBlog = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/blogImage/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload_blog_featured_image = multer({ storage: storageBlog })

// upload user profile image
const storageProduct = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/productImage/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const product_image = multer({ storage: storageProduct })

module.exports = {upload_user_profile , upload_blog_featured_image , product_image}