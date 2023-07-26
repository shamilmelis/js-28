const inp = document.querySelector('#input')
const button = document.querySelector('.startBtn');


button.addEventListener('click', () => {
    let randomizer = Math.floor(Math.random() * 10)
    if (inp.value >= 1 && inp.value <= 10) {
        if (parseInt(inp.value) === randomizer) {
            alert(`Ты победил! Твое число ${parseInt(inp.value)} - число рандома ${randomizer}`)
        } else {
            alert('Давай еще раз')
        }
    } else {
        alert('Числа от 1 до 10!')
    }
})