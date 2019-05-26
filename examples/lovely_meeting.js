const { init, rect, print } = require("../src/art1");
const { copy } = require("../src/helpers");

function main() {
  const width = 10;
  const height = 1;
  const c = init({
    width,
    height,
    symbol1: " ",
    ncol: 1,
    symbol2: " ",
    mcol: 1
  });

  const init1 = copy(c.arr1);
  c.arr2 = rect(c.arr2, {
    r: 0,
    c: 9,
    nr: 1,
    nc: 1,
    symbol: "\u200d❤️\u200d👩"
  });

  c.arr1[0].forEach((_, i) => {
    setTimeout(() => {
      c.arr1 = rect(init1, { r: 0, c: i, nr: 1, nc: 1, symbol: "👩" });
      console.clear();
      console.log("\n ", print(c, ""));
    }, i * 500);
  });

  // sleep so program doesn't quit immediately
  setTimeout(() => {}, 10000);
}

main();
