const arr = [1, [2, [3], 4], 5];

function flattenDeep1(arrQ) {
    let res = [];
    arrQ.forEach((item) => {
        if (Array.isArray(item)) {
            const val = flattenDeep1(item, res);
            res = res.concat(val);
        } else {
            res.push(item);
        }
    });
    return res;
}

console.log(flattenDeep1(arr, []));
