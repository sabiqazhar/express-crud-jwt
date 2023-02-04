const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token){
        res.status(400).json({
            message: "access denied!"
        })
    }

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({
            message: 'Invalid Token!'
        })
    }
}

module.exports = verifyToken