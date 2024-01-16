
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const artistInput = document.getElementById('artist-search').value;
        const yearInput = document.getElementById('year-search').value;
        // console.log(artistInput, songInput, yearInput);

        // let querystring="";

        // if (artistInput) { 
        //     querystring = `${artistInput}`;
        // } else if (songInput) {
        //     querystring = `release:${songInput}`;
        // } else if (yearInput) {
        //     querystring = `year:${yearInput}`;
        // }
        //       try {
        //         const response = await fetch(`${querystring}`, {
        //           method: 'GET',
        //           headers: {
        //             'user-agent': 'Wonderwall/1.0 (indra.levi.manahan@gmail.com)',
        //           },
        //         });

        //         if (response.ok) {
        //           const data = await response.json();
        //           const artistAlbums = data.releases;
        //           console.log(artistAlbums);
        //           console.log(data);
        //         } else {
        //           console.error(`Error: ${response.status}`);
        //         }
        //       } catch (error) {
        //         console.error('Error:', error.message);
        //       }
        //     });
        //   });

        const apiUrl = 'https://musicbrainz.org/ws/2/';
        const query = [];

        if (artistInput) {
            query.push(`artist/?query=artist:${encodeURIComponent(artistInput)}`);
        }

        if (yearInput) {
            console.log(yearInput);
            document.location.replace(`/year/${yearInput}`);
        }

        const fullUrl = apiUrl + query.join('&') + '&fmt=json';

        try {
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    'user-agent': 'Wonderwall/1.0 (indra.levi.manahan@gmail.com)',
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                console.log(data.artists[0].name);
                const artistNameElement = document.getElementById('artistName')
                console.log("artistNameElement", artistNameElement)
                if (artistNameElement) {
                    artistNameElement.innerHTML = data.artists[0].name;
                } else {
                    console.error('No elements with the class "artistName" found.');
                }

                const artistCountryElement = document.getElementsByClassName('artistCountry')
                if (artistCountryElement.length > 0) {
                    artistCountryElement[0].innerHTML = `Country: ${data.artists[0].country}`;
                } else {
                    console.error('No elements with the class "artistCountry" found.');
                }

                const artistLifespanElement = document.getElementsByClassName('artistLifespan')
                if (artistLifespanElement.length > 0) {
                    artistLifespanElement[0].innerHTML =`Years: ${data.artists[0]["life-span"].begin} until ${data.artists[0]["life-span"].end}`;
                } else {
                    console.error('No elements with the class "artistLifespan" found.');
                }

            } else {
                console.error(`Error: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    });
});