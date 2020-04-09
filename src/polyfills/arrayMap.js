Array.prototype.customMap = function(callback) {
    const mapArr = [];
    
    for(let i = 0; i < this.length; i++) {
        mapArr.push(callback(this[i], i, this));
    }

    return mapArr;
};
