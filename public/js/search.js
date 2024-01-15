
  document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const artistInput = document.getElementById('artist-search').value;
      const songInput = document.getElementById('song-search').value;
      const yearInput = document.getElementById('year-search').value;
console.log(artistInput, songInput, yearInput);

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

const apiUrl = 'https://musicbrainz.org/ws/2/artist/?';
const query = [];

if (artistInput) {
  query.push(`artist:${encodeURIComponent(artistInput)}`);
}
if (songInput) {
  query.push(`recording:${encodeURIComponent(songInput)}`);
}
if (yearInput) {
  query.push(`date:${encodeURIComponent(yearInput)}`);
}

const fullUrl = apiUrl + 'query=' + query.join('%20AND%20') + '&fmt=json';

try {
  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: {
      'user-agent': 'Wonderwall/1.0 (indra.levi.manahan@gmail.com)',
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    
  } else {
    console.error(`Error: ${response.status}`);
  }
} catch (error) {
  console.error('Error:', error.message);
}
});
});