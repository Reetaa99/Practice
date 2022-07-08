// Quick Find (too slow for huge problem)
// we want to find the connectivity of multiple points
// the way we resolve it is the QF algorithm with a data structure of array
// the index represents the number on points, just let us know that each point are different
// the arr[index] represents whethere two or more points are connected

//[0, 1,2,3,4] means all points are disconnected
// at first we want to set this id[] array as id===index
//[0, 0, 0, 3, 3] means point 0, 1, 2 are connected, and 3,4 are connected
// when we do union(4,3), it will assign value 4 at index 4 to value 3
// ex. [0, 1,2,3,4] => [0, 0, 0, 3, 3]
class QF {
    // O(n)
    constructor(max) {
        this.idArr = new Array[max];
        for (let i = 0; i < max; i++) {
            this.idArr[i] = i;
        }
    }

    // O(1)
    connected = (num1, num2) => {
        return id[num1] === id[num2]
    }

    // O(n)
    // if union n object, it would be O(n^2), tooooo slow
    union = (p1, p2) => {
        let p1id = this.idArr[p1]
        for (let i = 0; i < max; i++) {
            if (this.idArr[i] === p1id) { // !important: don't put id[p1] here, it will change in the loop
                this.idArr[i] = this.idArr[p2]
            }
        }
    }
}