var t = 11;

var _global = 'global var';
function x() {
    var _x = 'x var'

    function y() {
        var _y = 'y var';
        console.log(_y);
    }

    y();
}
x();

var num2 = 5;
function method1() {
    if (true) {
        var num1 = 1;
    }
    console.log(num1, num2);

}
method1();

{
    let i = 0;
    console.log(i)
}

{
    var j = 1;
}
console.log(j)
