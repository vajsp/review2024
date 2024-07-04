const arr = [1, [2, [3], 4], 5];

function flatArr(arrQ) {
    const res = [];
    arrQ.forEach((element) => {
        if (Array.isArray(element)) {
            res = res.concat(flatArr(element));
        } else {
            res.push(element);
        }
    });
}
