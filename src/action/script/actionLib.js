"use strict";
//非同期関数 (async function)
async function changeIcon() {
    let theme = await getThemeFromStorage();
    let favo = await getFavoColorFromStorage();
    if (theme !== 'light') {
        theme = 'dark';
    }
    let fileName = `./icons/${theme}_${favo}_32.png`;
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
async function initializeFavoColorByStorageOnAction() {
    return new Promise((resolve) => {
        chrome.storage.local.get({
            favo: 'lightBlue'
        }, (items) => {
            console.log(items);
            let favo = items.favo;
            let innerHTML = generateStyleInnerHTMLforFavoColor(favo);
            let styleFavoColor = document.getElementById('favoColor');
            styleFavoColor.innerHTML = innerHTML;
            logEvent(`Initialized Color is '${favo}.'`, SRC_ACTION_LIB, getIndex());
            resolve();
        });
    });
}
async function initializeThemeByStorageOnAction() {
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
            document.getElementById('rootCss')?.setAttribute('href', href);
            logEvent(`Initialized Theme is '${theme}.'`, SRC_ACTION_LIB, getIndex());
            resolve();
        });
    });
}
//同期関数 (sync function)
function addClickListenerForFavoColors() {
    async function saveFavoColorToStorage(value) {
        return new Promise((resolve) => {
            let defaults = {
                favo: value
            };
            chrome.storage.local.set(defaults, () => {
                chrome.storage.local.get((items) => {
                    console.log(items);
                    resolve();
                });
            });
        });
    }
    function change(color) {
        let innerHTML = generateStyleInnerHTMLforFavoColor(color);
        changeFavoColor(innerHTML);
    }
    $('#colorCircleLabelLightBlue').on('click', () => {
        change('lightBlue');
        saveFavoColorToStorage('lightBlue');
    });
    $('#colorCircleLabelYellow').on('click', () => {
        change('yellow');
        saveFavoColorToStorage('yellow');
    });
    $('#colorCircleLabelPink').on('click', () => {
        change('pink');
        saveFavoColorToStorage('pink');
    });
    $('#colorCircleLabelPurple').on('click', () => {
        change('purple');
        saveFavoColorToStorage('purple');
    });
    $('#colorCircleLabelOrange').on('click', () => {
        change('orange');
        saveFavoColorToStorage('orange');
    });
    $('#colorCircleLabelLightGreen').on('click', () => {
        change('lightGreen');
        saveFavoColorToStorage('lightGreen');
    });
    $('.color-circle--label').on('click', () => {
        changeIcon();
    });
}
function addClickListenerForThemes() {
    async function saveThemeToStorage(value) {
        return new Promise((resolve) => {
            let defaults = {
                theme: value
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
    $('#colorBoxInnerBlack').on('click', () => {
        saveThemeToStorage('black');
        rootCss.setAttribute('href', BLACK_THEME);
    });
    $('.color-box--inner').on('click', () => {
        changeIcon();
    });
}
function initializeSelectedColor() {
    function select(color) {
        $(`#colorCircle${color}`).prop('checked', true);
    }
    let inner = new MyString(document.getElementById('favoColor')?.innerHTML);
    if (inner.isMatch('*--tLightBlue*')) {
        select('LightBlue');
    }
    else if (inner.isMatch('*--tYellow*')) {
        select('Yellow');
    }
    else if (inner.isMatch('*--tPink*')) {
        select('Pink');
    }
    else if (inner.isMatch('*--tPurple*')) {
        select('Purple');
    }
    else if (inner.isMatch('*--tOrange*')) {
        select('Orange');
    }
    else if (inner.isMatch('*--tLightGreen*')) {
        select('LightGreen');
    }
}
;
function initializeSelectedTheme() {
    let href = document.getElementById('rootCss')?.getAttribute('href');
    if (href === LIGHT_THEME) {
        $('#colorBoxLabelLight').prop('checked', true);
    }
    else if (href === DARK_BLUE_THEME) {
        $('#colorBoxLabelDarkBlue').prop('checked', true);
    }
    else if (href === BLACK_THEME) {
        $('#colorBoxLabelBlack').prop('checked', true);
    }
}
