class GrossPriceCalculator{

    constructor(){
        this.vatRate = 27.0;
    }

    totalGrossPrice(products){
        return products.reduce(
            (total, cur)=>{
                if(cur.isTaxable){
                    return total + cur.price * (100.0 + this.vatRate) / 100.0
                }
                return total + cur.price;
            },
            0);
    }

    totalGrossPrice_cb(products, callback, error){
        var wasError = false;
        var totalGrossPrice = products.reduce((total, cur)=>{
            if(cur.price <= 0.0){
                error(`The price of ${cur.name} is negative (${cur.price})!`);
                wasError = true;
            }
            if(cur.isTaxable){
                return total + cur.price * (100.0 + this.vatRate) / 100.0
            }
            return total + cur.price;
        },0);
        if(!wasError) {
            callback(totalGrossPrice);
        }
    }

}

module.exports = new GrossPriceCalculator();
