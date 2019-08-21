class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode; return this;
        }
        let current = this.root;
        while (current) {
            if (value === current.value) return undefined;
            if (value > current.value) {
                if (!current.right) {
                    current.right = newNode; return this;
                }
                current = current.right
            } else {
                if (!current.left) {
                    current.left = newNode; return this;
                }
                current = current.left;
            }
        }
    }

    find(value) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (current.value === value) return true;
            if (value > current.value) current = current.right;
            else current = current.left;
        }
        return false;
    }

    bfs() {
        let queue = [];
        let data = [];
        let current = this.root;
        queue.push(current);
        while (queue.length) {
            current = queue.shift();
            data.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return data;
    }

    dfsPreOrder() {
        let stack = [];
        let data = [];
        let current = this.root;
        stack.push(current);
        while (stack.length) {
            current = stack.pop();
            data.push(current.value);
            if (current.right) stack.push(current.right);
            if (current.left) stack.push(current.left);
        }
        return data;
    }

    dfsPreOrderRecursive() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    dfsPostOrderRecursive() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    dfsInOrderRecursive() {
        let data = [];
        function traverse(node) {
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    // note: can use a current variable as a starting point if you do not want to traverse the whole tree,
    // just the sub tree.

}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

console.log(`${bst.bfs()} - bfs iterative`);
console.log(`${bst.dfsPreOrder()} - dfsPreOrder iterative`);
console.log(`${bst.dfsPreOrderRecursive()} - dfsPreOrder recursive `);
console.log(`${bst.dfsPostOrderRecursive()} - dfsPostOrder recursive `);
console.log(`${bst.dfsInOrderRecursive()} - dfsInOrder recursive `);


