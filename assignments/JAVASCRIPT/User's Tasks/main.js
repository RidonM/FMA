const body = document.body;
let orderedList = document.createElement('ol');

body.style.backgroundColor = '#00BFFF';
body.style.color = '#FFFFFF';
body.style.fontFamily = 'sans-serif,Arial';
body.style.fontSize = '1.6rem';

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
let tasks = document.createElement('h1');

tasks.textContent = `Tasks for ${day}/${month}/${year}`

body.appendChild(tasks);
body.appendChild(orderedList);



while (true) {
    let listItemsText = prompt('Add your task');

    if (listItemsText === null || listItemsText.trim() === '') {
        break;
    }

    listItemsText = listItemsText.charAt(0).toUpperCase() + listItemsText.slice(1);

    let listItems = document.createElement('li');
    listItems.textContent = listItemsText;
    orderedList.appendChild(listItems);
}
