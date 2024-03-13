const counters = {};


const str = 'avraham';
for (var i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (typeof counters[currentChar] == 'undefined') {
        counters[currentChar] = true;
    } else {
        return false;
    }
}
