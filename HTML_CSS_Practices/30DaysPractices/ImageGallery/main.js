var images = document.querySelectorAll(".image img")

var prevBtn = document.querySelector(".control.prev")
var nextBtn = document.querySelector(".control.next")
var closeIcon = document.querySelector(".close")
var galleryInner = document.querySelector(".gallery__inner img")
var gallery = document.querySelector(".gallery")
var wrapper = document.querySelector(".wrapper")

var currentIndex = 0

function updateButtons() {
    prevBtn.classList.toggle("hide", currentIndex === 0);
    nextBtn.classList.toggle("hide", currentIndex === images.length - 1);
}

function galleryShow() {
    updateButtons();  
    galleryInner.src = images[currentIndex].src;
    gallery.classList.add("show");
    wrapper.classList.add("hide");
}

function galleryHide() {
    gallery.classList.remove("show");
    wrapper.classList.remove("hide");
}

function changeImage(direction) {
    currentIndex += direction
    galleryShow();
}

images.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentIndex = index
        galleryShow()
    })
})

closeIcon.addEventListener("click", galleryHide)

document.addEventListener("keydown", (event) => {
    if (event.keyCode === "Escape") {
        galleryHide()
    }
})


prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        changeImage(-1)
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
       changeImage(1)
    }
});