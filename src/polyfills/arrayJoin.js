Array.prototype.customJoin = function(seperator) {
    let str = "";
    let defaultSeperator = seperator || ',';
    const length = this.length;
    for(let i = 0; i < length; i++) {
        if (i === length - 1) {
            str += this[i];
        } else {
            str += `${this[i]}${defaultSeperator}`;
        }
    }

    return str;
}
