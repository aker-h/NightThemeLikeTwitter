"use strict";
//DOM読込中
(async () => {
    initializeThemeByStorageOnAction();
    initializeFavoColorByStorageOnAction();
    changeIcon();
    return VOID_PROMISE;
})();
//DOM構成後
$(() => {
    addClickListenerForThemes();
    addClickListenerForFavoColors();
    initializeSelectedTheme();
    initializeSelectedColor();
    return;
});
