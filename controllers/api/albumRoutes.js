const router = require("express").Router();
const { Artist, Genre, Song, Year, Album } = require("../../models");
// const withAuth = require('../utils/auth');


router.get("/artist/:id/albums", async (req, res) => {
    // Fetch albums from MusicBrainz API using the artis's ID
    try {
        const albumsData = await fetch(
            `http://musicbrainz.org/ws/2/release/?artist=${req.params.id}&primarytype=album&fmt=json`,
            {
                method: "GET",
                headers: {
                    "user-agent": "Wonderwall/<1.0> ( morgs99@gmail.com )",
                },
            }
        );
// console.log(req.params);
        const jsonAlbums = await albumsData.json();

        const albums = jsonAlbums.releases.map((release) => ({
            title: release.title,
            releaseDate: release.date,
            id: release.id, 
        }));

        res.status(200).json(albums);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/album/:id/songs', async (req, res) => {
    try {
        // Fetch songs from MusicBrainz API using the album's ID
        const songsData = await fetch(`http://musicbrainz.org/ws/2/recording/?artist=${req.params.id}&fmt=json`, {
            method: 'GET',
            headers: {
                'user-agent': 'Wonderwall/<1.0> ( morgs99@gmail.com )'
            }
        });

        const jsonSongs = await songsData.json();

        // Extract relevant song information (titles, durations, etc.)
        const songs = jsonSongs.recordings.map(recording => ({
            title: recording.title,
            duration: recording.length,
            id: recording.id,  // Use the recording ID if needed
        }));

        res.status(200).json(songs);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
