import { isPrime } from '../isPrime';

test('isPrime', () => {
    expect(isPrime(2)).toEqual(true);
    expect(isPrime(4)).toEqual(false);
    expect(isPrime(5)).toEqual(true);
    expect(isPrime(6)).toEqual(false);
    expect(isPrime(7)).toEqual(true);
});