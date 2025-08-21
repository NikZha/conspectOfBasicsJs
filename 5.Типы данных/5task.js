arr = [-2, -1, 1, 2]
function getMaxSubSum(arr) {
    let maxSum = {
        sum: 0,
        begin: -1,
        end: -1
    }
    let sum = 0;
    let begin = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0 && arr[i] > sum) {
            sum += arr[i];
            begin = i;
        } else if (arr[i] > arr[i - 1] && i < (arr.length-1)) {
            sum += arr[i];
            end = i;
        } else if (arr[i] < arr[i - 1]) {
            maxSum.sum = sum;
            sum = 0;
            maxSum.begin = begin;
            begin = 0;
            maxSum.end = end;
            end = 0;
        }
        if (sum == 0 && i == (arr.length - 1) && arr[i] > maxSum.sum) {
            maxSum.sum = arr[i];
            maxSum.begin = i;
            maxSum.end = i;
        }
    }
    return maxSum.sum
}

console.log(getMaxSubSum(arr))