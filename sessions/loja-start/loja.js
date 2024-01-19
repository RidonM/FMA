let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 480; //default me pixela

document.body.appendChild(rrafshi);

let ctx = rrafshi.getContext("2d");
let bgImage = new Image();

bgImage.onload = function () {
    ctx.drawImage(bgImage, 0, 0);
}
bgImage.src = "images/background.png";

let maca = {};
let macaImage = new Image();
macaImage.src = "images/cat.png";
macaImage.onload = function () {
    ctx.drawImage(macaImage, 100, 100);
}

let miuImage = new Image();
miuImage.src = "images/mouse.png";
miuImage.onload = function () {
    ctx.drawImage(miuImage, 100, 300);
}

let keysDown = {};

document.addEventListener("keydown",
    function (e) { console.log("You pressed:" + e.key); });

document.addEventListener("keyup",
    function (e) { delete e.key });

    // if ("ArrowRight" = ) {
        
    // }


