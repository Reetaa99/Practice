function less(num1, num2) {
    return num1 < num2;
}

function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

function bubbleSort(arr) {
    for (let sortInd = 0; sortInd < arr.length - 1; sortInd++) {
        for (let i = 0; i < arr.length - 1 - sortInd; i++) {
            if (!less(arr[i], arr[i + 1])) {
                exchange(arr, i, i + 1)
            }
        }
    }
    return arr;
}

const arr1 = [9, 4, 5, 63, 14, 643, 64, 53, 23]
const arr2 = [23, 123, 67, 34, 7, 23, 54, 9, 4, 5, 63, 14, 643, 64, 53, 23]
const arr3 = [23, 23, 23, 123, 123, 67, 34, 7, 23, 54, 9, 4, 5, 63, 14, 643, 64, 53, 23]

console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));
console.log(bubbleSort(arr3));