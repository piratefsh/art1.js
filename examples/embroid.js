const { init, line, print, ellipse } = require("../src/art1");
const { CANVAS_HEIGHT, CANVAS_WIDTH } = require("../src/constants");
const { randInt } = require("../src/random");

let t = 0;

function draw(canvas, width, height){
  const gx = 4;
  const gy = 3;
  const cy = height / gy;
  const cx = width / gx;

  // canvas.arr1 = rect(canvas.arr1, {symbol: "\033[32m \u030c\033[0m",
  //   r: 0, c: 0, nr: height, nc: width})

  const blossom = '\033[45;39m❀';
  const box = '\033[33;44;1m*\u20de\033[0m';
  const squiggle = '\033[30;1m\033[33mS\u0328\u0343\033[0m';
  for (let i = 0; i < gy + 1; i += 1) {
    for (let j = 0; j < gx + 1; j += 1) {
      const opts = {
        r: cy * i,
        c: cx * j + (i % 2 == 0 ? 0 : cx/2),
        nr: cy,
      };
      const { c, r, nc, nr} = opts;
      canvas.arr1 = ellipse(canvas.arr1, { r: r+1, c: c + 3, nr: 1, nc: 0, symbol: blossom})
      canvas.arr1 = ellipse(canvas.arr1, { r: r - 1 , c: c + 3, nr: 1, nc: 0, symbol: blossom})
      canvas.arr1 = ellipse(canvas.arr1, { r: r - 2, c: c - 2, nr: 0, nc: 0, symbol: '\033[0m🌿\033[0m'})
      canvas.arr1 = line(canvas.arr1, { ...opts, r: r , c: c + 3, nr: nr, nc: nc + 3, symbol: box})
      canvas.arr1 = line(canvas.arr1, {...opts, symbol: squiggle})
      canvas.arr1 = ellipse(canvas.arr1, { r: r  , c: c + 2, nr: 1, nc: 0, symbol: blossom})
      canvas.arr1 = ellipse(canvas.arr1, { r: r  , c: c + 4, nr: 1, nc: 0, symbol: blossom})
    }
  }
  console.clear();
  console.log("\n", print(canvas, " \033[0m"));
}

function drawFrame(...options){
  draw(...options)
  t += 1;

  setTimeout(() => drawFrame(...options), 1000/8);
}

(function main() {
  const width = Math.floor(CANVAS_WIDTH/3 ) + 3;
  const height = Math.floor(CANVAS_HEIGHT/3 ) + 3;
  const canvas = init({
    width,
    height,
    symbol1: "\033[34m.\u0328\u0343\u1ddd\033[0m",
    ncol: 1,
    symbol2: "\033[35;1m\\\033[0m",
    mcol: 10
  });

  draw(canvas, width, height)

})();
