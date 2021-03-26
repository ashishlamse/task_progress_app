var registerUsermodule = require('../../controller/registerUser/registerModule');
var checkEmail = require('../../middlware/checkUserEmail');
var userCount = require('../../middlware/userCount');
const userRouter = require('express').Router();
const authenticate=require('../../middlware/ authentication');
//User Router
userRouter.get('/:offset',authenticate.verifyTocken,userCount.findUserCount,registerUsermodule.getUser);
userRouter.post('/',checkEmail.checkEmail, registerUsermodule.registerUser);
userRouter.put('/:id',authenticate.verifyTocken, checkEmail.checkEmailUpdate, registerUsermodule.updateUser);
userRouter.delete('/:id',authenticate.verifyTocken,registerUsermodule.deleteUser);
module.exports = userRouter;