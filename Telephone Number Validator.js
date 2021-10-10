function telephoneCheck(str) {
  return (/^(1 )?\d{10}$|^(1 )?\d{3}[-,' ']\d{3}[-,' ']\d{4}|^(1 )?\(\d{3}\)\s?\d{3}-\d{4}|^1?\(\d{3}\)\s?\d{3}-\d{4}/).test(str);
}

console.log(telephoneCheck('12345678911'));
