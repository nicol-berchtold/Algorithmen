function swap(arr, index1, index2) {
    var tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
//0(n^2) Quadratische Komplexität
function bubbleSort(arr) {
    var noSwap;
    //0(n) Lineare Komplexität
    for (var i = arr.length; i > 0; i--) {
        noSwap = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //0(1) Konstante Komplexität
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap)
            break;
    }
    return arr;
}
console.log(bubbleSort([10, 5, 80, 1]));
