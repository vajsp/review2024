function shallowCopy(obj) {
    if (typeof obj !== 'object' || obj === 'null') {
        return obj;
    }

    let newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (Object.hasOwnProperty.call(object, key)) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

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

function cloneDeep(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const objFromMap = map.get(obj);
    if (objFromMap) {
        return objFromMap;
    }

    // 避免循环引用
    let target = {};
    map.set(obj, target);

    //Map
    if (obj instanceof Map) {
        target = new Map();
        obj.forEach((v, k) => {
            const v1 = cloneDeep(v, map);
            const k1 = cloneDeep(k, map);
            target.set(k1, v1);
        });
    }

    // set
    if (obj instanceof Set) {
        target = new Set();
        obj.forEach((v) => {
            const v1 = cloneDeep(v, map);
            target.add(v1);
        });
    }

    // Array
    if (obj instanceof Array) {
        target = obj.map((item) => cloneDeep(item, map));
    }

    // OBJ
    for (const key in obj) {
        const val = obj[key];
        const val1 = cloneDeep(val, map);
        target[key] = val1;
    }

    return target;
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
