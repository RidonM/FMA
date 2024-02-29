const storeProducts = document.querySelector('#storeProducts');
const productInfo = document.querySelector('#productInfo');
const closeBtn = document.querySelector('#close');
const popup = document.querySelector('#popup');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {


        json.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card-info');
            card.innerHTML = `<img src="${product.image}" alt="${product.title}" width="200" height="350">
        <h4>${product.title}</h4>
        <div class="price-category">
        <p class="price">Price: ${product.price}&euro;</p>
        <p>Rating: ${product.rating.rate}</p>
        </div>`;

            card.addEventListener('click', () => openPopup(product.id));
            storeProducts.appendChild(card);
        });
    });

function openPopup(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(product => {
            popup.innerHTML = `<img src="${product.image}" alt="${product.title}" width="300" height="525">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p class="buy-now"><a class="buy" href="#">Buy Now</a><a href="#">&#9662;</a></p>`;
            productInfo.style.display = 'flex';
            productInfo.style.top = (window.scrollY + 50) + 'px';
        });
}

closeBtn.addEventListener('click', closePopup);

function closePopup() {
    productInfo.style.display = 'none';
}