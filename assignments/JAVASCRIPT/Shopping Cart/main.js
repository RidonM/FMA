let cart = [
    {
        title: 'Milk',
        category: 'Food',
        quantity: 3,
        price: 1.65
    },
    {
        title: 'Bread',
        category: 'Food',
        quantity: 2,
        price: 2.25
    },
    {
        title: 'Smartphone',
        category: 'Electronics',
        quantity: 1,
        price: 699.99
    },
    {
        title: 'Running Shoes',
        category: 'Fashion',
        quantity: 1,
        price: 49.99
    },
    {
        title: 'Book: The Hitchhiker\'s Guide to the Galaxy',
        category: 'Books',
        quantity: 1,
        price: 12.99
    },
    {
        title: 'Coffee Maker',
        category: 'Appliances',
        quantity: 1,
        price: 34.99
    },
    {
        title: 'Gaming Laptop',
        category: 'Electronics',
        quantity: 1,
        price: 1299.99
    },
    {
        title: 'Sunglasses',
        category: 'Fashion',
        quantity: 2,
        price: 19.99
    }
];


cart.forEach(element => {
    let ul = document.createElement('ul');

    ul.innerHTML = `<li>${element.title}</li>
    <li>${element.category}</li>
    <li>${element.quantity}</li>
    <li>${element.price} $</li>`;

    document.body.appendChild(ul);
});

let totalPrice = cart.reduce((total, item) => total + (item.quantity * item.price), 0);

let price = document.createElement('h3');

price.textContent = `Total Price: ${totalPrice} $`;

document.body.appendChild(price);