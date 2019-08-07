class LinkedList {
    constructor(node) {
        this.head = node;
    }

    reverse() {
        let currentNode = this.head;
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = currentNode;
            currentNode = nextNode;
        }
    }

    prepend(node) {
        let previousHead = this.head;
        this.head = node;
        node.next = previousHead;
    }

    append(node) {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    print() {
        let currentNode = this.head;
        let count = 0;
        while (currentNode) {
            count++;
            console.log(`node ${count}, ${currentNode.value}`);
            currentNode = currentNode.next;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

module.exports = { LinkedList, Node }

