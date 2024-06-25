var name = 'zs';

function a() {
    console.log(name);
    const name = 'ls';
    console.log(name);
}

a();

sessionStorage.setItem('key', 'safda');

const formData = [];
let index = 0;
let taskPool = [];

while (index < formData.length) {
    const task = fetch('..//sdafas', {
        method: 'POST',
        body: formData[index],
    });

    task.then(() => {
        const index = taskPool.findIndex((item) => {
            return item === task;
        });
        taskPool.splice(index, 1);
    });

    taskPool.push(task);
    index++;
}
