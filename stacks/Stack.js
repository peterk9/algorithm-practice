class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode
        } else {
            let currentTop = this.top;
            this.top = newNode;
            this.top.next = currentTop;;
        }
        return ++this.size;
    }

    pop() {
        if (!this.top) return null;
        if (this.top === this.bottom) {
            this.top = this.bottom = null;
        }
        let currentTop = this.top;
        this.top = this.top.next;
        currentTop.next = null;
        this.size--;
        return currentTop;
    }
}

let stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(6);

console.log(stack);
console.log('-------------');
console.log(stack.pop());
console.log('-------------');
console.log(stack);