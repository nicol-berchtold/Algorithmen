function swap2(arr, index1, index2) {
    var tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
//Quicksort
//Pivot Function
function pivot(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    var pivotValue = arr[start];
    var pivotIndex = start;
    for (var i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            pivotIndex++;
            swap2(arr, pivotIndex, i);
        }
    }
    swap2(arr, start, pivotIndex);
    return pivotIndex;
}
function quicksort(arr, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left < right) {
        var pivotIndex = pivot(arr, left, right);
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
}
console.log(quicksort([5, 1, 10, 95, 6]));
