const searchWord = require("../src/searchWord");
const chalk = require("chalk");

global.console = {
  log: jest.fn()
};

test("should return love definition as default", async () => {
  return searchWord().then(() => {
    expect(global.console.log).toHaveBeenCalledWith(
      `${chalk.cyan("love")}: a strong feeling of affection.`
    );
  });
});

test("should return error message when api fails", () => {
  return searchWord().catch(() => {
    expect(global.console.log).toHaveBeenCalledWith(
      "something went wrong, try again."
    );
  });
});
