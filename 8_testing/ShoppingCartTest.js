const assert = require('assert');
const ShoppingCart = require('./ShoppingCart');

describe('Shopping Cart Tests', ()=>{
    it('test if the ShoppingCart empty intially',()=>{
        let cart = new ShoppingCart();
        assert.equal(cart._items.length, 0);
    });

    it('test the total function with fixed items',()=>{
        let cart = new ShoppingCart();
        cart._items = [
            {name : 'apple', quantity : 10, price : 1 },
            {name : 'banana', quantity : 10, price : 2 }
        ];
        const expected = 30;
        const actual = cart.totalPrice();
        assert.equal(expected,actual);
    });

    describe('Add Item Test', ()=>{

        it('adds an item to an empty shopping cart', ()=>{
            let cart = new ShoppingCart();
            cart.addItem({name : 'apple', quantity: 10, price: 1});
            assert.equal(cart._items.length, 1);
        });
        it('add the same item twice to an empty shopping cart', ()=>{
            let cart = new ShoppingCart();
            const item = {name : 'apple', quantity: 10, price: 1};
            cart.addItem(item);
            cart.addItem(item);
            assert.equal(cart._items.length,1);
            assert.equal(cart._items[0].quantity, 20);

        });
    });
});
