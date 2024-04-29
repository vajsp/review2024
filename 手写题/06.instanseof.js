export function myInstanceof(instance, origin) {
    if (instance === null) {
        return false;
    }

    if (typeof instance !== 'object' && typeof instance !== 'function') {
        // 值类型
        return false;
    }

    let tempInstance = instance;
    while (tempInstance) {
        if (tempInstance.__proto__ === origin.prototype) {
            return true;
        }

        tempInstance = tempInstance.__proto__;
    }

    return false;
}
