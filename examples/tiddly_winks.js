const { init, rect, ellipse, oprint } = require("../src/art1");

// after Frederick Hammersley "Tiddly Winks" 1969

(function main() {
  const width = 71;
  const height = 38;
  const cx = width / 2;
  const cy = height / 2;
  const ry = (cy / 2) - 0.5;  // adjust this for circle size
  const rx = ry * 10 / 6;

  const c = init({
    width,
    height,
    symbol1: "'",
    ncol: 1,
    symbol2: " ",
    mcol: 1
  });

  const d1 = Math.floor(rx)-2;
  const d2 = d1 * 2;
  const d3 = d1 * 3;

  c.arr2 = ellipse(c.arr2, { symbol: "-", r: ry,              c: rx, nr: ry, nc: rx });
  c.arr2 = ellipse(c.arr2, { symbol: "-", r: height - ry - 1, c: width - rx - 2, nr: ry, nc: rx });

  c.arr2 = ellipse(c.arr2, { symbol: "/", r: ry,              c: rx + d1, nr: ry, nc: rx });
  c.arr2 = ellipse(c.arr2, { symbol: "/", r: height - ry - 1, c: width - rx - 2 - d1, nr: ry, nc: rx });

  c.arr2 = ellipse(c.arr2, { symbol: "J", r: ry,              c: rx + d2, nr: ry, nc: rx });
  c.arr2 = ellipse(c.arr2, { symbol: "J", r: height - ry - 1, c: width - rx - 2 - d2, nr: ry, nc: rx });

  c.arr2 = ellipse(c.arr2, { symbol: "G", r: ry,              c: rx + d3, nr: ry, nc: rx });
  c.arr2 = ellipse(c.arr2, { symbol: "G", r: height - ry - 1, c: width - rx - 2 - d3, nr: ry, nc: rx });

  console.log(oprint(c, ""));
})();
