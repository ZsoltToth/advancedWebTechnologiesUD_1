const counter = require('./counter');


console.log(counter.counter_closure());
console.log(counter.counter_closure());
console.log(counter.counter_closure());

console.log(counter.counter_cwp());
console.log(counter.counter_cwp());
console.log(counter.counter_cwp());

console.log(counter.counter_obj.count)
counter.counter_obj.increase();
counter.counter_obj.increase();
counter.counter_obj.increase();
console.log(counter.counter_obj.count)
