 const authApiRouter = require('../../controller/authentication/authApi');
const authRouter = require('express').Router();

 // auth router
 authRouter.post('/signIn', authApiRouter.signIn);


 module.exports = authRouter;