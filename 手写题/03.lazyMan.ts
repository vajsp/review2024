class LazyMan {
    private name: string;
    private tasks: Function[] = []; //任务列表

    constructor(name: string) {
        this.name = name;

        setTimeout(() => {
            this.next();
        });
    }

    private next() {
        const task = this.tasks.shift();
        if (task) {
            task();
        }
    }

    eat(food: string) {
        const task = () => {
            console.log(`${this.name} eat ${food}`);
            this.next();
        };
        this.tasks.push(task);

        return this; // 链式调用
    }

    sleep(seconds: number) {
        const task = () => {
            console.log(`${this.name}开始睡觉`);
            setTimeout(() => {
                console.log(
                    `${this.name}已经睡完了${seconds}s,开始执行下个任务`
                );
            }, seconds * 1000);
        };
        this.tasks.push(task);

        return this;
    }
}

const me = new LazyMan('双月');

me.eat('苹果').eat('香蕉').sleep(2).eat('葡萄');
