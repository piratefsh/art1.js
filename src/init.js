const { fill, array } = require("./helpers");
const { CANVAS_WIDTH, CANVAS_HEIGHT } = require("./constants");

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

module.exports = init;
