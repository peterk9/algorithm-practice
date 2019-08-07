const { LinkedList, Node } = require('./LinkedList');

let a = new Node('first');
let b = new Node('second');
let c = new Node('third');

a.next = b;
b.next = c;

let list = new LinkedList(a);

list.print();

list.reverse();

list.print();

// let d = new Node('fourth');

// list.prepend(d);

// list.print();

// let e = new Node('fifth');

// list.append(e);

// list.print();
