var registerUsermodule = require('../../controller/user/userApi');
const userRouter=require('express').Router();
//User Router
userRouter.post('/',registerUsermodule.registerUser);
module.exports = userRouter;