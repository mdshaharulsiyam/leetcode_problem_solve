/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const bracket = { ')': '(', '}': '{', ']': '[', };
  const stack = [];

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== bracket[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};