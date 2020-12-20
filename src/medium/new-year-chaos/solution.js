function NewYearChaos(q) {
    let len = q.length;
    return {
        solve() {
            let moves = 0;
            for (let i = len - 1; i >= 0; i--) {
                if (q[i] - (i + 1) > 2) {
                    return "Too chaotic";
                }
                for(let j = Math.max(0, q[i]-3); j <  i; j++) {
                    if (q[i] < q[j]) {
                        moves++;
                    }
                }
            }
            return moves;
        }
    }
}

module.exports = NewYearChaos;