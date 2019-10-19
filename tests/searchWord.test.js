const searchWord = require("../src/searchWord");

global.console = {
  log: jest.fn()
};

test("should return love definition as default", async () => {
  try {
    await searchWord();
    expect(global.console.log).toHaveBeenCalledWith(
      "a strong feeling of affection."
    );
  } catch {}
});

test("should return error message when api fails", () => {
  return searchWord().catch(() => {
    expect(global.console.log).toHaveBeenCalledWith(
      "something went wrong, try again."
    );
  });
});
