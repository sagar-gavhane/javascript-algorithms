const repeatStringNumTimes = (str, repeat) => {
  if (repeat < 0) return "";

  let counter = 0;
  let res = [];

  while (counter < repeat) {
    res.push(str);
    counter++;
  }

  return res.join("");
};

module.exports = repeatStringNumTimes;
