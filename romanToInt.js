/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
  };
  let englishNumber = 0;
  for (let i = 0; i < s.length; i++) {

    const currentValue = romans[s[i]];
    const nextValue = romans[s[i + 1]];

    if (nextValue > currentValue) {
      englishNumber -= currentValue;
    } else {
      englishNumber += currentValue;
    }
  }

  return englishNumber;
};