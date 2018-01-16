import repeat from './repeat';

let counter = 0;
function increment() { counter++; }

counter = 0;
repeat(increment, 3);
console.log("Test for running 'increment' function 3 times:", counter === 3);

counter = 0;
repeat(increment, -2);
console.log("test for running 'increment' function with -2 as argument:", counter === 0);