class MyPromise {
    state = 'pending'; // 状态，pending fulfilled rejected
    value = undefined;
    reason = undefined;

    resolveCallbacks = []; // pending状态下，储存成功的回调
    rejectCallbacks = []; //  pending状态下，失败的回调

    constructor(fun) {
        const resolveHandler = (value) => {
            if (this.state === 'pending') {
                this.state = 'fullfilled';
                this.value = value;
                this.resolveCallbacks.forEach((fn) => fn(this.value));
            }
        };

        const rejectHandler = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.rejectCallbacks.forEach((fn) => fn(this.reason));
            }
        };

        try {
            fun(resolveHandler, rejectHandler);
        } catch (error) {
            rejectHandler(error);
        }
    }

    then(fn1, fn2) {
        fn1 = typeof fn1 === 'function' ? fn1 : (v) => v;
        fn2 = typeof fn2 === 'function' ? fn2 : (e) => e;

        if (this.state === 'pending') {
            const p1 = new MyPromise((resolve, reject) => {
                this.resolveCallbacks.push(() => {
                    try {
                        const newValue = fn1(this.value);
                        resolve(newValue);
                    } catch (error) {
                        reject(error);
                    }
                });

                this.rejectCallbacks.push(() => {
                    try {
                        const newReason = fn2(this.reason);
                        reject(newReason);
                    } catch (error) {
                        reject(error);
                    }
                });
            });

            return p1;
        }

        if (this.state === 'fulfilled') {
            const p1 = new MyPromise((resolve, reject) => {
                try {
                    const newValue = fn1(this.value);
                    resolve(newValue);
                } catch (error) {
                    reject(error);
                }
            });

            return p1;
        }

        if (this.state === 'rejected') {
            const p1 = new MyPromise((resolve, reject) => {
                try {
                    const newReason = fn2(this.reason);
                    reject(newReason);
                } catch (error) {
                    reject(error);
                }
            });

            return p1;
        }
    }

    catch(fn) {
        return this.then(null, fn);
    }

    static resolve(value) {
        return new MyPromise((resolve, reject) => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => reject(reason));
    }

    static all(promiseList = []) {
        const p1 = new MyPromise((resolve, reject) => {
            const length = promiseList.length;
            const result = []; //储存promiseList 所有结果
            let resolvedCount = 0;

            promiseList.forEach((p) => {
                p.then((data) => {
                    result.push(data);
                    // resolvedCount 必须在then里面做++

                    resolvedCount++;
                    if (resolvedCount === length) {
                        resolve(result);
                    }
                }).catch((err) => {
                    reject(err);
                });
            });
        });

        return p1;
    }

    static race(promiseList = []) {
        let resolved = false;
        const p1 = new MyPromise((resolve, reject) => {
            promiseList.forEach((p) => {
                p.then((data) => {
                    if (!resolved) {
                        resolve(data);
                        resolved = true;
                    }
                }).catch((err) => {
                    reject(err);
                });
            });
        });

        return p1;
    }
}
