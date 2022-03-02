//DOM構成中
(async () => {
    initializeThemeByStorageOnCs();
    initializeFavoColorByStorageOnCs();

    if (onTopPageOfImageSearch(location.href)) {
        addLogoOfImageSearch();
    }
    
    return VOID_PROMISE;
})();

//DOM構成後
$(() => {
    changeGoooooooooogle();
    return;
});