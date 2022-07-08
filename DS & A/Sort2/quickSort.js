function less(num1, num2) {
    return num1 < num2;
}

function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

function sort(arr) {
    let pivot = 0;
    let p1 = 1;
    let p2 = arr.length - 1;
    while (p1 <= p2) {
        while (p1 < p2 && !less(arr[p1], arr[pivot])) {
            p1++;
        }
        while (p1 < p2 && !less(arr[pivot], arr[p2])) {
            p2--;
        }
        if (p1 < p2) {
            exchange(arr, p1, p2);
        }
    }


}