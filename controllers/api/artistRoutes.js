const router = require('express').Router();
const { Artist } = require('../../models');
const withAuth = require('../../utils/auth');


// GET one artist
router.get('/artist/:id', async (req, res) => {
    try {
        const artistData = await Artist.findByPk(req.params.id, {
            include: [
                {
                    model: Artist,
                    attributes: [
                        ''
                    ],
                },
            ],
        });

        const artist = artistData.get({ plain: true });
        res.render('artist', { artist });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;