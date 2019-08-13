const jwt  = require('jsonwebtoken');
const secret = require('../config/keys').secretOrKey;
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decoded = await jwt.verify(token, secret);
        const userData = decoded;
        next();
    }catch(e) {
        return res.status(400).json({message: "Not authenticated"});
    }
}