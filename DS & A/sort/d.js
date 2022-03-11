var dfs = function (currCity, provinces, isConnected) {
    console.log('currCity now is :' + currCity);
    for (let i = 0; i < currCity.length; i++) {
        if (currCity[i] == 1 && !provinces.has(i)) {
            console.log('provinces before adding new city: ' + Array.from(provinces));
            provinces.add(i);
            console.log('provinces after adding new city: ' + Array.from(provinces));
            dfs(isConnected[currCity[i]], provinces, isConnected);
        }
    }
}

var findCircleNum = function (isConnected) {
    var provinces = new Set();
    var count = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (!provinces.has(i)) {
            console.log('in the main method, now provinces is ' + Array.from(provinces));
            dfs(isConnected[i], provinces, isConnected);
            count++;
        }
    }
    return count;
};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));