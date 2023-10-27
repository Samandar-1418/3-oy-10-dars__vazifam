
// 1 - masala
// function oddNumbers(number) {
//     let oddArr = [...number].filter((num) => num % 2 === 1);
//     return oddArr;
//   }
  
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let res = oddNumbers(arr);
  
//   console.log(res);

/*  7 - masala
let n = 12;

function oddNumbers(n) {
    let oddArray = [];
    
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        oddArray.push(i);
      }
    }
    return oddArray;
  }
  
  let res = oddNumbers(n);
  
  console.log(res);
  */

/* 8 - masala
function numbers(array) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 100 && arr[i] <= 999) {
        count++;
      }
    }
    return count;
  }
  
  let arr = [123, 45, 789, 1225, 345, 678, 910];
  let count = numbers(arr);
  
  console.log(count);

*/

/* 5 - masala
function sonlar(number) {
    let digits = [];
    let numString = number.toString();
    for (let i = 0; i < numString.length; i++) {
      digits.push(parseInt(numString.charAt(i)));
    }
    return digits;
  }
  
  let num = 1234;
  let digitsArray = sonlar(num);
  
  console.log(digitsArray);
*/

function getFirstLetters(words) {
  let firstLetters = [];
  for (let i = 0; i < words.length; i++) {
    firstLetters.push(words[i][0]);
  }
  return firstLetters;
}

let words = ["apple", "banana", "cherry"];
let firstLettersArray = getFirstLetters(words);

console.log(firstLettersArray);


Natija:

["a", "b", "c"]