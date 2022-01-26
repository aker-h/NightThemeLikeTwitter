//apply to iframe google application
async function applyToiframeGA () {
    let targetOuter = document.getElementsByClassName('gb_Pd gb_Ra gb_Dd')[0];

    if (targetOuter === undefined) {
        return PROMISE;
    }

    console.log(targetOuter);

    async function apply (iframeDocument) {
        console.log(iframeDocument);
        let html = iframeDocument.getElementsByTagName('html')[0];
        console.log(html);

        let observer = new MutationObserver(() => {
            console.log(iframeDocument);
            console.log(html);
        })

        observer.observe(html, {
            childList: true,
            subtree: true
        });
        return PROMISE;
    }

    let observerFirst = new MutationObserver(() => {
        console.log(targetOuter);

        try {
            let targetInner = targetOuter.children[3];
            let iframe = targetInner.children[0];
            console.log(iframe);

            let iframeDocument = iframe.contentWindow.document;

            apply(iframeDocument);
        } catch (e) {console.log(e)}
    });

    try {
        observerFirst.observe(targetOuter, {
            childList: true,
            subtree: true       
        });
    } catch (e) {console.log(e)}    

    return new Promise((resolve) => {
        resolve('unchi');
    });
};