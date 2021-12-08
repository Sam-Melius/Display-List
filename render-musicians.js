export function renderMusician(musician){
    const musicianDiv = document.createElement('div');
    const musicianNameEl = document.createElement('p');
    const musicianPositionEl = document.createElement('p');
    const musicianImgEl = document.createElement('img');

    const bandDiv = document.createElement('div');
    const bandNameEl = document.createElement('p');
    const bandTypeEl = document.createElement('p');
    const bandImgEl = document.createElement('img');

    musicianDiv.classList.add('musician');
    bandDiv.classList.add('band');

    musicianNameEl.textContent = musician.name;
    musicianPositionEl.textContent = musician.position;
    musicianImgEl.src = musician.url_image;
    bandNameEl.textContent = musician.band.name;
    bandTypeEl.textContent = musician.band.type;
    bandImgEl.src = musician.band.img;

    bandDiv.append(bandNameEl, bandTypeEl, bandImgEl);

    musicianDiv.append(musicianNameEl, musicianPositionEl, musicianImgEl, bandDiv);

    return musicianDiv;
}