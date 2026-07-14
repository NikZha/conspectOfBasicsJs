arr = [2, -1, 2, 3, -9]
function getMaxSubSum(arr) {
    let maxSum = [0]
    for (let i = 0; i < arr.length; i++) {
        let tempSum = maxSum[0]
        for (let j = i + 1; j < arr.length; j++) {

            if ((tempSum + arr[j]) > maxSum[0]) {

                tempSum += arr[j]
                if (tempSum > maxSum[0]) maxSum[0] = tempSum
            }
        }
        if (arr[i] > maxSum[0]) maxSum[0] = arr[i];
    }
    return maxSum[0]
}

console.log(getMaxSubSum(arr))