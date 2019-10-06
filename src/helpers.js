const { CANVAS_WIDTH, CANVAS_HEIGHT } = require("./constants");

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

function validate(arr, rx, ry, err = false) {
  const x = Math.round(rx);
  const y = Math.round(ry);
  if (x < 0 || x >= arr[0].length || y < 0 || y >= arr.length) {
    if (err) {
      throw new Error(`line: ${x}, ${y} are not valid positions`);
    }

    return false;
  }

  return { x, y };
}

function set(arr, rx, ry, sym) {
  const carr = copy(arr);
  const cleanCoords = validate(carr, rx, ry);
  if (cleanCoords) {
    const { x, y } = cleanCoords;
    carr[y][x] = sym;
  }
  return carr;
}

function get(arr, rx, ry) {
  const carr = copy(arr);
  const cleanCoords = validate(carr, rx, ry);
  if (cleanCoords) {
    const { x, y } = cleanCoords;
    return arr[y][x];
  }

  return "";
}

function setx(arr, rx, ry, sym) {
  const cleanCoords = validate(arr, rx, ry);
  if (cleanCoords) {
    const { x, y } = cleanCoords;
    // eslint-disable-next-line no-param-reassign
    arr[y][x] = sym;
  }
  return arr;
}

module.exports = {
  array,
  stringify,
  fill,
  get,
  set,
  setx,
  copy
};
