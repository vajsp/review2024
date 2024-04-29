const root = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                { val: 'd', children: [] },
                { val: 'e', children: [] },
            ],
        },
        {
            val: 'c',
            children: [
                { val: 'f', children: [] },
                { val: 'g', children: [] },
            ],
        },
    ],
};

// // 深度优先(递归)
// function dfs(root) {
//     console.log(root.val);
//     root.children.forEach((item) => {
//         dfs(item);
//     });
// }

// dfs(root);
// 广度优先(入栈出栈)
function bfs(root) {
    const arr = [root];

    while (arr.length > 0) {
        console.log(arr[0].val);
        const o = arr.shift();
        o.children.forEach((element) => {
            arr.push(element);
        });
    }
}

bfs(root);
