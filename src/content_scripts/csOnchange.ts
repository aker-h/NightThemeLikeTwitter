chrome.storage.onChanged.addListener(() => {
    syncFavoColorByStorage();
    syncThemeByStorage();
});