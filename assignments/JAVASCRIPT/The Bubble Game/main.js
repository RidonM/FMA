const body = document.body;

for (let i = 0; i < 300; i++) {
    let div = document.createElement('div');

    let random = Math.floor(Math.random() * 100) + 'px';

    div.style.height = random;
    div.style.width = random;

    div.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
    div.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';

    div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    body.appendChild(div);

    div.addEventListener('click', () => {
        div.classList.add('fadeOut');
        setTimeout(() => {
            div.remove();
            remainingDivs--;
            checkDivs();
        }, 500);
    })
}

let remainingDivs = document.querySelectorAll('div').length;
function checkDivs() {
    if (remainingDivs == 0) {
        alert("Congrats, You Won!");
    }
}

