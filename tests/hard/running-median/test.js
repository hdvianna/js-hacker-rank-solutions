const RunningMedian = require('../../../src/hard/running-median/solution');
const fs = require('fs');

test('Explanation test #1', () => {
    let running = RunningMedian([12, 4, 5, 3, 8, 7]);
    let result = running.medians();
    expect(result).toEqual(expect.arrayContaining([12, 8, 5, 4.5, 5, 6]));
});

test('Sample test #1', () => {
    let running = RunningMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    let result = running.medians();
    expect(result).toEqual(expect.arrayContaining([1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]));
});

test('Test #2', () => {
    let input = fs.readFileSync(__dirname + '/test_02.input.txt', 'utf8').split("\n");
    let expected = fs.readFileSync(__dirname + '/test_02.result.txt', 'utf8')
        .split("\n")
        .map( item => Number.parseFloat(item));

    let running = RunningMedian(input);
    let result = running.medians();
    expect(expected).toEqual(expect.arrayContaining(result));
});



