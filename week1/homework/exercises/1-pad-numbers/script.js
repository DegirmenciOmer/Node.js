
/**
 ** Exercise 1: Pad numbers 
 Lets practice 
 how to use code from other developers i
 n our applications. In the file /1-pad-numbers/padLeft.js 
 you will find a function I wrote the other day. 
 Study the function and read the description to 
 understand what it does.

Your task is to use this function in 
another file 1-pad-number/script.js. 
 * 
 * In this file use the padLeft function from padLeft.js to
 * pad the numbers to exactly 4 spaces and log them to the console
 * 
 * Expected output (replace the underscore with spaces):
 * 
 *  ___12;
 *  __846;
 *  ____2;
 *  _1236;
 * 
 * Tips:
 *   where to use `exports` and where `require`?
 */

let numbers = [ "12", "846", "2", "1236" ];

// YOUR CODE GOES HERE
const padLeft = require('./padLeft.js');
numbers.forEach((number) => console.log(padLeft(number, 4, " ")));