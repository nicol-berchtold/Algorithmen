"use strict";
//desctrtoring
function swapSort(arr, i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swapSort(arr, min, i);
        }
    }
    return arr;
}
console.log(selectionSort([50, 4, 28, 1, 80, 10, 15, 7, 0]));
