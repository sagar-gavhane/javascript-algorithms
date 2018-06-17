const repeatStringNumTimes = require("./../repeatStringNumTimes");

describe("Test for repeat string number of times", () => {
  it("string * repeat at three times", () => {
    expect(repeatStringNumTimes("*", 3)).toEqual("***");
  });

  it('repeatStringNumTimes("abc", 3) should return "abcabcabc"', () => {
    expect(repeatStringNumTimes("abc", 3)).toEqual("abcabcabc");
  });

  it('repeatStringNumTimes("abc", -2) should return "".', () => {
    expect(repeatStringNumTimes("abc", -2)).toEqual("");
  });
});
