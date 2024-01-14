const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');
const userRoutes = require('./userRoutes');

// router.use('/users', userRoutes);
router.use('/artist', artistRoutes);
router.use('/user', userRoutes);

module.exports = router;