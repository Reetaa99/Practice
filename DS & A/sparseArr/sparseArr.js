console.log("original arr");

let arr = new Array(11);
for (let i = 0; i < 11; i++) {
    arr[i] = (new Array(11).fill(0));
    // if you want to use arr.push,
    // make sure let arr = new Array();
    // otherwise there's 11 empty elements before the 11 new Array
}


arr[1][2] = 1;
arr[2][3] = 2;
console.log(arr);

//////////////////////
// original chagne to sparse array
console.log("this is sparse array");

let nonzeroSum = 0;
let sparseArr = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] !== 0) {
            nonzeroSum++;
            let valueArr = new Array(3);
            valueArr[0] = i
            valueArr[1] = j
            valueArr[2] = arr[i][j]
            sparseArr.push(valueArr);
        }
    }
}

let dataArr = [11, 11, nonzeroSum];
sparseArr.unshift(dataArr);
console.log(sparseArr);


// reverse back
let origArr = [];

for (let i = 0; i < sparseArr[0][1]; i++) {
    origArr.push(new Array(sparseArr[0][0]).fill(0));
}
for (let i = 1; i < sparseArr.length; i++) {
    origArr[sparseArr[i][0]][sparseArr[i][1]] = sparseArr[i][2];
    // console.log(sparseArr);
}

console.log(origArr);




