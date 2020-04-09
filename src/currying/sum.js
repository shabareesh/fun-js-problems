export function sum(...args) {
    var a = args.length ? args.reduce((acc, val) => acc + val, 0) : 0;
    return function(...args2) {
        return args2.length ? sum(args2.reduce((acc, val) => acc + val, a)) : a;
    }
}
