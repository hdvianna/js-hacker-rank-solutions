//https://www.hackerrank.com/challenges/tutorial-intro/problem
function TutorialIntro(arr) {
    let len = arr.length;
    return {
        solve(V) {
            return searchPartition(0, len - 1);
            function searchPartition(start, end) {
                let index =  Math.floor(((end+1) + start) /2) ;
                if (start > end) {
                    return -1;
                }
                if (arr[index] === V) {
                    return index;
                } else if (V > arr[index]) {
                    return searchPartition(index+1, end);
                } else {
                    return searchPartition(0, index-1);
                }
            }
        }
    }
}

module.exports = TutorialIntro;