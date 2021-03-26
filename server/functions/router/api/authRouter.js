const loginApiRouter = require('../../controller/login/loginModule');
const authRouter = require('express').Router();

// auth router
authRouter.post('/logIn', loginApiRouter.logIn);
authRouter.post('/forgotPassword', loginApiRouter.forgotPassword);
authRouter.put('/resetPassword', loginApiRouter.resetPassword);


module.exports = authRouter;