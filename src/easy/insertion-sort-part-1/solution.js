//https://www.hackerrank.com/challenges/insertionsort1/problem
function InsertionSort(array) {
    let len = array.length;
    let pointer = len - 1;
    let item = array[pointer];
    let ended = false;
    return {
        step() {
            if (ended) {
                return null;
            }
            pointer--;
            if (item < array[pointer]) {
                array[pointer+1] = array[pointer];
            } else {
                array[pointer+1] = item;
                ended = true;
            }
            return array;
        }
    }
}

module.exports = InsertionSort;