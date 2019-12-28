const {model, Schema} = require('mongoose');


const studentSchema = new Schema({
    name: String,
    password: String,
    email: String,
    phone: Number,
    createdAt: String
});

module.exports = model('Student', studentSchema);