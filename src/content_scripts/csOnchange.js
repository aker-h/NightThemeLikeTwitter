"use strict";
chrome.storage.onChanged.addListener(() => {
    syncFavoColorByStorage();
    syncThemeByStorage();
});
