var origArr = ['c', 'a', 'z', 'x', 'a', 'x', 'c', 'b'];
var noRepeat = [];
/*
for (var i = 0; i < origArr.length; i++) {
    noRepeat.push(origArr[i]);
    if (noRepeat.indexOf(origArr[i]) != noRepeat.lastIndexOf(origArr[i])) {
        noRepeat.pop();
    }
}
*/

//answer given:
for (var i = 0; i < origArr.length; i++) {
    if (noRepeat.indexOf(origArr[i]) == -1) {
        noRepeat.push(origArr[i]);
    }
}
console.log(noRepeat);