const trialDivision = (number) => {
  if (number === 1 || number < 0) return false;

  if (number === 2) return true;

  return number % 2 === 0 ? false : true;
};

module.exports = trialDivision;
