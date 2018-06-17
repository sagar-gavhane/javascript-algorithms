const confirmEnding = (str, target) => {
  return str.length === str.lastIndexOf(target) + target.length;
};

module.exports = confirmEnding;
