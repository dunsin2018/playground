//creat a person object with attributename, age, sex 

var person = {
    name: "Dunsin",
    age: 15,
    sex: "Male",
    //presentYear: 2020


}

function personData(person) {
    return person;

}
console.log(person);
person.age = 29;

function getBirthYear() {
    const date = new Date();
    return (date.getFullYear() - person.age);

}
console.log(getBirthYear());

function personClassifier(yearOfBirth) {
    const minMiillenialYear = 2000;

    if (yearOfBirth >= minMiillenialYear) {
        return "Millennial";
    } else {
        return "Not Millennial";
    } else {
        return "Invalid number NaN ";
    }

}
console.log(personClassifier(1990));