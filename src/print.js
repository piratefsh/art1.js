const { stringify } = require("./helpers");

function print(canvas, joiner="") {
  const { arr1, arr2 } = canvas;
  const combined = arr1.map((row, j) =>
    row.map((c1, i) => `${c1}${joiner}${arr2[j][i]}`)
  );
  return `${stringify(combined)}`;
}

module.exports = print;
