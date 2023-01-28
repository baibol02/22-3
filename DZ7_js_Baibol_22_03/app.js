let num1 = prompt("Введите первое число: ")
let operator = prompt("Выберите действие калькулятора (+, -, *, /): ")
let num2 = prompt("Введите второе число: ")
if (operator === "+") {
    alert(num1 + " + " + num2 + " = " + (num1 + num2));
} else if (operator === "-") {
    alert(num1 + " - " + num2 + " = " + (num1 - num2));
} else if (operator === "*") {
    alert(num1 + " * " + num2 + " = " + (num1 * num2));
} else if (operator === "/") {
    if (num2 == 0) {
        alert("На ноль делить нельзя")
    } else {

    } alert(num1 + " / " + num2 + " = " + (num1 / num2));
} else {
    alert("Введите только числа");
}