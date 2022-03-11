var swap = function (s, a, b) {
    let temp = s[a];
    s[a] = s[b];
    s[b] = temp;
}


var insertion = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
            swap(arr, j - 1, j);
        }
    }
}

let arr = [2, 3, 1, 5, 1];
insertion(arr);
console.log(arr);