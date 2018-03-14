// Given an array of integers, return indices
// of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

function twoSum(arr, target) {
  const obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    const possibleMatch = target - arr[i];

    if (obj[possibleMatch] !== undefined) {
      return [obj[possibleMatch], i];
    }
    obj[arr[i]] = i;
  }
  return false;
}
// const arr = [9, 11, 7, 3]
// const targetSum = 16
// console.log(twoSum(arr, targetSum))

exports.module = { twoSum };
