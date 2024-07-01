function ajax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function (res) {
            if (xhr.readyState === 4) {
                if (res.status === 200) {
                    resolve(res.data);
                } else {
                    reject(new Error(res.data));
                }
            }
        };
        xhr.send(null);
    });
}

// https://www.bilibili.com/video/BV1fP41197ow/?spm_id_from=pageDriver&vd_source=b16d2ffe19be06c955533d871f8dad59

Function.prototype.myCall = function () {
    const args = Array.from(arguments);

    const key = Symbol();
    const context = args.shift();

    context[key] = this;

    const res = context[key](...args);
    delete context[key];
    return res;
};

Function.prototype.myApply = function () {
    const args = Array.from(arguments);
    const context = args.shift();
    const key = Symbol();

    context[key] = this;
    const res = context[key](args);
    delete context[key];
    return res;
};

Function.prototype.myBind = function () {
    const args = Array.prototype.slice.call(arguments);
    const self = this;
    const t = args.shift();

    return function () {
        return self.apply(t, args);
    };
};
