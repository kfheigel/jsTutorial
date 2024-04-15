type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two;
let c = a as Three;

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number|string => {
    if (c === 'add') return a + b
    return '' + a + b;
}

let myVal: string = addOrConcat(2,2, 'concat') as string;

//be careful TS sees no problem but it returns string
let nextVal: number = addOrConcat(2,2, 'concat') as number;
console.log(typeof nextVal); // shows string

// 10 as string
(10 as unknown) as string;

// The DOM

const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img');

img.src
myImg.src