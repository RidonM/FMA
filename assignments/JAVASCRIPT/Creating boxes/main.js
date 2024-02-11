let body = document.body;

document.addEventListener('click', (event) => {
    let box = document.createElement('div');
    let rotation = Math.floor(Math.random() * 360);

    box.style.transform = `rotate(${rotation}deg)`
    box.style.top = `${event.clientY - 25}px`;
    box.style.left = `${event.clientX - 25}px`;

    body.appendChild(box);
})
