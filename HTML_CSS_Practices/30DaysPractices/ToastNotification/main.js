var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');

btnSuccess.addEventListener('click', function () {
    createToast('success')
})

btnWarning.addEventListener('click', function () {
    createToast('warning')
})

btnError.addEventListener('click', function () {
    createToast('error')
})
createToast('warning')

function createToast(status) {
    let templateInner = ` <i class="fas fa-circle-exclamation" ></i>
            <span class="message">This is a warning message</span>`
    switch (status) {
        case 'success':
            templateInner = ` <i class="fas fa-circle-check"></i>
            <span class="message">This is a success message</span>`
            break;
        case 'warning':
            templateInner = `<i class="fas fa-circle-exclamation"></i>
            <span class="message">This is a warning message</span>`
            break;
        case 'error':
            templateInner = `<i class="fas fa-triangle-exclamation"></i>
            <span class="message">This is a error message</span>`
            break;

    }
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${templateInner}
            <span class="countdown"></span>`

    var toastList = document.getElementById('toast-wrapper')

    toastList.appendChild(toast)

    setTimeout(() => {
        toast.style.animation = 'slide_hide 2s ease forwards';
    }, 3000);

    setTimeout(() => {
        toast.remove()
    }, 5000);
}