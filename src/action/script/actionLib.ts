//非同期関数 (async function)
async function initializeFavoColorByStorage (): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.get ({
            favo: 'lightBlue'
        }, (items: any) => {
            console.log(items.favo);
            let favo: any = items.favo;
            
            let innerHTML = generateStyleInnerHTMLforFavoColor(favo.favo);

            let styleFavoColor: Element = document.getElementById('favoColor') as Element;

            styleFavoColor.innerHTML = innerHTML;
            resolve();
        });
    });
} 

async function initializeThemeByStorage (): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.get ({
            theme: 'light'
        }, (items: any) => {
            console.log(items.theme);
            let theme: any = items.theme;
            let href: string = LIGHT_THEME;

            if (theme.theme === 'darkBlue') {
                href = DARK_BLUE_THEME;
            }

            document.getElementById('rootCss')?.setAttribute('href', href);
            resolve();
        });
    });
} 

//同期関数 (sync function)
function addClickListenerForThemes (): void {
    async function saveThemeToStorage (value: string): Promise<void> {
        return new Promise((resolve) => {            
            let theme = {theme: value};
            let defaults = {
                theme: theme
            };

            chrome.storage.local.set(defaults, () => {
                chrome.storage.local.get ((items: any) => {
                    console.log(items);
                    resolve();
                });                
            });
        });
    }

    let rootCss: Element = document.getElementById('rootCss') as Element;

    $('#colorBoxInnerLight').on('click', () => {
        saveThemeToStorage('light');
        rootCss.setAttribute('href', LIGHT_THEME);
    });

    $('#colorBoxInnerDarkBlue').on('click', () => {
        saveThemeToStorage('darkBlue');
        rootCss.setAttribute('href', DARK_BLUE_THEME);
    });
}

function initializeSelectedTheme (): void {
    let href: string = document.getElementById('rootCss')?.getAttribute('href') as string;

    if (href === LIGHT_THEME) {
        $('#colorBoxLabelLight').prop('checked', true);
    } else if (href === DARK_BLUE_THEME) {
        $('#colorBoxLabelDarkBlue').prop('checked', true);
    }
}