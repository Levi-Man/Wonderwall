// const { Artist, Album, Genre, Song, Year } = require('./models')
const { getChart } = require('billboard-top-100');

getChart('hot-100', '1994-08-27', (err, chart) => {
    // const getchart = req ('billboard-top-100')

    console.log(chart.week);
    let songs = chart.songs;
    let jsonSongs = songs.json();
    let chartLook = document.getElementById("chart");
    let songHtml = `<ul><li>${jsonSongs[0].title}</li></ul>`;
    chartLook.innerHTML = songHtml;


    // console.log(chart.songs[0]);
    // title of top song 
    // console.log(chart.songs[0].title);
    // artist of top songs 
    // console.log(chart.songs[0].artist);
    // rank of top song (1) 
    // console.log(chart.songs[0].rank);
    // URL for Billboard cover image of top song 
    // console.log(chart.songs[0].cover);

    if (err) {
        console.log(err);
    };
});

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

// let check = async () => {
//     try {
//         // Artist Lookup "nirvana"

//         const artistData = await fetch('http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json');
//         const jsonArtist = await artistData.json();
//         // console.log(jsonArtist);
//         const artistHtml = `<h2>${jsonArtist.name}</h2>`;
//         const artist = document.getElementById("artist");
//         artist.innerHTML = artistHtml;

//         // Song lookup "I want it that way"

//         const songData = await fetch('https://musicbrainz.org/ws/2/release-group/e849bcf2-c581-3b27-98be-a1292754f234?inc=aliases%2Bartist-credits%2Breleases&fmt=json');
//         const jsonSong = await songData.json();
//         // console.log(jsonSong);
//         const songHtml = `<h2>${jsonSong.title}</h2>`;
//         const song = document.getElementById("song");
//         song.innerHTML = songHtml;

//         // Genre lookup "Alternative"

//         const genreData = await fetch('http://musicbrainz.org/ws/2/tag/?query=rock&fmt=json');
//         const jsonGenre = await genreData.json();
//         // console.log(jsonGenre);
//         const genreHtml = `<h2><a href="https://musicbrainz.org/genre/${jsonGenre.tags[0].name}">${jsonGenre.tags[0].name}</a></h2> `;
//         const genre = document.getElementById("genre");
//         genre.innerHTML = genreHtml;

//         // Year lookup "1994s"

//         const yearData = await fetch('http://musicbrainz.org/ws/2/release/?query=date:1994-02-01&fmt=json');
//         const jsonYear = await yearData.json();
//         // console.log(jsonYear);
//         const yearHtml = `<h2>${jsonYear.releases[2].date}</h2> `;
//         const year = document.getElementById("year");
//         year.innerHTML = yearHtml;

//         const albumData = await fetch('http://musicbrainz.org/ws/2/release-group/?query=alias:queen&primarytype:album&release:queen&fmt=json');
//         const jsonAlbum = await albumData.json();
//         // console.log(jsonAlbum);
//         const albumHtml = `<h2>${jsonAlbum["release-groups"][0].title}</h2>`;
//         const album = document.getElementById("album");
//         album.innerHTML = albumHtml;

//         const cover = await fetch('https://coverartarchive.org/release/4119c891-2706-3748-ae10-44976b191f2d');
//         const jsonCover = await cover.json();
//         // console.log(jsonCover);
//         const coverHtml = `<img src="${jsonCover.images[0].image}">`;
//         const coverspot = document.getElementById("cover");
//         coverspot.innerHTML = coverHtml;
//     }
//     catch (err) {
//         console.log(err);
//     }
// };

// check();