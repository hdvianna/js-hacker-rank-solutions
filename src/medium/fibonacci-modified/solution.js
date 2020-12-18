function FibonacciModified(t1, t2) {
    let results = [];
    results.push(t1);
    results.push(t2);

    return {
        solve(n) {
            if (results.length < n) {
                for(let i = results.length; i < n; i++) {
                    let ti = results[i-2] + Math.pow(results[i-1], 2);
                    results.push(ti);
                }
            }
            return results[n-1];
        }
    }
}

module.exports = FibonacciModified;