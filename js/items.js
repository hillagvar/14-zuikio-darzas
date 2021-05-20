function items(selector, data) {

const DOM = document.querySelector(selector);
let HTML = '';

for (const item of data) {
    HTML += `<img src="${item.src}" title="${item.title}">`
}

DOM.innerHTML = HTML;

}

export { items }