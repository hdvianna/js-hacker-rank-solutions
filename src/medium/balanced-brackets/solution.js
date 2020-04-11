function BalancedBracket() {
    return {
        isBalanced(string) {
            var open = "{([";
            var closeDictionary = {"}": "{", "]": "[", ")": "("};
            let len = string.length;
            if (len % 2 === 0) {
                let stack = [];
                if ((len % 2) === 0) {
                    for (let i = 0; i < len; i++) {
                        if (open.indexOf(string[i]) > -1) {
                            stack.push(string[i]);
                        } else if (stack.pop() !== closeDictionary[string[i]]) {
                            return "NO";
                        }
                    }
                }
                return stack.length ? "NO" : "YES";
            } else {
                return "NO";
            }
        }
    }
}

module.exports = BalancedBracket;
