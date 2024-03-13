const numbersArray = [3, 4, 6, 10, 5, -4, 1, -3, 3, 0]
//                          F  T   F  F   T   T   F  T

let count = 0;
for (let i = 2; i < numbersArray.length; i++) {
    const sum = numbersArray[i - 1] + numbersArray[i - 2];
    if (sum == numbersArray[i]) {
        count++;
    }
}

console.log(count);