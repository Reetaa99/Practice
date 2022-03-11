var swap = function (s, a, b) {
    let temp = s[a];
    s[a] = s[b];
    s[b] = temp;
}

var bubbleSort = function (arr) {
    for (let k = 0; k < arr.length; k++) {
        let isSwap = false;
        for (let i = 0; i < arr.length - 1 - k; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                isSwap = true;
            }
        }
        if (!isSwap) {
            return;
        }
    }
}

let arr = [2, 3, 1, 5, 1];
bubbleSort(arr);
console.log(arr);