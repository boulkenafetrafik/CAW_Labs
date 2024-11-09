const mathOperations = require('./exo2');

describe('Calculator tests', () => {
  
  // Define `myColor` for the toString and join tests
  const myColor = ["Red", "Green", "White", "Black"];

  // Tests for `first` function
  test('returns the first array value if n is null', () => {
    expect(mathOperations.first([2, 3, 4])).toBe(2);
  });
  
  test('returns the first n values if n is defined', () => {
    expect(mathOperations.first([2, 3, 4], 2)).toEqual([2, 3]);
  });
  
  test('returns an empty array if n <= 0', () => {
    expect(mathOperations.first([2, 3, 4], -1)).toEqual([]);
  });
  
  test('returns an empty array if array is null', () => {
    expect(mathOperations.first([], 1)).toEqual([]);
  });

  // Tests for `last` function 
  test('returns the last element when n is not provided', () => {
    expect(mathOperations.last([7, 9, 0, -2])).toBe(-2);
  });
  
  test('returns the last n elements when n is provided', () => {
    expect(mathOperations.last([7, 9, 0, -2], 2)).toEqual([0, -2]);
  });
  
  test('returns an empty array if array is null', () => {
    expect(mathOperations.last(null)).toEqual([]);
  });
  
  test('returns all elements if n is greater than array length', () => {
    expect(mathOperations.last([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
  
  test('returns an empty array if n is 0 or less', () => {
    expect(mathOperations.last([1, 2, 3], 0)).toEqual([]);
  });

  // Tests for my color
  test('toString() joins array elements with commas', () => {
    expect(myColor.toString()).toBe("Red,Green,White,Black");
  });

  test('join() with default separator joins array elements with commas', () => {
    expect(myColor.join()).toBe("Red,Green,White,Black");
  });

  test('join("") joins array elements without any separator', () => {
    expect(myColor.join('')).toBe("RedGreenWhiteBlack");
  });


  //tests using chunk function 
  test('splits an array into chunks of specified size', () => {
    expect(mathOperations.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('returns the entire array as one chunk if size > array length', () => {
    expect(mathOperations.chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('returns an empty array when given an empty array', () => {
    expect(mathOperations.chunk([], 2)).toEqual([]);
  });

  test('splits an array into chunks of size 1', () => {
    expect(mathOperations.chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
  });

  test('splits an array into chunks with a size larger than 1', () => {
    expect(mathOperations.chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

});

