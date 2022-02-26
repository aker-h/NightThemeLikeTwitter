//DOM読込中
(async () => {
    initializeThemeByStorage();
    initializeFavoColorByStorage();
    return VOID_PROMISE;
})();

//DOM構成後
$(() => {
    addClickListenerForThemes();
    initializeSelectedTheme();
    return;
});