"use strict";
//DOM読込中
(async () => {
    initializeThemeByStorageOnAction();
    initializeFavoColorByStorageOnAction();
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
