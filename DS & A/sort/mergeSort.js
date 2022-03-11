var mergeSort = function (arr, l = 0, r = arr.length) {
    if (r - l <= 1) {
        return;
    }

    let mid = l + Math.floor((r - l) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid, r);

    console.log('array before conquer is ' + arr);
    console.log('before conqure: l is ' + l + ', r is ' + r + ', mid is ' + mid);
    let i = l;
    let j = mid;
    let res = [];
    for (let index = l; index < r; index++) {
        if (j >= r || (i < mid && arr[i] < arr[j])) {
            res[index] = (arr[i]);
            i++;
        } else {
            res[index] = (arr[j]);
            j++;
        }
    }
    console.log('res is ' + res);
    for (let k = l; k < r; k++) {
        arr[k] = res[k];
    }
}


let arr = [6, 4, 5, 3, 2, 5];
mergeSort(arr);
console.log(arr);