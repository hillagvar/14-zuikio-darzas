

class List {
    constructor(itemsSelector, cartSelector, itemsData, itemsCountSelector) {
        this.itemsSelector = itemsSelector;
        this.cartSelector = cartSelector;
        this.itemsData = itemsData;
        this.itemsCountSelector = itemsCountSelector;


        this.itemsDOM = null;
        this.cartDOM = null;
        this.itemsCountDOM = null;
        this.itemsCount = 0;
        // this.itemClickCount = 0;
        this.itemCountArray = [0, 0, 0, 0, 0, 0];


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

    // generateItemsCount() {
    //     let itemsCount = 0;
    //     this.itemsCountDOM = document.querySelector(this.itemsCountSelector);

    //     this.itemsCountDOM.innerText = `${itemsCount}`;


    // }

    render() {
        this.generateItems();
        this.generateCartItems();
        // this.generateItemsCount();


        this.allItemsDOM = document.querySelectorAll('img.visible');
        this.allCartItemsDOM = document.querySelectorAll('img.invisible');


    }

    addEvents() {


        for (let i = 0; i < this.allItemsDOM.length; i++) {

            const cartItemDOM = this.allCartItemsDOM[i];
            const itemDOM = this.allItemsDOM[i];

            itemDOM.addEventListener('click', () => {

                cartItemDOM.classList.add('visible');

                this.itemCountArray[i]++;
                //this.itemClickCount = this.itemCountArray[i];
                this.itemsCount++;


                // console.log(this.itemCountArray);
                this.itemsCountDOM = document.querySelector(this.itemsCountSelector);

                this.itemsCountDOM.innerText = `${this.itemsCount}`;

            })

            cartItemDOM.addEventListener('click', () => {
                cartItemDOM.classList.remove('visible');


                // this.itemCountArray[i]--;
                // this.itemClickCount = this.itemCountArray[i];
                this.itemsCount = this.itemsCount - this.itemCountArray[i];

                this.itemsCountDOM = document.querySelector(this.itemsCountSelector);

                this.itemsCountDOM.innerText = `${this.itemsCount}`;


                // console.log(this.itemsCount);
                this.itemsCountDOM = document.querySelector(this.itemsCountSelector);

                this.itemsCountDOM.innerText = `${this.itemsCount}`;
            })

        }


    }
}

export { List }