const FibonacciModified = require('../../../src/medium/fibonacci-modified/solution');

test('t1 = 1,, t2 = 1 n = 1, expect 1', () => {
    let result = FibonacciModified(1, 1).solve(1);
    expect(result).toBe(1);
});

test('t1 = 1, t2 = 1, n = 2, expect 1', () => {
    let result = FibonacciModified(1, 1).solve(2);
    expect(result).toBe(1);
});

test('t1 = 0, t2 = 1, n = 6, expect 27', () => {
    let result = FibonacciModified(0, 1).solve(6);
    expect(result).toBe(27);
});

test('t1 = 0, t2 = 1, n = 5, expect 5', () => {
    let result = FibonacciModified(0, 1).solve(5);
    expect(result).toBe(5);
});

test('t1 = 0, t2 = 1, n = 10, expect 84266613096281243382112', () => {
    let result = FibonacciModified(0, 1).solve(10);
    expect(result).toBe(84266613096281243382112);
});