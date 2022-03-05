//非同期関数 (async function)
async function changeIconOnLaunchedBrowser (): Promise<void> {
    chrome.runtime.sendMessage({text: 'changeIcon', target: 'background'}, () => {});
};

async function initializeFavoColorByStorageOnCs (): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.get ({
            favo: 'lightBlue'
        }, (items: any) => {
            console.log(document);
            console.log(items);
            let favo: any = items.favo;
            
            let innerHTML = generateStyleInnerHTMLforFavoColor(favo);

            let style: Element = document.createElement('style');
            style.setAttribute('id', 'favoColor');
            style.innerHTML = innerHTML;
            document.head.appendChild(style);

            logEvent(`Initialized Color is '${favo}.'`, SRC_ACTION_LIB, getIndex());

            resolve();
        });
    });
} 

async function initializeThemeByStorageOnCs (): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.get ({
            theme: 'light'
        }, (items: any) => {
            console.log(items);
            let theme: any = items.theme;
            let href: string = LIGHT_THEME;

            if (theme === 'darkBlue') {
                href = DARK_BLUE_THEME;
            } else if (theme === 'black') {
                href = BLACK_THEME;
            }

            let link: Element = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', href);
            link.setAttribute('id', 'rootCss');    
            document.head.appendChild(link);

            logEvent(`Initialized Theme is '${theme}.'`, SRC_ACTION_LIB, getIndex());

            resolve();
        });
    });
} 

async function syncFavoColorByStorage (): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.get((items: any) => {
            let favo: any = items.favo;
            
            let innerHTML = generateStyleInnerHTMLforFavoColor(favo);

            let styleFavo: Element = document.getElementById('favoColor') as Element;
            styleFavo.innerHTML = innerHTML;

            logEvent(`Synchronized Color is '${favo}.'`, SRC_CS_LIB, getIndex());

            resolve();
        });
    });
}

async function syncThemeByStorage (): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.get ({
            theme: 'light'
        }, (items: any) => {
            console.log(items);
            let theme: any = items.theme;
            let href: string = LIGHT_THEME;

            if (theme === 'darkBlue') {
                href = DARK_BLUE_THEME;
            } else if (theme === 'black') {
               href = BLACK_THEME;
            }

            let link: Element = document.getElementById('rootCss') as Element;
            link.setAttribute('href', href);

            logEvent(`Initialized Theme is '${theme}.'`, SRC_ACTION_LIB, getIndex());

            resolve();
        });
    });
}

//同期関数 (sync function)
function insertHeaders () :void {
    let link: Element = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', '');
    link.setAttribute('id', 'rootCss');    
    document.head.appendChild(link);

    let style: Element = document.createElement('style');
    style.setAttribute('id', 'favoColor');
    document.head.appendChild(style);
}