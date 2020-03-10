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

module.exports = {
    counter_closure : increase_closure,
    counter_cwp : increase_closure_with_params
};
