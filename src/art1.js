const CANVAS_WIDTH = 105;
const CANVAS_HEIGHT = 50;

function Art1() {
  return true;
}

function array(w = CANVAS_WIDTH, h = CANVAS_HEIGHT) {
  return new Array(h).fill(null).map(() => new Array(w).fill(null));
}

function fill(arr, symbol, ncol) {
  return arr.map(row => row.map((char, j) => (j % ncol === 0 ? symbol : " ")));
}

function stringify(arr) {
  return arr.map(row => row.join("")).join("\n");
}

function copy(arr) {
  return [...arr].map(row => [...row]);
}

function validate(arr, x, y) {
  if (x < 0 || x > arr[0].length || y < 0 || y > arr.length) {
    throw new Error(`line: ${x}, ${y} are not valid positions`);
  }
}

function set(arr, x, y, sym) {
  const carr = copy(arr);
  validate(carr, x, y);
  carr[y][x] = sym;
  return carr;
}

function init({
  symbol1 = "",
  ncol = 1,
  symbol2 = "",
  mcol = 1,
  title,
  width = CANVAS_WIDTH,
  height = CANVAS_HEIGHT
}) {
  const arr1 = fill(array(width, height), symbol1, ncol);
  const arr2 = fill(array(width, height), symbol2, mcol);

  return { arr1, arr2, title };
}

function print(canvas) {
  const { a1, a2 } = canvas;
  return `${stringify(a1)}\n\n${stringify(a2)}`;
}

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
    if (2 * (E + dx) < dy * dir) {
      E += dx;
    } else {
      x += dir;
      E = E + dir * dx - dy;
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

// TODOs
// function ellipse(arr) {}
// function rectSolid(canvas) {}
// function rectOpen(canvas) {}
// function triangle(canvas) {}
// function quadrants(canvas) {}
// function exponential(canvas) {}

module.exports = {
  Art1,
  array,
  init,
  line,
  print,
  stringify
};
