"use strict";
//非同期関数 (async function)
async function initializeFavoColorByStorage() {
    return new Promise((resolve) => {
        chrome.storage.local.get({
            favo: 'lightBlue'
        }, (items) => {
            console.log(items.favo);
            let favo = items.favo;
            let innerHTML = generateStyleInnerHTMLforFavoColor(favo.favo);
            let styleFavoColor = document.getElementById('favoColor');
            styleFavoColor.innerHTML = innerHTML;
            resolve();
        });
    });
}
async function initializeThemeByStorage() {
    return new Promise((resolve) => {
        chrome.storage.local.get({
            theme: 'light'
        }, (items) => {
            console.log(items.theme);
            let theme = items.theme;
            let href = LIGHT_THEME;
            if (theme.theme === 'darkBlue') {
                href = DARK_BLUE_THEME;
            }
            document.getElementById('rootCss')?.setAttribute('href', href);
            resolve();
        });
    });
}
//同期関数 (sync function)
function addClickListenerForThemes() {
    async function saveThemeToStorage(value) {
        return new Promise((resolve) => {
            let theme = { theme: value };
            let defaults = {
                theme: theme
            };
            chrome.storage.local.set(defaults, () => {
                chrome.storage.local.get((items) => {
                    console.log(items);
                    resolve();
                });
            });
        });
    }
    let rootCss = document.getElementById('rootCss');
    $('#colorBoxInnerLight').on('click', () => {
        saveThemeToStorage('light');
        rootCss.setAttribute('href', LIGHT_THEME);
    });
    $('#colorBoxInnerDarkBlue').on('click', () => {
        saveThemeToStorage('darkBlue');
        rootCss.setAttribute('href', DARK_BLUE_THEME);
    });
}
function initializeSelectedTheme() {
    let href = document.getElementById('rootCss')?.getAttribute('href');
    if (href === LIGHT_THEME) {
        $('#colorBoxLabelLight').prop('checked', true);
    }
    else if (href === DARK_BLUE_THEME) {
        $('#colorBoxLabelDarkBlue').prop('checked', true);
    }
}
