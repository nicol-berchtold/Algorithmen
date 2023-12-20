"use strict";
//Merge Sort (Divide & Conquer)
//[5, 2, 10, 71, 98, 22, 23]
//[5, 2, 10, 71] [98, 22, 23]
//[5, 2] [10, 71] [98, 22] [23]
//[5] [2] [10] [71] [98] [22] [23] Divide
//[2, 5] [10, 71] [22, 98] [23] conquer
//[2, 5, 10, 71] [22, 23, 98]
//[2, 5, 10, 22, 23, 71,98]
//function merge(arr1: number[], arr2: number[]) {
//sortedArray
//[2, 5, 10, 71] [22, 23, 98]
//[1, 3, 4,...]
//}
// 0(n)
function merge(arr1, arr2) {
    const sortedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArray.push(arr1[i]);
            i++;
        }
        else {
            sortedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        sortedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        sortedArray.push(arr2[j]);
        j++;
    }
    return sortedArray;
}
//const array1 = [20, 15, 3, 80];
//const array2 = [6, 60, 45];
//0(n log n)
function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;
    let half = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half));
    return merge(left, right);
}
console.log(mergeSort([20, 15, 3, 80, 6, 60, 45, 1]));
