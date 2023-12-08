function addContact(){
    const contacts = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')
    // Nome
    const li = document.createElement('li')
    li.innerText = 'Nome: ' 

    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'fullname'

    li.appendChild(input)
    ul.appendChild(li)
    ul.appendChild(document.createElement('br')) // Pular linha
    // Telegone
    const phoneli = document.createElement('li')
    phoneli.innerText = 'Telefone: ' 

    const phoneinput = document.createElement('input')
    phoneinput.type = 'text'
    phoneinput.name = 'phone'

    phoneli.appendChild(phoneinput)
    ul.appendChild(phoneli)
    ul.appendChild(document.createElement('br')) // Pular linha
    //Endereço
    const addressli = document.createElement('li')
    addressli.innerText = 'Endereço: ' 

    const addressinput = document.createElement('input')
    addressinput.type = 'text'
    addressinput.name = 'andress'
    addressinput.id = 'adress'

    addressli.appendChild(addressinput)
    ul.appendChild(addressli)
    ul.appendChild(document.createElement('br')) // Pular linha


    contacts.append(h3, ul)
}
 //Funcao para excluir elemento
function removeContact(){
    const contactssection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactssection.removeChild(titles[titles.length-1])
    contactssection.removeChild(contacts[contacts.length-1])
}