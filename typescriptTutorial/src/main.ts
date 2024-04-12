let stringArray = ['one', 'hey', 'dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];

stringArray[0] = 'John'
stringArray.push('hey');

guitars[0] = 1984;
guitars.unshift('Jim');

guitars = stringArray;
mixedData = guitars;

let test = [];
let bands: string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple:[string, number, boolean] = ['dave', 42, true];

let mixed = ['John', 1, true];
mixed = myTuple;
myTuple[1] = 23;

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObject = {
    prop1 : 'Dave',
    prop2: true
}

exampleObject.prop1 = 'John'

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp;

console.log(evh);

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
}

console.log(greetGuitarist(jp));

// Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.A)