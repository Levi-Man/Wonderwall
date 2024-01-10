let check = async () => {
    const data = await fetch('http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases');
    const jsonD = await data.json();
    await console.log(jsonD);
};

check();