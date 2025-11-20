const numbers = [1, 2, 3, 4, 5];

console.log("Orginal Array:", numbers);
console.log("Array size: ", numbers.length);

// add one element to tail(end)
numbers.push(10);

console.log("Updated Array:", numbers);

// add multiple elements at once to the tail (end)
numbers.push(11, 23, 100);

console.log("Updated Array:", numbers);

console.log("Array length: ", numbers.length);

// add one element to the head (the beginning)
numbers.unshift(0);

console.log("Updated Array:", numbers);

// add multiple elements at once to the head (beginning)
numbers.unshift(-1, -2, -3);

console.log("Updated Array:", numbers);

// remove from the tail(end)

numbers.pop();

console.log("Updated Array:", numbers);

// remove from the head(beginning)

function clearArray(array) {
  //array.length = 0;
}

test = [1, 2, 3, 4, 5];
clearArray(test);
console.log(test);

const names = ["Adam", "Anna", "Bob"];

console.log("Original Names: ", names);

names.splice(1, 1);

console.log("Updated Names: ", names);

/**
 *
 * push: add to the end of the array
 * unshift: add to the  beginning
 * pop : remove from the ned
 * splice: remove from anywhere
 * reverse: reverse  to the opposite order
 * indexOf: return the index if element is found otherwise -1
 * lastIndexOf: return the index of the last ouccrence
 * forEach: give access to each element in the array with each iteration
 * Join:
 * includes
 *
 */

let notes = [10, 20, 300, 40, 50, 30];

//notes.reverse();

console.log("index: ", notes.indexOf(30));
console.log("index: ", notes.lastIndexOf(30));

console.log(
  "###########################################################################"
);

function max(array) {
  let sup = array[0];

  for (let e of array) {
    if (e > sup) {
      sup = e;
    }
  }

  return sup;
}

function maxValue(array) {
  let max = array[0];

  array.forEach(function (e) {
    if (e > max) {
      max = e;
    }
  });

  return max;
}

function displayArray(array) {
  array.forEach(function (e) {
    console.log(e);
  });
}

let result = max(notes);
console.log(result);
result = maxValue(notes);
console.log(result);

// notes.forEach(function (a, b) {
//   console.log(a, b);
// });

console.log("####Show Array Elements Using For Each####");
displayArray(notes);
console.log("####Show Array Elements Using For Each####");

const words = ["Hello", "From", "Javascript!"];

console.log(words);

console.log(words.join("..."));

console.log(words);

const rs = words.includes("Hello123456");
console.log(rs);
