/*var a = 1;
var b = 4;
var sum = a + b;
console.log(sum);*/

/*function sumFunc(number1, number2) {
return (number1 + number2);
}
console.log(sumFunc(9, 4));*/


//check if the input parameter is a number
//

function OddEvenNumbers(num) {
    var remainder = num % 2;

    if (remainder != 0) {
        console.log("Number " + num + "is odd");
    } else {
        console.log("Number " + num + "is even");
    }

}
OddEvenNumbers(11);