var imgFeature = document.querySelector('.img-feature')
var listImage = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')


var currentIndex = 0;

function updateImageByIndex(index) {
    // remove active class
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })

    currentIndex = index;
    imgFeature.src = listImage[index].getAttribute('src')
    listImage[index].parentElement.classList.add('active')
}


listImage.forEach((imgElement, index) => {
    imgElement.addEventListener('click', function (e) {
        imgFeature.style.opacity = '0'
        setTimeout(() => {
            updateImageByIndex(index)
            imgFeature.style.opacity = '1'

        }, 500);
    })
})

prevBtn.addEventListener('click', function (e) {

    if (currentIndex === 0) {
        currentIndex = listImage.length - 1;
    } else {
        currentIndex--;

    }
    imgFeature.style.animation = ''
    
    setTimeout(() => {
        updateImageByIndex(currentIndex)
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards'

    }, 400);
});
nextBtn.addEventListener('click', function (e) {
    if (currentIndex === listImage.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;

    }
    imgFeature.style.animation = ''
    
    setTimeout(() => {
        updateImageByIndex(currentIndex)
        imgFeature.style.animation = 'slideRight 1s ease-in-out forwards'

    }, 400);
});

updateImageByIndex(0);