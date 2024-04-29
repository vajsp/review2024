class EventBus {
    /**
     * {
     *    'key1':[
     *        {fn:fn1 , isOnce:true},
     *        {fn:fn2 , isOnce:false},
     *     ]
     * }
     *
     */

    private events: {
        [key: string]: Array<{ fn: Function; isOnce: boolean }>;
    };

    constructor() {
        this.events = {};
    }

    on(type: string, fn: Function, isOnce: boolean = false) {
        const events = this.events;
        if (events[type] == null) {
            events[type] = [];
        }
        events[type].push({ fn, isOnce: false });
    }

    once(type: string, fn: Function) {
        this.on(type, fn, true);
    }

    off(type: string, fn?: Function) {
        if (!fn) {
            // 解绑所有type的函数
            this.events[type] = [];
        } else {
            // 解绑单个fn
            const fnList = this.events[type];
            if (fnList) {
                this.events[type] = fnList.filter((item) => item.fn !== fn);
            }
        }
    }

    emit(type: string, ...args: any[]) {
        const fnList = this.events[type];
        if (fnList == null) {
            return;
        }

        // 注意
        this.events[type] = fnList.filter((item) => {
            const { fn, isOnce } = item;
            fn(...args);

            // once执行一次就要被过滤掉
            if (!isOnce) {
                return true;
            }

            return false;
        });
    }
}
