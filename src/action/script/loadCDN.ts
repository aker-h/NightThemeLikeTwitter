(() => {
    let link: HTMLLinkElement = document.createElement('link');
    link.rel = 'stylesheet';
    link.setAttribute('id', 'rootCss');
    link.href = DARK_BLUE_THEME;

    document.head.appendChild(link);
})();