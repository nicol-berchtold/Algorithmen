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