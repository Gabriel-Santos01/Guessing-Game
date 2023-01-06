var randomNumber = Math.floor(Math.random() * 10)
let trys = 1

function tryClick(event) {
  event.preventDefault()
  const input = document.querySelector('#try')

  if (Number(input.value == randomNumber)) {
    toggleScreen()

    document.querySelector(
      '.screen2 h2'
    ).innerText = `Você acertou em ${trys} tentativas`
  }

  input.value = ''
  trys++
}

const tryButton = document.querySelector('#tryButton')
const resetButton = document.querySelector('#resetButton')

tryButton.addEventListener('click', tryClick)
resetButton.addEventListener('click', resetInput)

function resetInput(event) {
  randomNumber = Math.floor(Math.random() * 10)
  trys = 1
  toggleScreen()
}

function toggleScreen() {
  document.querySelector('.screen1').classList.toggle('hide')
  document.querySelector('.screen2').classList.toggle('hide')
}
