//Radix Sort

function getDigit(num: number, i: number) {
    return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num: number) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) +1);
}

function mostDigit (numbers: number[]): number {
    let maxDigit = 0;
    numbers.forEach((num) => {
        maxDigit = Math.max(digitCount(num), maxDigit)
    });
    return maxDigit;
}

function radixSort(arr: number[]): number[] {
    const most = mostDigit(arr);
    for(let i = 0; i < most; i++) {
        let digitBuckets: number[][] = Array.from({ length: 10}, () => []);
        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = ([] as number[]).concat(...digitBuckets);
    }
    return arr;
}
const data = [5, 12, 3, 11];
console.log(radixSort(data))
/*
const data = [1, 2, 3];
const data2 = [...data]; //[1, 2, 3]
data.forEach((num) => {
    data2.push(num);
});
function sumRandomNums(...args: number[]) {}
sumRandomNums(1, 3, 20, 100, 65);

//Generics ist mit T
function sumRandomNums<T>(...args: number[]) {}
sumRandomNums(1, 3, 20, 100, 65);
*/




//return Number(String(num).split('').reverse().join('')[i]);

//getDigit(4978, 0) //8
//getDigit(491, 1) //9
//491 / 10 = 49,1
//49,1 % 10 =9,1    

// 10^2 = 100     4
//10^1 = 10       9
// 10^0= 1        1


