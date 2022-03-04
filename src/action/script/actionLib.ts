//非同期関数 (async function)
async function initializeFavoColorByStorageOnAction (): Promise<void> {
    return new Promise((resolve) => {
        chrome.storage.local.get ({
            favo: 'lightBlue'
        }, (items: any) => {
            console.log(items);
            let favo: any = items.favo;
            
            let innerHTML = generateStyleInnerHTMLforFavoColor(favo);

            let styleFavoColor: Element = document.getElementById('favoColor') as Element;

            styleFavoColor.innerHTML = innerHTML;

            logEvent(`Initialized Color is '${favo}.'`, SRC_ACTION_LIB, getIndex());

            resolve();
        });
    });
} 

async function initializeThemeByStorageOnAction (): Promise<void> {
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

            document.getElementById('rootCss')?.setAttribute('href', href);

            logEvent(`Initialized Theme is '${theme}.'`, SRC_ACTION_LIB, getIndex());

            resolve();
        });
    });
} 

//同期関数 (sync function)
function addClickListenerForFavoColors (): void {
    async function saveFavoColorToStorage (value: string): Promise<void> {
        return new Promise((resolve) => {            
            let defaults = {
                favo: value
            };

            chrome.storage.local.set(defaults, () => {
                chrome.storage.local.get ((items: any) => {
                    console.log(items);
                    resolve();
                });                
            });
        });
    }

    function change (color: string) {
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
}

function addClickListenerForThemes (): void {
    async function saveThemeToStorage (value: string): Promise<void> {
        return new Promise((resolve) => {            
            let defaults = {
                theme: value
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

    $('#colorBoxInnerBlack').on('click', () => {
        saveThemeToStorage('black');
        rootCss.setAttribute('href', BLACK_THEME);
    });
}

function initializeSelectedColor (): void {
    function select (color: string): void {
        $(`#colorCircle${color}`).prop('checked', true);
    }

    let inner = new MyString(document.getElementById('favoColor')?.innerHTML as string);

    if (inner.isMatch('*--tLightBlue*')) {
        select('LightBlue');
    } else if (inner.isMatch('*--tYellow*')) {
        select('Yellow');
    } else if (inner.isMatch('*--tPink*')) {
        select('Pink');
    } else if (inner.isMatch('*--tPurple*')) {
        select('Purple');
    } else if (inner.isMatch('*--tOrange*')) {
        select('Orange');
    } else if (inner.isMatch('*--tLightGreen*')) {
        select('LightGreen');
    } 
};

function initializeSelectedTheme (): void {
    let href: string = document.getElementById('rootCss')?.getAttribute('href') as string;

    if (href === LIGHT_THEME) {
        $('#colorBoxLabelLight').prop('checked', true);
    } else if (href === DARK_BLUE_THEME) {
        $('#colorBoxLabelDarkBlue').prop('checked', true);
    } else if (href === BLACK_THEME) {
        $('#colorBoxLabelBlack').prop('checked', true);
    }
}