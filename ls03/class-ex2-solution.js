const counters = {};


const str = 'abcd';
for (var i = 0; i < 2; i++) {
    const currentChat = str[i];
    if (typeof counters[currentChat] == 'undefined') {
        counters[currentChat] = 1;
    } else {
        return false;
    }
}
