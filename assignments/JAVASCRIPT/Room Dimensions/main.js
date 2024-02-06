let widthTop = document.getElementById('widthTop');
let widthBottom = document.getElementById('widthBottom');
let heightLeft = document.getElementById('heightLeft');
let heightRight = document.getElementById('heightRight');
let room = document.getElementById('room');

let area = document.getElementById('area');
let perimeter = document.getElementById('perimeter');

let newWidth = parseFloat(prompt('Add room width:'));
let newHeight = parseFloat(prompt('Add room height'));

if (newWidth < newHeight) {
    let a = newWidth;
    newWidth = newHeight;
    newHeight = a;
}

widthTop.innerText = newWidth + 'm';
widthBottom.innerText = newWidth + 'm';
heightLeft.innerText = newHeight + 'm';
heightRight.innerText = newHeight + 'm';

let calculateArea = newWidth * newHeight;
let calculatePerimeter = newWidth * 2 + newHeight * 2;

area.innerHTML = 'Area: ' + calculateArea + ' m&#178;';
perimeter.innerHTML = 'Perimeter: ' + calculatePerimeter + ' m';

room.style.width = newWidth * 3 + "vw";
room.style.height = newHeight * 4.74 + 'vh';

if (calculateArea < 50) {
    room.style.backgroundColor = 'rgb(255, 87, 87)';
}

else if (calculateArea < 100) {
    room.style.backgroundColor = 'rgb(87, 255, 87)';
}

else {
    room.style.backgroundColor = 'rgb(87, 87, 255)';
}