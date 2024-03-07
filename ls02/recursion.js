var MAX = 3;
var sum = 0;
for (var i = 1; i <= MAX; i++) {
    sum += i;
}
console.log(sum)

function sum2(x) {
    if (x > MAX) {
        return 0;
    }

    return x + sum2(x + 1);
}
/*
|  call   | x       |    codition (x > MAX)   | return        |
|  sum2(1)| 1       |     1 > 3 FALSE         | 1 + sum2(1+1) | 1 + 5 = 6
|  sum2(2)| 2       |     2 > 3 FALSE         | 2 + sum2(2+1) | 2 + 3 = 5
|  sum2(3)| 3       |     3 > 3 FALSE         | 3 + sum2(3+1) | 3 + 0 = 3
|  sum2(4)| 4       |     4 > 3 TRUE          | 0
*/
console.log(sum2(1));
