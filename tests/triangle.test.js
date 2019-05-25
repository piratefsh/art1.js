const { triangle } = require("../src/art1");
const { stringify } = require("../src/helpers");
const setup = require("./util");

describe("triangle", () => {
  it("should draw nr + triangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 8,
      height: 8
    });

    const art = triangle(c.arr1, { symbol: "*", r: 0, c: 4, nr: 4, nc: 0 });
    expect(art).toEqual(
      `........
....*...
...***..
..*****.
.*******
........
........
........`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });
  it("should draw short nr + triangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 8,
      height: 5
    });

    const art = triangle(c.arr1, { symbol: "*", r: 0, c: 4, nr: 2, nc: 0 });
    expect(art).toEqual(
      `........
....*...
...***..
........
........`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });

  it("should draw nr - triangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 8,
      height: 5
    });

    const art = triangle(c.arr1, { symbol: "*", r: 3, c: 4, nr: -4, nc: 0 });
    expect(art).toEqual(
      `.*******
..*****.
...***..
....*...
........`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });

  it("should draw small nr - triangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 8,
      height: 5
    });

    const art = triangle(c.arr1, { symbol: "*", r: 3, c: 4, nr: -2, nc: 0 });
    expect(art).toEqual(
      `........
........
...***..
....*...
........`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });

  it("should draw nc + triangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 8,
      height: 6
    });

    const art = triangle(c.arr1, { symbol: "*", r: 2, c: 3, nr: 0, nc: 3 });
    expect(art).toEqual(
      `.....*..
....**..
...***..
....**..
.....*..
........`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });

  it("should draw nc - triangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 8,
      height: 6
    });

    const art = triangle(c.arr1, { symbol: "*", r: 2, c: 4, nr: 0, nc: -3 });
    expect(art).toEqual(
      `..*.....
..**....
..***...
..**....
..*.....
........`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });
});
