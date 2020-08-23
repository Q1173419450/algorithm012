function deleteNode(root, key) {
    if (root == null) {
        return null
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
        return root;
    }

    if (key > root.val) {
        root.right = deleteNode(root.right, key);
        return root;
    }

    key = root.val;

    if (root.left === null) {
        right = root.right;
        root.right = null;
        return right;
    }

    if (root.right === null) {
        left = root.left;
        root.left = null;
        return left;
    }

    let predecessor = maxinum(root.left);
    let predecessorCopy = new TreeNode(predecessor.val);
    predecessorCopy.left = removeMax(root.left);
    predecessorCopy.right = root.right;
    root.right = null;
    root.left = null;

    return predecessorCopy
}

function removeMax(node) {
    if (node.right == null) {
        left = node.left;
        node.left = null;
        return left
    }

    node.right = removeMax(node.right);
    return node;
}

function maxinum(node) {
    if (node.right == null) {
        return node;
    }
    return maxinum(node.right);
}