let buttons = document.querySelectorAll('.btn')
buttons.forEach(function (item) {
    item.addEventListener('click', () => {
        console.log('вы нажали кнопку');
    })
})
let input = document.querySelector('.input')
let buttonMinus = document.querySelectorAll(".minus")
let buttonPlus = document.querySelectorAll(".plus")
for (i=0; i<buttonPlus.length; i++){
    buttonPlus[i].addEventListener('click', function (){
        input.value= +input.value +1
    })
    buttonMinus[i].addEventListener('click', function (){
        input.value= +input.value -1
    })

}