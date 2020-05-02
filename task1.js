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


person.age = 16;

let yearOfBirth = (2020 - person.age);

function getBirthYear(yearOfBirth) {

    return yearOfBirth;

}
console.log(getBirthYear(yearOfBirth))

function personClassifier(yearOfBirth) {
    if (yearOfBirth >= 2000) {
        return "Millennial";
    } else {
        return "Not Millennial";
    }

}
console.log(personClassifier(yearOfBirth));