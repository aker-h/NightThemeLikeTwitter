"use strict";
//DOM構成中
(async () => {
    initializeThemeByStorageOnCs();
    initializeFavoColorByStorageOnCs();
    if (onTopPageOfImageSearch(location.href)) {
        addLogoOfImageSearch();
    }
    changeGoooooooooogle();
    return VOID_PROMISE;
})();
//DOM構成後
$(() => {
    return;
});
