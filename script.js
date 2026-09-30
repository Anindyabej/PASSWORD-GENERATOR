
const btn = document.querySelector("#button")
const newPassword = document.querySelector("#new-password")
const slider = document.querySelector("#range")
const rangeValue = document.querySelector("#slider")
const upperCase = document.querySelector("#upper-case")
const lowerCase = document.querySelector("#lower-case")
const numbers = document.querySelector("#number")
const symbol = document.querySelector("#symbol")
const copyBtn = document.querySelector("#copy-btn")
const copyMessage = document.querySelector("#copy-message")


rangeValue.innerHTML = slider.value

slider.addEventListener('input', (e) => {
    rangeValue.innerText = e.target.value
})


btn.addEventListener('click', (e) => {
    e.preventDefault()

    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz'
    let numberStr = '0123456789'
    let symbolStr = '!~@#$%^&*'

    let finalStr = ''

    if (upperCase.checked) {
        finalStr += capitalLetter
    }
    if (lowerCase.checked) {
        finalStr += smallLetter
    }
    if (symbol.checked) {
        finalStr += symbolStr
    }
    if (numbers.checked) {
        finalStr += numberStr
    }
    if (finalStr === '') {
        alert("Please checked atleast one field")
    }

    let latestPass = ''

    for (let i = 0; i < slider.value; i++) {
        let random = Math.floor(Math.random() * finalStr.length)
        // latestPass += finalStr[random]

        latestPass += finalStr.charAt(random)
    }

    newPassword.textContent = `${latestPass}`
})

copyBtn.addEventListener("click",()=>{
    window.navigator.clipboard.writeText(newPassword.textContent)
    setTimeout(() => {
        copyMessage.textContent="copied"
    }, 500);

    setTimeout(() => {
        copyMessage.textContent=""
    }, 1500);
})

const rangeInput = document.getElementById('range');

function updateRangeFill() {
  const percent = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
  rangeInput.style.setProperty('--fill', percent + '%');
}

rangeInput.addEventListener('input', updateRangeFill);
updateRangeFill();