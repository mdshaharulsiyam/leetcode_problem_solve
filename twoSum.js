/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (indexes.length === 2) {
      break;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
};

console.log(twoSum([2, 7, 11, 15], 9));
