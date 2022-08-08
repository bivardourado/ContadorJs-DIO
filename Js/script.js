let count = 0

const CURRENT_NUMBER = document.getElementById('currentNumber')

function increment() {
    count++
    CURRENT_NUMBER.innerHTML = count
}

function decrement() {
    count--
    CURRENT_NUMBER.innerHTML = count
}

if (CURRENT_NUMBER >= 0) {
    return (CURRENT_NUMBER.innerHTML.style = 'red')
} else {
    CURRENT_NUMBER.innerHTML.sytle = 'green'
}