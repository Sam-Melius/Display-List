export function renderAlbum(albumData) {
    const albumEl = document.createElement('div');
    const titleEl = document.createElement('p');

    albumEl.classList.add('album');

    titleEl.textContent = `${albumData.artist} album: ${albumData.title}`;
    
    albumEl.append(titleEl);

    for (let track of albumData.tracks) {
        const trackEl = document.createElement('p');
        trackEl.textContent = track;
        trackEl.classList.add('track');
        albumEl.append(trackEl);
    }

    return albumEl;
}