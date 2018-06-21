const titleCase = (str) => {
  if (str.length === 0) return '';

  return str
    .split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1, el.length))
    .join(' ');
  // lookahead => str.replace(/[\s]/g, /:?/);
};

exports.titleCase = titleCase;
