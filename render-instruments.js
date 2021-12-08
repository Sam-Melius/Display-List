export function renderInstrument(instrumentData) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('instrument');

    div.style.fontsize = `${instrumentData.age}rem`;
    div.style.backGroundColor = instrumentData.color;
    
    p.textContent = instrumentData.name;
    img.src = instrumentData.image_url;

    div.append(p, img);

    return div;
}