const add = arrayNumbers => arrayNumbers.reduce((a, b) => a + b, 0);

var arrayNumbers = [12, 4, 1, 5, 8, 10, 20];
var sum = add(arrayNumbers);

console.log(sum)