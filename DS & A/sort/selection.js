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

let arr = [2, 3, 1, 5, 1];
selection(arr);
console.log(arr);