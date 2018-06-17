/**
 * A much more efficient method is the Euclidean algorithm, which
 * uses a division algorithm such as long division in combination
 * with the observation that the gcd of two numbers also divides
 * their difference. To compute gcd(48,18), divide 48 by 18 to
 * get a quotient of 2 and a remainder of 12. Then divide 18 by 12
 * to get a quotient of 1 and a remainder of 6. Then divide 12 by 6
 * to get a remainder of 0, which means that 6 is the gcd. Note that
 * we ignored the quotient in each step except to notice when the
 * remainder reached 0, signalling that we had arrived at the answer.
 */

const euclideanAlgorithm = (firstNumber, secondNumber) => {
  firstNumber = Math.abs(firstNumber);
  secondNumber = Math.abs(secondNumber);

  if (firstNumber === 0 || secondNumber === 0) {
    return firstNumber === 0 && secondNumber === 0 ? null : (firstNumber === 0 && secondNumber) || firstNumber;
  }

  // method 1
  // if (firstNumber > secondNumber) {
  //     return euclideanAlgorithm(firstNumber % secondNumber, secondNumber);
  // }

  // return euclideanAlgorithm(secondNumber % firstNumber, firstNumber);

  // method 2
  // gcd(a,a)=a,
  // gcd(a,b)=gcd(a-b,b) if a > b
  // gcd(a,b)=gcd(a,b-a) if b > a
  if (firstNumber > secondNumber) {
    return euclideanAlgorithm(firstNumber - secondNumber, secondNumber);
  } else {
    return euclideanAlgorithm(firstNumber, secondNumber - firstNumber);
  }

  // method 3
  /*
    let i = 1,
        j = 1,
        divisorsOfNum1 = [],
        divisorsOfNum2 = [];

    while (i <= firstNumber) {
        if (firstNumber % i === 0)
            divisorsOfNum1.push(i);
        i++;
    }

    while (j <= secondNumber) {
        if (secondNumber % j === 0)
            divisorsOfNum2.push(j);
        j++;
    }

    const gcd = divisorsOfNum1.filter((d) => divisorsOfNum2.includes(d))
    return gcd[gcd.length - 1];
    */
};

module.exports = euclideanAlgorithm;
