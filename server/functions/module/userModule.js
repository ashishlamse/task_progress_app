const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');
require('dotenv').config({path:'../.env'});
/**
 * shcema for register user data.
 */
const registrationSchema = new mongoose.Schema({
    first_name: {
        type: String,
        minlength: 2,
        maxlength: 55,
        required: true
    },
    last_name: {
        type: String,
        minlength: 2,
        maxlength: 55,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    date:{
        type:Date
    }
});

/**
 * This method is used to generate token. 
 */
registrationSchema.methods.generateAuthToken = function () {
    console.log(process.env.secrete_key)
    const token = jwt.sign({ email: this.email,first_name:this.first_name,last_name:this.last_name},process.env.secrete_key,{expiresIn: 86400});
    return token;
};

/**
 * This function use for check data validation.
 * @param {data of req } register 
 */
function validateRegister(register) {
    const schema = {
        first_name: Joi.string().min(2).max(50).required(),
        last_name: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(register, schema);
}
const Register = mongoose.model('Register_user ', registrationSchema);
//exports.registrationSchema = registrationSchema;
exports.Register = Register;
exports.validate = validateRegister;