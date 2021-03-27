const router = require('express').Router();

router.use('/users', require('./userRouter'));
router.use('/',require('./authRouter'));

module.exports = router;