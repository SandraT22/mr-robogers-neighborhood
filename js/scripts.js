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
  for (let i = 0; i <= digits; i += 1) {
    digitsArray.push(i.toString());
    if (digitsArray[i].includes("3")) {
      digitsArray[i] = "Won't you be my neighbor!";
    } 
    else if (digitsArray[i].includes("2")) {
      digitsArray[i] = "Boop!";
    } 
    else if (digitsArray[i].includes("1")) {
      digitsArray[i] = "Beep!";
    }
  } 
  return digitsArray;
};
// UI LOGIC
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    const input1 = $("select#input1").val();
    console.log(input1);
    const altArray = beepBoop(input1)
    console.log(altArray);
    // document.getElementById("#altArray").innerHTML;
    $("p").html(altArray);
  });
  function resetDropDown () {
    $("#input1").prop("selectedIndex",0);
  }
  $(".clickable").click(function() {
    $("#result-show").toggle();
    resetDropDown();
  })
});