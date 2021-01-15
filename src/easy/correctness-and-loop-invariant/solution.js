//https://www.hackerrank.com/challenges/correctness-invariant/problem
function InsertionSort(array) {
    let len = array.length;
    return {
        solve() {
            let sortedArray = array;
            for(let end=1; end < len; end++) {
                let item = sortedArray[end];
                let pointer=end-1;
                while(pointer >=0 && item < sortedArray[pointer]) {
                    sortedArray[pointer+1] = sortedArray[pointer];
                    pointer--;
                }
                sortedArray[pointer+1] = item;
            }
            return sortedArray;
        }
    }
}

module.exports = InsertionSort;