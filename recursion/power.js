/**
 * recursive implementation of Math.power(base, exponent);
 */

function power(base, exponent) {
    if (base === 0) return 0;
    if (exponent === 1) return 1;
    return base * power(base, exponent - 1);
}