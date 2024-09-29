var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggleModal(event) {
    console.log(event.target)
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal)

btnClose.addEventListener('click', toggleModal)

iconClose.addEventListener('click', toggleModal)

modal.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {

        toggleModal();
    }
})
