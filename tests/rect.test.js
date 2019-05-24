const { rect } = require("../src/art1");
const setup = require("./util");

describe("rectSolid", () => {
  it("should draw solid rectangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });

    const { arr1 } = c;
    const art = rect(arr1, { symbol: "*", r: 1, c: 1, nr: 3, nc: 3 });
    expect(art).toEqual(
      `.....
.***.
.***.
.***.
.....`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });
  it("should draw nothing if rect nr or nc is 0", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 3,
      height: 3
    });

    const expected = `...
...
...`
      .split("\n")
      .map(ln => ln.split(""));

    let art = rect(c.arr1, { symbol: "*", r: 0, c: 0, nr: 0, nc: 0 });
    expect(art).toEqual(expected);

    art = rect(c.arr1, { symbol: "*", r: 0, c: 0, nr: 1, nc: 0 });
    expect(art).toEqual(expected);
    art = rect(c.arr1, { symbol: "*", r: 0, c: 0, nr: 0, nc: 1 });
    expect(art).toEqual(expected);
  });
  it("should draw small rectangles", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });

    const { arr1 } = c;
    const art = rect(arr1, { symbol: "*", r: 1, c: 2, nr: 3, nc: 1 });
    expect(art).toEqual(
      `.....
..*..
..*..
..*..
.....`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });

  it("should draw tiny rectangles", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });

    const { arr1 } = c;
    const art = rect(arr1, { symbol: "*", r: 2, c: 2, nr: 1, nc: 1 });
    expect(art).toEqual(
      `.....
.....
..*..
.....
.....`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });
});

describe("rectOpen", () => {
  it("should draw open rectangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });

    const { arr1 } = c;
    const art = rect(arr1, { symbol: "*", r: 1, c: 1, nr: 3, nc: 4 }, true);
    expect(art).toEqual(
      `.....
.****
.*..*
.****
.....`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });
});
