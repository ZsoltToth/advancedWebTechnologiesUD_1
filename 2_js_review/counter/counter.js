var increase_closure = (function(){
    var count = 0;
    return function() {
        return count++;
    }
})();

var increase_closure_with_params = (function(initVal, step){
    var count = initVal;
    return function() {
        count += step;
        return count;
    }
})(0,5);

class Counter {
    constructor(){
        this.count = 0;
    }
    increase(){
        this.count++;
    }
    decrease(){
        this.count--;
    }
    getValue(){
        return this.count;
    }
}

module.exports = {
    counter_closure : increase_closure,
    counter_cwp : increase_closure_with_params,
    counter_obj : new Counter()
};
