
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


//Exo03:
//1.
function setOne(arr) {
    return [...new Set(arr)];
  }
console.log(setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2]));

// 2.
const getRidOf = (tab, ...vals) => tab.filter(item => !vals.includes(item));
console.log(getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x'));
























