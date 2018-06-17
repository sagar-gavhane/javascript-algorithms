const falsyBouncer = (arr) => {
  const res = arr.filter((e) => e);
  // const res = arr.filter(Boolean);
  return res;
};

module.exports = falsyBouncer;

console.log(falsyBouncer(arr));
