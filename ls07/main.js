const barmizvaGreetings = [
    "מזל טוב !",
    "גיל מצוות שמח !",
]

const weddingGreetings = [
    "שתהיו מאושרים !",
    "מזל טוב !",
]

const birthdayGreetings = [
    "יום הולדת שמח !",
    "מזל טוב !",
]

function onGreetButtonClick() {
    const $inputName = document.getElementById('name');
    const $inputKind = document.getElementById('kind');

    const $divGreeting = document.getElementById('greeting');

    const greet = generateGreet($inputKind.value, $inputName.value);

    $divGreeting.innerHTML = greet;

}

function generateGreet(greetType, name) {
    if (greetType == "birthday") {
        const randomIndex = Math.floor(Math.random() * birthdayGreetings.length)
        const randomGreet = birthdayGreetings[randomIndex];
        return name + ", " + randomGreet;
    } else if (greetType == "wedding") {
        const randomIndex = Math.floor(Math.random() * weddingGreetings.length)
        const randomGreet = weddingGreetings[randomIndex];
        return name + ", " + randomGreet;

    } else if (greetType == "barmizvah") {
        const randomIndex = Math.floor(Math.random() * barmizvaGreetings.length)
        const randomGreet = barmizvaGreetings[randomIndex];
        return name + ", " + randomGreet;
    }
}
