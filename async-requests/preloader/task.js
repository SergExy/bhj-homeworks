document.addEventListener('DOMContentLoaded', () => {
    const items = document.getElementById('items');
    const loader = document.getElementById('loader');

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            const { response } = JSON.parse(xhr.responseText);
            loader.classList.remove('loader_active');
            
            const valutes = response.Valute;
            for (const key in valutes) {
                addItem(items, valutes[key]);
            }
        }
    }

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.send();
})

function addItem(par, data) {
    const { CharCode, Value } = data;
    const valueRound = +Value.toFixed(4)

    const item = createElem('div', 'item');
    const itemCode = createElem('div', 'item__code', CharCode);
    const itemValue = createElem('div', 'item__value', valueRound);
    const itemCurrency = createElem('div', 'item__currency', 'руб.');

    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemCurrency);

    par.appendChild(item);
    return true;
}

function createElem(elTag, className, text) {
    const element = document.createElement(elTag);
    if (className) element.classList.add(className);
    if (text) element.innerText = text;
    return element;
}