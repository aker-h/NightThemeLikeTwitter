"use strict";
//非同期関数 (async function)
async function initializeFavoColorByStorageOnCs() {
    return new Promise((resolve) => {
        chrome.storage.local.get({
            favo: 'lightBlue'
        }, (items) => {
            console.log(document);
            console.log(items);
            let favo = items.favo;
            let innerHTML = generateStyleInnerHTMLforFavoColor(favo);
            let style = document.createElement('style');
            style.setAttribute('id', 'favoColor');
            style.innerHTML = innerHTML;
            document.head.appendChild(style);
            logEvent(`Initialized Color is '${favo}.'`, SRC_ACTION_LIB, getIndex());
            resolve();
        });
    });
}
async function initializeThemeByStorageOnCs() {
    return new Promise((resolve) => {
        chrome.storage.local.get({
            theme: 'light'
        }, (items) => {
            console.log(items);
            let theme = items.theme;
            let href = LIGHT_THEME;
            if (theme === 'darkBlue') {
                href = DARK_BLUE_THEME;
            }
            else if (theme === 'black') {
                href = BLACK_THEME;
            }
            let link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', href);
            link.setAttribute('id', 'rootCss');
            document.head.appendChild(link);
            logEvent(`Initialized Theme is '${theme}.'`, SRC_ACTION_LIB, getIndex());
            resolve();
        });
    });
}
async function syncFavoColorByStorage() {
    return new Promise((resolve) => {
        chrome.storage.local.get((items) => {
            let favo = items.favo;
            let innerHTML = generateStyleInnerHTMLforFavoColor(favo);
            let styleFavo = document.getElementById('favoColor');
            styleFavo.innerHTML = innerHTML;
            logEvent(`Synchronized Color is '${favo}.'`, SRC_CS_LIB, getIndex());
            resolve();
        });
    });
}
async function syncThemeByStorage() {
    return new Promise((resolve) => {
        chrome.storage.local.get({
            theme: 'light'
        }, (items) => {
            console.log(items);
            let theme = items.theme;
            let href = LIGHT_THEME;
            if (theme === 'darkBlue') {
                href = DARK_BLUE_THEME;
            }
            else if (theme === 'black') {
                href = BLACK_THEME;
            }
            let link = document.getElementById('rootCss');
            link.setAttribute('href', href);
            logEvent(`Initialized Theme is '${theme}.'`, SRC_ACTION_LIB, getIndex());
            resolve();
        });
    });
}
//同期関数 (sync function)
function insertHeaders() {
    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '');
    link.setAttribute('id', 'rootCss');
    document.head.appendChild(link);
    let style = document.createElement('style');
    style.setAttribute('id', 'favoColor');
    document.head.appendChild(style);
}
