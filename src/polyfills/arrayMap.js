Array.prototype.customMap = function(callback) {
    const mapArr = [];
    
    for(let i = 0; i < this.length; i++) {
        mapArr.push(callback(this[i], i, this));
    }

    return mapArr;
};

const count = [1, 2, 3, 4, 5].customMap(item => item * 2);

console.log('count', count);
