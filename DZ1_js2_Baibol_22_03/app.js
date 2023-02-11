//Задание1-js-Baibol-22-03
const phoneInput = document.querySelector('#innInput')
const phoneCheck = document.querySelector('#innCheck')
const phoneResult = document.querySelector('.innResult')

const regExp = /2 \d{2}-\d{2}-\d{4}-\d{2}-\d{3}/i
phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}
//Задание2-js-Baibol-22-03
let block = document.querySelector('.box')
function blockMove(pos){
    block.style.marginLeft = `${pos}px`
    if (pos <= 451){
        setTimeout(()=>{
            blockMove(pos +5)
        }, 10)
    }
}
blockMove(2)