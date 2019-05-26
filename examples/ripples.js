const { init, ellipse, print } = require("../src/art1");

(function main() {
  const width = 51;
  const height = 51;
  const c = init({
    width,
    height,
    symbol1: "\033[36m/\033[0m",
    ncol: 1,
    symbol2: "",
    mcol: 1
  });

  const gx = 4;
  const gy = 4;
  const cy = height / gy;
  const cx = width / gx;

  for (let i = 0; i < gy + 1; i += 1) {
    for (let j = 0; j < gx + 1; j += 1) {
      const circleOpts = {
        r: cy * i,
        c: cx * j,
        nr: Math.ceil(cy / 2),
        nc: Math.ceil(cx / 2)
      };

      const { nc, nr} = circleOpts;
      c.arr1 = ellipse(c.arr1, {
        ...circleOpts,
        symbol: "\033[33;7;1mX"
      });

      // c.arr2 = ellipse(c.arr2, {
      //   ...circleOpts,
      //   symbol: ""
      // });
      c.arr1 = ellipse(c.arr1, {
        ...circleOpts,
        nr: nr - 2,
        nc: nc - 2,
        symbol: "\033[35m \u0363\033[0m"
      });
      c.arr1 = ellipse(c.arr1, {
        r: cy * i,
        c: cx * j,
        nr: 2,
        nc: 2,
        symbol: "\033[45m\033[39m~\u0361\033[0m"
      });
    }
  }


  // c.arr2 = ellipse(c.arr2, {
  //   r: height / 2,
  //   c: width / 2,
  //   nr: 5,
  //   nc: 5,
  //   symbol: "\u0350"
  // });

  // c.arr1 = ellipse(c.arr1, {
  //   r: height / 2,
  //   c: width / 2,
  //   nr: 5,
  //   nc: 5,
  //   symbol: "o"
  // });

  console.log(print(c, " "));
})();
