/* eslint-disable */

/*  For a portion of the assignment your job is to write functions
 *  so that each function invocation below works.  You're working backwards.
 *
 *  There are no tests for this file.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */
// Write a function called firstItem that passes the first item of the given array to the callback function
// code here
const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

const firstItem = (foods, cb) => {

 cb(foods[0]);

};

firstItem(foods, (firstItem) => {
 console.log(`The first item is ${firstItem}.`);
});


// Write a function called getLength that passes the length of the array into the callback
// code here

const getLength = (foods, cb) => {
 cb(foods.length);
};

getLength(foods, (length) => {
 console.log(`The length of the array is ${length}.`);
});

// Write a function called last which passes the last item of the array into the callback
// code here

const last = (foods, cb) => {
 cb(foods[foods.length - 1]);
};

last(foods, (lastItem) => {
 console.log(`The last item in the array is ${lastItem}.`);
});

// Write a function called sumNums that adds two numbers and passes the result to the callback
// code here

const sumNums = (num1, num2, cb) => {
 cb(num1 + num2);
};

sumNums(5, 10, (sum) => {

 console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
// code here
const multiplyNums = (num1, num2, cb) => {
 cb(num1 * num2);
};

multiplyNums(5, 10, (product) => {
 console.log(`The product is ${product}.`);
});

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
// code here

const contains = (foods, str, cb) => {

 let result = false;

 for (let i = 0; i < foods.length; i++) {
  if (foods[i] === str) {
   result = true;
  }
 }
 cb(result);
};
/*
contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});
*/

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// code here

const removeDuplicates = (foods, cb) => {
 let i = 0;
 let j = 1; 
 for (; i < foods.length; i++) {
  if (foods[i] !== '') {
   for (; j < foods.length; j++) {
     console.log(`${foods[i]} ${foods[j]}`);
    if (foods[i] === foods[j] && i !== j) {
     foods[i] = '';
    }
   }
   i++;
   j = 0;
  }
 }
 cb(foods);
};

removeDuplicates(foods, (uniqueFoods) => {
 console.log(`Foods with duplicates removed: ${uniqueFoods}`);
});

// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.
// code here

const forEach = (foods, cb) => {

 for (let i = 0; i < foods.length; i++) {
  cb(foods[i], i);
 }

};

forEach(foods, (value, index) => {
 console.log(`${value} is at index ${index}.`);
});

/* eslint-enable */
