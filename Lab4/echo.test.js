
const mathOperations = require('../Lab3/Lab3exo2/echo');
describe("Calculator tests", () => {
  test('print "echo" 5 times', () => {
    expect(mathOperations.exf("echo", 5)).toBe("echoechoechoechoecho");
  });
});