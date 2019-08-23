class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    extractMax() {
        let idx = 0, left = 0, right = 0;
        while (right < this.values.length) {
            left = 2 * idx + 1;
            right = 2 * idx + 2;
            if (this.values[right] > this.values[left]) {
                this.swap(idx, right);
                idx = right;
            } else {
                this.swap(idx, left);
                idx = left;
            }
        }
        return this.values.pop();
    }

    swap(a, b) {
        let temp = this.values[a];
        this.values[a] = this.values[b];
        this.values[b] = temp;
    }
}

let mbh = new MaxBinaryHeap();
mbh.insert(55);
mbh.insert(33);
mbh.insert(40);
mbh.insert(17);
mbh.insert(10);
mbh.insert(5);
mbh.insert(22);
mbh.insert(31);

console.log(mbh.values);

console.log(mbh.extractMax());

console.log(mbh.values);
