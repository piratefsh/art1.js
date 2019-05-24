const init = require("../src/init");

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

module.exports = setup;
