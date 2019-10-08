const { init, rect, ellipse, oprint } = require("../src/art1");

(function main() {
  const gx = 3;
  const gy = 4;
  const cy = 12;  // height of each block
  const cx = 24;  // slightly different than original because we're only 72 wide
  const width = 72;
  const height = gy * cy;

  const c = init({
    width,
    height,
    symbol1: "-",
    ncol: 1,
    symbol2: ".",
    mcol: 1
  });

  for (let i = 0; i < gy + 1; i += 1) {
    for (let j = 0; j < gx + 1; j += 1) {

      c.arr1 = ellipse(c.arr1, {
        symbol: " ",
        r: cy * i,
        c: cx * j,
        nr: 5,
        nc: 10
      });

      c.arr1 = ellipse(c.arr1, {
        symbol: "O",
        r: cy * i,
        c: cx * j,
        nr: 3,
        nc: 7
      });

      if ((i + j) % 2 ==0 ) {
        c.arr2 = rect(c.arr2, {
          symbol: "'",
          r: cy * i,
          c: cx * j,
          nr: cy,
          nc: cx
        });
      }

    }
  }
  console.log(oprint(c, ""));
})();
