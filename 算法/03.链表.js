// 链表查询慢，新增删除快
// 数组查询快，新增删除慢

// interface ILinkListNode {
//     value: number;
//     next?: ILinkListNode;
// }

function createLinkList(arr) {
    let length = arr.length;
    if (length === 0) {
        throw new Error('arr is empty');
    }

    let curNode = {
        value: arr[length - 1],
    };
    if (length === 1) {
        return curNode;
    }

    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode,
        };
    }

    return curNode;
}

const arr = [100, 200, 300, 400, 500];
const list = createLinkList(arr);
console.log(list);

/** 反转链表 */
function reverseLinkList(listNode) {
    // 定义三个指针
    let prevNode = undefined;
    let curNode = undefined;
    let nextNode = nextNode;

    // 以nextNode为主，遍历链表
    while (nextNode) {
        // 第一个元素 删除next 防止循环引用
        if (curNode && !prevNode) {
            delete curNode.next;
        }

        // 反转指针
        if (curNode && prevNode) {
            curNode.next = prevNode;
        }

        // 整体向后移动指针
        prevNode = curNode;
        curNode = nextNode;
        nextNode = nextNode?.next;
    }

    // 最后一个的补充，当nextNode空时，此时curNode尚未设置next
    curNode.next = prevNode;

    return curNode;
}
