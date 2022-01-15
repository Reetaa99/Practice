/*
var origStr = 'abcoefoxyozzopp';
var letter = [];
var appearance = [];
for (var i = 0; i < origStr.length; i++) {
    var lett = origStr[i];
    if (letter.indexOf(lett) == -1) {
        letter.push(lett);
        appearance.push(0);
    } 
    appearance[letter.indexOf(lett)]++;
}
maxNum = Math.max(...appearance);
maxLetter = letter[appearance.indexOf(maxNum)];

console.log(letter);
console.log(appearance);
console.log(maxNum);
console.log(maxLetter);
*/

// with given answers
var origStr = 'abcoefoxyozzopp';
var obj = new Object();
for (var i = 0; i < origStr.length; i++) {
    var key = origStr[i];
    if (obj[key]) {
        obj[key]++;
    } else {
        obj[key] = 1;
    }
}
console.log(obj);

// find max
var max = obj['a']
var maxLetter = 'a'
for (var key in obj) {
    if (obj[key] > max) {
        max = obj[key];
        maxLetter = key;
    }
}
console.log(maxLetter + ": " + max);