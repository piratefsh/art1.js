const { rectSolid, ellipse, quadrants } = require("../src/art1");

const setup = require("./util");

describe("quadrants", () => {
  it("should mirror quadrants", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 4,
      height: 4
    });

    const art = quadrants(
      ellipse(c.arr1, { symbol: "*", r: 0, c: 0, nr: 0, nc: 0 })
    );
    expect(art).toEqual(
      `*..*
....
....
*..*`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });

  it("should mirror quadrants 2", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 4,
      height: 5
    });

    const art = quadrants(
      rectSolid(c.arr1, { symbol: "*", r: 0, c: 0, nr: 2, nc: 1 })
    );
    expect(art).toEqual(
      `*..*
*..*
....
*..*
*..*`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });
});
