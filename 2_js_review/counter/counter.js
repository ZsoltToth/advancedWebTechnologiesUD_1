var increase = (function(){
    var count = 0;
    return function() {
        return count++;
    }
})();

var decrease = function(){
    count--;
};

module.exports = {
    increase : increase,
    decrease : decrease
};
