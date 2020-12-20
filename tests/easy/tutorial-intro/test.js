const TutorialIntro = require('../../../src/easy/tutorial-intro/solution');

test('Given [1,2,3] find 3 shall return 2', () => {
   let solution = TutorialIntro([1,2,3]).solve(3);
   expect(solution).toBe(2);
});

test('Given [1,4,5,7,9,12] find 4 shall return 1', () => {
    let solution = TutorialIntro([1,4,5,7,9,12]).solve(4);
    expect(solution).toBe(1);
});

test('Given [1,2,3,4,5] find 1,3 and 5 shall return 0,2 and 4', () => {
    let solver = TutorialIntro([1,2,3,4,5]);
    expect(solver.solve(1)).toBe(0);
    expect(solver.solve(3)).toBe(2);
    expect(solver.solve(5)).toBe(4);
});

test('Given [1,2] find 1 and 2 shall return 0 and 1', () => {
    let solver = TutorialIntro([1,2]);
    expect(solver.solve(1)).toBe(0);
    expect(solver.solve(2)).toBe(1);
});

test('Given [1,2,3,4] find 1,2,3 and 4 shall return 0,1,2 and 3', () => {
    let solver = TutorialIntro([1,2,3,4]);
    expect(solver.solve(1)).toBe(0);
    expect(solver.solve(2)).toBe(1);
    expect(solver.solve(3)).toBe(2);
    expect(solver.solve(4)).toBe(3);
});

test('Given [2,3,4] find 1 and 5 shall return -1', () => {
    let solver = TutorialIntro([2,3,4]);
    expect(solver.solve(1)).toBe(-1);
    expect(solver.solve(5)).toBe(-1);
});