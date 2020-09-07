"use strict";
// *---------- EASY ----------*//

// TODO: Create a function that takes a string and returns the number (count) of vowels contained within it.
// * Examples
// * countVowels("Celebration") ➞ 5
// * countVowels("Palm") ➞ 1
// * countVowels("Prediction") ➞ 4

function countVowels(str) {
  const vowels = ['A','E','I','O','U','a','e','i','o','u'];
  let strArr = str.split("")
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    //console.log(vowels.indexOf(strArr[i]))
    if(vowels.indexOf(strArr[i]) !== -1) {
      newArr.push(strArr[i]);
    }
  }
  console.log(newArr.length)
  return newArr.length
}
//countVowels("Celebration")


