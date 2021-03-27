const userRouts=require('express').Router();
const bcrypt=require('bcrypt');
var {Register,validate}=require('../../module/userModule');
var {generateHashPassword}=require('../../service/passwordCheck')
var message =require('../../constant/responseMessage').msg;

/**
 * This api is used to register new user.
 * @param {*} req 
 * @param {*} res 
 */
userRouts.registerUser= async(req,res)=>{
try{
    //This is for validate req data.
    const { error } = validate(req.body);
	if (error) return res.status(400).json({message:error.details[0].message});
	
    //This is for check email duplication.
	let user = await Register.findOne({ email: req.body.email });
	if (user) return res.status(404).json({message:message.USER_WITH_SAME_EMAIL});

    //This is for generate hashed password.
	const password = generateHashPassword(req.body.password);

	const register = new Register({
		first_name: req.body.first_name,
        last_name: req.body.last_name,
		email: req.body.email,
		password: password,
        createdAt:new Date()
	});
	
    await register.save();
    
    return	res.status(200).json({message:message.USER_REGISTER});
}catch(error){
    console.log("Error",error);
    return res.status(502).json({message:message.SOMETHING_WENT_WRONG})
}
}



module.exports=userRouts;