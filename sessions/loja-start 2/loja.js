
let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 480;

document.body.appendChild(rrafshi);

let ctx = rrafshi.getContext("2d");

let bgReady = false;
let bgImage = new Image();
bgImage.src = "images/background.png";
bgImage.onload = function () {
    bgReady = true;
}

let macaReady = false;
let maca = {};
maca.x = 100;
maca.y = 100;
maca.width = 90;
maca.height = 117;
let macaImage = new Image();
macaImage.src = "images/cat.png";
macaImage.onload = function () {
    macaReady = true;
}

let miuLose = 0;
let miuReady = false;
let miu = {};
miu.x = 300;
miu.y = 300;
miu.width = 45;
miu.height = 57;
let miuImage = new Image();
miuImage.src = "images/mouse.png";
miuImage.onload = function () {
    miuReady = true;
}

var keysDown = {};

document.addEventListener("keydown",
    function (e) {
        keysDown[e.key] = true;
        console.log(e.key);
    });

document.addEventListener("keyup", function (e) { keysDown = {}; });

let macaSpeed = 3;

let update = function () {
    if ("d" in keysDown || "ArrowRight" in keysDown) {
        if (maca.x > 512) { maca.x = -20; }
        maca.x += macaSpeed;
    }
    if ("a" in keysDown || "ArrowLeft" in keysDown) {
        if (maca.x < -64) { maca.x = 512; }
        maca.x -= macaSpeed;
    }

    if ("s" in keysDown || "ArrowDown" in keysDown) {
        if (maca.y > 480) { maca.y = -64; }
        maca.y += macaSpeed;
    }

    if ("w" in keysDown || "ArrowUp" in keysDown) {
        if (maca.y < -64) { maca.y = 480; }
        maca.y -= macaSpeed;
    }

    // Kur maca prek miun
    if (
        (maca.x + maca.width) > miu.x &&
        maca.x < (miu.x + miu.width) &&

        (maca.y + maca.height) > miu.y &&
        maca.y < (miu.y + miu.height)


    ) {
        miuLose += 1;
        reset();
        macaSpeed += 1;
    }

}

let reset = function () {
    miu.x = Math.floor(Math.random() * 384) + 0;
    miu.y = Math.floor(Math.random() * 352) + 0;

    maca.x = 100;
    maca.y = 100;
}

let render = function () {
    if (bgReady) { ctx.drawImage(bgImage, 0, 0); }
    if (macaReady) { ctx.drawImage(macaImage, maca.x, maca.y); }
    if (miuReady) { ctx.drawImage(miuImage, miu.x, miu.y); }
    update();

    ctx.font = "25px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Maca zuri miun: " + miuLose + " herë.", 10, 30);
}

reset();
setInterval(render, 10);