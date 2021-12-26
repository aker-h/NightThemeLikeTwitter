for(let f1 of $('.w8qArf .fl')) {
    f1.setAttribute('style', 'color: white !important;');
}

for (let span of document.getElementsByTagName('span')) {
    try {
        let originalStyle = span.getAttribute('style');

        if (originalStyle.indexOf('#70757a') !== -1) {
            span.setAttribute('style', originalStyle.replace('#70757a', 'var(--subText) !important'));
            console.log(originalStyle);
        }
    } catch (e) {}
}