class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // adds node to the tail
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // remove node from tail
    pop() {
        if (!this.tail) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    // remove node from head
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // add node from head
    unshift(value) {
        if (!this.head) this.push(value)
        else {
            let newNode = new Node(value);
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    // get node at index
    get(index) {
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;
        if (index < 0 || index >= this.length) return undefined;
        let count, current, direction, step;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            direction = 'next';
            step = 1;
        } else {
            count = this.length - 1;
            current = this.tail;
            direction = 'prev';
            step = -1;
        }
        while (count != index) {
            current = current[direction];
            count += step
        }
        return current;
    }

    // set value at index
    set(index, value) {
        let found = this.get(index);
        if (!found) return false;
        found.value = value;
        return true;
    }

    // insert node at an index
    insert(index, value) {
        if (index < 0 || index >= this.length) return false;
        if (index == 0) return !!this.unshift(value);
        if (index == this.length - 1) return !!this.push(value);

        let before = this.get(index - 1);
        let newNode = new Node(value);
        let after = before.next;

        before.next = newNode;
        newNode.prev = before;

        newNode.next = after;
        after.prev = newNode;

        this.length++;
        return true;
    }

    // remove node from an index
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();

        let removedNode = this.get(index);

        let before = removedNode.prev;
        let after = removedNode.next;

        before.next = after;
        after.prev = before;

        removedNode.prev = null;
        removedNode.next = null;

        this.length--;
        return true;
    }

    reverse() {
        this.tail = this.head;

        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            current.prev = next;

            prev = current;
            current = next;
        }

        this.head = prev;
        return this;
    }

    print() {
        let current = this.head;
        let list = [];
        while (current) {
            list.push(current.value);
            current = current.next;
        }
        console.log(list);
    }
}

let dbllist = new DoublyLinkedList();

dbllist.push(1);
dbllist.push(2);
dbllist.push(3);
dbllist.push(4);
dbllist.push(5);
dbllist.push(6);

console.log(dbllist);
dbllist.print();
console.log(dbllist.reverse());

dbllist.print();




