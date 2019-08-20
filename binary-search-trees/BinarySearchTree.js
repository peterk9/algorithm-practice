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
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(4);
bst.insert(15);
bst.insert(20);

console.log(bst);

console.log(bst.find(10));
console.log(bst.find(6));
console.log(bst.find(3));
console.log(bst.find(4));
console.log(bst.find(15));
console.log(bst.find(19));
console.log(bst.find(20));
console.log(bst.find(21));
