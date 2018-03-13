// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(array, sum) {
  const cache = {};
  let indexs = [];

  for (let i = 0; i < array.length; i++) {
    // change int to string
    const num = array[i].toString();
    // caching
    if (cache[num] === undefined) {
      cache[num] = i;
    } else {
      cache[num]++;
    }
  }

  // loop cache and search for diff
  for (const number in cache) {
    // get diff because that is the number we are looking for
    const difference = sum - array[cache[number]];
    // console.log(`I am the difference: ${difference}`)
    // change number string into int
    const numInt = parseInt(number);
    // console.log(`I am the numInt: ${numInt}`)
    // check to see if the key matchs the diff
    if ((numInt + difference) === sum) {
      indexs = [cache[numInt], cache[difference]];
    } else {
      continue;
    }
  }
  return indexs;
}

console.log(twoSum([6, 13, 5, 1], 18));
