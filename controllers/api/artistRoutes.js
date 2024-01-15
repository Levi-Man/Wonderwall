const router = require('express').Router();
const { Artist } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/artist/:id', async (req, res) => {
  try {
    const artistData = await fetch(`http://musicbrainz.org/ws/2/artist/?query=${req.params.id}&method=indexed&inc=aliases&fmt=json`, {
      method: 'GET',
      headers: {
        'user-agent': 'Wonderwall/<1.0> ( indra.levi.manahan@gmail.com )'
      }
    });
    // console.log(artistData);
    const jsonArtist = await artistData.json();
    const artistName = jsonArtist["artists"][0].name;
    const releasesData = await fetch(`http://musicbrainz.org/ws/2/release/?query=arid:${jsonArtist["artists"][0].id}&primarytype=Album&fmt=json`, {
      method: 'GET',
      headers: {
        'user-agent': 'Wonderwall/<1.0> ( morgs99@gmail.com )'
      }
    });
    const jsonReleases = await releasesData.json();
    const albums = jsonReleases.releases.map(release => ({
      title: release.title,
      releaseDate: release.date,
    }));
    const responseData = {
      artistName,
      albums,
    };
    res.render('artist', {
      ...responseData,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newArtist = await Artist.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newArtist);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const artistData = await Artist.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!artistData) {
      res.status(404).json({ message: 'No artist found with this id!' });
      return;
    }

    res.status(200).json(artistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search', async (req, res) => {
  const { artist, release, year} = req.query;

  if (query.artist) { 
    querystring = `artist:${artistInput}`;
    query = `artist:${query.artist}`
} else if (query.song) {
    querystring = `release=${songInput}`;
    query = `release=${query.song}`
} else if (query.year) {
    querystring = `year=${yearInput}`;
    query =  `year:${query.year}`
}
  try {
    const response = await fetch(`http://musicbrainz.org/ws/2/artist/?query=${query}%20AND%20&fmt=json`, {
      method: 'GET',
      headers: {
        'user-agent': 'Wonderwall/1.0 (indra.levi.manahan@gmail.com)',
      },
    });
console.log(response);
    if (response.ok) {
      const data = await response.json();
      const artistAlbums = data.releases;
// console.log(artistAlbums);
      res.render('artist-details', {
        artistName: artistInput, 
        albums: artistAlbums,
        logged_in: req.session.logged_in,
      });
    } else {
      console.error(`Error: ${response.status}`);
      res.status(500).json({ error: 'Failed to fetch data from MusicBrainz. Please try again.' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  }
});


module.exports = router;
