/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const test = s.trim().split(' ');
  return test[test.length - 1].length
};