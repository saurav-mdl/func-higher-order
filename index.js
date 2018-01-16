let repeat = require('./repeat');

let counter = 0;
function increment() { counter++; }

repeat(increment, 3);
console.log("Test for running 'increment' function 3 times:", counter === 3);