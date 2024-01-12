const Album = require('./Album');
const Artist = require('./Album');
const Genre = require('./Genre');
const Song = require('./Song');
const Year = require('./Year');

// -- artists would have many songs, would have many genres, would have many albums
Artist.hasMany(Song, {
    foreignKey: 'artist_id',
});

Song.belongsTo(Artist, {
    foreignKey: 'artist_id'
});

Artist.hasMany(Genre, {
    foreignKey: 'artist_id',
});

Genre.belongsTo(Artist, {
    foreignKey: 'artist_id'
});

Artist.hasMany(Album, {
    foreignKey: 'artist_id',
});

Album.belongsTo(Artist, {
    foreignKey: 'artist_id'
});


// -- genre has many artists


// -- year has many songs


// -- album has one artist, has one year


// -- song has one artist



module.exports = { Album, Artist, Genre, Song, Year };