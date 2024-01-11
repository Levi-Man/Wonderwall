// const { Artist, Album, Genre, Song, Year } = require('./models')


// getChart('hot-100', '1994-08-27', (err, chart) => {
//     // const getchart = req ('billboard-top-100')
//     // console.log(chart.week);
//     // console.log(chart.songs);
//     // console.log(chart.songs[0]);
//     // title of top song 
//     // console.log(chart.songs[0].title);
//     // artist of top songs 
//     // console.log(chart.songs[0].artist);
//     // rank of top song (1) 
//     // console.log(chart.songs[0].rank);
//     // URL for Billboard cover image of top song 
//     // console.log(chart.songs[0].cover);
// });

// // Current Chart Default
// getChart((err, chart) => {
//     // if (err) console.log(err);
//     // console.log(chart);
// });

// // date defaults to Saturday of this week
// getChart('rock-digital-song-sales', (err, chart) => {
//     // if (err) console.log(err);
//     // console.log(chart);
// });

let check = async () => {
    try {
        // Artist Lookup "nirvana"

        const artistData = await fetch('http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json');
        const jsonArtist = await artistData.json();
        console.log(jsonArtist);
        const artistHtml = `<h2>${jsonArtist.name}</h2>`;
        const artist = document.getElementById("artist");
        artist.innerHTML = artistHtml;

        // Song lookup "I want it that way"

        const songData = await fetch('https://musicbrainz.org/ws/2/release-group/e849bcf2-c581-3b27-98be-a1292754f234?inc=aliases%2Bartist-credits%2Breleases&fmt=json');
        const jsonSong = await songData.json();
        console.log(jsonSong);
        const songHtml = `<h2>${jsonSong.title}</h2>`;
        const song = document.getElementById("song");
        song.innerHTML = songHtml;

        // Genre lookup "Alternative"

        //     const genreData = await fetch('http://musicbrainz.org/ws/2/genre/???&fmt=json');
        //     const jsonGenre = await genreData.json();
        //     console.log(jsonGenre);
        //     const genreHtml = `<h2>${jsonGenre...
        // }</h2 > `;
        //     const genre = document.getElementById("genre");
        //     genre.innerHTML = genreHtml;

        // Year lookup "1994"

        // const yearData = await fetch('http://musicbrainz.org/ws/2/release/***?inc=artist-credits+labels+discids+recordings&fmt=json');
        // const yearHtml = `< div ><h2>${}</h2><p>${}</p></div > `;

        // const jsonD = await data.json();

        // console.log(jsonD);


        // console.log(jsonD.name);

    }
    catch (err) {
        console.log(err);
    }
};

check();