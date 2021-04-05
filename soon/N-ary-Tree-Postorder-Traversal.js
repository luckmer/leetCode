const postorder = (root) => {
    let res = [];
    const Helper = (node) => {
        if (!node) return [];
        for (let data of node.children) {
            Helper(data);
        }
        res.push(node.val);
    };
    Helper(root);

    return res;
};