Array.prototype.customReduce = function(callback, initialValue) {
    let total = initialValue;

    for(let i = 0; i < this.length; i++) {
        total = callback(total, this[i], i, this);
    }

    return total;
};
