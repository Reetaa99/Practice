// Weighted quick union / weighted algorithm
// a good improvement is to avoid tall skinny tree
// what we can do is 
// always link the root of smaller tree on the root of large tree
// so it would have balanced tree depth

// implementation:
// same as quick union, but maintain extra array sz[i] to count number of objects in the tree rooted at i
class QU {
    // O(n)
    constructor(max) {
        this.idArr = new Array[max];
        this.idSize = new Array[max];
        for (let i = 0; i < max; i++) {
            this.idArr[i] = i;
            this.idSize[i] = i;
        }
    }

    // log(N)
    // decreases because the depth of any node at most can be log(N)
    connected = (p, q) => {
        let rootP = this.findRoot(p)
        let rootQ = this.findRoot(q)
        return rootP === rootQ;
    }

    // log_2(N)
    // decreases because 
    // there's totally N nodes
    // each time the connected component that contains x unions with a larger connected component, depth might +1, but the size of this tree/connected component at least doubles its size
    // with these
    // these depth++ operation can mostly do log(N) times
    // so the depth of any node at most can be log(N)
    union = (p, q) => {
        let rootP = this.findRoot(p)
        let rootQ = this.findRoot(q)
        if (this.idSize(rootQ) > this.idSize(rootP)) {
            this.idArr[rootP] = rootQ;
            this.idSize[rootQ] += this.idSize[rootP];
        } else {
            this.idArr[rootQ] = rootP;
            this.idSize[rootP] += this.idSize[rootQ];
        }
    }

    findRoot = (p) => {
        while (this.idArr[p] !== p) {
            p = this.idArr[p]
        }
        return p;
    }
}




// -------------------------------------------------------

// Quick Union with Path Compression
// points everything to root when finding the root
// changed the findRoot method

class QU2 {
    // O(n)
    constructor(max) {
        this.idArr = new Array[max];
        this.idSize = new Array[max];
        for (let i = 0; i < max; i++) {
            this.idArr[i] = i;
            this.idSize[i] = i;
        }
    }

    // log(N)
    // decreases because the depth of any node at most can be log(N)
    connected = (p, q) => {
        let rootP = this.findRoot(p)
        let rootQ = this.findRoot(q)
        return rootP === rootQ;
    }

    // log_2(N)
    union = (p, q) => {
        let rootP = this.findRoot(p)
        let rootQ = this.findRoot(q)
        if (this.idSize(rootQ) > this.idSize(rootP)) {
            this.idArr[rootP] = rootQ;
            this.idSize[rootQ] += this.idSize[rootP];
        } else {
            this.idArr[rootQ] = rootP;
            this.idSize[rootP] += this.idSize[rootQ];
        }
    }

    findRoot = (p) => {
        while (this.idArr[p] !== p) {
            // modification: one line of code
            // make the tree completely flat
            this.idArr[p] = this.idArr[this.idArr[p]]
            p = this.idArr[p]
        }
        return p;
    }
}



