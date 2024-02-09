let text = document.createElement('h1');

text.textContent = "Type something ...";
text.style.backgroundColor = '#000000';
text.style.color = '#CACACA';

document.body.appendChild(text);

document.addEventListener('keydown', (event) => {
    let character = event.key;
    if (text.textContent === "Type something ...") {
        text.textContent = "";
        text.textContent += character;
        text.style.color = 'white';
    }
    else if (character == 'Backspace') {
        text.textContent = text.textContent.slice(0, -1);
    }
    else {
        text.textContent += character;
    }
})