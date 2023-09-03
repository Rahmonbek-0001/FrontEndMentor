let checkbox = document.querySelector('#chekbox')
let html = document.documentElement.attributes.getNamedItem('data-theme');
checkbox = addEventListener("change", () => {
    html.nodeValue === 'light' ? html.nodeValue = 'dark' : html.nodeValue = 'light'
});