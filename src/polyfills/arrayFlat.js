Array.prototype.customFlat = function() {
    const flatArr = [];

    for(let i = 0; i < this.length; i++) {
        if (!Array.isArray(this[i])) {
            flatArr.push(this[i]);
        } else {
            flatArr.push(...this[i].customFlat());
            // for(let item of this[i].customFlat()) {
            //     flatArr.push(item);
            // }
        }
    }

    return flatArr;
}
