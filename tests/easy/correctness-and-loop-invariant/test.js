const InsertionSort = require('../../../src/easy/correctness-and-loop-invariant/solution');

test('[7,4,3,5,6,2]', () => {
    let solver = InsertionSort([7,4,3,5,6,2]);
    expect(solver.solve()).toStrictEqual([2,3,4,5,6,7]);
});

test('[4,1,3,5,6,2]', () => {
    let solver = InsertionSort([4,1,3,5,6,2]);
    expect(solver.solve()).toStrictEqual([1,2,3,4,5,6]);
});