/*const users = [{
    name: 'A',
    age: 20
}, {
    name: 'B',
    age: 32
}];*/
const users = []

const $firstName = document.getElementById('fname');
const $result = document.getElementById('result');
const $options = document.getElementById('options');
const $countResult = document.getElementById('count-result');

// document.getElementById('btn').addEventListener('click', a);
function count() {
    $countResult.innerHTML = 'Total users: ' + users.length;
}

function addDataToHTML() {
    // Add the users array to the HTML
    $result.innerHTML = users.map(function (user) {
        return "<hr>Name: " + user.name + ", age: " + user.age;
    });
}

function onButtonClick() {
    users.push({
        name: $firstName.value,
        age: 99
    })
    addDataToHTML();

}