function register(element){
const username = element.children.username.value
const password = element.children.password.value
const passwordConfirmation = element.passwordConfirmation.value

if(password === passwordConfirmation){
    alert('Usuario' + username + 'Registrado')
}else{
    alert('As senhas não conferem')
}
    console.log(element) // Saida a <section> completa
}