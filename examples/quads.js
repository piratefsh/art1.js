const { init, triangle, print, rect } = require("../src/art1");
const { CANVAS_HEIGHT, CANVAS_WIDTH } = require("../src/constants");
const { randInt } = require("../src/random");

let t = 0;

function draw(canvas, width, height){
  const gx = 5;
  const gy = 4;
  const cy = height / gy;
  const cx = width / gx;

  canvas.arr2 = rect(canvas.arr1, {symbol: "\033[32m \u030c\033[0m",
    r: 0, c: 0, nr: height, nc: width})

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
        c: c + (1 * Math.sin(t)),
        r: r + cy - 3 - (1*Math.cos(t)),
        nr: cy/2,
        symbol: "\033[1mV\033[0m"
      });

      canvas.arr2 = triangle(canvas.arr2, {
        ...circleOpts,
        c: c  + (1 * Math.sin(t)),
        r: r + cy - 2 - (1 * Math.cos(t)),
        nr: -cy/2 ,
        symbol: "\033[1mV\033[0m"
      });

    }
  }
  console.clear();
  console.log(print(canvas, " "));
}

function drawFrame(...options){
  draw(...options)
  t += 1;

  setTimeout(() => drawFrame(...options), 1000/8);
}

(function main() {
  const width = Math.floor(CANVAS_WIDTH/2 ) + 3;
  const height = Math.floor(CANVAS_HEIGHT/2 ) + 3;
  const canvas = init({
    width,
    height,
    symbol1: "",
    ncol: 1,
    symbol2: "",
    mcol: 1
  });

  drawFrame(canvas, width, height)

})();
