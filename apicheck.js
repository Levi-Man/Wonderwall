let check = async () => {
    try {
        // Artist Lookup "nirvana"
        const data = await fetch('http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases&fmt=json');
        // Song lookup "I want it that way"
        // const data = await fetch('');
        // Genre lookup "Alternative"
        // const data = await fetch('http://musicbrainz.org/ws/2/genre/???&fmt=json');
        // Year lookup "1994"
        // const data = await fetch('http://musicbrainz.org/ws/2/release/***?inc=artist-credits+labels+discids+recordings&fmt=json');
        const jsonD = await data.json();
        console.log(jsonD);
        // console.log(jsonD.name);

    }
    catch (err) {
        console.log(err);
    }
};

check();