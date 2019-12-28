const Student = require('../../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
require('dotenv');

const { generateLoginToken } = require('../../util/generateToken');
const {
    validateRegisterInput,
    validateLoginInput
} = require('../../util/validator');

module.exports = {
    Mutation: {
        async login(pqrent, { email, password }) {
            const { errors, valid } = validateLoginInput(email, password);

            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            const user = await Student.findOne({ email });

            if (!user) {
                errors.general = 'User not found';
                throw new UserInputError('User not found', { errors });
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                errors.general = 'Wrong crendetials';
                throw new UserInputError('Wrong crendetials', { errors });
            }

            const token = generateLoginToken(user);

            return {
                ...user._doc,
                id: user._id,
                token
            };
        },
        async register(parent, { registerInput: { name, email, phone, password, confirmPassword } }) {

            // validate user data
            const { valid, errors } = validateRegisterInput(
                name,
                email,
                password,
                confirmPassword
            );

            if (!valid) {
                throw new UserInputError('Errors', { errors });
            }

            // making sure user doesnt already exist

            const user = await Student.findOne({ email });
            if (user) {
                throw new UserInputError('email is taken', {
                    errors: {
                        username: 'This email is taken'
                    }
                });
            }
            const user2 = await Student.findOne({ phone });
            if (user2) {
                throw new UserInputError('Phone Number is taken', {
                    errors: {
                        username: 'This Phone Number is taken'
                    }
                });
            }
            // hash password and create am auth token

            password = await bcrypt.hash(password, 12);

            const newStudent = new Student({
                email,
                name,
                phone,
                password,
                createdAt: new Date().toISOString()
            });

            const student = await newStudent.save();

            const token = generateLoginToken(student);
            return {
                ...student._doc,
                id: student.id,
                token
            }

        }

    }
}