var swap1 = function (s, a, b) {
    let temp = s[a];
    s[a] = s[b];
    s[b] = temp;
}


// function QuickSort - takes the parameter array to be sorted
var quickSort = function (s, l = 0, r = s.length - 1) { // array s, left-most index l, right-most index r
    if (r <= l) {
        return;
    }

    // choose a pivot
    // we can just choose the first/last one, or we can randomly choose one for eaach iteration (best option)
    let pivot = s[l];
    let firstLarge = l + 1;
    for (let i = l + 1; i <= r; i++) {
        if (s[i] < pivot) {
            // swap the smaller one and the first larger-than-pivot element
            swap1(s, i, firstLarge);
            console.log('in if, s is ' + s);
            // move first larger-than pivot index to 1 right
            firstLarge++;
        }
    }
    swap1(s, l, firstLarge - 1);
    console.log('after swap, s is ' + s);
    console.log('first large is ' + firstLarge);
    quickSort(s, l, firstLarge - 2);
    quickSort(s, firstLarge, r);
}

var arr = [6, 4, 5, 46, 7, 34, 9];
quickSort(arr);
console.log(arr);
