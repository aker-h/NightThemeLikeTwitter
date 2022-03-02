//非同期関数 (async function)

//同期関数 (sync function)
function addLogoOfImageSearch (): void {
    let link: Element = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', chrome.runtime.getURL('content_scripts/google/searchImage.css'));
    document.head.appendChild(link);
}

function changeGoooooooooogle (): void {
    try {
        let AdVjTc: Element = document.getElementsByClassName('AaVjTc')[0] as Element;

        if (AdVjTc === undefined) {
            return;
        }

        let tr: Element = AdVjTc.children[0].children[0];

        let left: Element = tr.children[0];
        let right: Element = tr.children[tr.children.length - 1];

        let middles: Element[] = [];
        for (let i = 1; i < tr.children.length - 1; i++) {
            middles.push(tr.children[i]);
        }

        // console.log(left);
        // console.log(middles);
        //console.log(right);

        let roleLeft: string = left.getAttribute('role') as string;
        
        if (roleLeft === 'heading') {
            let newStyle: string = 'background: var(--favoColor); -webkit-mask-image: url(/images/nav_logo321.webp); -webkit-mask-repeat: no-repeat; background-position: 0 0; width: 53px ; float: right;';
            left.children[0].children[0].setAttribute('style', newStyle);
        } else if (roleLeft ===  null) {
            let newStyle: string = 'background: var(--favoColor); -webkit-mask-image: url("/images/nav_logo321.webp"); -webkit-mask-repeat: no-repeat; -webkit-mask-position: -24px 0; background-position: -24px 0; width: 28px; ';
            left.children[0].setAttribute('style', newStyle);
        }

        let roleRight: string = right.getAttribute('role') as string;

        if (roleRight === 'heading') {
            let newStyle: string = 'background: var(--favoColor); -webkit-mask-image: url(/images/nav_logo321.webp); -webkit-mask-repeat: no-repeat; -webkit-mask-position: -96px 0; width: 71px;';
            right.children[0].children[0].setAttribute('style', newStyle);
        }

        for (let middle of middles) {
            let className: string = middle.className;

            let background: string = '';
            let webkitMaskPosition: string = '';

            if (className === '') {
                background = 'var(--favoColor)';
                webkitMaskPosition = '-53px 0'

                let newStyle: string = `background: ${background}; -webkit-mask-image: url(/images/nav_logo321.webp); -webkit-mask-repeat: no-repeat; -webkit-mask-position: ${webkitMaskPosition}; width: 20px;`;
                middle.children[0].children[0].setAttribute('style', newStyle);
            } else if (className === 'YyVfkd') {
                background = 'var(--textMain)';
                webkitMaskPosition = '-74px 0';
                
                let newStyle: string = `background: ${background}; -webkit-mask-image: url(/images/nav_logo321.webp); -webkit-mask-repeat: no-repeat; -webkit-mask-position: ${webkitMaskPosition}; width: 20px;`;
                middle.children[0].setAttribute('style', newStyle);
            }
        }

    } catch (e) {}
}

function onTopPageOfImageSearch (url: string): boolean {
    if (url.indexOf('https://www.google.') !== 0) {
        return false;
    }

    url = url.replace('https://www.google.', '');

    if (url.indexOf('/') === -1) {
        return false;
    }

    url = url.slice(url.indexOf('/') + 1);

    if (url.indexOf('imghp') === 0) {
        return true;
    }

    return false;
}