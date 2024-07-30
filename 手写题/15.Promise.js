class MyPromise {
    constructor(params) {}

    static all(promiseList) {
        return new MyPromise((resolve, reject) => {
            const length = promiseList.length;
            const res = [];

            promiseList.forEach((p) => {
                p.then((data) => {
                    res.push(data);
                    if (res.length === length) {
                        resolve(res);
                    }
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    static race(promiseList) {
        let off = true;
        return new MyPromise((resolve, reject) => {
            promiseList.forEach((p) => {
                p.then((data) => {
                    if (off) {
                        resolve(data);
                        off = false;
                    }
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    static allSettled(promiseList) {
        return new MyPromise((resolve, reject) => {
            const res = [];
            const length = promiseList.length;

            promiseList.forEach((fn) => {
                fn.then((data) => {
                    res.push({ status: 'fulfilled', value: data });
                    if (res.length === length) {
                        resolve(res);
                    }
                }).catch((err) => {
                    res.push({ status: 'rejected', reason: err });
                    if (res.length === length) {
                        resolve(res);
                    }
                });
            });
        });
    }
}
