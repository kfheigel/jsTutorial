"use strict";
let stringArray = ['one', 'hey', 'dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArray[0] = 'John';
stringArray.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArray;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['dave', 42, true];
let mixed = ['John', 1, true];
mixed = myTuple;
myTuple[1] = 23;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObject = {
    prop1: 'Dave',
    prop2: true
};
exampleObject.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp;
console.log(evh);
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
