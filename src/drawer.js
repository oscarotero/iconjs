const drawers = { l, r, c };

export default function draw(size, data) {
    const icon = node('svg', {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        preserveAspectRatio: 'none'
    });

    data.forEach(item => {
        const name = item.shift();
        const attrs = item.map(i => Math.round(i * size));
        const element = drawers[name](...attrs);

        icon.append(element);
    });

    return icon;
}

//Draw a line or polyline
function l(x1, y1, x2, y2) {
    if (arguments.length > 4) {
        const points = Array.from(arguments)
            .map((coord, i, arr) => `${coord},${arr[i + 1]}`)
            .filter((v, i) => !(i % 2))
            .join(' ');

        return node('polyline', { points });
    }

    return node('line', { x1, y1, x2, y2 });
}

//Draw a circle
function c(cx, cy, r) {
    return node('circle', { cx, cy, r });
}

//Draw a rectangle
function r(x, y, width, height) {
    return node('rect', { x, y, width, height });
}

//Draw a svg node
function node(name, properties = {}) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', name);

    Object.keys(properties).forEach(name => node.setAttributeNS(null, name, properties[name]));

    return node;
}
