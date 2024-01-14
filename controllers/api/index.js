const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');
const userRoutes = require('./userRoutes');

const albumRoutes = require('./albumRoutes');

router.use('/album', albumRoutes);
// router.use('/users', userRoutes);
router.use('/artist', artistRoutes);
router.use('/user', userRoutes);

module.exports = router;