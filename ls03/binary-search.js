const arr = [
    1, 12, 34, 45,
    56, 67, 78, 89,
    90, 100, 256, 502,
    600, 780, 890, 900,
    1000, 2567, 5002, 6000
];
// 20, 10, 5, 2, 1, 0
// 2 ^ 4 = 16 -> log(16) = 4
// 2 ^ 5 = 32 
var mid;

function binarySearch(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}


binarySearch(arr, 890); // 3