var swap = function (s, a, b) {
    let temp = s[a];
    s[a] = s[b];
    s[b] = temp;
}

var selection = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, minIndex, i);
    }
}

// O(N^2): always Quadratic since this 2 for-loop - even it's sorted
// Big Theta: N^2/2
let selectionReview = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            // focus here
            // we want min so we need to find the one smaller than previous smallest one
            if (arr[minIndex] > arr[j]) {
                // focus here
                // notice that we want the min number among rest of arr
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
}

let arr = [2, 3, 1, 5, 1];
selection(arr);
console.log(arr);