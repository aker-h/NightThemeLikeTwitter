function styledLog (type, message, src, index) {
    let logTime = ((now) => {
        function fix (number) {
            let str = Number(number).toString();
            return str.slice(-2);
        }

        return `${fix(now.getHours())}:${fix(now.getMinutes())}:${fix(now.getSeconds())}`;
    })(new Date);

    console.log(`[${type}] ${logTime} -- ${message} [${src}:${index} (${EXTENSION_NAME})]`);
};

function logEvent (message, src, index) {
    styledLog(LOGTYPE.EVENT, message, src, index);
};

function getIndex () {
    let e = new Error();
    e = e.stack.split('\n')[2].split(':');
    e.pop();

    return e.pop();
};

async function sleep (ms) {
    return new Promise (async (resolve) => {
        await setTimeout(() => {resolve()}, ms);
    });
};

async function getDomByUrl (url) {
    return new Promise (async (resolve, reject) => {
        try {
            function CorsException (url) {
                this.name = 'CORS error.';
                this.message = `Can not access to '${url}' for Cross Origin.`;
            };

            function thisUrlIsNotInSalesForce () {
                if (url.indexOf(SF_DOMAIN)) {
                    return true;
                }
                return false;
            };

            if (thisUrlIsNotInSalesForce()) {
                throw new CorsException(url);
            }

            await fetch(url)
            .then(res => res.text())
            .then(text => {
                let pso = new DOMParser().parseFromString(text, 'text/html');

                resolve(pso);
            });
        } catch (e) {
            reject (e);
        }
    });
};

function createToastField () {
    let divToastArea = document.createElement('div');
    divToastArea.className = 'toast-outer';
    divToastArea.id = 'toastOuter';

    document.body.appendChild(divToastArea);

    return;
};

async function putToast (toastMessage = '', setTime = 1000)  {
    let toastOuter = document.getElementById('toastOuter');

    if (toastOuter === null) {
        return new Promise((resolve) => {
            resolve('toastOuter dose not exist.');
        });
    }

    let toastsId = (() => {
        let now = new Date();

        let hour = now.getHours();
        let minu = now.getMinutes();
        let seco = now.getSeconds();

        function fix (num) {
            let result = '0' + num;
            return result.slice(-2);
        };

        return `toastItem_${fix(hour)}${fix(minu)}${fix(seco)}`;
    })();

    let toastItem = document.createElement('div');
    toastItem.className = 'toast-outer__item';
    toastItem.id = toastsId;
    toastItem.textContent = toastMessage;

    toastOuter.insertAdjacentElement('afterbegin', toastItem);

    async function sleep (ms) {
        return new Promise (async (resolve) => {
            await setTimeout(() => {resolve()}, ms);
        });
    };

    await sleep(setTime);

    toastItem.classList.add('fade-out')

    async function removeToastItem () {
        console.log(`${toastsId} is started fade out.`);
        await sleep(1000);

        $(`#${toastsId}`).remove();
        console.log('Toast was gone.');
    };

    await removeToastItem();

    return new Promise((resolve) => {
        resolve();
    });
};

class MyString extends String {
    constructor (value) {
        super(value);
        this.value = value;
    }

    isMatch (pattern) {
        let value = this.value;           

        pattern = pattern.replaceAll('\\*', '<escapedAsterisk>').replaceAll('\\?', '<escapedQuestionMard>');
        pattern = pattern.replaceAll('*', '.*').replaceAll('?', '.');
        pattern = pattern.replaceAll('<escapedAsterisk>', '\\*').replaceAll('<escapedQuestionMard>', '\\?')
        let reg = new RegExp(pattern, 'i');

        console.log(reg);

        console.log(value.match(reg));

        if (value.match(reg) !== null) {
            return true;
        }

        return false;
    }
};