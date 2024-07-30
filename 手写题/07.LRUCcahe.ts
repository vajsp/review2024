interface IListNode {
    value: any;
    key: string;
}

// 最近浏览，多余压出
export default class LRUCache {
    private length: number;
    private data: Map<any, any> = new Map();

    constructor(length: number) {
        if (length < 1) {
            throw new Error('invalid length');
        }
        this.length = length;
    }

    set(key: string, value: any): any {
        const data = this.data;

        if (data.has(key)) {
            data.delete(key);
        }
        data.set(key, value);

        if (data.size > this.length) {
            // 如果超出了容量，则删除Map最老的元素
            const delKey = data.keys().next().value;
            data.delete(delKey);
        }
    }

    get(key: string): any {
        const data = this.data;

        if (!data.has(key)) {
            return null;
        }

        const value = data.get(key);

        data.delete(key);
        data.set(key, value);

        return value;
    }
}
