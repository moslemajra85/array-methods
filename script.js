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

// remove from the head(beginning)
