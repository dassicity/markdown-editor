window.onload = () => {
    const convertor = new showdown.Converter();
    const pad = document.getElementById('pad');
    const markdownArea = document.getElementById('markdown');

    const convertTextToMarkdown = () => {
        const text = pad.value;
        const html = convertor.makeHtml(text);
        markdownArea.innerHTML = html;
        console.log(text);
    }

    pad.addEventListener('input', convertTextToMarkdown);
    convertTextToMarkdown();
}