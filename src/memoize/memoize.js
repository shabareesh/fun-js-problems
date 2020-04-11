export const memoize = (func) => {
    const cache = {};

    return function(n) {
        if (cache[n]) {
            return cache[n];
        }

        const result = func(n);
        cache[n] = result;
        return result;
    }
}
