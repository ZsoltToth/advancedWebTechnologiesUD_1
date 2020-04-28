class ShoppingCart {

    _items;

    constructor(){
        this._items = [];
    }

    addItem({name, quantity, price}){
        const index = this._items.findIndex((item)=>{return item.name === name});
        if(index === -1) {
            this._items.push({
                name: name,
                quantity: quantity,
                price: price
            });
        }
        else{
            this._items[index].quantity += quantity;
        }
    }

    removeItem({name}){}

    totalPrice(){
        return this._items.reduce((total,acc)=>{
            return total +
                acc.price * acc.quantity;
        },0);
    }
}

module.exports = ShoppingCart;
