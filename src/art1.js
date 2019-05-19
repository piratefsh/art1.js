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
function ellipse(arr) {}

// function line(canvas) {}
// function rectSolid(canvas) {}
// function rectOpen(canvas) {}
// function triangle(canvas) {}
// function quadrants(canvas) {}
// function exponential(canvas) {}

module.exports = {
  Art1,
  array,
  init,
  print
};
