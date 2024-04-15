"use strict";
// Literal Types
let myName;
myName = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { (a: number, b: number): number }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c != 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
//never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isnumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isnumber(value))
        return 'number';
    return createError('This should never happen!');
};
