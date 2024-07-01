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

/** 深度优先 递归 */
function dfs(data) {
    console.log(data.val);
    data.children.forEach((item) => {
        dfs(item);
    });
}

// console.log(dfs(root));

function bfs(data) {
    const arr = [data];

    while (arr.length > 0) {
        const a = arr.shift();
        console.log(a.val);
        a.children.forEach((item) => {
            arr.push(item);
        });
    }
}

console.log(bfs(root));
