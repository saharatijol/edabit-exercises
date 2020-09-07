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

// TODO: Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
// *  Examples
// *  getAbsSum([2, -1, 4, 8, 10]) ➞ 25
// *  getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
// *  getAbsSum([2, 4, 6, 8, 10]) ➞ 30
// *  getAbsSum([-1]) ➞ 1

function getAbsSum(arr) {
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.abs(arr[i]))
    sum += newArr[i]
  }
  return sum;
}
//getAbsSum([-3, -4, -10, -2, -3])

// TODO: Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// *  Examples
// *  filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// *  filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// *  filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

function filterArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newArr.push(arr[i])
    }
  }
  return newArr;
}
//filterArray([1, 2, "aasf", "1", "123", 123])

// TODO: Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// *  Examples:
// *  charCount("a", "edabit") ➞ 1
// *  charCount("c", "Chamber of secrets") ➞ 1
// *  charCount("b", "big fat bubble") ➞ 4

function charCount(myChar, str){
  let strArr = str.split("");
  let newArr = []
  for (let i = 0; i < strArr.length; i++) {
    if (myChar.indexOf(strArr[i]) !== -1) {
        newArr.push(strArr[i])
    }
  }
  return newArr.length
}
//charCount("b", "big fat bubble")

// TODO: Create a function that takes in an array of numbers and returns the sum of its cubes.
// * Examples:
// * sumOfCubes([1, 5, 9]) ➞ 855
//   Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([3, 4, 5]) ➞ 216
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0

function sumOfCubes(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i]**3
    sum += nums[i];
  }
  return sum
}
//sumOfCubes([1, 5, 9])

// TODO: Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// * Example:
// * reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// * reverseCase("MANY THANKS") ➞ "many thanks"
// * reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

function reverseCase(str) {
  let strArr = str.split("")
  let mapArr = strArr.map(function(char){
    if (char === char.toLowerCase()) {
      return char.toUpperCase()
    }
    else if(char === char.toUpperCase()) {
      return char.toLowerCase();
    }
  });
  return mapArr.join('')
}
//reverseCase("sPoNtAnEoUs")

// TODO: Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.
// *  Example
// *  peelLayerOff([
// *    ["a", "b", "c", "d"],
// *    ["e", "f", "g", "h"],
// *    ["i", "j", "k", "l"],
// *    ["m", "n", "o", "p"]
// *  ]) ➞ [
// *    ["f", "g"],
// *    ["j", "k"]
// *  ]
// *  
// *  peelLayerOff([
// *    [1, 2, 3, 4, 5],
// *    [6, 7, 8, 9, 10],
// *    [11, 12, 13, 14, 15],
// *    [16, 17, 18, 19, 20],
// *    [21, 22, 23, 24, 25],
// *    [26, 27, 28, 29, 30],
// *    [31, 32, 33, 34, 35]
// *  ]) ➞ [
// *    [7, 8, 9],
// *    [12, 13, 14],
// *    [17, 18, 19],
// *    [22, 23, 24],
// *    [27, 28, 29]
// *  ]
// *  
// *  peelLayerOff([
// *    [true, false, true],
// *    [false, false, true],
// *    [true, true, true]
// *  ]) ➞ [[false]]
// *  
// *  peelLayerOff([
// *    ["hello", "world"],
// *    ["hello", "world"]
// *  ]) ➞ []


