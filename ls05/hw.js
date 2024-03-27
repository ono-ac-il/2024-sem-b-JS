
const containersArray = [100, 200, 300];

function canHold(maxKg, sendContainer) {
    const counters = [0,0,0];
    for(var i=0; i < sendContainer[0]; i++) {
        if (maxKg - containersArray[0] >= 0) {
            maxKg = maxKg - containersArray[0];
            counters[0]++;
        }
    }
    for(var i=0; i < sendContainer[1]; i++) {
        if (maxKg - containersArray[1] >= 0) {
            maxKg = maxKg - containersArray[1];
            counters[1]++;
        }
    }
    for(var i=0; i < sendContainer[2]; i++) {
        if (maxKg - containersArray[2] >= 0) {
            maxKg = maxKg - containersArray[2];
            counters[2]++;
        }
    }
    return counters;
}


const sendContainer = [10, 0, 12];
const res = canHold(100, sendContainer);
console.log(res);
console.log(11*300 + 10*100)
