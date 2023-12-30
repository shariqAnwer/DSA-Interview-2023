//check for the pair equals to the sum

let arr = [2, 1, 3, 6];
let sum = 3;

// brute force TC = O(n**2) SC =O(1)
function twoSumBF(arr, s) {
  for (let i of arr) {
    for (let j of arr) {
      if (i + j == s) return [i, j];
    }
  }
}

// [2, 1, 3, 6];
// map - [1];

function twoSum(nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in obj) return [i, obj[diff]];        //diff in obj give true or false

    obj[nums[i]] = i;
  }
  return obj;
}

let x = twoSum(arr, sum);
console.log(x);
