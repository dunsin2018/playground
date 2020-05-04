/*Write a javascript program that sums an array of integers.
 e.g when the function receives array [1, 5, 7, 2] 
it returns 15 (1 + 5+7+2) as the result.*/
const add = arrayNumbers => arrayNumbers.reduce((a, b) => a + b, 0);

var arrayNumbers = [12, 4, 1, 5, 8, 10, 20];
var sum = add(arrayNumbers);

console.log(sum);