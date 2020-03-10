const products = [
    { name : "Apple", price : 5, isTaxable : true},
    { name : "Banana", price : -12, isTaxable : true},
    { name : "Cherry", price : 8, isTaxable : false},
    { name : "Dark Chocolate", price : -23, isTaxable : true},
];

const priceCalculator = require('./GrossPriceCalculator');

var p = priceCalculator.totalGrossPrice_promise(products);

    p.then((totalGP)=>{
        console.log("Total Gross Price %f <-------- Promise", totalGP);
    })
    .catch((errorMsg)=>{
        console.log("%s <---------- Promise ERROR", errorMsg)
    });

console.log(priceCalculator.totalGrossPrice(products));

priceCalculator.totalGrossPrice_cb(
    products,
    (totalGP)=>{
        console.log("Total Gross Price %f <-------- Callback Impl", totalGP);
    },
    (errorMsg) => {
        console.log("%s <---------- Callback Impl ERROR", errorMsg)
    });

