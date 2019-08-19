class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (!this.last) {
            this.last = this.first = newNode;
        } else {
            this.last.prev = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        if (this.first == this.last) {
            this.last = this.first = null;
        }
        let dequeuedNode = this.first;
        this.first = this.first.prev;
        dequeuedNode.prev = null;
        this.size--;
        return dequeuedNode;
    }
}

let q = new Queue();

q.enqueue(55);
q.enqueue("hello");
q.enqueue("wag5");

console.log(q);
console.log(q.dequeue());
console.log(q);
