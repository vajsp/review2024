class MyPromise {
    constructor(fun) {
        this.status = 'pending';
        this.value = null;
        this.reason = null;

        resolveCallbacks = [];
        rejectedCallbacks = [];

        const resolveHandler = (value) => {
            if (this.status === 'pending') {
                this.status = 'fullfilled';
                this.value = value;
                resolveCallbacks.forEach((fn) => {
                    return fn(this.value);
                });
            }
        };

        const rejecthandler = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                rejectedCallbacks.forEach((fn) => {
                    return fn(this.reason);
                });
            }
        };

        try {
            fun(resolveHandler, rejecthandler);
        } catch (error) {
            rejecthandler(error);
        }
    }

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
