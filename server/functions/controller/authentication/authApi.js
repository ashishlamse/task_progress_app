const Joi = require('joi');
const { Register } = require('../../module/userModule');
const authRouter = require('express').Router();
var message=require('../../constant/responseMessage').msg;
var {verifyPassword}=require('../../service/passwordCheck')

/**
 * This api used for sign in.
 * @param {*} req 
 * @param {*} res 
 */

authRouter.signIn= async (req, res) => {
try{
	const { error } = validate(req.body);
	if (error) return res.status(400).json({message:error.details[0].message});

	let user = await Register.findOne({ email: req.body.email });
	if (!user) return res.status(404).json({message:message.INVALID_CREDENTIALS});

	const validpassword = await verifyPassword(req.body.password,user.password);
	if (!validpassword) return res.status(404).json({message:message.INVALID_CREDENTIALS});
	console.log(user)
	const token = user.generateAuthToken();
	res.status(200).json({message:message.LOGIN_SUCCESSFULL,token:token});	
}catch(err){
	console.log("error",err);
	return res.status(502).json({message:message.SOMETHING_WENT_WRONG});
}
};

/**
 * This function use to validate user provided data.
 * @param { user provided data.} auth 
 */
function validate(auth) {
	const schema = {
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required()
	};
	return Joi.validate(auth, schema);
}



module.exports = authRouter;