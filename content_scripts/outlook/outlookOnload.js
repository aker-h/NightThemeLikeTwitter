(async () => {
    await forLoad()
    .then(() => {
        changeBorderline();
    });

    aboutSearchBox();

    return PROMISE;
})();