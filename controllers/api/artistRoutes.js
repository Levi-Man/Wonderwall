const router = require('express').Router();
const { Artist } = require('../../models');
const withAuth = require('../../utils/auth');

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

module.exports = router;
