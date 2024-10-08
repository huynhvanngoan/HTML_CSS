var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var decrease = document.querySelector('#decrease')
var sizeEl = document.querySelector('#size')
var increase = document.querySelector('#increase')
var save = document.querySelector('#save')
var clear = document.querySelector('#clear')
var clear = document.querySelector('#clear')
var canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')




var position1 = {
    x: 0,
    y: 0
}


var position2 = {
    x: 0,
    y: 0
}

var isDrawing = false
var colorPaint = "#000000"
var size = 10

document.addEventListener('mousedown', function (e) {
    position1 = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true
})

document.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        position2 = {
            x: e.offsetX,
            y: e.offsetY
        }

        ctx.beginPath()
        ctx.arc(position1.x, position1.y, size, 0, 2 * Math.PI)
        ctx.fillStyle = colorPaint
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(position1.x, position1.y)
        ctx.lineTo(position2.x, position2.y)
        ctx.strokeStyle = colorPaint
        ctx.lineWidth = size * 2
        ctx.stroke()

        position1.x = position2.x
        position1.y = position2.y
    }
})

document.addEventListener('mouseup', function () {
    isDrawing = false
})

color.addEventListener('change', function (e) {
    colorPaint = e.target.value
})


eraser.addEventListener('click', function () {
    colorPaint = "#ffffff"
})

increase.addEventListener('click', function () {
    size += 5
    size = size < 30 ? size : 30
    sizeEl.innerText = size
})

decrease.addEventListener('click', function () {
    size -= 5
    size = size > 5 ? size : 5
    sizeEl.innerText = size

})

sizeEl.innerText = size

clear.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

save.addEventListener('click', function () {
    var output = canvas.toDataURL()
    save.setAttribute('href', output)
})