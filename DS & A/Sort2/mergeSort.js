function less(num1, num2) {
    return num1 < num2;
}

function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

function merge(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    let aux = new Array(arr1.length + arr2.length);
    let index = 0;
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) aux[index++] = arr1[p1++];
        else aux[index++] = arr2[p2++];
    }
    while (p1 < arr1.length) aux[index++] = arr1[p1++];
    while (p2 < arr2.length) aux[index++] = arr2[p2++];
    return aux;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = parseInt(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid, arr.length))
    return merge(left, right);
}

// const arr1 = [1, 4, 5, 63];
// const arr2 = [2, 4, 6, 7];
// console.log(merge(arr1, arr2))
const arr1 = [9, 4, 5, 63, 14, 643, 64, 53, 23]

const arr2 = [23, 123, 67, 34, 7, 23, 54, 9, 4, 5, 63, 14, 643, 64, 53, 23]
const arr3 = [23, 23, 23, 123, 123, 67, 34, 7, 23, 54, 9, 4, 5, 63, 14, 643, 64, 53, 23]

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));