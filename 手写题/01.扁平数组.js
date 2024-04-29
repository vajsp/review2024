export function fatten1(arr) {
    const res = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            item.forEach((n) => res.push(n));
        } else {
            res.push(item);
        }
    });

    return res;
}

const arr = [1, [2, [3], 4], 5];
console.info(fatten1(arr));

export function flattenDeep(arr) {
    const res = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            const flatItem = flattenDeep1(item);
            flatItem.forEach((n) => {
                res.push(n);
            });
        } else {
            res.push(item);
        }
    });

    return res;
}
