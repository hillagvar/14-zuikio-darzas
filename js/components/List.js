

class List {
    constructor(itemsSelector, cartSelector, itemsData) {
        this.itemsSelector = itemsSelector;
        this.cartSelector = cartSelector;
        this.itemsData = itemsData;

        this.itemsDOM = null;
        this.cartDOM = null;


        this.init();

    }


    init() {
        // validations


        this.render();
        this.addEvents();
    }



    generateItems(itemsData) {
        let HTML = '';
        this.itemsDOM = document.querySelector(this.itemsSelector);

        for (const item of this.itemsData) {
            HTML += `<img class="visible" src="${item.src}" title="${item.title}">`
        }

        this.itemsDOM.innerHTML = HTML;


    }

    generateCartItems(itemsData) {
        let HTML = '';
        this.cartDOM = document.querySelector(this.cartSelector);

        for (const item of this.itemsData) {
            HTML += `<img class="invisible" src="${item.src}" title="${item.title}">`
        }

        this.cartDOM.innerHTML = HTML;

    }

    render() {
        this.generateItems();
        this.generateCartItems();

        //this.DOM.insertAdjacentHTML('beforeend', HTML);

        this.allItemsDOM = document.querySelectorAll('img.visible');
        this.allCartItemsDOM = document.querySelectorAll('img.invisible');

        console.log(this.allItemsDOM);
        console.log(this.allCartItemsDOM);
    }

    addEvents() {
        for (let i = 0; i < this.allItemsDOM.length; i++) {
            const cartItemDOM = this.allCartItemsDOM[i];
            const itemDOM = this.allItemsDOM[i];


            itemDOM.addEventListener('click', () => {
                itemDOM.classList.toggle('invisible');
                cartItemDOM.classList.toggle('visible');
            })
        }

    }
}

export { List }