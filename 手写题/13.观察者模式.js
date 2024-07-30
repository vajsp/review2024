/** 被观察者 */
class Student {
    constructor() {
        this.status = '开心';
        // 被观察者
        this.obersevers = [];
    }

    add(observer) {
        this.obersevers.push(observer);
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
        this.norify();
    }

    norify() {
        this.obersevers.forEach((item) => {
            if (item) {
                item.update(this);
            }
        });
    }
}

/** 观察者 */
class Observer {
    constructor(name) {
        this.name = name;
    }

    // 更新
    update(student) {
        console.log(`亲爱的${this.name},通知您当前的学生状态${student.status}`);
    }
}

const teacher = new Observer('白老师');

const student1 = new Student();
student1.add(teacher);
student1.setStatus('你好');
