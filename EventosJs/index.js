
const button = document.getElementById('register-button')

function register(ev) { // ev.currentTarget referencia o proprio botao
     console.log('Hello,Word!!!' , ev.currentTarget)

     const username = ev.currentTarget.parentNode.children.username.value
     const password = ev.currentTarget.parentNode.children.password.value
     const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value

     if(password === passwordConfirmation){
        alert('Usuario cadastrado com sucesso')
     }else{
        alert('As senhas não conferem')
     }

     console.log({username,password,passwordConfirmation})
}
button.addEventListener('click' , register)


function  removeEvent(){
    button.removeEventListener('click' , register)
}

button.addEventListener('mouseover' , function(ev){
    console.log(ev.currentTarget)

})