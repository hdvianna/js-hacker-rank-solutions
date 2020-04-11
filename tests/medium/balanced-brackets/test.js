const fs = require('fs');
const BalancedBracket = require('../../../src/medium/balanced-brackets/solution');
const checker = BalancedBracket();

test('Teste #9', () => {
    let inputs = fs.readFileSync(__dirname + '/test_09.input.txt', 'utf8').split("\n");
    let results = fs.readFileSync(__dirname + '/test_09.result.txt', 'utf8').split("\n");
    for(let i = 0; i < inputs.length; i++) {
        let actual = checker.isBalanced(inputs[i].trim());
        expect(actual).toBe(results[i].trim());
    }
});