const jwt = require('jsonwebtoken');

function is_User_loggedIn (req, res , next ) {
    const {authorization} = req.headers;
    // const {authorization = req.header();
    if (!authorization) return res.status(401).send('acess denied')

    try{
        const payload = jwt.verify(authorization , process.env.Token_key)
        res.user = payload
        next()
        
    }catch(err){
       if(err.message==="jwt malformed") res.send("Invalid token")
    }
}


function is_User_admin (req, res , next ) {
    const {authorization} = req.headers;
    // const {authorization = req.header();
    if (!authorization) return res.status(401).send('acess denied')

    try{
        const payload = jwt.verify(authorization , process.env.Token_key)
        res.user = payload
        if(res.user.role !== 'admin'){
            res.send('you are not admin')
        }
        next()
    }catch(err){
       if(err.message==="jwt malformed") res.send("Invalid token")
    }
}





module.exports = {is_User_loggedIn , is_User_admin }