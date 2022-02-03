async function forLoad () {
    return new Promise((resolve) => {
        let i = 0;   

        let interval = setInterval(() => {
            console.log(`${i++} tics...`);
    
            if (i > 10000) {
                clearInterval(interval);
            }
    
            let container = document.getElementsByClassName('_1LmT2pyh06k_FxmBeyjKZG');
    
            if (container.length !== 0) {
                clearInterval(interval);
                console.log('unchi!');
                resolve();        
            }
        }, 100);         
    });        
};

async function changeBorderline () {
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

function aboutSearchBox () {
    if ($('..zvHNjoYTCEdTz-cz8aFbr._2lLlk08mQ2bHr7vkEJGdKo').is(':focus')) {
        $('#searchScopeWrapperId').css('border-color', '1px 0 1px 1px solid var(--tLightBlue)')
    }
};