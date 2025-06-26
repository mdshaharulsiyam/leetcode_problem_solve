/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start < end) {
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return start;

};
