const drawers = { l, r, c, p };

export default function draw(size, data) {
    const icon = node('svg', {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        preserveAspectRatio: 'none'
    });

    data.forEach(item => {
        const name = item.shift();
        const attrs = item.map(i => coord(i * size, true));
        const element = drawers[name](...attrs);

        icon.append(element);
    });

    return icon;
}

//Draw a line or polyline
function l(x1, y1, x2, y2) {
    if (arguments.length > 4) {
        const points = pointsAttr(Array.from(arguments));

        return node('polyline', { points });
    }

    return node('line', { x1, y1, x2, y2 });
}

//Round a coordinate
function coord(pos, allowHalf = false) {
    if (allowHalf) {
        let dec = pos % 1;

        pos = Math.floor(pos);

        if (dec < 0.33) {
            return pos;
        }

        if (dec < 0.66) {
            return pos + 0.5;
        }

        return pos + 1;
    }

    return Math.round(pos);
}

//Draw a circle
function c(cx, cy, r) {
    return node('circle', { cx, cy, r });
}

//Draw a rectangle
function r(x, y, width, height) {
    return node('rect', { x, y, width, height });
}

//Draw a polygon
function p() {
    const points = pointsAttr(Array.from(arguments));

    return node('polygon', { points });
}

//Generate points attribute
function pointsAttr(points) {
    return points
        .map((coord, i, arr) => `${coord},${arr[i + 1]}`)
        .filter((v, i) => !(i % 2))
        .join(' ');
}

//Draw a svg node
function node(name, properties = {}) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', name);

    Object.keys(properties).forEach(name => node.setAttributeNS(null, name, properties[name]));

    return node;
}
