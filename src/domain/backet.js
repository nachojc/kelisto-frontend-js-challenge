const BUY_ONE_GET_ONE_FREE = 'buy-one-get-one-free';
const BULK_PURCHASES = 'bulk-purchases';

// To solver the precision issue in float number
function roundTo(value, places){
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
}

function getPrice(key) {
    const keyOferts = this._offerts[key];

    let number = this._basket[key];
    if (Array.isArray( keyOferts )){
        const newArr = keyOferts.reduce((newTempArr, el) => (newTempArr.includes(el) ? newTempArr : [...newTempArr, el]), [])
        newArr.forEach(ofert => {
            number = checkOfert.bind(this)(ofert, key, number);
        })
    }else{
        number = checkOfert.bind(this)(keyOferts, key, number);
    }

    return number * this._products[key].price;

}

function checkOfert(keyOfert, key, number){
    switch (keyOfert) {
        case BUY_ONE_GET_ONE_FREE:
            return Math.floor(number / 2) + number % 2;
        case BULK_PURCHASES:
            return number >= 3 ? number * 0.9 : number;
        default:
            return this._basket[key];
    }
}


export default class Bascket{
    _products = {};
    _basket = {};
    _offerts = {};
    constructor(products, oferts){
        this.setProducts(products);
        this.setOferts(oferts);
    }
    setProducts(products) {
        if (typeof products === "object") {
            this._products = {};
            const elem = Object.keys(products);
            elem.forEach(obj => {
                this._products[obj] = {
                    id: obj,
                    price: typeof products[obj] === "object" ? products[obj].price : products[obj],
                    name: typeof products[obj] === "object" ? products[obj].name || obj : obj, 
                };
            });
        }
    }

    setOferts(oferts) {
        if (typeof oferts === "object") {
            this._offerts = oferts;
        }
    }

    scan(product){
        if(this._basket[product]){
            ++this._basket[product]
        } else {
            this._basket[product] = 1;
        }
        return this;
    }
    get total(){
        let result = 0;
        Object.keys(this._basket).forEach(key => {
            result = result + getPrice.bind(this)(key);
        });
        return roundTo(result, 2);
    }

    
    getProducts(){
        return {...this._products};
    }
    getBasket(){
        return Object.keys(this._basket).map(ele => ({
            key: ele,
            units: this._basket[ele],
            name: this._products[ele].name || ele
        }))
    }
}


