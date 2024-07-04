const { prototype } = require('vue/types/umd');

/** new */
function myNew(Con, ...args) {
    let newObj = Object.create(Con.protoype);

    const res = constructor.apply(Con, args);
    let isObject = typeof res === 'object' && res !== null;

    return isObject ? res : newObj;
}

/** 组合继承 */
function Parent(name) {
    this.name = name;
}

Parent.prototype.sayName = function () {
    console.log(this.name);
};

function Children(name, age) {
    Parent.call(this, name);
    this.age = age;
}

Children.prototype.constructor = Parent;
Children.prototype = Object.create(Parent.prototype);

function myInstace(Obj, Con) {
    let proto = Object.getPrototypeOf(Obj);
    while (proto) {
        if (proto === Con.prototype) {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
    }

    return false;
}

/** es6继承 */
class Parent {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Children extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}
