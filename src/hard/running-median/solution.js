function RunningMedian() {
    let numbers = [], index = 0, len = 0, mid = 0;
    return {
        add(i) {
            let insertIndex = numbers.findIndex((item) => item > i);
            insertIndex = insertIndex === -1 ? index : insertIndex;
            numbers.splice(insertIndex, 0, i);
            len = ++index;
            mid = Math.ceil(len / 2);
            return this;
        },
        median() {
            if (len % 2) {
                return numbers[mid - 1];
            } else {
                return (numbers[mid - 1] + numbers[mid]) / 2;
            }
        },
        medians(input) {
            numbers = [];
            return input.map((i) => this.add(Number.parseInt(i)).median());
        }
    };
}

module.exports = RunningMedian;