const print = require("../src/print");
const setup = require("./util");
const { ellipse, triangle, rect } = require("../src/art1");

describe("print", () => {
  it("should draw overlapping diatricitical marks", () => {
    const c = setup({
      symbol1: "X",
      symbol2: "\u0363",
      width: 4,
      height: 4
    });

    expect(print(c)).toEqual(
      `XͣXͣXͣXͣ
XͣXͣXͣXͣ
XͣXͣXͣXͣ
XͣXͣXͣXͣ`
    );
  });

  it("should draw composite emoji marks", () => {
    const c = setup({
      symbol1: "",
      symbol2: "",
      width: 3,
      height: 3
    });

    c.arr1 = rect(c.arr1, { r: 0, c: 0, nr: 3, nc: 3, symbol: "👩" });
    c.arr2 = rect(c.arr2, { r: 0, c: 0, nr: 3, nc: 3, symbol: "👩" });

    expect(print(c, "\u200D❤️\u200D")).toEqual(
      `👩‍❤️‍👩👩‍❤️‍👩👩‍❤️‍👩
👩‍❤️‍👩👩‍❤️‍👩👩‍❤️‍👩
👩‍❤️‍👩👩‍❤️‍👩👩‍❤️‍👩`
    );
  });

  it("should draw overlapping diatricitical marks", () => {
    const c = setup({
      symbol1: "_",
      symbol2: " ",
      width: 5,
      height: 5
    });

    c.arr2 = triangle(c.arr2, { r: 0, c: 2, nr: 3, symbol: "\u20e4 " });
    c.arr1 = triangle(c.arr1, { r: 0, c: 2, nr: 3, symbol: "|" });
    // c.arr1 = ellipse(c.arr1, { r: 2, c: 2, nr: 2, nc: 2, symbol: "_" });

    expect(print(c)).toEqual(
      `_ _ _ _ _ 
_ _ |⃤ _ _ 
_ |⃤ |⃤ |⃤ _ 
|⃤ |⃤ |⃤ |⃤ |⃤ 
_ _ _ _ _ `
    );
  });

  it("should draw overlapping diatricitical marks", () => {
    const c = setup({
      symbol1: ".",
      symbol2: "\u035D",
      width: 11,
      height: 11
    });

    c.arr1 = ellipse(c.arr1, { r: 5, c: 5, nr: 4, nc: 4, symbol: "o" });
    c.arr1 = ellipse(c.arr1, { r: 5, c: 5, nr: 2, nc: 2, symbol: "*" });
    c.arr2 = ellipse(c.arr2, { r: 5, c: 5, nr: 2, nc: 2, symbol: "\u0361" });

    expect(print(c)).toEqual(
      `.͝.͝.͝.͝.͝.͝.͝.͝.͝.͝.͝
.͝.͝.͝.͝.͝o͝.͝.͝.͝.͝.͝
.͝.͝.͝o͝o͝o͝o͝o͝.͝.͝.͝
.͝.͝o͝o͝o͝*͡o͝o͝o͝.͝.͝
.͝.͝o͝o͝*͡*͡*͡o͝o͝.͝.͝
.͝o͝o͝*͡*͡*͡*͡*͡o͝o͝.͝
.͝.͝o͝o͝*͡*͡*͡o͝o͝.͝.͝
.͝.͝o͝o͝o͝*͡o͝o͝o͝.͝.͝
.͝.͝.͝o͝o͝o͝o͝o͝.͝.͝.͝
.͝.͝.͝.͝.͝o͝.͝.͝.͝.͝.͝
.͝.͝.͝.͝.͝.͝.͝.͝.͝.͝.͝`
    );
  });
});
