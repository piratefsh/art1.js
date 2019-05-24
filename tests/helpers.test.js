const { array } = require("../src/helpers");
const setup = require("./util");

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
