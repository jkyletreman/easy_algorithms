function nim(amt) {
  const possiblePlayer1Win = true;

  if (amt % 4 === 0) {
    return false;
  } else if ((amt - 1) % 4 === 0) {
    return possiblePlayer1Win;
  } else if ((amt - 2) % 4 === 0) {
    return possiblePlayer1Win;
  } else if ((amt - 3) % 4 === 0) {
    return possiblePlayer1Win;
  }
  return false;
}

module.exports = { nim };
