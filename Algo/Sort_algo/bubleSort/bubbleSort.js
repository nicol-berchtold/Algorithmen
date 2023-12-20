"use strict";
function swap1(arr, index1, index2) {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
//0(n^2) Quadratische Komplexität
function bubbleSort(arr) {
    let noSwap;
    //0(n) Lineare Komplexität
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //0(1) Konstante Komplexität
                swap1(arr, j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap)
            break;
    }
    return arr;
}
console.log(bubbleSort([10, 5, 80, 1]));
