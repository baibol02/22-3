//dz4
const userblock = document.querySelector('.users')

function getUsers(){
    fetch('data.json')
        .then(res => res.json())
        .then(data =>data.forEach(user =>{
                userblock.innerHTML += `
            <div class="user__card">
            <img class = "user" src="images/abstract-user-flat-4.png" alt="картинка не вышла">
            <h2 class ="card">имя:${user.name}</h2>
            <span class="card">возраст:${user.age}</span>
            
                </div>
            `
            }
        ))
}
getUsers()