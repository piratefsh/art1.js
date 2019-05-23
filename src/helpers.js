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

function setx(arr, x, y, sym) {
  validate(arr, x, y);
  arr[y][x] = sym;
  return arr;
}

function print(canvas) {
  const { a1, a2 } = canvas;
  return `${stringify(a1)}\n\n${stringify(a2)}`;
}

module.exports = {
  array,
  print,
  stringify,
  fill,
  set,
  setx,
  copy
};
