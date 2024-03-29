class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        if (this.head === this.tail) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return node;
        }

        let current = this.head;
        let previous = current;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.tail = previous;
        this.length--;
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) !!this.push(value);
        if (index === 0) !!this.unshift(value);
        let newNode = new Node(value);
        let foundNode = this.get(index - 1);
        let nextNode = foundNode.next;
        foundNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        while (current != null) {
            next = current.next;
            current.next = previous
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    recursiveReverse() {
        // perform
    }

    print() {
        let arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
        console.log(`head ${JSON.stringify(this.head)} \ntail ${JSON.stringify(this.tail)}`)
    }
}

let list = new SinglyLinkedList();

let node1 = new Node(4);
let node2 = new Node(1);
let node3 = new Node(6);

node1.next = node2;
node2.next = node3;

list.head = node1;

list.print()

list.reverse();

list.print();