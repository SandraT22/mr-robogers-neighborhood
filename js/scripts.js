// TEST WILL TAKE THE INPUT Number AND RETURN IT AS AN ARRAY FROM 0 TO THE INPUTED NUMBER
function beepBoop(number) {
  const digits = parseInt(number);
  let digitsArray = [];
  for (let i = 0; i <= digits; i += 1) {
    digitsArray.push(i);
  }
  return digitsArray;
};