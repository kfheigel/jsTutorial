"use strict";
// convert to more or less specific
let a = 'hello';
let b = a;
let c = a;
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//be careful TS sees no problem but it returns string
let nextVal = addOrConcat(2, 2, 'concat');
console.log(typeof nextVal); // shows string
// 10 as string
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
