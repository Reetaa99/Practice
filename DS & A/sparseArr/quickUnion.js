// Quick Union
// quicker than quickFind in some way
// still too slow
// if tree is skinny tall, then it takes O(n) to find roots and too slow

// it's like a tree
class QU {
    // O(n)
    constructor(max) {
        this.idArr = new Array[max];
        // here we started like each point is a tree that just connected to themselvrs
        // they refer to their parents: their own
        // union(4,3)
        // [0, 1, 2, 3, 4] => [0, 1, 2, 3, 3]
        // union(3,0)
        //[0, 1, 2, 3, 3] => [0, 1, 2, 0, 3]
        for (let i = 0; i < max; i++) {
            this.idArr[i] = i;
        }
    }

    //O(n) in worst case
    //very quick in some cases
    connected = (p, q) => {
        let rootP = this.findRoot(p)
        let rootQ = this.findRoot(q)
        return rootP === rootQ;
    }


    // O(n)
    // your root become child of another root
    union = (p, q) => {
        let rootP = this.findRoot(p)
        let rootQ = this.findRoot(q)
        this.idArr[rootP] = rootQ;
    }

    findRoot = (p) => {
        while (this.idArr[p] !== p) {
            p = this.idArr[p]
        }
        return p;
    }
}