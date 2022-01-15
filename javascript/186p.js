var origStr = 'abaasdffggghhjjkkgfddsssss3444343';
var length = origStr.length;
console.log(length);
var positionThree = origStr[3];
console.log(positionThree);
if (origStr.indexOf('i') != -1 ) {
    console.log('有这个字符');
} else {
    console.log('not here');
}
// replace 只更改第一个出现的g
var replaced = origStr;
while (replaced.indexOf('g') != -1) {
    replaced = replaced.replace('g', '22');
}
console.log(replaced);
var sliced = origStr.slice(1, 6);
console.log(sliced);
var obj = {};
for (var i = 0; i < origStr.length; i++) {
    var key = origStr[i];    
    if (obj[key]) {
        obj[key]++;
    } else {
        obj[key] = 1;
    }
}
console.log(obj);
var max = 0;
var maxStr = '';
for (var key in obj) {
    if (obj[key] > max){
        max = obj[key];
        maxStr = key;
    }
}
console.log('the max is ' + maxStr + ': ' + max);