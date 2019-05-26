const print = require("../src/print");
const setup = require("./util");
const { ellipse } = require("../src/art1");

describe("print", () => {
  xit("should draw overlapping diatricitical marks", () => {
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
