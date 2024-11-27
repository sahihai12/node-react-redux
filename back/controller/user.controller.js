// user model 
const User = require('../models/user.model');
const Joi = require('@hapi/joi');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// register 
const register = async (req, res) =>{
    // res.send(req.file)

    // validation with joi 
    const schema = Joi.object({
        full_name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        contact: Joi.number().required(),
        password: Joi.string().required(),
        cpassword: Joi.string().required(),
        role: Joi.string()
    })

    const {error} = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    // if password and cpassword are not equal
    if (req.body.password !== req.body.cpassword) return res.status(400).json({password :'password not matched'})
    
    // check email existence 
    const emailCheck = await User.findOne({email: req.body.email})
    if (emailCheck) return res.status(400).json({'email': 'email already exists'})
    
    // hash password
    const saltround = 10 // how much time hash alogorithm run
    const salt = await bycrypt.genSalt(saltround)
    const hash = await bycrypt.hash(req.body.password , salt)
    if (!hash) return res.status(401).json('pass not hashed')

    const user = new User({
        "full_name": req.body.full_name,
        "username": req.body.username, 
        "email": req.body.email, 
        "contact": req.body.contact,
        "role": req.body.role || "user",
        "p_image": req.file.filename,
        "password": hash,
    })
    
    try {
        const saveUser = await user.save()
        res.json(saveUser);
    } catch (error) {
        res.status(400).json(error.keyValue);
    }
}

// login
const login = async(req, res) =>{
    // validation with joi 
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        cpassword: Joi.string().required()
    })

    const {error} = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    // if password and cpassword are not equal
    if (req.body.password !== req.body.cpassword) return res.status(400).json({'password' :'password not matched'})

    // check email existence 
    const emailCheck = await User.findOne({email: req.body.email})
    if (!emailCheck) return res.status(400).json({'email': 'email not exists'})

    // check password is correct
    const validPass = await bycrypt.compare(req.body.password , emailCheck.password)
    if (!validPass) return res.status(400).json({'password': 'pasword not matched'})

    const token = jwt.sign({id: emailCheck._id , role: emailCheck.role} , process.env.Token_key);
    // res.send('ok')
    res.status(200).json({userinfo : emailCheck , "token" : token});
}

// update user info 
const updateUser = async (req, res) =>{
    const {id} = req.params
    const givenData = req.body
    try {
        await User.updateOne({"_id": id} , {...givenData})
        res.send('sucessfully update ');
    } catch (error) {
        res.send(error)
    }
}


// delete a user 
const deleteUser = async (req, res) =>{
    try {
        await User.deleteOne({"_id": req.params.id})
        res.send('sucess fully delete');
    } catch (error) {
        res.send(error)
    }
}


const getALL = async(req, res) => {
    const allusers = await User.find({})
    res.json(allusers)
}

module.exports = {register , login , updateUser , deleteUser , getALL}

