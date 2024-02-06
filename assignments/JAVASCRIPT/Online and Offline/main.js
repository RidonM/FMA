let popup = document.createElement('h3');
popup.textContent = 'You are offline, please wait until you are reconnected ...';

function showPopup() {
    document.body.appendChild(popup);
}

function hidePopup() {
    document.body.remove(popup);
}

window.addEventListener('offline', showPopup);
window.addEventListener('online', hidePopup);