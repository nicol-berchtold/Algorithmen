//Radix Sort
function getDigit(num, i) {
    return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
function digitCount(num) {
    if (num === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}
//return Number(String(num).split('').reverse().join('')[i]);
//getDigit(4978, 0) //8
//getDigit(491, 1) //9
//491 / 10 = 49,1
//49,1 % 10 =9,1    
// 10^2 = 100     4
//10^1 = 10       9
// 10^0= 1        1
