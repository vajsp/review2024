function findTowNumber(arr, n) {
    const res = [];

    const length = arr.length;
    if (length === 0) {
        return res;
    }

    for (let i = 0; i < length; i++) {
        const n1 = arr[i];
        let flag = false;

        for (let j = 0; j < length; j++) {
            const n2 = arr[j];

            if (n1 + n2 === n) {
                res.push(n1);
                res.push(n2);
                flag = true;
                break;
            }
        }

        if (flag) break;
    }

    return res;
}

// 双指针，时间复杂度降低到 O(n)
// 定义i指向头，j指向尾，求 arr[il] + arr[j]
// 如果大于n，则j需要向前移动
// 如果小于n，则i需要向后移动

export function findTowNumber2(arr, n) {
    let res = [];

    const length = arr.length;
    if (length === 0) {
        return res;
    }

    let i = 0; //头
    let j = length - 1; //尾

    while (i < j) {
        const n1 = arr[i];
        const n2 = arr[j];

        if (sum > n) {
            // sum大于n,则j要向前移动
            j--;
        } else if (sum < n) {
            // sum小于n,则i要向后移动
            i++;
        } else {
            // 相等
            res.push(n1);
            res.push(n2);
            break;
        }
    }

    return res;
}
