/** 二分法循环 */
function binarySearch1(arr, target) {
    const length = arr.length;
    if (length === 0) {
        return -1;
    }

    let startIndex = 0; //开始位置
    let endIndex = length - 1; //结束位置

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = arr[midIndex];

        if (target < midValue) {
            // 目标值较小，则继续向左查找
            endIndex = midIndex - 1;
        } else if (target > midValue) {
            // 目标值较大，则继续在右侧查找
            startIndex = midIndex + 1;
        } else {
            // 相等，返回
            return midIndex;
        }
    }
}

let arr = [10, 20, 30, 40, 50];
let target = 20;
console.log(binarySearch1(arr, target));

function binarySearch2(arr, target, startIndex, endIndex) {
    const length = arr.length;
    if (length === 0) {
        return -1;
    }

    if (startIndex == null) {
        startIndex = 0;
    }

    if (endIndex == null) {
        endIndex = length - 1;
    }

    // 中间位置
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const midValue = arr[midIndex];

    if (target < midValue) {
        // 目标值较小，则在左侧查找
        return binarySearch2(arr, target, startIndex, midIndex - 1);
    } else if (target > midValue) {
        // 目标值较大
        return binarySearch2(arr, target, midIndex + 1, endIndex);
    } else {
        // 相等，返回
        return midIndex;
    }
}
