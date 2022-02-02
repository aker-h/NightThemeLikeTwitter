function changeGoooooooooogle () {
    try {
        let AdVjTc = document.getElementsByClassName('AaVjTc')[0];

        if (AdVjTc === undefined) {
            return;
        }

        let tr = AdVjTc.children[0].children[0];

        let left = tr.children[0];
        let right = tr.children[tr.children.length - 1];

        let middles = [];
        for (let i = 1; i < tr.children.length - 1; i++) {
            middles.push(tr.children[i]);
        }

        // console.log(left);
        // console.log(middles);
        //console.log(right);

        let roleLeft = left.getAttribute('role');
        
        if (roleLeft === 'heading') {
            let newStyle = 'background: var(--tLightBlue); -webkit-mask-image: url(/images/nav_logo321.webp); -webkit-mask-repeat: no-repeat; background-position: 0 0; width: 53px ; float: right;';
            left.children[0].children[0].setAttribute('style', newStyle);
        } else if (roleLeft ===  null) {
            let newStyle = 'background: var(--tLightBlue); -webkit-mask-image: url("/images/nav_logo321.webp"); -webkit-mask-repeat: no-repeat; -webkit-mask-position: -24px 0; background-position: -24px 0; width: 28px; ';
            left.children[0].setAttribute('style', newStyle);
        }

        let roleRight = right.getAttribute('role');

        if (roleRight === 'heading') {
            let newStyle = 'background: var(--tLightBlue); -webkit-mask-image: url(/images/nav_logo321.webp); -webkit-mask-repeat: no-repeat; -webkit-mask-position: -96px 0; width: 71px;';
            right.children[0].children[0].setAttribute('style', newStyle);
        }

        for (let middle of middles) {
            let className = middle.className;

            let background = '';
            let webkitMaskPosition = '';

            if (className === '') {
                background = 'var(--tLightBlue)';
                webkitMaskPosition = '-53px 0'

                let newStyle = `background: ${background}; -webkit-mask-image: url(/images/nav_logo321.webp); -webkit-mask-repeat: no-repeat; -webkit-mask-position: ${webkitMaskPosition}; width: 20px;`;
                middle.children[0].children[0].setAttribute('style', newStyle);
            } else if (className === 'YyVfkd') {
                background = 'var(--textMain)';
                webkitMaskPosition = '-74px 0';
                
                let newStyle = `background: ${background}; -webkit-mask-image: url(/images/nav_logo321.webp); -webkit-mask-repeat: no-repeat; -webkit-mask-position: ${webkitMaskPosition}; width: 20px;`;
                middle.children[0].setAttribute('style', newStyle);
            }
        }

    } catch (e) {}

    return;
};