var mockData = fetch('http://fakestoreapi.com/products')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)

        var products = document.querySelector('.products')

        //init
        products.innerHTML = ''
        data.forEach(product => {
            var productElement = document.createElement('div')
            productElement.classList.add('product')

            productElement.innerHTML = ` 
                                <img src="${product.image}" alt="">
                                <div class="info">
                                    <div class="name">${product.title}</div>
                                    <div class="price">${product.price}</div>
                                </div>`
            products.appendChild(productElement)

        })
    })


// search functionality

var searchInput = document.querySelector('.search input')

searchInput.addEventListener('input', function () {
    var searchTerm = this.value.toLowerCase().trim();

    var listProductDom = document.querySelectorAll('.product')

    listProductDom.forEach(product => {
        var productName = product.querySelector('.name').innerText.toLowerCase()
        if (productName.includes(searchTerm)) {
            product.classList.remove('hide')
        } else {
            product.classList.add('hide')
        }
    })
})

