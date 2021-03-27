const router = require('express').Router();

router.use('/users', require('./userRouter'));
router.use('/',require('./authRouter'));
router.use('/task',require('./task'));
module.exports = router;