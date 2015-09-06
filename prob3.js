// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

function primeFactors(x) {
    var a = 2;
    var b = [];
    while (a <= x) {
        if (x % a === 0) {
            x = x / a;
            b.push(a);
            a++;

        } else {
            a++;

        }
    }
    return b;
}

function lastPrimeFactor(x) {
    var a = 2;
    var b = [];
    while (a <= x) {
        if (x % a === 0) {
            x = x / a;
            b.push(a);
            a++;

        } else {
            a++;

        }
    }
    return b[b.length - 1];
}
