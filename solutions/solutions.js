// ## TwoSum

var arr = [1, 5, 13, 6];
var targetSum = 18;

// with nested for loops

function twoSum(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

twoSum(arr, targetSum);

// with an object

function twoSumObject(arr, target) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var possibleMatch = target - arr[i];
    if (obj[possibleMatch]) {
      return [obj[possibleMatch], i];
    } else {
      obj[arr[i]] = i;
    }
  }
  return false;
}

twoSumObject(arr, targetSum);
