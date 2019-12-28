const {model, Schema} = require('mongoose');



const recruiterSchema = new Schema({
    companyName: String,
    password: String,
    email: String,
    createdAt: String
});

module.exports = model('Recruiter', recruiterSchema);