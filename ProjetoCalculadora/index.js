const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () { // Adicionando uma evento para cada botao clicado
    const value = charKeyBtn.dataset.value // Dataset propriedade para acessa os ateributos  data
    input.value += value
  })
})

document.getElementById("clear").addEventListener("click", function () {
  input.value = ""
  input.focus() // Da um focus na tela quando limpar
})

input.addEventListener("keydown", function (ev) { // Keydown quando uma tecla e precionada
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) { // Verificação somente para permitir numeros validos
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") { // Usar o Backspace para apagar 
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
})

document.getElementById("equal").addEventListener("click", calculate)

function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  //Caso ele der erro a funcao eval para o codigo abaixo
  const result = eval(input.value)// eval serve para avaliar o codigo js -> como estou passando o valor pelo input ele vai calcular
  resultInput.value = result
  resultInput.classList.remove("error")
}

document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget // Quem acionou o evento
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value) // Copiar texto para area de transferencia
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})

document.getElementById("themeSwitcher").addEventListener("click", function () { // Troca de dar para ligth
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#555")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})