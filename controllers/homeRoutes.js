const router = require('express').Router();
const { Artist, User } = require('../models');
const withAuth = require('../utils/auth');
const { getChart } = require('billboard-top-100');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const artistData = await Artist.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const artists = artistData.map((artist) => artist.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      artists,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});





// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Artist }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/year/:id', async (req, res) => {
  try {
    console.log('hello');
    await getChart('hot-100', `${req.params.id}-01-01`, (err, chart) => {
      if (err) console.log(err);

      const filteredChart = chart.songs.filter((c) => c.rank < 11);

      const printYear = (req.params.id);

      res.render('homepage', {
        years: filteredChart, printYear
      })

    }
    )
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
// const router = require('express').Router();
// const { Artist, Genre, Song, Year, Album } = require('../models');
// // const withAuth = require('../utils/auth');
// router.get('/', async (req, res) => {
//     console.log('connected');
// });
// router.get('/artist/:id', async (req, res) => {
//     try {
//         const artistData = await fetch(`http://musicbrainz.org/ws/2/artist/?query=${req.params.id}&method=indexed&inc=aliases&fmt=json`, {
//             method: 'GET',
//             headers: {
//                 'user-agent': 'Wonderwall/<1.0> ( morgs99@gmail.com )'
//             }
//         });
//         // console.log(artistData);
//         const jsonArtist = await artistData.json();
//         const artistName = jsonArtist["artists"][0].name;
//         const releasesData = await fetch(`http://musicbrainz.org/ws/2/release/?query=arid:${jsonArtist["artists"][0].id}&primarytype=Album&fmt=json`, {
//             method: 'GET',
//             headers: {
//                 'user-agent': 'Wonderwall/<1.0> ( morgs99@gmail.com )'
//             }
//         });
//         const jsonReleases = await releasesData.json();
//         const albums = jsonReleases.releases.map(release => ({
//             title: release.title,
//             releaseDate: release.date,
//         }));
//         const responseData = {
//             artistName,
//             albums,
//         };
//         // console.log(jsonArtist);
//         res.status(200).json(responseData);
//         // res.render('artist', {
//         //     jsonArtist,
//         //     logged_in: req.session.logged_in
//         // });
//     } catch (err) {
//         console.error(err)
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
// module.exports = router;