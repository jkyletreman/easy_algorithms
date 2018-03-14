const { reverseInteger } = require('./reverseInt');

function intPalendrome(intB) {
  if (reverseInteger(intB) === intB) {
    return true;
  }
  return false;
}

module.exports = { intPalendrome };
