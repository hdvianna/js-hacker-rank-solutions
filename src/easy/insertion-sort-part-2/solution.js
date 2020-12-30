//https://www.hackerrank.com/challenges/insertionsort2/problem
function InsertionSort(array) {
    let len = array.length;
    let end=1;
    return {
        step() {
            if (end < len) {
                let inserted = false;
                let item = array[end];
                let pointer = end-1;
                while(!inserted) {
                    if (item < array[pointer]) {
                        array[pointer+1] = array[pointer];
                    } else {
                        array[pointer+1] = item;
                        inserted = true;
                    }
                    pointer--;
                }
                end++;
                return array;
            } else {
                return null;
            }
        }
    }
}

module.exports = InsertionSort;