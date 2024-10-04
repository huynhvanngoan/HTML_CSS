var upload = document.querySelector('#myImage')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')
upload.addEventListener('change', function (e) {

    var file = upload.files[0];

    if (!file) return

    if (!file.name.endsWith('.jpg')) {
        error.innerHTML = 'Hình ảnh phải thuộc định dạng jpeg'
        return
    } else {
        error.innerHTML = ''
    }

    if (file.size / (1024 * 1024) > 5) {
        error.innerHTML = 'Hình ảnh phải nhỏ hơn 5MB'
        return
    } else {
        error.innerHTML = ''
    }

    var img = document.createElement('img')

    var fileReader = new FileReader(file)

    fileReader.readAsDataURL(file)


    fileReader.onloadend = function (e) {
        console.log('loaded file', e.target.result)
        img.src = e.target.result
    }

    //  img.src = URL.createObjectURL(upload.files[0]);
    preview.appendChild(img)
})