const router = require('express').Router();
const userRoutes = require('./userRoutes');
const artistRoutes = require('./artistRoutes');
const yearRoutes = require('./yearRoutes');

router.use('/users', userRoutes);
router.use('/artist', artistRoutes);
router.use('/year', yearRoutes);

module.exports = router;
