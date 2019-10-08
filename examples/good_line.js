const { init, rect, line, oprint } = require("../src/art1");

// after Frederick Hammersley "A Good Line Is Hard To Beat" 1969

(function main() {
  const width = 71;
  const height = 50;
  const cx = width/2;
  const cy = height/2;

  const c = init({
    width,
    height,
    symbol1: " ",
    ncol: 1,
    symbol2: " ",
    mcol: 1
  });

  c.arr1 = rect(c.arr1, {symbol: "O", r: 0, c: 0, nr: cy, nc: cx });
  c.arr1 = rect(c.arr1, {symbol: "*", r: 0, c: cx, nr: cy, nc: cx });
  c.arr1 = rect(c.arr1, {symbol: "'", r: cy, c: 0, nr: cy, nc: cx });
  c.arr1 = rect(c.arr1, {symbol: " ", r: cy, c: cx, nr: cy, nc: cx });

  c.arr2 = rect(c.arr2, {symbol: "O", r: 0, c: cx, nr: cy, nc: cx });
  c.arr2 = rect(c.arr2, {symbol: "O", r: cy, c: cx, nr: cy, nc: cx });

  var j = 1;
  for(let i=3; i<=10; i++) {
    j = j + i;
    c.arr1 = line(c.arr1, {symbol: " ", r: cy-j, c: cx-1, nr: j-1, nc: 1-j });
    c.arr1 = line(c.arr1, {symbol: "O", r: cy-1+j, c: cx, nr: 1-j, nc: 1-j });
    c.arr1 = line(c.arr1, {symbol: "*", r: cy-3+j, c: cx, nr: 1-j, nc: j-1 });
    c.arr1 = line(c.arr1, {symbol: " ", r: cy-j, c: cx-1, nr: j-1, nc: j-1 });
  }

  console.log(oprint(c, ""));
})();
