const { stringify } = require("./helpers");

function print(canvas, joiner="") {
  const { arr1, arr2 } = canvas;
  const combined = arr1.map((row, j) =>
    row.map((c1, i) => `${c1}${joiner}${arr2[j][i]}`)
  );
  return `${stringify(combined)}`;
}

function oprint(canvas, joiner="") {
  // print with overstrike (line1 "\r" line2 "\n")
  const { arr1, arr2 } = canvas;
  const a1rows = arr1.map(row => row.join(joiner));
  const a2rows = arr2.map(row => row.join(joiner));
  return (a1rows.map((row, index) => `${a1rows[index]}\r${a2rows[index]}`).join("\n"));
}

module.exports = { print, oprint };
