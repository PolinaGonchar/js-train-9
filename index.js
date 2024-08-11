// Task: 1

/**
 * The `findElementGreaterThan` function finds the first element in an array that is greater than a given number.
 *  arr - the input array where the search is performed.
 *  num - the number used for comparison with the array elements.
 * Returns - foundElement - the first element in the array that is greater than the given number.
 */
function findElementGreaterThan(arr, num) {
  if (!Array.isArray(arr)){ return undefined; }
  const foundElement = arr.find((item) => item > num );
  if (foundElement) {
    return foundElement;
  } else {
    return "No number satisfying the condition found";
  }
}

console.log("Task: 1  ==============================");
console.log(findElementGreaterThan([1, 2, 3, 4, 5], 3)); // Outputs 4

// Task: 2

/**
 * The `findIndexByProperty` function finds the index of the first object in an array whose 'name' property matches the given name.
 *  arr - the input array of objects where the search is performed.
 *  name - the name used for comparison with the 'name' property of the array objects.
 * Returns - foundIndex - the index of the first object whose 'name' property matches the given name.
 * If the object is not found, returns -1.
 */
function findIndexByProperty(arr, name) {
  if (!Array.isArray(arr)) {
    return -1;
  }
  const foundIndex = arr.findIndex((obj) => obj.name === name);
  return foundIndex >= 0 ? foundIndex : "No object with such a name found";
}

console.log("Task: 2  ==============================");
console.log(
  findIndexByProperty(
    [
      { name: "Igor", age: 23 },
      { name: "Piotr", age: 30 },
    ],
    "Piotr"
  )
); // Outputs 1

// Task: 3 . NOTE, the findLast method works in Node versions above 18.0.0. If your version is lower, you may skip this task.
// To check your Node version, run the command `node -v` in the terminal.

/**
 * The `findLastEvenNumber` function finds the last even number in an array.
 *  arr - the input array of numbers where the search is performed.
 * Returns - lastEvenNumber - the last even number in the array.
 * If such a number is not found, returns 'No even numbers found'.
 */
function findLastEvenNumber(arr) {
  if (!Array.isArray(arr)) {
    return `The input parameter must be an array`;
  }
  const lastEvenNumber = arr.findLast((num) => num % 2 === 0);
  return lastEvenNumber !== undefined ? lastEvenNumber : "No even numbers found";
}

console.log("Task: 3 ==============================");
console.log(findLastEvenNumber([1, 2, 3, 4, 5])); // Outputs 4

// Task: 4

/**
 * The `getSubArrayAndConvertToString` function extracts a subarray from a given index to the end of the array and converts it to a string.
 * The `slice()` and `join()` methods are used for implementation.
 *  arr - the input array.
 *  startIdx - the index from which the subarray starts.
 * Returns - subArrayString - the string obtained from converting the subarray.
 */
function getSubArrayAndConvertToString(arr, startIdx) {
  if (!Array.isArray(arr)) {
    return "The input parameter must be an array";
  }
  const subArray = arr.slice(startIdx);
  const subArrayString = subArray.join(" ");
  return subArrayString;
}

console.log("Task: 4 ==============================");
console.log(
  getSubArrayAndConvertToString(
    ["I", "love", "JavaScript!", "It", "is", "very", "powerful"],
    3
  )
);
// Outputs "It is very powerful"

// Task: 5

/**
 * The `getArrayKeys` function retrieves the keys of an array.
 * The `keys()` method is used for implementation.
 *  arr - the input array.
 * Returns - arrayKeys - an array of keys of the input array.
 */
function getArrayKeys(arr) {
  if (!Array.isArray(arr)) {
    return "The input parameter must be an array";
  }
  const arrayKeys = arr.keys();
  return Array.from(arrayKeys);
}

console.log("Task: 5  ==============================");
console.log(getArrayKeys(["apple", "banana", "orange"])); // Outputs [0, 1, 2]

// Task: 6

/**
 * The `getPositiveArrayValues` function retrieves only positive values from an array.
 * The `values()` and `filter()` methods are used for implementation.
 *  arr - the input array.
 * Returns - positiveArrayValues - an array of positive values from the input array.
 */
function getPositiveArrayValues(arr) {
  if (!Array.isArray(arr)) {
    return "The input parameter must be an array";
  }
  const obj = arr.values();
  const arrayValues = Array.from(obj);
  return arrayValues.filter((value) => value > 0);
}

console.log("Task: 6  ==============================");
console.log(getPositiveArrayValues([-2, -1, 0, 1, 2])); // Outputs [1, 2]

// Task: 7

/**
 * The `removeAndDouble` function removes elements from an array starting from a given index and doubles the remaining elements.
 * The `splice()` and `map()` methods are used for implementation.
 *  arr - the input array.
 *  startIdx - the index from which the elements are removed.
 * Returns an array of doubled elements after removal.
 */
function removeAndDouble(arr, startIdx) {
  if (!Array.isArray(arr)) {
    return "The input parameter must be an array";
  }
  arr.splice(startIdx);
  return arr.map((element) => element * 2);
}

console.log("Task: 7 ==============================");
console.log(removeAndDouble([1, 2, 3, 4, 5], 2)); // Outputs [ 2, 4 ]

// Task: 8

/**
 * The `sumAndPrint` function calculates the sum of the array elements and prints each element to the console.
 * The `reduce()` and `forEach()` methods are used for implementation.
 *  arr - the input array.
 * Returns - sum - the sum of the array elements.
 */
function sumAndPrint(arr) {
  if (!Array.isArray(arr)) {
    return "The input parameter must be an array";
  }
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
  0);
  arr.forEach((element) => console.log(element));
  return sum;
}

console.log("Task: 8  ==============================");
console.log(sumAndPrint([1, 2, 3, 4, 5])); // Outputs
// 1
// 2
// 3
// 4
// 5
// 15

// Task: 9

/**
 * The `flattenSquareAndFilter` function flattens an array, squares each element, and filters by a given threshold.
 * The `flat()`, `map()`, and `filter()` methods are used for implementation.
 *  arr - the input array.
 *  threshold - the threshold value for filtering.
 * Returns a flattened array with squared elements filtered by the threshold.
 */
function flattenSquareAndFilter(arr, threshold) {
  if (!Array.isArray(arr)){
    return `The input parameter must be an array`;
  }
  const flatArray = arr.flat();
  const squaredArray = flatArray.map((item) => item ** 2);
  return squaredArray.filter((element) => element > threshold);
}

console.log("Task: 9 ==============================");
console.log(
  flattenSquareAndFilter(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    10
  )
); // Outputs [16, 25, 36]

// Task: 10

/**
 * The `getLastElementsSumAndPrint` function calculates the sum of the last n elements of an array and prints them to the console.
 * The `reduceRight()`, `slice()`, and `forEach()` methods are used for implementation.
 *  arr - the input array.
 *  n - the number of last elements to consider.
 * Returns - sumofElement - the sum of the last n elements of the array.
 */
function getLastElementsSumAndPrint(arr, n) {
  if (!Array.isArray(arr)) {
    return "The input parameter must be an array";
  }
  const lastElements = arr.slice(-n);
  const sumofElement = lastElements.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);
  lastElements.forEach((element) => console.log(element));
  return sumofElement;
}

console.log("Task: 10  ==============================");
console.log(getLastElementsSumAndPrint([1, 2, 3, 4, 5], 2)); // Outputs
// 4
// 5
// 9

// Task: 11

/**
 * The `wordLengths` function takes an array of words and returns a new array where each element is the length of the corresponding word.
 *  arr - input array of words.
 * Returns - lengthsArray - new array where each element is the length of the corresponding word from the input array.
 */
function wordLengths(arr) {
  if(!Array.isArray(arr)){ return 'The input parameter must be an array'; } ;
  const lengthsArray = arr.map((word) => word.length);
  return lengthsArray;
}

console.log("Task: 11 ==============================");
console.log(wordLengths(["apple", "banana", "pineapple", "watermelon"])); // Output [5, 6, 9, 10]

// Task: 12

/**
 * The `insertElementAt` function inserts a given element into an array at a specified position.
 * The `splice()` method is used for implementation.
 *  arr - input array.
 *  index - the index at which to insert the element.
 *  element - the element to be inserted.
 * Returns - arr - array with the inserted element.
 */
function insertElementAt(arr, index, element) {
  if(!Array.isArray(arr)){ return 'The input parameter must be an array'; } ;
  arr.splice(index, 0, element);
  return arr;
}

console.log("Task: 12 ==============================");
console.log(insertElementAt([1, 2, 3, 4, 5], 2, "three")); // Output [1, 2, 'three', 3, 4, 5]

// Task: 13

/**
 * The `flattenArray` function takes an array (nested arrays are allowed) and returns a new one-dimensional array with all elements.
 *  arr - input array that may contain nested arrays.
 * Returns a one-dimensional array with all elements from the input array.
 */
function flattenArray(arr) {
  if(!Array.isArray(arr)){ return 'The input parameter must be an array'; } ;
  return arr.flat(Infinity);
  // Check if the input parameter is an array, if not return 'The input parameter must be an array'
  // Use the flat method with the Infinity parameter to "flatten" the array to any depth
  // Return the "flattened" array
}

console.log("Task: 13 ==============================");
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output [1, 2, 3, 4, 5]

// Task: 14

/**
 * The `expandArrayByN` function takes an array of numbers and a number n, and returns a new array where each number from the original array is repeated n times.
 *  arr - input array of numbers.
 *  n - the number of times each number is repeated in the new array.
 * Returns - expandedArray - new array where each number is repeated n times.
 */
function expandArrayByN(arr, n) {
  if(!Array.isArray(arr) && typeof(n) !== 'number'){ return 'The first input parameter must be an array, the second - a number'; } ;
  const expandedArray = arr.flatMap((num) => Array(n).fill(num));
  return expandedArray;
  // Check if the input parameters are an array and a number respectively, if not return 'The first input parameter must be an array, the second - a number'
  // Use the flatMap method to create a new array where each number is repeated n times
  // Return the expanded array
}

console.log("Task: 14 ==============================");
console.log(expandArrayByN([1, 2, 3], 3)); // Output [1, 1, 1, 2, 2, 2, 3, 3, 3]

// Task: 15

/**
 * The `findLongestWord` function takes an array of words and returns the longest word.
 * The `reduce()` method is used for implementation.
 *  arr - input array of words.
 * Returns - longestWord - the longest word.
 */
function findLongestWord(arr) {
  if(!Array.isArray(arr)){ return ""; } ;
  const longestWord = arr.reduce((longest, word) => {
    if (word.length > longest.length) {
      return word;
    }
    return longest;
  }, "");
  return longestWord;
  // Check if the input parameter is an array, if not, return an empty string
  // Use the reduce() method to find the longest word
  // Compare the length of the current word with the length of the longest word
  // Otherwise, return the previous longest word unchanged
  // Return the longest word
}
console.log("Task: 15 ==============================");
console.log(findLongestWord(["apple", "banana", "pineapple", "watermelon"])); // Output 'watermelon'

// Task: 16

/**
 * The `findDuplicateElements` function takes an array of numbers and returns a new array containing only the duplicated elements.
 * The filter() and indexOf() methods are used for implementation.
 *  arr - input array of numbers.
 * Returns - duplicateElements - new array containing only the duplicated elements.
 */
function findDuplicateElements(arr) {
  if(!Array.isArray(arr)){ return []; } ;
  const duplicateElements = arr.filter((num, index) => { return arr.indexOf(num) !== index});
  return duplicateElements;
}
console.log("Task: 16 ==============================");
console.log(findDuplicateElements([1, 2, 3, 4, 2, 5, 6, 3, 5])); // Output [2, 3, 5]

// Task: 17

/**
 * The `capitalizeWords` function takes an array of strings and returns a new array where each word has the first letter in uppercase.
 * The map() method, string methods, and logic are used for implementation.
 *  arr - input array of strings.
 * Returns - capitalizedArray - new array where each word has the first letter in uppercase.
 */
function capitalizeWords(arr) {
  if(!Array.isArray(arr)){ return []; } ;
  const capitalizedArray = arr.map((word) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  });
  return capitalizedArray;
}
console.log("Task: 17 ==============================");
console.log(capitalizeWords(["apple", "banana", "orange"])); // Output ['Apple', 'Banana', 'Orange']

// Task: 18

/**
 * The `calculateTotalPrice` function takes an array of product objects and returns the total price of all products.
 * Each product object has a price property.
 * The reduce() method is used for implementation.
 *  arr - input array of product objects.
 * Returns - totalPrice - total price of all products.
 */
function calculateTotalPrice(arr) {
  if(!Array.isArray(arr)){ return 0; } ;
  const totalPrice = arr.reduce((total, product) => {
    return total + product.price;
  }, 0);
  return totalPrice;
}
console.log("Task: 18 ==============================");
console.log(
  calculateTotalPrice([
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ])
); // Output 6

// Task: 19. NOTE: the findLastIndex method works in Node versions above 18.0.0, if your version is lower, you may skip this task.
// To check your Node version, run the command node -v in the terminal.

/**
 * The `findLastNegativeNumberIndex` function takes an array of numbers and returns the index of the last negative number.
 * The findLastIndex() method is used for implementation.
 *  arr - input array of numbers.
 * Returns - lastIndex - index of the last negative number.
 */
function findLastNegativeNumberIndex(arr) {
  if(!Array.isArray(arr)){ return -1; } ;
  const lastIndex = arr.findLastIndex((num) => num < 0);
  return lastIndex;
}
console.log("Task: 19 ==============================");
console.log(findLastNegativeNumberIndex([1, 2, -3, 4, -5, 6, -7])); // Output 6
