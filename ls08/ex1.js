function checkAge() {
    const $input = document.getElementById('age').value;
    if (Number($input) > 18) {
        document.getElementById('message').innerHTML = "בוגר";
    } else {
        document.getElementById('message').innerHTML = "קטין";
    }
}

function checkAgeEnhanced() {
    const $input = document.getElementById('age').value;
    const $message = document.getElementById('message');
    $message.innerHTML = +$input > 18 ? "בוגר" : "קטין";
}