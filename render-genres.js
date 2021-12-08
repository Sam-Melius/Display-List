export function renderGenre(genreData) {
    const p = document.createElement('p');

    p.textContent = genreData;
    p.classList.add('genre');

    if (genreData === 'Rock') {
        p.style.backgroundColor = 'red';
    }

    if (genreData.length === 3) {
        p.style.backgroundColor = 'purple';
    }

    if (genreData[2] === 'p') {
        p.style.transform = 'rotate(30deg)';
    }

    return p;
}