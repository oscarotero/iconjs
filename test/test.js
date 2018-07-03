import draw from '../src/drawer.js';

fetch('../icons/icons.json').then(res => res.json()).then(icons => {
    const body = document.body;

    for (let name in icons) {
        body.append(draw(111, icons[name]));
    }
});
