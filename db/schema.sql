DROP DATABASE IF EXISTS music_db;
CREATE DATABASE music_db;

USE music_db;

-- Create Artists table
CREATE TABLE Artists (
    ArtistID INT PRIMARY KEY,
    ArtistName VARCHAR(100) NOT NULL
);

-- Create Genres table
CREATE TABLE Genres (
    GenreID INT PRIMARY KEY,
    GenreName VARCHAR(50) NOT NULL
);

-- Create Years table
CREATE TABLE Year (
    YearID INT PRIMARY KEY,
    YearValue INT NOT NULL
);

-- Create Albums table
CREATE TABLE Albums (
    AlbumID INT PRIMARY KEY,
    AlbumTitle VARCHAR(100) NOT NULL,
    ArtistID INT NOT NULL,
    YearID INT NOT NULL,
    FOREIGN KEY (ArtistID) REFERENCES Artists(ArtistID),
    FOREIGN KEY (YearID) REFERENCES Year(YearID)
);

-- Create Songs table
CREATE TABLE Songs (
    SongID INT PRIMARY KEY,
    SongTitle VARCHAR(100) NOT NULL,
    FOREIGN KEY (ArtistID) REFERENCES Artists(ArtistID),
);