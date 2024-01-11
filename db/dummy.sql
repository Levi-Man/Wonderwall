INSERT INTO Artists (ArtistName) VALUES
-- 1
("Nirvana"),
-- 2
("Ace of Base"),
-- 3
("All-4-One"),
-- 4
("Boyz II Men"),
-- 5
("Celine Dion"),
-- 6
("Mariah Carey"),
-- 7
("Lisa Loeb"),
-- 8
("Toni Braxton"),
-- 9
("Bryan Adams"),
-- 10
("Janet Jackson"),
-- 11
("Madonna")
;

INSERT INTO Songs (SongTitle, ArtistId) VALUES
("I'll Remember", 11),
("Again", 10),
("Don't Turn Around", 2),
("All That She Wants", 2),
("All for Love", 9),
("Breath Again", 8),
("Stay (I Miss You)", 7),
("Hero", 6),
("The Power of Love", 5),
("I'll Make Love to You", 4),
("I Swear", 3),
("The Sign", 2),
("Smells Like Teen Spirit", 1),
;

INSERT INTO Genres (GenreName) VALUES 
("Pop"),
("Hip-Hop"),
("R&B"),
("Alternative"),
("Dance-Pop"),
("Classic Rock")
;

INSERT INTO Year (YearValue) VALUES 
(1991),
(1992),
(1993),
(1994),
(1995)
;

INSERT INTO Albums (AlbumTitle, ArtistId, YearId) VALUES
("Happy Nation", 2, 4),
("Nevermind", 1, 1),
("Artist Single", 4, 4),
("Music Box", 6, 3)
;