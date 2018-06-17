const confirmEnding = require("./../confirmEnding");

describe("Confirm ending of string", () => {
  it("Check if a string (first argument, str) ends with the given target string (second argument, target).", () => {
    const res = confirmEnding(
      "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
      "mountain",
    );
    expect(res).toBeFalsy();
  });
});
