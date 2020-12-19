const MarkAndToys = require('../../../src/easy/mark-and-toys/solution');

test('toys = [1,2,3,4], k = 7, expecting 3', () => {
    let result = MarkAndToys([1,2,3,4]).solve(7);
    expect(result).toBe(3);
});

test('toys = [1,12,5,111,200,1000,10], k = 50, expecting 4', () => {
    let result = MarkAndToys([1,12,5,111,200,1000,10]).solve(50);
    expect(result).toBe(4);
});

test('toys = [3,7,2,9,4], k = 15, expecting 3', () => {
    let result = MarkAndToys([3,7,2,9,4]).solve(15);
    expect(result).toBe(3);
});

