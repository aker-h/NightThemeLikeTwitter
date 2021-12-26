//apply to iframe google application
const applyToiframeGA = async () => {
    const desiredStyles = `*{color: red !impoortan;}`;

    const addCSS_Style = (jNode) => {
        let frmBody = jNode.closest("body");
        frmBody.append(`<style>${desiredStyles}</style>`);
    };

    waitForKeyElements (
        '.EHzcec',
        addCSS_Style,
        false,
        "iframe[src='https://ogs.google.com/widget/app/so?bc=1&origin=https%3A%2F%2Fwww.google.com&cn=app&pid=1&spid=538&hl=ja']"
    );

    

    return new Promise((resolve) => {resolve()});
};