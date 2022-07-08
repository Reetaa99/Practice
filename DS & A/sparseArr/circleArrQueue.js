//FIFO
//like a queue 排队的队列

// here we want to use java array to achieve this
// java array has fixed length

class CircleArrayQueue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = new Array(maxSize)
        this.front = 0;
        this.rear = 0;
    }

    isFull = () => {
        return (this.rear + 1) % this.maxSize === front
    }

    isEmpty = () => {
        return this.rear === this.front;
    }

    addQueue = (value) => {
        if (!this.isFull()) {
            this.queue[this.rear % this.maxSize] = value;
            this.rear++;

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
        // console.log(this.queue.slice(this.front + 1, this.rear + 1));
    }

    peekQueueHead = () => {
        console.log(this.queue[this.front + 1]);
    }



}
