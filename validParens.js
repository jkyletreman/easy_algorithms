function validParens(string) {
  const spacelessStringArray = string.split(' ').join('').split('');

  for (let i = 0; i < spacelessStringArray.length; i += 2) {
    const open = spacelessStringArray[i];
    const close = spacelessStringArray[i + 1];
    // checking for closing tags
    if (open === '{' && close !== '}') {
      return false;
    } else if (open === '(' && close !== ')') {
      return false;
    } else if (open === '[' && close !== ']') {
      return false;
    }
  }
  return true;
}

module.exports = { validParens };
