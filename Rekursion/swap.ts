function swap(arr: number[], index1: number, index2: number) {
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
//0(n^2) Quadratische Komplexität
function bubbleSort(arr: number[]) {
  let noSwap: boolean;
  //0(n) Lineare Komplexität
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //0(1) Konstante Komplexität
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

//console.log(bubbleSort(testArr));


//0(n^2)
function insertionSort(arr: number[]) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentItem = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentItem; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentItem;
  }
  return arr;
}

console.log(insertionSort([50, 4, 28, 1, 80, 10, 15, 7]));
