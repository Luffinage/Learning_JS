// const num = 50;
// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("To much");
// } else {
//   console.log("Okay");
// }

// num === 50 ? console.log("Okay") : console.log("Error");

// switch (num) {
//   case 49:
//     console.log("Wrong");
//     break;
//   case 100:
//     console.log("Wrong");
//     break;
//   case "50":
//     console.log("Wrong");
//     break;
//   case 50:
//     console.log("Yes!");
//     break;
//   default:
//     console.log("Not this time");
// }

// const hamburger = true;
// const fries = true;
// const fries = false;
// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//   console.log("I'm Full");
// }

// console.log(hamburger && fries);

// const hamburger = 3;
// const fries = 1;
// const cola = 1;
// console.log(hamburger === 3 && cola === 1 && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "word");

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("All is Full");
// } else {
//   console.log("We are leaving!");
// }

// const hamburger = 0;
// const fries = null;
// const cola = 0;

// if (hamburger || cola || fries) {
//   console.log("All is Full");
// } else {
//   console.log("We are leaving!");
// }

// let johnReport,
//   alexReport,
//   samReport,
//   mariaReport = "done";

// console.log(johnReport || alexReport || samReport || mariaReport);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//   console.log("All is Full");
// } else {
//   console.log("We are leaving!");
// }

// console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++) {
//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (j = 0; j < i; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 5; k++) {
//       if (k === 2) continue first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 5; k++) {
//       if (k === 2) break first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   if (i >= 5 && i <= 10) {
//     console.log(i);
//   }
// }

// for (let i = 20; i >= 10; i--) {
//   console.log(i);
//   if (i === 14) break;
// }

// // Место для третьей задачи
// function thirdTask() {
//   // Пишем решение вот тут
//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 != 1 && i > 0) {
//       console.log(i);
//     }
//   }
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 1;
// // while (i % 2 === 1 && i >= 3 && i <= 15) {
// while (i < 16) {
//   i++;
//   if (i % 2 === 1) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

// [5, 6, 7, 8, 9, 10];

// function task() {
//   const array = [];
//   for (let i = 5; i < 11; i++) {
//     array[i - 5] = i;
//     console.log(array);
//   }
//   return array;
// }

// const arrayOfNumbers = [];

// // Пишем решение вот тут

// // Пишем решение вот тут

// for (let i = 5; i <= 10; i++) {
//   arrayOfNumbers[i - 5] = i;
//   console.log(arrayOfNumbers);
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
//   if (result.length === arr.length) {
//     console.log(result);
//   }

// }

// const data = [5, 10, "Shopping", 20, "Homework"];

// for (let i = 0; i <= data.length; i++) {
//   if (data.length === i) {
//     console.log(data);
//   } else if (typeof data[i] === typeof i) {
//     data[i] = data[i] + data[i];
//     // console.log(data[i]);
//   } else {
//     data[i] += " - done";
//     // console.log(data[i]);
//   }
// }

// const data = [5, 10, "Shopping", 20, "Homework"];
// let result = [];

// for (let i = 0; i <= 5; i++) {
//   if (result.length === data.length) {
//     console.log(result);
//   } else {
//     result[i] = data[4 - i];
//     // console.log(result);
//   }
// }

// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//   for (let j = 5; j > i; j--) {
//     result += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     result += "**";
//   }
//   result += "*\n";
// }
// console.log(result);
