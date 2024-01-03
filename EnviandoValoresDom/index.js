function register(element){
const username = element.children.username.value
const password = element.children.password.value
const passwordConfirmation = element.children.passwordConfirmation.value
console.log({username,password,passwordConfirmation})

if(password === passwordConfirmation){
    alert('Usuario ' + username + ' Registrado')
    
    const registerUsername = document.getElementById('register')
    
    const newLi = document.createElement('li')
    newLi.innerText = `${username}`
    
    registerUsername.appendChild(newLi)

    element.children.username.value = ''
    element.children.password.value = ''
    element.children.passwordConfirmation.value = ''
}else{
    alert('As senhas não conferem')
    element.children.username.value = ''
    element.children.password.value = ''
    element.children.passwordConfirmation.value = ''
}
    console.log(element) // Saida a <section> completa
    
}