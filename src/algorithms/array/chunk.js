const chunk = (chunk, chunkSize) => {
  let output = [];
  let index = 0;

  while (index <= chunk.length) {
    let arrSubset = chunk.slice(index, index + chunkSize);
    if (arrSubset.length !== 0) output.push(arrSubset);
    index += chunkSize;
  }

  return output;
};

module.exports = chunk;
