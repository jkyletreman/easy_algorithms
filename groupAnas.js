function groupAnas(array) {
  const cache = {};

  for (let i = 0; i < array.length; i++) {
    const anagram = array[i];
    const sortedAna = anagram.split('').sort().join('');

    if (cache[sortedAna] === undefined) {
      cache[sortedAna] = [anagram];
    } else {
      cache[sortedAna].push(anagram);
    }
  }
  return Object.values(cache);
}

const testME = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnas(testME)); // [ ["ate", "eat","tea"], ["nat","tan"], ["bat"] ]

module.exports = {
  groupAnas,
  testME,
};
