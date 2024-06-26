function isValidPercentage(percentage) {
    if (isNaN(percentage) && percentage < 0 && percentage > 100) {
        return false;
    } else {
        return true;
    }
}

function getProgressColor(percentage) {
    switch (true) {
        case percentage <= 20:
            return `darkred`;
            break;
        case percentage <= 50:
            return 'orange';
            break;
        case percentage <= 80:
            return `blue`;
            break;
        default:
            return `green`;
    }
}

function modifyProgressBar(percentage, color) {
    let progressBar = document.getElementById('bar');
    progressBar.style.backgroundColor = color;
    progressBar.style.height = `${percentage}%`;
    progressBar.title = `${percentage}%`;
}

function setProgress() {
    let randomPercentage = Math.floor(Math.random() * 101);

    if (isValidPercentage(randomPercentage) == true) {
        let color = getProgressColor(randomPercentage);
        modifyProgressBar(randomPercentage, color);
    } else {
        console.error('Invalid percentage!');
    }
}

setInterval(() => {
    setProgress();
}, 2000);

