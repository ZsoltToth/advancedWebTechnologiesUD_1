const products = [
    { name : "Apple", price : 5, isTaxable : true},
    { name : "Banana", price : 12, isTaxable : true},
    { name : "Cherry", price : 8, isTaxable : false},
    { name : "Dark Chocolate", price : -23, isTaxable : true},
];

const priceCalculator = require('./GrossPriceCalculator');

console.log(priceCalculator.totalGrossPrice(products));
