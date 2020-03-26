import { isPrime } from './isPrime';

export const getPrimeNumbers = (n) => {
    const primeNumbers = [];

    for(let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
};
