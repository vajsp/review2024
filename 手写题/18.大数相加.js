function bigNumberSum(str1, str2) {
    const arr1 = str1.split('').reverse();
    const arr2 = str2.split('').reverse();

    const length = Math.max(arr1.length, arr2.length);

    const res = [];
    let flag = 0;
    for (let i = 0; i < length; i++) {
        const element1 = arr1[i] || 0;
        const element2 = arr2[i] || 0;
        const sum = Number(element1) + Number(element2) + flag;
        if (sum >= 10) {
            const result = sum % 10;
            flag = 1;
            res.push(result);
        } else {
            res.push(sum);
            flag = 0;
        }

        if (i === length - 1 && sum >= 10) {
            res.push(1);
        }
    }

    return res.reverse().join('');
}

console.log(bigNumberSum('77', '77'));
