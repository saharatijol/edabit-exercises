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


// TODO: Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false. 

// * To illustrate: profitableGamble(0.2, 50, 9)... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// * Examples
// * profitableGamble(0.2, 50, 9) ➞ true
// * profitableGamble(0.9, 1, 2) ➞ false
// * profitableGamble(0.9, 3, 2) ➞ true

function profitableGamble(prob, prize, pay) {
  let profitCalc = (prob * prize) - pay;
  if (profitCalc > 0) {
    return true;
  }
  return false;
}
//profitableGamble(0.9, 1, 2);

// TODO: Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// * Examples:
// * integerBoolean("100101") ➞ [true, false, false, true, false, true]
// * integerBoolean("10") ➞ [true, false]
// * integerBoolean("001") ➞ [false, false, true]

