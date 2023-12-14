var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
function swap(arr, index1, index2) {
  var tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}
//desctrtoring
function swapES6(arr, i1, i2) {
  var _a;
  (_a = [arr[i2], arr[i1]]), (arr[i1] = _a[0]), (arr[i2] = _a[1]);
}
var testArr = [5, 3, 9, 2];
var testArr2 = __spreadArray([], testArr, true);
swap(testArr, 0, 1);
//0(n^2) Quadratische Komplexität
function bubbleSort(arr) {
  var noSwap;
  //0(n) Lineare Komplexität
  for (var i = arr.length; i > 0; i--) {
    noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //0(1) Konstante Komplexität
        swapES6(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}
//console.log(bubbleSort(testArr));

//0(n^2)
function selectionSort(arr) {
  var min;
  for (var i = 0; i < arr.length; i++) {
    min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swapES6(arr, min, i);
    }
  }
  return arr;
}
console.log(selectionSort([50, 4, 28, 1, 80, 10, 15, 7, 0]));
