class EventBus {
    constructor() {
        this.store = new Map();
    }

    on(name, fn) {
        if (this.store.has(name)) {
            const value = this.store.get(name);
            value.push(fn);
        } else {
            this.store.set(name, [fn]);
        }
    }

    off(name, cb) {
        if (this.store.has(name)) {
            let value = this.store.get(name);
            value = value.filter((item) => {
                return item !== cb;
            });
            this.store.set(name, value);
        }
    }

    emit(name, ...args) {
        if (this.store.has(name)) {
            const arr = this.store.get(name).forEach((fn) => {
                fn(args);
            });
        }
    }

    once(name, cb) {
        const fn = (...args) => {
            cb(...args);
            this.off(name, fn);
        };
        this.on(name, fn);
    }
}
