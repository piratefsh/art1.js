const { init, rect, ellipse, oprint } = require("../src/art1");

// after Frederick Hammersley "Jelly Centers" 1969

(function main() {
  const gx = 3;
  const gy = 4;
  const cy = 12;  // height of each block
  const cx = 24;  // width of each block - slightly different than original because we're only 72 wide in total
  const width = 71;
  const height = gy * cy;

  const c = init({
    width,
    height,
    symbol1: "-",
    ncol: 1,
    symbol2: "'",
    mcol: 1,
    title: " ".repeat(29) + "JELLY CENTERS"
  });

  for (let i = 0; i < gy + 1; i += 1) {
    for (let j = 0; j < gx + 1; j += 1) {

      c.arr1 = ellipse(c.arr1, {
        symbol: " ",
        r: cy * i,
        c: cx * j - 1,
        nr: 6,
        nc: 12
      });

      c.arr1 = ellipse(c.arr1, {
        symbol: "O",
        r: cy * i,
        c: cx * j - 1,
        nr: 4,
        nc: 8
      });

      if ((i + j) % 2 ==0 ) {
        c.arr2 = rect(c.arr2, {
          symbol: ".",
          r: cy * i,
          c: cx * j - 1,
          nr: cy,
          nc: cx
        });
      }

    }
  }
  console.log(oprint(c, ""));
})();
