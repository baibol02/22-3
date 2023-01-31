const showBtns = document.querySelectorAll('.show-btn')

function showAnswer (e) {
    elem = e.target

    elem.classList.toggle('show')
    if(elem.classList.contains('show')){
        elem.innerText = 'Показать ответ'
    } else {
        elem.innerText = 'Скрыть ответ'
    }

    elem.previousElementSibling.classList.toggle('hide-answer')
}

showBtns.forEach(btn => btn.addEventListener('click', showAnswer))