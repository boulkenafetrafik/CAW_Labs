const mean = require('./notation');
describe('notation test', ()=>{
    test("testing mean function", ()=>{
        expect(mean([1, 2, 3, 4])).toBe(2.5);
    })
})