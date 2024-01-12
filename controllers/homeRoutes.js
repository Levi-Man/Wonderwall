const router = require('express').Router();
const { Artist, Genre, Song, Year, Album } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    console.log('connected');
});

router.get('/artist/:id', async (req, res) => {
    try {
        const artistData = await fetch(`http://musicbrainz.org/ws/2/artist/?query=${req.params.id}&method=indexed&inc=aliases&fmt=json`, {
            method: 'GET',
            headers: {
                'user-agent': 'Wonderwall/<1.0> ( morgs99@gmail.com )'
            }
        });
        // console.log(artistData);
        const jsonArtist = await artistData.json();
        // console.log(jsonArtist);
        res.status(200).json(jsonArtist["artists"][0].name);

        // res.render('artist', {
        //     jsonArtist,
        //     logged_in: req.session.logged_in
        // });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;