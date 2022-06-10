// TEST WILL TAKE THE INPUT Number AND RETURN IT AS AN ARRAY FROM 0 TO THE INPUTED NUMBER
function beepBoop(number) {
  const digits = parseInt(number);
  let digitsArray = [];
  for (let i = 0; i <= digits; i += 1) {
    digitsArray.push(i);
  }
  return digitsArray;
};
// This test will identify the number 1 within the array.
function beepBoop(number, index) {
  const digits = parseInt(number);
  let digitsArray = [];
  let oneFlag = false;
  for (let i = 0; i <= digits; i += 1) {
    digitsArray.push(i);
  } if (digitsArray[index] === "1") {
      oneFlag = true;
  };
  console.log("looped");
  return digitsArray;
};