var i = 0
while (i<20) {
    console.log(i, i+=2)
}


let num, sum = 0
do {
    num = Number(prompt("Введите число: "));
    if (num > 0) {
        sum += num;
    }
} while (num >= 0);
console.log("Сумма всех положительных числе равна: " + sum);