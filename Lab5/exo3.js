//1.
function setOne(arr) {
    return [...new Set(arr)];
  }
console.log(setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2]));

// 2.
const getRidOf = (tab, ...vals) => tab.filter(item => !vals.includes(item));
console.log(getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x'));