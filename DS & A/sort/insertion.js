var swap = function (s, a, b) {
    let temp = s[a];
    s[a] = s[b];
    s[b] = temp;
}

// O(n^2)  when reversed order array
// omega(n) when already sorted
// this is better for partially sorted array - O(n)
    // since # of inversions == # of exchanges
// partially soted array means: nunmber of inversions(like: ZA, DC, etc)) inside the array is constant number
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