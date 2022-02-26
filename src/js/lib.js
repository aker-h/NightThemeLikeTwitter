"use strict";
//クラス
class MyString extends String {
    constructor(value) {
        super(value);
        this.value = value;
    }
    isMatch(pattern) {
        let value = this.value;
        pattern = pattern.replaceAll('\\*', '<escapedAsterisk>').replaceAll('\\?', '<escapedQuestionMard>');
        pattern = pattern.replaceAll('*', '.*').replaceAll('?', '.');
        pattern = pattern.replaceAll('<escapedAsterisk>', '\\*').replaceAll('<escapedQuestionMard>', '\\?');
        let reg = new RegExp(pattern, 'i');
        console.log(reg);
        console.log(value.match(reg));
        if (value.match(reg) !== null) {
            return true;
        }
        return false;
    }
}
;
//オブジェクト
//非同期関数 (async function);
async function getDocumentByUrl(url) {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await fetch(url);
            if (res.ok) {
                let text = await res.text();
                let pso = new DOMParser().parseFromString(text, 'text/html');
                resolve(pso);
            }
        }
        catch (e) {
            reject(e);
        }
    });
}
;
async function putToast(toastMessage, setTime = 1000) {
    return new Promise(async (resolve) => {
        let toastOuter = document.getElementById('toastouter');
        if (toastOuter === null) {
            resolve('toastOuter dose not exist.');
        }
        let toastId = (() => {
            let now = new Date();
            let hour = now.getHours();
            let minu = now.getMinutes();
            let seco = now.getSeconds();
            function fix(num) {
                let result = `0${num}`;
                return result.slice(-2);
            }
            ;
            return `toastItem_${fix(hour)}${fix(minu)}${fix(seco)}`;
        })();
        let toastItem = document.createElement('div');
        toastItem.className = 'toast-outer__item';
        toastItem.id = toastId;
        toastItem.textContent = toastMessage;
        toastOuter.insertAdjacentElement('afterbegin', toastItem);
        await sleep(setTime);
        toastItem.classList.add('fade-out');
        async function removeToastItem() {
            console.log(`${toastId} is started fade out.`);
            await sleep(1000);
            $(`#${toastId}`).remove();
            return new Promise((resolve) => { resolve(); });
        }
        ;
        await removeToastItem();
        resolve('Toast was gone');
    });
}
;
async function sleep(ms) {
    return new Promise(async (resolve) => {
        await setTimeout(() => { resolve(); }, ms);
    });
}
//同期関数 (sync function)
function createToastField() {
    let divToastArea = document.createElement('div');
    divToastArea.className = 'toast-outer';
    divToastArea.id = 'toastOuter';
    document.body.appendChild(divToastArea);
}
;
function generateStyleInnerHTMLforFavoColor(color) {
    let colorName = '--tLightBlue';
    switch (color) {
        case 'indigo':
            colorName = '--tIndigo';
            break;
        case 'lightGreen':
            colorName = '--tLightGreen';
            break;
        case 'pink':
            colorName = '--tLightGreen';
            break;
        case 'lightBlue':
        default:
            colorName = '--tLightBlue';
            break;
    }
    let innerHTML = `:root {
    --favoColor: var(${colorName}) !important;
    --favoColorOn: var(${colorName}On) !important;
    --favoColorDis: var(${colorName}Dis) !important;
}`;
    return innerHTML;
}
function getIndex() {
    let e = new Error();
    let strStack = e.stack;
    if (strStack === undefined) {
        return 'undefined';
    }
    let es = strStack.split('\n')[2].split(':');
    return es.pop();
}
;
function logEvent(message, src, index) {
    styleLog(LOGTYPE.EVENT, message, src, index);
}
;
function styleLog(type, message, src, index) {
    let logTime = ((now) => {
        let fix = (num) => {
            let str = '0' + Number(num).toString();
            return str.slice(-2);
        };
        return `${fix(now.getHours())}:${fix(now.getMinutes())}:${now.getSeconds()}`;
    })(new Date);
    console.log(`[${type}] ${logTime} -- ${message} [${src}:${index} (${EXTENSION_NAME})]`);
}
;
