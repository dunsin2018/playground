/*Write a function that filters even and odd numbers in an array 
e.g when the function receives array [2, 4, 1] 
it returns an object {even: [2, 4], odd: [1]}*/

var evenOdd = { even: [], odd: [] };

[1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13].forEach(function(val) {
    var myfilterNo = (val % 2) ? 'odd' : 'even';
    evenOdd[myfilterNo][evenOdd[myfilterNo].length] = val;
});

console.log(evenOdd);