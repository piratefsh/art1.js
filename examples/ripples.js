const { init, ellipse, print } = require("../src/art1");

(function main() {
  const width = 41;
  const height = 41;
  const c = init({
    width,
    height,
    symbol1: ".",
    ncol: 4,
    symbol2: "",
    mcol: 1
  });

  c.arr2 = ellipse(c.arr2, {
    r: height / 2,
    c: width / 2,
    nr: 10,
    nc: 10,
    symbol: "\u0311"
  });

  c.arr2 = ellipse(c.arr2, {
    r: 1,
    c: width / 2,
    nr: 10,
    nc: 10,
    symbol: "\u0311"
  });

  c.arr2 = ellipse(c.arr2, {
    r: height ,
    c: width / 2,
    nr: 10,
    nc: 10,
    symbol: "\u0311"
  });

  c.arr2 = ellipse(c.arr2, {
    r: height ,
    c: width / 2,
    nr: 5,
    nc: 5,
    symbol: "\u035c"
  });

  c.arr2 = ellipse(c.arr2, {
    r: height /2,
    c: width / 2,
    nr: 5,
    nc: 5,
    symbol: "\u0350"
  });

  c.arr1 = ellipse(c.arr1, {
    r: height /2,
    c: width / 2,
    nr: 5,
    nc: 5,
    symbol: "o"
  });

  console.log(print(c, " "));
})();
