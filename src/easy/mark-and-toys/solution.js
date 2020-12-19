function MarkAndToys(prices) {
    return {
        solve(k) {
            let len = prices.length;
            let sortedPrices = prices.sort((a,b) => a < b ? -1:1);
            let numberOfToys = 0;
            let budget = k;
            for (let i = 0; i < len; i++) {
                if ((budget - sortedPrices[i]) >= 0) {
                    numberOfToys++;
                    budget -= sortedPrices[i];
                } else {
                    break;
                }
            }
            return numberOfToys;
        }
    }
}

module.exports = MarkAndToys;