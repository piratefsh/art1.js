const { array, init, line, stringify, rectSolid, rectOpen } = require("../src/art1");
const { randInt } = require("../src/random");

const setup = options =>
  init(
    Object.assign(
      {
        width: 4,
        height: 3,
        symbol1: "-",
        ncol: 1,
        symbol2: '"',
        mcol: 1
      },
      options
    )
  );

describe("array", () => {
  it("should return 2D array of length", () => {
    const c = array(10, 8);
    expect(c.length).toBe(8); // num of rows
    expect(c[0].length).toBe(10); // num of cols
  });
});

describe("init", () => {
  it("should fill canvas", () => {
    const c = setup();
    const pattern1 = "----";
    const pattern2 = '""""';
    expect(c.arr1).toEqual([
      pattern1.split(""),
      pattern1.split(""),
      pattern1.split("")
    ]);
    expect(c.arr2).toEqual([
      pattern2.split(""),
      pattern2.split(""),
      pattern2.split("")
    ]);
  });

  it("should fill canvas with alternating symbol", () => {
    const c = setup({ symbol1: "-", ncol: 2, symbol2: "x", mcol: 3 });

    const pattern1 = "- - ";
    const pattern2 = "x  x";
    expect(c.arr1).toEqual([
      pattern1.split(""),
      pattern1.split(""),
      pattern1.split("")
    ]);
    expect(c.arr2).toEqual([
      pattern2.split(""),
      pattern2.split(""),
      pattern2.split("")
    ]);
  });
});

describe("line", () => {
  it("should draw line that is a dot", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 3,
      height: 3
    });
    const res = line(c.arr1, { symbol: "=", r: 1, c: 1, nr: 0, nc: 0 });
    // eslint-disable-next-line
    expect(res).toEqual([
      "...".split(""),
      ".=.".split(""),
      "...".split("")
    ]);
  });

  it("should draw short line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 3,
      height: 3
    });
    const res = line(c.arr1, { symbol: "=", r: 1, c: 1, nr: 2, nc: 2 });

    // eslint-disable-next-line
    expect(res).toEqual([
      "...".split(""),
      ".=.".split(""),
      "..=".split("")]);
  });

  it("should draw horizontal line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-"
    });
    const arr = line(c.arr1, { symbol: "=", r: 1, c: 0, nr: 0, nc: 4 });
    // eslint-disable-next-line
    expect(arr).toEqual([
      "....".split(""),
      "====".split(""),
      "....".split("")]);
  });

  it("should draw slightly sloped line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-"
    });
    const arr = line(c.arr1, { symbol: "=", r: 1, c: 0, nr: 1, nc: 4 });
    // eslint-disable-next-line
    expect(arr).toEqual([
      "....".split(""),
      "==..".split(""),
      "..==".split("")]);
  });

  it("should draw slightly sloped line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-"
    });
    const arr = line(c.arr1, { symbol: "=", r: 1, c: 0, nr: 2, nc: 2 });
    // eslint-disable-next-line
    expect(arr).toEqual([
      "....".split(""),
      "=...".split(""),
      ".=..".split("")]);
  });

  it("should draw vertical line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-"
    });
    const arr = line(c.arr1, { symbol: "|", r: 0, c: 1, nr: 3, nc: 0 });

    // eslint-disable-next-line
    expect(arr).toEqual([
      ".|..".split(""),
      ".|..".split(""),
      ".|..".split("")
    ]);
  });

  it("should draw negative sloped line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-"
    });
    const arr = line(c.arr1, { symbol: "=", r: 2, c: 2, nr: -2, nc: -2 });
    // eslint-disable-next-line
    expect(arr).toEqual([
      "=...".split(""),
      ".=..".split(""),
      "..=.".split("")
    ]);
  });

  it("should draw steep sloped line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });
    const arr = line(c.arr1, { symbol: "=", r: 0, c: 0, nr: 5, nc: 3 });
    // eslint-disable-next-line
    expect(arr).toEqual([
      "=....".split(""),
      ".=...".split(""),
      ".=...".split(""),
      "..=..".split(""),
      "..=..".split("")
    ]);
  });

  it("should draw steep positively sloped line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });
    const arr = line(c.arr1, { symbol: "=", r: 4, c: 3, nr: -4, nc: -3 });
    // eslint-disable-next-line
    expect(arr).toEqual([
      "=....".split(""),
      ".=...".split(""),
      "..=..".split(""),
      "..=..".split(""),
      "...=.".split("")
    ]);
  });

  it("should draw steep negatively sloped line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });
    const arr = line(c.arr1, { symbol: "/", r: 4, c: 1, nr: -4, nc: 2 });
    // eslint-disable-next-line
    expect(arr).toEqual([
      ".../.".split(""),
      "../..".split(""),
      "../..".split(""),
      "./...".split(""),
      "./...".split("")
    ]);
  });

  it("should draw edge cases", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });
    const left = line(c.arr1, { symbol: "*", r: 0, c: 0, nr: 4, nc: 0 });
    // eslint-disable-next-line
    expect(left).toEqual([
      "*....".split(""),
      "*....".split(""),
      "*....".split(""),
      "*....".split(""),
      "*....".split("")
    ]);

    const top = line(c.arr1, { symbol: "*", r: 0, c: 0, nr: 0, nc: 4 });
    expect(top).toEqual([
      "*****".split(""),
      ".....".split(""),
      ".....".split(""),
      ".....".split(""),
      ".....".split("")
    ]);

    const bottom = line(c.arr1, { symbol: "*", r: 4, c: 0, nr: 0, nc: 4 });
    expect(bottom).toEqual([
      ".....".split(""),
      ".....".split(""),
      ".....".split(""),
      ".....".split(""),
      "*****".split("")
    ]);
    const right = line(c.arr1, { symbol: "*", r: 0, c: 4, nr: 4, nc: 0 });
    expect(right).toEqual([
      "....*".split(""),
      "....*".split(""),
      "....*".split(""),
      "....*".split(""),
      "....*".split("")
    ]);
  });

  it("should draw negative slope steep line", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 15,
      height: 4
    });
    const art = line(c.arr1, {
      symbol: "*",
      r: 3,
      c: 2,
      nr: -3,
      nc: 9
    });
    expect(art).toEqual([
      "..........**...".split(""),
      ".......***.....".split(""),
      "....***........".split(""),
      "..**...........".split("")
    ]);
  });

  it("should draw lines in all octanes", () => {
    const width = 17;
    const height = 17;
    const options = {
      symbol1: ".",
      symbol2: "-",
      width,
      height
    };

    const c = setup(options);

    const r = width / 2;
    let art = c.arr1;
    for (let t = 0; t < Math.PI * 2; t += Math.PI / 6) {
      const x = Math.trunc(r * Math.sin(t));
      const y = Math.trunc(r * Math.cos(t));
      art = line(art, {
        r: Math.trunc(width / 2),
        c: Math.trunc(height / 2),
        nr: y,
        nc: x,
        symbol: "*"
      });
    }

    expect(art).toEqual(
      `........*........
....*...*...*....
.....*..*..*.....
.....*..*..*.....
.*....*.*.*....*.
..**..*.*.*..**..
....**.***.**....
......*****......
*****************
......*****......
....**.***.**....
..**..*.*.*..**..
.*....*.*.*....*.
.....*..*..*.....
.....*..*..*.....
....*...*...*....
........*........`
        .split("\n")
        .map(ln => ln.split(""))
    );
  });

  it("should draw random lines", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 30,
      height: 30
    });

    const { arr1 } = c;
    let art = arr1;
    for (let i = 0; i < 10; i += 1) {
      const x = randInt(0, 15);
      const y = randInt(0, 15);
      const nr = randInt(-x, 30 - x);
      const nc = randInt(-y, 30 - y);
      art = line(art, {
        symbol: "*=?~#".charAt(randInt(0, 4)),
        r: x,
        c: y,
        nr,
        nc
      });
    }

    expect(stringify(art).length).toBe(30 * 30 + 29);
  });

  it("should draw solid rectangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });

    const { arr1 } = c;
    const art = rectSolid(arr1, { symbol: "*", r: 1, c: 1, nr: 3, nc: 3 });
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

  it("should draw small rectangles", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });

    const { arr1 } = c;
    const art = rectSolid(arr1, { symbol: "*", r: 1, c: 2, nr: 3, nc: 1 });
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
    const art = rectSolid(arr1, { symbol: "*", r: 2, c: 2, nr: 1, nc: 1 });
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

  it("should draw open rectangle", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "-",
      width: 5,
      height: 5
    });

    const { arr1 } = c;
    const art = rectOpen(arr1, { symbol: "*", r: 1, c: 1, nr: 3, nc: 4 });
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
