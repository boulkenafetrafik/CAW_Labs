// Exo01:
//1.
let v1 = 5;
let v2 = 10;

[v1, v2] = [v2, v1];

console.log("v1:", v1); 
console.log("v2:", v2); 
//2.
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];

const combined = numbers.concat(letters, foods);
console.log(combined);

//3.
const str = "hello";
const charArray = [...str];
console.log(charArray);

//4.
fn(1, 2, 3, 'A', 'B', 'C'); // args contain : [3, 'A', 'B', 'C']
fn(1, 2); // args contain : []
let x = ['a', 'b', 'c', 'd']; fn(...x); // args contain : ['c', 'd']

