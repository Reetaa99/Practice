var wage = [1500, 1200, 2000, 2100, 1800];
var newArr = [];
for(var each = 0; each < wage.length; each++) {
    if (wage[each] <= 2000) {
        newArr.push(wage[each]);
    }
}
console.log(newArr);