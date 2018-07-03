const icons = require('./icons/icons.json');
const draw = require('./src/node-drawer');
const fs = require('fs');

for (let name in icons) {
    const icon = draw(17, icons[name]);
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'black');
    icon.setAttribute('stroke-width', '2px');

    const filename = __dirname + `/icons/${name}.svg`;
    const content = `${icon.toString()}`;

    fs.writeFileSync(filename, content);
}