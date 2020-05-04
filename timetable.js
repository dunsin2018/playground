function multiplicationTable(maxNumber, minNumber) {
    let timetables;
    for (var i = 1; i <= maxNumber; i++) {
        // timetables = `${minNumber} * ${i}`
        let result = minNumber * i
        console.log(`${minNumber} * ${i} = ${result}`);




    }
    // return timetables

}
multiplicationTable(12, 1);
console.log("'...................");

multiplicationTable(12, 2);
console.log("'...................");
multiplicationTable(12, 3);
console.log("'...................");

multiplicationTable(12, 4);