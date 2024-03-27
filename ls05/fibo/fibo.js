const fibo = [0, 1];

function addNext() {
    const lastIndex = fibo.length - 1;
    const nextElement = fibo[lastIndex] + fibo[lastIndex - 1];
    fibo.push(nextElement);
    document.getElementById('fibo-list').innerHTML += "<li>" + nextElement + "</li>"
}