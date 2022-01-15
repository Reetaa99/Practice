var origStr = 'abcoefoxyozzopp';
var countForO = 0;
var position = [];
var posi = 0;
var index = origStr.indexOf('o', posi)
while (index != -1) {
    countForO++;
    position.push(index);
    index = origStr.indexOf('o', index + 1)
}
console.log(countForO);
console.log(position);