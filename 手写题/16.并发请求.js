const urlData = ['xxx', 'xxx'];

async function fn(urlList, max = 6) {
    const taskPools = [];
    // const max = 6;
    let index = 0;

    while (index < urlData.length) {
        const task = fetch(utl);

        task.then(() => {
            taskPools.splice(
                taskPools.findIndex((item) => {
                    return item === task;
                }),
                1
            );
        });

        taskPools.push(task);
        if (taskPools.length === max) {
            await Promise.race(taskPools);
        }

        index++;
    }
}

class AsyncQueue {
    constructor(max) {
        this.max = max;
        this.running = 0;
        this.queue = [];
    }

    addTask(task) {
        this.queue.push(task);
        this.runTasks();
    }

    async runTasks() {
        while (this.running < this.max && this.queue.length > 0) {
            this.running++;
            const task = this.queue.shift();

            try {
                await task();
            } catch (error) {
                console.log(error);
            }

            this.running--;
        }
    }
}
