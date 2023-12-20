"use strict";
function swap(arr, index1, index2) {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
//desctrtoring
/* function swapSort(arr: number[], i1: number, i2: number) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
} */
const testArr = [5, 3, 9, 2];
const testArr2 = [...testArr];
swap(testArr, 0, 1);
