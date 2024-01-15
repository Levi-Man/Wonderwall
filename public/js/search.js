
  document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const artistInput = document.getElementById('artist-search').value;
      const songInput = document.getElementById('song-search').value;
      const yearInput = document.getElementById('year-search').value;

      try {
        const response = await fetch(`/search?artistInput=${artistInput}&songInput=${songInput}&yearInput=${yearInput}`, {
          method: 'GET',
          headers: {
            'user-agent': 'Wonderwall/1.0 (indra.levi.manahan@gmail.com)',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const artistAlbums = data.releases;
          console.log(artistAlbums);
          console.log(data);
        } else {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    });
  });

