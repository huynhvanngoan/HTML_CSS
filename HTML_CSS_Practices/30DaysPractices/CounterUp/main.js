
var listCounter = document.querySelectorAll('.counter')


function countUp(el) {
    var numEl = el.querySelector('.number')
    var to = parseInt(numEl.innerText)
    var count = 0;

    var times = 250

    var step = to / times


    let counting = setInterval(() => {
        count += step
        if (count > to) {
            clearInterval(counting);
            numEl.innerText = to;
        } else {
            numEl.innerText = Math.round(count);
        }
    }, 10);
}

listCounter.forEach(item => {
    countUp(item)  // Call function for each counter
})

