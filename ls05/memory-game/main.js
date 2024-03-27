function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

var cards = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'A', 'B', 'C', 'D', 'E', 'F'
];
// Shuffle
// cards = shuffle(cards);
/*for(var i=0; i < cards.length; i++) {
    // shuffle logic 
}*/
cards = ["C", "F", "D", "A", "D", "B", "F", "E", "A", "C", "B", "E"];

var lastClick;
function showCard(index) {
    const elementId = "card" + index;
    document.getElementById(elementId).innerHTML = cards[index];

    if (typeof lastClick != 'undefined') {
        if (cards[lastClick] == cards[index]) {
            lastClick = undefined;
            return;
        }
        else {
            const prevElement = "card" + lastClick;
            setTimeout(function () {
                document.getElementById(elementId).innerText = '';
                document.getElementById(prevElement).innerText = '';
            }, 2 * 1000)

            lastClick = undefined;
        }
    } else {
        lastClick = index;
    }


}