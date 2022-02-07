async function forLoadPage () {
    return new Promise((resolve, reject) => {
        let i = 0;

        let interval = setInterval(() => {
            if (i > 10000) {
                clearInterval(interval);
                reject();                
            }

            let selectReadItems = document.getElementsByClassName('_1_LF6iyxUqH0itpuq8ym7O _3ligwDaozp-8EXrUpQSWK3');

            if (selectReadItems.length !== 0) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
};

async function changeBorderline () {
    logEvent('Progress to changeBorderline().', SRC_OL_LIB, getIndex());
    function addCss (divs) {
        console.log(divs)

        if (divs === null) {
            logEvent('borderline was not changed.', SRC_OL_LIB, getIndex());
            return;
        }

        let ids = [];

        for (let div of divs ) {
            let span = div.children[0];
            let a = span.children[0];
            console.log(a.id);

            ids.push(a.id);
        }

        let selector = '';

        for (let id of ids) {
            let newSelector = `#${id}:hover`;
            if (selector === '') {
                selector = newSelector;
            } else if (selector !== '') {
                selector += `, ${newSelector}`;
            }
        }

        let newStyle = document.createElement('style')
        newStyle.innerHTML = `${selector} {border-color: var(--borderline) !important;}`;

        document.head.appendChild(newStyle);
    return;
    };

    return new Promise((resolve) => {
        let interval = setInterval(() => {
            let divs = document.getElementsByClassName('_1LmT2pyh06k_FxmBeyjKZG');
    
            if (divs.length !== 0) {
                clearInterval(interval);
                addCss(divs);
                resolve();        
            }
        }, 100);         
    });
};

async function aboutSearchBox () {
    logEvent('Progress to aboutSearchBox().', SRC_OL_LIB, getIndex());

    let interval = setInterval(() => {
        let input = document.getElementsByClassName('zvHNjoYTCEdTz-cz8aFbr Y2MsTYMmS0qcel2khGLJo');

        if (input.length !== 0) {
            clearInterval(interval);

            console.log($('._15bWZdL6EBmGvbujvNBUnQ > input'));            

            $('._15bWZdL6EBmGvbujvNBUnQ .zvHNjoYTCEdTz-cz8aFbr').focus((event) => {
                //console.log(event.type);   

                let rightButton = document.getElementById('searchBoxId-Mail').parentElement.children[1];

                //console.log(button);

                let rightStyle = 'background-color: var(--wallpaper) !important; border-right: 1px solid var(--tLightBlue);'

                rightButton.setAttribute('style', rightStyle);

                let leftButton = document.getElementById('searchScopeButtonId');

                let leftStyle = 'background-color: var(--wallpaper) !important; border: 1px 0 1px 1px solid var(--tLightBlue) !important';

                leftButton.setAttribute('style', leftStyle);
            }).blur((event) => {
                //console.log(event.type);

                //console.log($(this));

                let input = document.getElementsByClassName('zvHNjoYTCEdTz-cz8aFbr _2lLlk08mQ2bHr7vkEJGdKo')[0];

                try {
                    let str = input.value;

                    //console.log(str);

                    if (str !== null) {
                        let rightButton = document.getElementById('searchBoxId-Mail').parentElement.children[1];

                        let rightStyle = '';

                        rightButton.setAttribute('style', rightStyle);
                    }                   
                } catch (e) {}       
            });
        }
    }, 100);
};

function overrideElementStyles () {
    //レフトアイテムバー
    try {
        function change () {
            let divsOuter = document.getElementsByClassName('___thwl1f0 f1022m68');
            
            for (let divOuter of divsOuter) {
                let svg = divOuter.getElementsByTagName('svg')[0];
                if (svg === undefined) {
                    return;
                }

                let fill = svg.getAttribute('fill');

                fill = fill.replace('#0078D7', 'var(--tLightBlue)').replace('#616161', 'var(--textSub)');

                svg.setAttribute('fill', fill);
            }
        };

        change();

        $('.___1rqqcv9.f10pi13n.f8491dx.f1ee9zpc').hover((event) => {
            //console.log(event.type);
            setTimeout(change, 10, false);
        }, (event) => {
            //console.log(event.type);
            setTimeout(change, 10, false);
        });
    } catch (e) {console.log(e);}
};