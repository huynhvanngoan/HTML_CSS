var switchBtn = document.querySelector('label')
var body = document.querySelector('body')
var input = document.querySelector('#switch')

function init() {
    let mode = localStorage.getItem('mode') ? 'dark' : ''


    if (mode === 'dark') {
        input.checked = true
    } else {
        input.checked = false
    }
    
    body.setAttribute('class', mode)
}

init()

switchBtn.addEventListener('click', function () {
    body.classList.toggle('dark')
    let mode = body.getAttribute('class') ? 'dark' : ''

    localStorage.setItem('mode', mode)
})