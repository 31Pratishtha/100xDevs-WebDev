"use strict";
function Todo(props) {
}
const a = 3;
const b = 4;
const z = a + b;
const func = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
};
console.log('hii', func(3, '5'));
