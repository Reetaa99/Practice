function less(num1, num2) {
    return num1 < num2;
}

function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (!less(arr[j], arr[j + 1])) {
                exchange(arr, j + 1, j)
            }
        }
    }
    return arr;
}


let arr1 = [123, 21, 12, 43, 1, 43];
let arr2 = [13, 1, 122, 33, 14, 3];

console.log(insertion(arr1));
console.log(insertion(arr2));