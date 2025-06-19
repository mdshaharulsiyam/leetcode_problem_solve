var isPalindrome = function (x) {

  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    // if i divide by 10 i get the last digit ## vagsess ##  => 166 % 10 = 6  => 16 % 10 = 6  like this
    let digit = x % 10;

    reversed = reversed * 10 + digit; // reversed start with 0  ## if i multiply by 10 i add the last digit ## 0 * 10 + 6 => 6  => 60 + 6 => 66

    x = Math.floor(x / 10); // ## if i divide by 10 remove the last digit use math.floor to get the integer ## 166 / 10 = 16  => 16 / 10 = 1
  }

  return original === reversed;
};
