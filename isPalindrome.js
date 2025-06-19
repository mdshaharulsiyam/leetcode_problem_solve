/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xString = x.toString()?.split("").reverse().join("");
  return x?.toString() === xString ? true : false;
};
console.log(isPalindrome(121));