"use strict";
//非同期関数 (async function)
async function changeIcon() {
    let theme = await getThemeFromStorage();
    let favo = await getFavoColorFromStorage();
    if (theme !== 'light') {
        theme = 'dark';
    }
    let fileName = `src/action/icons/${theme}_${favo}_32.png`;
    chrome.action.setIcon({ path: fileName });
}
async function getFavoColorFromStorage() {
    return new Promise((resolve) => {
        chrome.storage.local.get({
            favo: 'lightBlue'
        }, (items) => {
            let favo = items.favo;
            resolve(favo);
        });
    });
}
async function getThemeFromStorage() {
    return new Promise((resolve) => {
        chrome.storage.local.get({
            theme: 'light'
        }, (items) => {
            let theme = items.theme;
            resolve(theme);
        });
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.target !== 'background') {
        sendResponse();
        return true;
    }

    console.log(message);

    switch(message.text) {
        case 'changeIcon': {
            changeIcon();
            break;
        }
        default: {
            console.log('Cought unknonw message.');
        }
    }

    sendResponse();
    return true;
});