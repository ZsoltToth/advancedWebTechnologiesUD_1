var increase = (function(){
    var count = 0;
    return function() {
        return count++;
    }
})();

var decrease = (function(){
    var count = 0;
    return function () {
        return count--;
    }
})();

module.exports = {
    increase : increase,
    decrease : decrease
};
