function coup(b){
    let a = '';
    for (i=0; i < b.length;i++){
        a += b[(b.length - 1)  -i]
    }
    return a
}

console.log(coup('hello'))

var numbers = [22,42,12,12,12345565,134312,1223,2121,122];

function general(...i) {
    return numbers.reduce((first, second) => first + second) / numbers.length;
}
console.log(general(numbers))