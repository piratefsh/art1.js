const { init, triangle, quadrants, print } = require("../src/art1");
const { CANVAS_HEIGHT, CANVAS_WIDTH } = require("../src/constants");
const { randInt } = require("../src/random");

(function main() {
  const width = Math.floor(CANVAS_WIDTH / 2) + 3;
  const height = Math.floor(CANVAS_HEIGHT / 2) + 3;
  const canvas = init({
    width,
    height,
    symbol1: "",
    ncol: 1,
    symbol2: "\033[32m \u030c\033[0m",
    mcol: 1
  });

  const gx = 5;
  const gy = 4;
  const cy = height / gy;
  const cx = width / gx;

  for (let i = 0; i < gy + 1; i += 1) {
    for (let j = 0; j < gx + 1; j += 1) {
      const circleOpts = {
        r: cy * i,
        c: cx * j + (i % 2 == 0 ? 0 : cx/2),
        nr: cy,
      };
      const { c, r, nc, nr} = circleOpts;

      canvas.arr2 = triangle(canvas.arr2, {
        ...circleOpts,
        symbol: "^\u0302"
      });

      canvas.arr2 = triangle(canvas.arr2, {
        ...circleOpts,
        c: c,
        r: r + cy - 3 ,
        nr: cy/2,
        symbol: "\033[1mV\033[0m"
      });

      canvas.arr2 = triangle(canvas.arr2, {
        ...circleOpts,
        c: c - cx/2,
        r: r + cy - 3,
        nr: - cy/2,
        symbol: "\033[1mV\033[0m"
      });

  //     c.arr1 = ellipse(c.arr1, {
  //       ...circleOpts,
  //       r: r,
  //       c: c,
  //       nr: 2,
  //       nc: 2,
  //       symbol: "-"
  //     });

      canvas.arr1 = quadrants(canvas.arr1);
    }
  }
  console.log(print(canvas, " "));
})();
