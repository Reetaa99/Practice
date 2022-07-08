//FIFO
//like a queue 排队的队列


class ArrayQueue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = new Array(maxSize)
        this.front = -1;
        this.rear = -1;
    }

    isFull = () => {
        return this.rear === this.maxSize - 1
    }

    isEmpty = () => {
        return this.rear === this.front;
    }

    addQueue = (value) => {
        if (!this.isFull()) {
            this.rear++;
            this.queue[this.rear] = value;
        } else {
            console.log("queue is full");
        }
    }

    removeQueue = () => {
        if (this.isEmpty()) {
            console.log("queue is empty, cannot remove")
        } else {
            this.front++;
        }
    }

    showQueue = () => {
        console.log(this.queue.slice(this.front + 1, this.rear + 1));
    }

    peekQueueHead = () => {
        console.log(this.queue[this.front + 1]);
    }



}



let queue = new ArrayQueue(4);
queue.addQueue(3)
queue.addQueue(5)
queue.addQueue(10)
// queue.removeQueue();
// queue.removeQueue();
queue.peekQueueHead();
queue.showQueue();




