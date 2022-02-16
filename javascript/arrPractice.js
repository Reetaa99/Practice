/*
var arr = [1500, 1200, 2000, 2100, 1800];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 2000) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);

*/

/*
var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    // if (!newArr.includes(arr[i])) {
    if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i])
    }
}
console.log(newArr);
*/

var txt = 'abcoefoxyozzopp';
var position = [0];
var total = 0;

while (txt.indexOf('o', 0) != -1) {
    console.log(position[position.length]);
    position.push(txt.indexOf('o', 0) + parseInt(position[position.length - 1]));
    total++;
    txt = txt.slice(txt.indexOf('o', 0) + 1,);
}
console.log(position);
console.log(total); 