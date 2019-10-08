const { ellipse } = require("../src/art1");

const setup = require("./util");

describe("ellipse", () => {
  it("should draw ellipse", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 12,
      height: 10
    });

    const { arr1 } = c;
    const art = ellipse(arr1, { symbol: "*", r: 4, c: 5, nr: 3, nc: 4 });
    expect(art).toEqual(
      `............
.....*......
...*****....
..*******...
.*********..
..*******...
...*****....
.....*......
............
............`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });

  it("should draw small circle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 4,
      height: 4
    });

    const art = ellipse(c.arr1, { symbol: "*", r: 0, c: 0, nr: 0, nc: 0 });
    expect(art).toEqual(
      `*...
....
....
....`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });
});
