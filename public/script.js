// const share = require("share");

window.onload = () => {
    const convertor = new showdown.Converter();
    const pad = document.getElementById('pad');
    const markdownArea = document.getElementById('markdown');

    let previousTextValue;

    const convertTextToMarkdown = () => {
        const text = pad.value;
        previousTextValue = text;
        const html = convertor.makeHtml(text);
        markdownArea.innerHTML = html;
        console.log(text);
    }

    const ifChangeOccured = () => {
        if (previousTextValue != pad.value) {
            return true;
        }
        return false;
    };

    setInterval(() => {
        if (ifChangeOccured) {
            convertTextToMarkdown();
        }
    }, 1000);

    pad.addEventListener('input', convertTextToMarkdown);

    sharejs.open('home', 'text', (error, doc) => {
        doc.attach_textarea(pad);
        convertTextToMarkdown();
    });

    convertTextToMarkdown();
}