let htmlTitle = document.querySelector('title').textContent;
let htmlFavicon = document.querySelector("link[rel*='icon']").href;

function startNotification(text) {
    let backAndForth = true;
    intervalID = setInterval(function () {
        if (backAndForth == true) {
            document.querySelector('title').textContent = text;
            document.querySelector("link[rel*='icon']").href = 'https://img.icons8.com/?size=48&id=F5WMYjiT3vpJ&format=png';
        } else {
            document.querySelector('title').textContent = htmlTitle;
            document.querySelector("link[rel*='icon']").href = htmlFavicon;
        }
        backAndForth = !backAndForth;
    }, 1000);
}


function endNotification() {
    clearInterval(intervalID);

    document.querySelector('title').textContent = htmlTitle;
    document.querySelector("link[rel*='icon']").href = htmlFavicon;
}

