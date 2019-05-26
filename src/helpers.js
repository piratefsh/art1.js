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

function validate(arr, x, y, err = false) {
  if (x < 0 || x >= arr[0].length || y < 0 || y >= arr.length) {
    if (err) {
      throw new Error(`line: ${x}, ${y} are not valid positions`);
    }

    return false;
  }

  return true;
}

function set(arr, x, y, sym) {
  const carr = copy(arr);
  if (validate(carr, x, y)) {
    carr[Math.round(y)][Math.round(x)] = sym;
  }
  return carr;
}

function get(arr, x, y) {
  return arr[Math.round(y)][Math.round(x)];
}

function setx(arr, x, y, sym) {
  if (validate(arr, x, y)) {
    // eslint-disable-next-line no-param-reassign
    arr[Math.round(y)][Math.round(x)] = sym;
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
