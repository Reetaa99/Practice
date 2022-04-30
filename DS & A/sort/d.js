var search = function (nums, target) {
    if (nums.length <= 0) {
        return -1;
    }

    let mid = Math.floor(nums.length / 2);
    console.log('mid here is ' + mid);
    console.log(nums[mid]);
    if (nums[mid] == target) {
        return mid;
    } else if (nums[mid] > target) {
        console.log('mid at left: ' + mid);
        return search(nums.slice(0, mid), target);
    } else {
        console.log('mid at right: ' + mid);
        return mid + 1 + search(nums.slice(mid + 1), target);
    }
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));