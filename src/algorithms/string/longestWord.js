/*
const longestWord = (str) => {
    const val = str.split(' ').sort((a, b) => a.length < b.length);
    return val[0].length;
}*/

/*
const longestWord = (str) => {
    const longest = str.split(' ').reduce(function (a, b) {
        return a.length > b.length ? a : b;
    });
    return longest.length;
}
*/

const longestWord = (str) => {
  return Math.max(...str.split(' ').map((el) => el.length));
};

module.exports = longestWord;
