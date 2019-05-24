const { array, copy, set, setx, get } = require("./helpers");
const init = require("./init");

function lineLow(arr, x0, y0, x1, y1, sym) {
  let E = 0;
  let y = y0;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const dir = dy < 0 ? -1 : 1;

  let rarr = copy(arr);
  for (let x = x0; x < x1; x += 1) {
    rarr = set(rarr, x, y, sym);
    if (2 * (E + dy) * dir < dx) {
      E += dy;
    } else {
      y += dir;
      E = E + dy - dir * dx;
    }
  }

  if (y1 < arr.length && x1 < arr[0].length) {
    rarr = set(rarr, x1, y1, sym);
  }
  return rarr;
}

function lineHigh(arr, x0, y0, x1, y1, sym) {
  let E = 0;
  let x = x0;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const dir = dx < 0 ? -1 : 1;

  let rarr = arr;
  for (let y = y0; y < y1; y += 1) {
    rarr = set(rarr, x, y, sym);
    if (2 * (E + dx) * dir < dy) {
      E += dx;
    } else {
      x += dir;
      E = E + dx - dir * dy;
    }
  }
  if (y1 < arr.length && x1 < arr[0].length) {
    rarr = set(rarr, x1, y1, sym);
  }
  return rarr;
}

function line(arr, { symbol, r, c, nr, nc } = {}) {
  const x0 = c;
  const y0 = r;
  const x1 = x0 + nc;
  const y1 = y0 + nr;

  // low slope
  if (Math.abs(nr) < Math.abs(nc)) {
    if (nc > 0) {
      // positive gradient
      return lineLow(arr, x0, y0, x1, y1, symbol);
    }
    // negative gradient
    return lineLow(arr, x1, y1, x0, y0, symbol);
  }

  // high slope
  if (nr > 0) {
    // positive gradient
    return lineHigh(arr, x0, y0, x1, y1, symbol);
  }
  // negative gradient
  return lineHigh(arr, x1, y1, x0, y0, symbol);
}

function rectSolid(arr, { symbol, r, c, nr = 1, nc = 1 }) {
  if (nr === 0 || nc === 0) {
    return arr;
  }

  let rarr = copy(arr);
  for (let i = 0; i < nr; i += 1) {
    rarr = line(rarr, { symbol, r: r + i, c, nr: 0, nc: nc - 1 });
  }
  return rarr;
}

function rectOpen(arr, { symbol, r, c, nr = 1, nc = 1 }) {
  if (nr === 0 || nc === 0) {
    return arr;
  }

  let rarr = copy(arr);
  rarr = line(rarr, { symbol, r, c, nr: 0, nc: nc - 1 });
  rarr = line(rarr, { symbol, r: r + nr - 1, c, nr: 0, nc: nc - 1 });
  rarr = line(rarr, { symbol, r, c, nr: nr - 1, nc: 0 });
  rarr = line(rarr, { symbol, r, c: c + nc - 1, nr: nr - 1, nc: 0 });
  return rarr;
}
function ellipse(arr, { symbol, r, c, nr, nc }) {
  const rarr = copy(arr);

  for (let y = r - nr; y <= r + nr; y += 1) {
    for (let x = c - nc; x <= c + nc; x += 1) {
      // if point is in ellipse
      const dx = (x - c) * (x - c);
      const dy = (y - r) * (y - r);
      const ry2 = nr * nr;
      const rx2 = nc * nc;

      // do integer math comparison
      if (dx * rx2 + dy * ry2 <= ry2 * rx2) {
        setx(rarr, x, y, symbol);
      }
    }
  }
  return rarr;
}

function quadrants(arr) {
  const width = arr[0].length;
  const height = arr.length;
  for (let y = 0; y < arr.length / 2; y += 1) {
    for (let x = 0; x < arr[y].length / 2; x += 1) {
      setx(arr, x, y, get(arr, x, y));
      setx(arr, width - x - 1, y, get(arr, x, y));
      setx(arr, x, height - y - 1, get(arr, x, y));
      setx(arr, width - x - 1, height - y - 1, get(arr, x, y));
    }
  }
  return arr;
}
// TODOs
// function triangle(canvas) {}
// function exponential(canvas) {}

module.exports = {
  array,
  init,
  line,
  rectSolid,
  rectOpen,
  ellipse,
  quadrants
};
