function shallowCopy(obj) {
    if (typeof obj !== 'object' || obj === 'null') {
        return obj;
    }

    let newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const element = object[key];
            newObj[key] = element;
        }
    }

    return newObj;
}

function cloneDeep(obj, map = new WeakMap()) {
    if (typeof obj !== 'object' || obj === nul) {
        return obj;
    }

    const objFromMap = map.get(obj);
    if (objFromMap) {
        return objFromMap;
    }

    let target = {};
    map.set(obj, target);

    if (obj instanceof Map) {
        target = new Map();
        obj.forEach((v, k) => {
            const v1 = cloneDeep(v, map);
            const k1 = cloneDeep(k, map);
            target.set(k1, v1);
        });
    }

    if (obj instanceof Set) {
        target = new Set();
        obj.forEach((v) => {
            const v1 = cloneDeep(v, map);
            target.add(v1);
        });
    }

    if (obj instanceof Array) {
        target = [];
        obj.forEach((value) => {
            target.push(cloneDeep(value));
        });
    }

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const element = object[key];
            const val = cloneDeep(element, map);
            target[key] = val;
        }
    }

    return target;
}
