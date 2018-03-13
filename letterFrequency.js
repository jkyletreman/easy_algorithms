function letterFrequency(string, target) {
  const targetLowerCase = target.toLowerCase()
  // if letter is not in string
  if (!string.split('').includes(targetLowerCase)) {
    return `The letter ${targetLowerCase} appears 0 times`
  }
  // if the string is not valid
  if (!isValid(string)) {
    return 'Characters other than the alphabet are not allowed!'
  }
  const cache = {}
  // eliminate spaces and eliminate caps
  const letters = string.toLowerCase().split(' ').join('').split('');

  letters.map(letter => {
    if (cache[letter] === undefined) {
      cache[letter] = 1;
    } else {
      cache[letter]++
    }
  })

  return cache[targetLowerCase]
}

function isValid(str){
 return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

module.exports = {
  letterFrequency
}
