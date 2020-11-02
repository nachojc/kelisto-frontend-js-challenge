import Bascket from './backet';

describe('Basket', () =>{
    let obj;
    beforeEach(() => {
        obj = new Bascket({GR1: 3.11, SR1: 5.00, CF1: 11.23});
    })
    test("It should create object", () =>{

        expect(obj).toBeTruthy();
        expect(obj.total).toEqual(0);
    })

    test("It should create object if add products in the constructor",() =>{
        obj = new Bascket({GR1: 2});

        expect(obj).toBeTruthy();
        expect(obj.getProducts()).toEqual({GR1: {id: 'GR1', price: 2, name: 'GR1'}});
    })
    test("It should create object if add products and offerts in the constructor",() =>{
        obj = new Bascket({GR1: 2}, {GR1: 'buy-one-get-one-free'});

        expect(obj).toBeTruthy();
        expect(obj.getProducts()).toEqual({GR1: {id: 'GR1', price: 2, name: 'GR1'}});
        expect(obj._offerts).toEqual({GR1: 'buy-one-get-one-free'});
    })
    test("It should add products in scan function",() =>{
        obj.scan('GR1')

        expect(obj._basket).toEqual({GR1: 1});
        expect(obj.getBasket()).toEqual( [{key:'GR1', units: 1, name: 'GR1'}] );
    })
    test("It should add products in scan function in iteration",() =>{
        obj.scan('GR1').scan('GR1').scan('GR1').scan('GR1').scan('SR1');

        expect(obj.getBasket()).toEqual(
            [{key:'GR1', units: 4, name: 'GR1'},
            {key:'SR1', units: 1, name: 'SR1'}]
        );

    })
    test("It should get total value",() =>{
        obj
            .scan('GR1').scan('GR1').scan('GR1').scan('GR1')
            .scan('SR1');

        expect(obj.total).toEqual(17.44);
    })
    test("It should get total value if add offerts",() => {
        obj.setOferts({GR1: 'buy-one-get-one-free'})
        obj
            .scan('GR1').scan('GR1').scan('GR1').scan('GR1')
            .scan('SR1');

        expect(obj.total).toEqual(11.22);
    })
    test("It should get Basket as array of objects",() => {
        obj.setOferts({GR1: 'buy-one-get-one-free', SR1: 'bulk-purchases'})
        obj
            .scan('GR1').scan('SR1').scan('GR1').scan('GR1').scan('CF1');

        expect(obj.getBasket()).toEqual([
            {key:'GR1', units: 3, name: 'GR1'},
            {key:'SR1', units: 1, name: 'SR1'},
            {key:'CF1', units: 1, name: 'CF1'},
        ]);
    })



    test("It should get total value if add offertsin test 1",() => {
        obj.setOferts({GR1: 'buy-one-get-one-free', SR1: 'bulk-purchases'})
        obj
            .scan('GR1').scan('SR1').scan('GR1').scan('GR1').scan('CF1');

        expect(obj.total).toEqual(22.45);
    })
    test("It should get total value if add offertsin test 2",() => {
        obj.setOferts({GR1: 'buy-one-get-one-free', SR1: 'bulk-purchases'})
        obj
            .scan('GR1').scan('GR1');

        expect(obj.total).toEqual(3.11);
    })
    test("It should get total value if add offertsin test 3",() => {
        obj.setOferts({GR1: 'buy-one-get-one-free', SR1: 'bulk-purchases'})
        obj
            .scan('SR1').scan('SR1').scan('GR1').scan('SR1');

        expect(obj.total).toEqual(16.61);
    })
    test("It should get total value if add offertsin test 3 and only one time",() => {
        obj.setOferts({GR1: 'buy-one-get-one-free', SR1: ['bulk-purchases', 'bulk-purchases']})
        obj
            .scan('SR1').scan('SR1').scan('GR1').scan('SR1');

        expect(obj.total).toEqual(16.61);
    })
});
