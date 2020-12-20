const NewYearChaos = require('../../../src/medium/new-year-chaos/solution');

test('q=[2,1,5,3,4] expecting 3', () => {
    let result = NewYearChaos([2,1,5,3,4]).solve();
    expect(result).toBe(3);
});

test('q=[2,5,1,3,4] expecting Too chaotic', () => {
    let result = NewYearChaos([2,5,1,3,4]).solve();
    expect(result).toBe('Too chaotic');
});

test('q=[5,1,2,3,7,8,6,4] expecting Too chaotic', () => {
    let result = NewYearChaos([5,1,2,3,7,8,6,4]).solve();
    expect(result).toBe('Too chaotic');
});

test('q=[1,2,5,3,7,8,6,4] expecting 7', () => {
    let result = NewYearChaos([1,2,5,3,7,8,6,4]).solve();
    expect(result).toBe(7);
});

test('q=[1,2,5,3,4,7,8,6] expecting 4', () => {
    let result = NewYearChaos([1,2,5,3,4,7,8,6]).solve();
    expect(result).toBe(4);
});