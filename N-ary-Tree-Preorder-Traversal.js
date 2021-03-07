const preorder = (root) => {
    let res = [];
    const Helper = (node) => {
        if (!node) return [];
        res.push(node.val);
        for (let child of node.children) {
            Helper(child);
        }
    };
    Helper(root);

    return res;
};