/** 深拷贝 */
function deepClone(obj) {
    if (!(typeof obj === 'object' && obj !== null)) {
        return obj;
    }

    let newObj;
    if (Array.isArray(newObj)) {
        newObj = [];
    } else {
        newObj = {};
    }

    for (const key in obj) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = obj[key];
            newObj[key] = deepClone(element);
        }
    }

    return newObj;
}

/** 防抖 */
function debounce(fn, time) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, time);
    };
}

/** 节流 */
function throttle(fn, time) {
    let timer = null;

    return function () {
        if (timer) {
            return;
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, time);
    };
}
