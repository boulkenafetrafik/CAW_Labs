const mathOperations = require('../Lab3/Lab3exo1/notation');

describe("Calculator tests", () => {
    test('average of 2,3,4 is 3', () => {
      expect(mathOperations.mean([2, 3, 4])).toBe(3);
    });
  });
  