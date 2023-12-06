function addInput(){
    const ul = document.getElementById('inputs')

    const li = document.createElement('li')
    li.className = 'list'
    li.innerText = 'Primeiro input'

    const inputnew = document.createElement('input')
    inputnew.name = 'input'
    inputnew.type = 'text'

    li.appendChild(inputnew)
    ul.appendChild(li)
}

//Professor 
/**
 * function addInput() {
  const ul = document.getElementById('inputs')

  const newLi = document.createElement('li')
  newLi.className = 'list-item'
  newLi.innerText = 'Novo input: '

  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'

  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}
 */