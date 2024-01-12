const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');

// router.use('/users', userRoutes);
router.use('/artist', artistRoutes);

module.exports = router;