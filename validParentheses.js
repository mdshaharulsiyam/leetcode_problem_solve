/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let start = 0;
  let end = s.length;
  if (end % 2 !== 0) return false;
  const valid = ['()', '{}', '[]'];
  let result = true
  while (end > 1) {
    console.log(s[start] + s[start + 1])
    if (valid.includes(s[start] + s[start + 1])) {
      s = s.slice(0, 3);
    } else if (valid.includes(s[start] + s[end])) {
      s = s.slice(0, 2);
      s = s.slice(0, -2);
    } else {
      result = false
      break
    }
  }

  return result
};
isValid('()[]{}')