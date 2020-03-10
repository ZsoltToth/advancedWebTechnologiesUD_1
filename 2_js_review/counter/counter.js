var count = 0;
var increase = function(){
    count++;
};
var decrease = function(){
    count--;
};

module.exports = {
    cnt : count,
    increase : increase,
    decrease : decrease
};
