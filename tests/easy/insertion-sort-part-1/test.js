const InsertionSort = require('../../../src/easy/insertion-sort-part-1/solution');

test('[2,4,6,8,3] has 4 steps', () => {
    let solver = InsertionSort([2,4,6,8,3]);
    expect(solver.step()).toStrictEqual([2,4,6,8,8]);
    expect(solver.step()).toStrictEqual([2,4,6,6,8]);
    expect(solver.step()).toStrictEqual([2,4,4,6,8]);
    expect(solver.step()).toStrictEqual([2,3,4,6,8]);
    expect(solver.step()).toStrictEqual(null);
});