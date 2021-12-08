// import functions and grab DOM elements
import { renderGenre } from './render-genres.js';
import genres from './genres.js';
import { renderInstrument } from './render-instruments.js';
import instruments from './instruments.js';
import { renderMusician } from './render-musicians.js';
import musicians from './musicians.js';
import { renderAlbum } from './render-albums.js';
import albums from './albums.js';

const genresEl = document.getElementById('genres-list');
const instrumentsEl = document.getElementById('instruments-list');
const musiciansEl = document.querySelector('#musicians-list');
const albumsEl = document.querySelector('#albums-list');
// initialize global state

for (let genre of genres) {
    const genreEl = renderGenre(genre);

    genresEl.append(genreEl);
}

for (let instrument of instruments) {
    const instrumentEl = renderInstrument(instrument);

    instrumentsEl.append(instrumentEl);
}

for (let musician of musicians) {
    const musicianEl = renderMusician(musician);
  
    musiciansEl.append(musicianEl);
}

for (let album of albums) {
    const albumEl = renderAlbum(album);
    
    albumsEl.append(albumEl);
}

