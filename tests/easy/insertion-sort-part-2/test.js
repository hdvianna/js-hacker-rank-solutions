const InsertionSort = require('../../../src/easy/insertion-sort-part-2/solution');

test('[3,4,7,5,6,2,1]', () => {
    let solver = InsertionSort([3,4,7,5,6,2,1]);
    expect(solver.step()).toStrictEqual([3,4,7,5,6,2,1]);
    expect(solver.step()).toStrictEqual([3,4,7,5,6,2,1]);
    expect(solver.step()).toStrictEqual([3,4,5,7,6,2,1]);
    expect(solver.step()).toStrictEqual([3,4,5,6,7,2,1]);
    expect(solver.step()).toStrictEqual([2,3,4,5,6,7,1]);
    expect(solver.step()).toStrictEqual([1,2,3,4,5,6,7]);
    expect(solver.step()).toStrictEqual(null);
});

test('[1,4,3,5,6,2]', () => {
    let solver = InsertionSort([1,4,3,5,6,2]);
    expect(solver.step()).toStrictEqual([1,4,3,5,6,2]);
    expect(solver.step()).toStrictEqual([1,3,4,5,6,2]);
    expect(solver.step()).toStrictEqual([1,3,4,5,6,2]);
    expect(solver.step()).toStrictEqual([1,3,4,5,6,2]);
    expect(solver.step()).toStrictEqual([1,2,3,4,5,6]);
    expect(solver.step()).toStrictEqual(null);
});