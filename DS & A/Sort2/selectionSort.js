function less(num1, num2) {
    return num1 < num2;
}

function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (less(arr[j], arr[min])) min = j;
        }
        exchange(arr, min, i)
    }
    return arr;
}

let arr1 = [123, 21, 12, 43, 1, 43];
let arr2 = [13, 1, 122, 33, 14, 3];

console.log(selection(arr1));
console.log(selection(arr2));