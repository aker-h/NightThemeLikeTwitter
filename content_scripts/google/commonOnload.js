(async () => {
    applyToiframeGA();

    if (isTopPageOfImageSearch(location.href)) {
        addLogoOfImageSearch();
    }

    return PROMISE;
})();