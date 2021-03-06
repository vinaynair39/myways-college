const jwt = require('jsonwebtoken');

// Generate Token using secret from process.env.JWT_SECRET
const generateLoginToken = (user, tokenExp) => {

    var u = {
        _id: user._id.toString()
    };

    return token = jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

module.exports.generateLoginToken = generateLoginToken;

// Generate Test questions Token using secret from process.env.JWT_SECRET
const generateTestLimitToken = (user, tokenExp) => {

    var u = {
        _id: user._id.toString()
    };

    return token = jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

module.exports.generateTestLimitToken = generateTestLimitToken;