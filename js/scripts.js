// BUSINESS LOGIC
// // TEST WILL TAKE THE INPUT Number AND RETURN IT AS AN ARRAY FROM 0 TO THE INPUTED NUMBER
// function beepBoop(number) {
//   const digits = parseInt(number);
//   let digitsArray = [];
//   for (let i = 0; i <= digits; i += 1) {
//     digitsArray.push(i);
//   }
//   return digitsArray;
// };
// // This test will identify the number 1 within the array.
// function beepBoop(number) {
//   const digits = parseInt(number);
//   let digitsArray = [];
//   let oneFlag = false;
//   let twoFlag = false;
//   for (let i = 0; i <= digits; i += 1) {
//     digitsArray.push(i);
//     if (digitsArray[i] === 1) {
//         oneFlag = true;
//       };
//   } 
//     console.log(oneFlag);
//   return digitsArray;
// };
// This test will identify the number 2 within the array.
// function beepBoop(number) {
//   const digits = parseInt(number);
//   let digitsArray = [];
//   let oneFlag = false;
//   let twoFlag = false;
//   for (let i = 0; i <= digits; i += 1) {
//     digitsArray.push(i);
//     if (digitsArray[i] === 1) {
//         oneFlag = true;
//     } else if (digitsArray[i] === 2) {
//       twoFlag = true;
//     };
//   } 
//   console.log(twoFlag);
//   return digitsArray;
// };
// This test will identify the number 3 within the array.
// function beepBoop(number) {
//   const digits = parseInt(number);
//   let digitsArray = [];
//   let oneFlag = false;
//   let twoFlag = false;
//   let threeFlag = false;
//   for (let i = 0; i <= digits; i += 1) {
//     digitsArray.push(i);
//     if (digitsArray[i] === 1) {
//         oneFlag = true;
//     } else if (digitsArray[i] === 2) {
//       twoFlag = true;
//     } else if (digitsArray[i] === 3) {
//       threeFlag = true;
//     };
//   } 
//   console.log(threeFlag);
//   return digitsArray;
// };
// This test will replace a number containing the number 1 with the word "Boop!".
// function beepBoop(number) {
//   const digits = parseInt(number);
//   let digitsArray = [];
//   let oneFlag = false;
//   let twoFlag = false;
//   let threeFlag = false;
//   for (let i = 0; i <= digits; i += 1) {
//     digitsArray.push(i);
//     if (digitsArray[i] === 1) {
//         digitsArray[1] = "Boop!";
//     } 
//   //   else if (digitsArray[i] === 2) {
//   //     twoFlag = true;
//   //   } else if (digitsArray[i] === 3) {
//   //     threeFlag = true;
//   //   };
//   } 
//   return digitsArray;
// };
// This test will replace a number containing the number 2 with the word "Beep!".
// function beepBoop(number) {
//   const digits = parseInt(number);
//   let digitsArray = [];
//   let oneFlag = false;
//   let twoFlag = false;
//   let threeFlag = false;
//   for (let i = 0; i <= digits; i += 1) {
//     digitsArray.push(i);
//     if (digitsArray[i] === 1) {
//         digitsArray[1] = "Boop!";
//     } 
//     else if (digitsArray[i] === 2) {
//         digitsArray[2] = "Beep!";
//     } 
//     // else if (digitsArray[i] === 3) {
//     //   threeFlag = true;
//     // };
//   } 
//   return digitsArray;
// };
// This test will replace a number containing the number 3 with the question "Won't you be my neighbor?".
function beepBoop(number) {
  const digits = parseInt(number);
  let digitsArray = [];
  let oneFlag = false;
  let twoFlag = false;
  let threeFlag = false;
  for (let i = 0; i <= digits; i += 1) {
    digitsArray.push(i);
    if (digitsArray[i] === 1) {
        digitsArray[1] = "Boop!";
    } 
    else if (digitsArray[i] === 2) {
        digitsArray[2] = "Beep!";
    } 
    else if (digitsArray[i] === 3) {
        digitsArray[3] = "Won't you be my neighbor?";
    };
  } 
  return digitsArray;
};
// UI LOGIC
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    const input1 = $("select#input1").val();
    function beepBoop(input1)
    $("#digitsArray").show();
  });
})