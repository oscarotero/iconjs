# iconjs
> Javascript icon drawer reduced to the minimum expression


This library draw basic svg icons using coordiantes applied to basic lines, circles and rectangles.

For example, to draw a simple `x` (close) icon, you can do:

- Draw a line from top-left to bottom-right
- Draw other line from bottom-left to top-right

These instructions translated to json are:

```json
[
    ["l", 0, 0, 1, 1],
    ["l", 0, 1, 1, 0]
]
```

To apply these instructions:

```js
import draw from './iconjs/drawer.js';

const size = 16;
const data = [
    ["l", 0, 0, 1, 1],
    ["l", 0, 1, 1, 0]
];

const icon = draw(size, data);

document.body.appendChild(icon);
```

Now, you have a svg icon of `16x16px` in your body.

More examples in [test](test/test.js)
