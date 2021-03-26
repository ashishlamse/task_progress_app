const { route } = require('../../middlware/userCount');

const router = require('express').Router();

router.use('/users', require('./userRouter'));
router.use('/', require('./authRouter'));
router.use('/advertisements',require('./advertisementRouter'));
router.use('/categories',require('./categories'));
router.use('/notifications',require('./notification'));
router.use('/weatherReport',require('./weather'));
router.use('/migration',require('./migration'));
router.use('/places',require('./placesRouter'));
router.use('/insta',require('./instaRouter'));
router.use('/event',require('./eventRouter'));

module.exports = router;