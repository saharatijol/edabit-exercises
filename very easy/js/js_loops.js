// *--------- Edabit Exercises -------- * //

// TODO: SUM OF THE ODD NUMBERS. Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

function addOddToN(num) {
	var sum = 0;
	for (let i = 1; i <= num; i++) {
		if (i % 2 === 1) {
			sum += i
			console.log(i)
		}
	}
	console.log(sum);
	return sum;
}
//addOddToN(25);

// TODO: Create a function to multiply all of the values in an array by the amount of values in the given array.
// * Examples:
// * multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
// * multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
// * multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
// * multiplyByLength([0]) ➞ ([0])

function multiplyByLength(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i] *= arr.length
    newArray.push(arr[i]);
  }
  return newArray;
}

//multiplyByLength([2,3,1,0]);
//mulitplyByLength([4,1,1])

// TODO: Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// * Examples:
// * integerBoolean("100101") ➞ [true, false, false, true, false, true]
// * integerBoolean("10") ➞ [true, false]
// * integerBoolean("001") ➞ [false, false, true]

function integerBoolean(str) {
let newArray = [];
let conversion = str.split("");

for (let i = 0; i < conversion.length; i++) {
  if (conversion[i] === "0") {
    newArray.push(false);
  }
  else if (conversion[i] === "1") {
    newArray.push(true);
  }
}
//console.log(newArray);
return newArray;
}
//integerBoolean("100101");

// TODO: Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
// * Example
// * addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
// * addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
// * addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

function addIndexes(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + i);
  }
  return newArr
}
//addIndexes([1, 2, 3, 4, 5]);

// TODO: Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
// * Examples:
// * addUpTo(3) ➞ 6
//   1 + 2 + 3 = 6
// * addUpTo(10) ➞ 55
//   1 + 2 + 3 + ... + 10 = 55
// *a ddUpTo(7) ➞ 28
//   1 + 2 + 3 + ... + 7 = 28

function addUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i
    //console.log(sum += i)
  }
  return sum
}
//addUpTo(10)

// TODO: Create a function where given the number n, return the sum of all square numbers up to and including n. 
// ? squaresSum(3) ➞ 14
// ?  1² + 2² + 3² 
// ?  1 + 4 + 9 
// ?  14  
// * Examples:
// * squaresSum(3) ➞ 14
// * squaresSum(12) ➞ 650
// * squaresSum(13) ➞ 819

function squaresSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i**2
    //console.log(sum);
  }
  return sum;
}
//squaresSum(12)

// TODO: Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// * Examples:
// * filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// * filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// * filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr) {
  let intArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'number' && Number.isInteger(arr[i])) {
      //console.log(arr[i]);
      intArray.push(arr[i]);
      //console.log (intArray);
    }
  }
  return intArray
}
//filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])
//filterArray(["Nothing", "here"])

// TODO: Create a function that adds a string ending to each member in an array.
// *  Examples:
// *  addEnding(["clever", "meek", "hurried", "nice"], "ly")
// *  ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// *  addEnding(["new", "pander", "scoop"], "er")
// *  ➞ ["newer", "panderer", "scooper"]
// *  addEnding(["bend", "sharpen", "mean"], "ing")
// *  ➞ ["bending", "sharpening", "meaning"]

function addEnding(arr, ending) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + ending)
  }
  return newArr
}
//addEnding(["clever", "meek", "hurried", "nice"], "ly")

// TODO: Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
// *  Examples
// *  Go(1) ➞ "-"
// *  Go(5) ➞ "-----"
// *  Go(3) ➞ "---"

function go(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += '-';
    //console.log(str)
  }
  return str
}
//go(11);

// TODO: Create a function that takes an array of numbers. Return the largest number in the array.
// * Examples:
// * findLargestNum([4, 5, 1, 3]) ➞ 5
// * findLargestNum([300, 200, 600, 150]) ➞ 600
// * findLargestNum([1000, 1001, 857, 1]) ➞ 1001

function findLargestNum(num) {
  //console.log (Math.max(...num));
  return Math.max(...num);
}
//findLargestNum([300, 200, 600, 150])

// TODO: In this exercise you will have to.
// TODO: Take a list of names.
// TODO: Add "Hello" to every name.
// TODO: Make one big string with all greetings.
// TODO: The solution should be one string with a comma in between every "Hello (Name)".
// *  Examples:
// *  greetPeople(["Joe"]) ➞ "Hello Joe"
// *  greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"
// *  greetPeople(["Frank", "Angela", "Joe"]) ➞ "Hello Frank, Hello Angela, Hello Joe"

function greetPeople(names) {
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    newArr.push(`Hello ${names[i]}`)
  }
  return newArr.join(', ');
}
//greetPeople(["Frank", "Angela", "Joe"])

// TODO: Write a function that returns true if all integers in an array are factors of a number, and false otherwise.
// *  Examples:
// *  checkFactors([2, 3, 4], 12) ➞ true
//    Since 2, 3, and 4 are all factors of 12.
// *  checkFactors([1, 2, 3, 8], 12) ➞ false
//    8 is not a factor of 12.
// *  checkFactors([1, 2, 50], 100) ➞ true
// *  checkFactors([3, 6], 9) ➞ false

function checkFactors(factors, num) {
  for (let i = 0; i < factors.length; i++) {
    if (num % factors[i] !== 0) {
      //console.log(false);
      return false
    }
  }
  return true
}
//checkFactors([1, 2, 50], 100)

// TODO: Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
// *  Examples
// *  howManyTimes(5) ➞ "Edaaaaabit"
// *  howManyTimes(0) ➞ "Edbit"
// *  howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"

function howManyTimes(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += 'a'
  }
  return `Ed${str}bit`
}
//howManyTimes(5)

// TODO: You're in the midst of creating a typing game. Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).
// * Example:
// * Inputs:
// * User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// * Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]
// * Output: [1, 1, -1, -1, 1]
// * correctStream(
// *   Examples
// *   ["it", "is", "find"],
// *   ["it", "is", "fine"]
// * ) ➞ [1, 1, -1]
// * 
// * correctStream(
// *   ["april", "showrs", "bring", "may", "flowers"],
// *   ["april", "showers", "bring", "may", "flowers"]
// * ) ➞ [1, -1, 1, 1, 1]

function correctStream(user, correct) {
  let newArr = [];
  for (let i = 0; i < user.length; i++) {
    //console.log(user[i] === correct[i]);
    if (user[i] !== correct[i]) {
      newArr.push(-1);
    }
    else if (user[i] === correct[i]){
      newArr.push(1);
    }
  }
  console.log(newArr)
  return newArr
}
//correctStream(["april", "showrs", "bring", "may", "flowers"],["april", "showers", "bring", "may", "flowers"])
//correctStream(["starry", "wind", "skies"], ["starry", "wind", "skies"])
