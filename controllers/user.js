const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const regist = async (req, res) => {
    const body = req.body

    if (!body.title || !body.status) {
        res.status(401).json({
            status: 401,
            message: `Validation error: regist validation failed` 
        })
        return
    }


    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(body.password, salt)
    const username = await UserModel.findOne({username: body.username})
    const email = await UserModel.findOne({email: body.email})
    if (username || email) {
        return res.status(401).json({
            message: 'Username or Email already use'
        })
    }

    const user = new UserModel({
        username: body.username,
        email: body.email,
        password: password,
        status: body.status
    })

    const userSave = user.save()
}

const login = async (req, res) => {
    const body = req.body

    const user = await UserModel.findOne({username: body.username})
    if(!user) {
        return res.status(400).json({
            status: 400,
            message: 'username not registered'
        })
    }
    
    const comparePass = await bcrypt.compare(body.password, user.password)
    if(!comparePass) {
        return res.status(400).json({
            status: 400,
            message: 'password not resgistered'
        })
    }

    const token = jwt.sign({username: user.username}, process.env.SECRET_KEY)
    res.header('auth-token', token).json({
        token: token
    })
}

module.exports = {regist, login}