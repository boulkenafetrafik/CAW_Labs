
//1. 
const arr = [3, 5, 8];
const plus_one = arr.map(n => n + 1);

//2. 
const double = arr => arr.map(val => val * 2);

//3.
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const { a, b } = obj.numbers;

//4.
const add = (a = 10, b = 10) => {
    a = (a === 0) ? 0 : (a || 10);
    b = (b === 0) ? 0 : (b || 10);
    return a + b;
};



























