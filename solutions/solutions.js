// ## TwoSum
// with nested for loops
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
}

// with an object
function twoSumObject(arr, target) {
  const obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    const possibleMatch = target - arr[i];
    if (obj[possibleMatch]) {
      return [obj[possibleMatch], i];
    }
    obj[arr[i]] = i;
  }
  return false;
}

exports.module = {
  twoSum,
  twoSumObject,
};
