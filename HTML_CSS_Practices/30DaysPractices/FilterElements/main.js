var btnList = document.querySelectorAll('button')
var imgList = document.querySelectorAll('img')

btnList.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        let type = e.currentTarget.getAttribute('type')

        imgList.forEach(img => {
            let foodType = img.getAttribute('type')
            

            if(type === 'all' || foodType === '')
        })
    })
})