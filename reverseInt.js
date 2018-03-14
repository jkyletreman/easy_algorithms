function reverseInteger(number) {
  let result = 0;
  let intA = number;

  while (intA !== 0) {
    // get last digit, which is 1
    const lastDigit = intA % 10;

    result *= 10;
    result += lastDigit;
    intA -= lastDigit;
    intA /= 10;
  }
  return result;
}

module.exports = { reverseInteger };
