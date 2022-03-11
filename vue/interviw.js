
/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
*/

var words = ["cool", "lock", "cook"];

function common(words) {
    var common = [];
    for (var letter = 0; letter < words[0].length; letter++) {
        var l = words[0][letter];
        common.push(l);
        for (var i = 1; i < words.length; i++) {
            if (!(words[i].includes(l))) {
                common.pop(l);
                break;
            }
        }
    }
    return common;
}

console.log(common(words));
