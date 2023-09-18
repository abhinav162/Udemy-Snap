// popup.js

console.log("Popup Script Fired!");

function startExtension() {
    document.getElementById('start-btn').addEventListener('click', sendMsg);
}

function sendMsg() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (activeTab) {
            chrome.tabs.sendMessage(activeTab.id, { msg: "start" }, function (response) {
                console.log("Message sent to content script");
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", startExtension);
