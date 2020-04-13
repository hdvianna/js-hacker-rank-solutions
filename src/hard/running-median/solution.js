function RunningMedian(input) {
    return {
        medians() {
            let result = [];
            input.reduce((carry, item, index) => {
                let iItem = Number.parseInt(item);
                let len = index + 1;
                let insertIndex = carry.findIndex((element) => element > iItem);
                insertIndex = insertIndex === -1 ? len - 1 : insertIndex;
                carry.splice(insertIndex, 0, iItem);

                let mid = Math.ceil(len / 2);
                if (len % 2) {
                    result.push(carry[mid - 1]);
                } else {
                    result.push((carry[mid - 1] + carry[mid]) / 2);
                }

                return carry;
            }, []);
            return result;
        }
    };
}

module.exports = RunningMedian;