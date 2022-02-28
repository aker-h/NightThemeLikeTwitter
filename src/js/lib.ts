//クラス
class MyString extends String {
    value: string;
    
    constructor (value: string) {
        super(value);
        this.value = value;
    }

    isMatch (pattern: string) {
        let value: string = this.value;           

        pattern = pattern.replaceAll('\\*', '<escapedAsterisk>').replaceAll('\\?', '<escapedQuestionMard>');
        pattern = pattern.replaceAll('*', '.*').replaceAll('?', '.');
        pattern = pattern.replaceAll('<escapedAsterisk>', '\\*').replaceAll('<escapedQuestionMard>', '\\?')
        let reg = new RegExp(pattern, 'i');

        // console.log(reg);

        // console.log(value.match(reg));

        if (value.match(reg) !== null) {
            return true;
        }

        return false;
    }
};

//オブジェクト

//非同期関数 (async function);
async function getDocumentByUrl (url: string): Promise<Document> {
    return new Promise (async (resolve, reject) => {
        try {
            let res = await fetch (url);

            if (res.ok) {
                let text: string = await res.text();
                let pso: Document = new DOMParser().parseFromString(text, 'text/html');
                resolve(pso);
            }
        } catch (e) {
            reject(e);
        }
    });
};

async function putToast (toastMessage: string, setTime = 1000): Promise<string> {
    return new Promise (async (resolve) => {
        let toastOuter: Element = document.getElementById('toastouter') as Element;

        if (toastOuter === null) {
            resolve('toastOuter dose not exist.');
        }

        let toastId: string = (() => {
            let now: Date = new Date();

            let hour: number = now.getHours();
            let minu: number = now.getMinutes();
            let seco: number = now.getSeconds();

            function fix (num: number): string {
                let result: string = `0${num}`;
                return result.slice(-2);
            };

            return `toastItem_${fix(hour)}${fix(minu)}${fix(seco)}`;
        })();

        let toastItem: Element = document.createElement('div');
        toastItem.className = 'toast-outer__item';
        toastItem.id = toastId;
        toastItem.textContent = toastMessage;

        toastOuter.insertAdjacentElement('afterbegin', toastItem);

        await sleep(setTime);

        toastItem.classList.add('fade-out');

        async function removeToastItem(): Promise<void> {
            console.log(`${toastId} is started fade out.`);

            await sleep(1000);

            $(`#${toastId}`).remove();

            return new Promise((resolve) => {resolve()});
        };

        await removeToastItem();

        resolve('Toast was gone');
    });
};

async function sleep (ms: number): Promise<void> {
    return new Promise (async (resolve) => {
        await setTimeout(() => {resolve()}, ms);
    });
}

//同期関数 (sync function)
function changeFavoColor (innerHTML: string): void {
    let favoColor: Element = document.getElementById('favoColor') as Element;
    favoColor.innerHTML = innerHTML;
}

function createToastField (): void {
    let divToastArea: Element = document.createElement('div');
    divToastArea.className = 'toast-outer';
    divToastArea.id = 'toastOuter';
    document.body.appendChild(divToastArea);
};

function generateStyleInnerHTMLforFavoColor (color: string): string {
    let colorName: string = '--tLightBlue';

    switch (color) {
        case 'lightGreen':
            colorName = '--tLightGreen';
            break;
        case 'orange':
            colorName = '--tOrange';
            break;
        case 'pink':
            colorName = '--tPink';
            break;
        case 'purple':
            colorName = '--tPurple';
            break;
        case 'yellow':
            colorName = '--tYellow';
            break;
        case 'lightBlue':
        default:
            colorName = '--tLightBlue';
            break;
    }

    let innerHTML: string = 
`:root {
    --favoColor: var(${colorName}) !important;
    --favoColorOn: var(${colorName}On) !important;
    --favoColorDis: var(${colorName}Dis) !important;
}`;

    return innerHTML
}

function getIndex (): string {
    let e: Error = new Error();
    let strStack: any = e.stack;
    if (strStack === undefined) {
        return 'undefined';
    }

    let es = strStack.split('\n')[2].split(':');

    return es.pop();
};

function logEvent (message: string, src: string, index: string):void {
    styleLog(LOGTYPE.EVENT, message, src, index);
};

function styleLog (type: string, message: string, src: string, index: string): void {
    let logTime: string = ((now) => {
        let fix= (num: number): string  => {
            let str = '0' + Number(num).toString();
            return str.slice(-2);
        };
        return `${fix(now.getHours())}:${fix(now.getMinutes())}:${now.getSeconds()}`;
    })(new Date);
    
    console.log(`[${type}] ${logTime} -- ${message} [${src}:${index} (${EXTENSION_NAME})]`);
};