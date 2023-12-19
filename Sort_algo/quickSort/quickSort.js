"use strict";
function swap2(arr, index1, index2) {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
//Quicksort
//Pivot Function
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotValue = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            pivotIndex++;
            swap2(arr, pivotIndex, i);
        }
    }
    swap2(arr, start, pivotIndex);
    return pivotIndex;
}
function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}
console.log(quicksort([5, 1, 10, 95, 6]));
