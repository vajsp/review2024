const treeDate = [
    {
        id: 1,
        name: 'React',
        children: [
            {
                id: 2,
                name: 'react1',
                children: [
                    {
                        id: 3,
                        name: 'react2',
                        children: [],
                    },
                    {
                        id: 4,
                        name: 'react3',
                        children: [],
                    },
                ],
            },
            {
                id: 5,
                name: 'react4',
                children: [],
            },
        ],
    },
];

// 递归
function flatternTree(tree, parent, result) {
    for (let node of tree) {
        const { id, name, children } = node;
        const nodeWithParent = { id, name };
        result.push(nodeWithParent);
        if (children) {
            flatternTree(children, id, result);
        }
    }
    return result;
}

// reduce
function flatternTree1(tree) {
    return tree.reduce((res, node) => {
        const { id, name, children } = node;
        const wNode = { id, name };
        res.push(wNode);

        if (children) {
            const childNodes = flatternTree1(children);
            childNodes.forEach((element) => {
                res.push(element);
            });
        }

        return res;
    }, []);
}

console.log(flatternTree1(treeDate));
