const express = require('express'); 
const dotenv = require('dotenv');
const mongoose_connect = require('./db/config');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')


dotenv.config('')
const PORT = process.env.PORT || 9090
const app = express()
app.use(express.json())
app.use('/assets' , express.static('assets'))
// connect to dataBase
mongoose_connect()

app.listen(PORT , () =>  console.log('app is listening at ' , PORT))

// import rotue
const UserRoute = require('./routes/user.route');
const BlogRoute = require('./routes/blog.rotue');
const CommentRoute = require('./routes/comments.route');
const categoryRoute = require('./routes/category.route');

// route of middleware
app.use(cors())
app.options('*', cors());
app.use(bodyParser.json({ extended: false }));
app.use(cookieParser())

app.use('/user' , UserRoute)
app.use('/category' , categoryRoute)
app.use('/blog' , BlogRoute)
app.use('/comment' , CommentRoute)
