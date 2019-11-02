const { init, ellipse, oprint } = require("../src/art1");

// after K.Nash "Spheroids" 1969
// for Teletype (72 character width)

(function main() {
  const width = 72;
  const height = 49;

  const c = init({
    width,
    height,
    symbol1: " ",
    ncol: 1,
    symbol2: " ",
    mcol: 1,
    title: " ".repeat(30) + "SPHEROIDS"
  });

  c.arr1 = ellipse(c.arr1, {
    symbol: "O",
    r: 30,
    c: 30,
    nr: 15,
    nc: 30
  });

  c.arr1 = ellipse(c.arr1, {
    symbol: " ",
    r: 36,
    c: 37,
    nr: 5,
    nc: 8
  });


  c.arr2 = ellipse(c.arr2, {
    symbol: "X",
    r: 30,
    c: 38,
    nr: 15,
    nc: 30
  });

  c.arr2 = ellipse(c.arr2, {
    symbol: " ",
    r: 36,
    c: 41,
    nr: 5,
    nc: 8
  });

  console.log(oprint(c, ""));
})();
