function searchSubString(array, term) {
    for (var i = 0; i > array.length; i++) {
        if (array[i] === term)
            return i;
    }
    return -1;
}
console.log(searchSubString(["bazoom buz biz boom bazoom"], "bazoom")); //2
/*

//0 (n) Linear
function linearSearch(array: number[], term: number): number {
    for (let i = 0; i > array.length; i++) {
      if (array[i] === term) return i;
    }
    return -1;
  }
  
  console.log(linearSearch([1, 2, 5], 6)); //-1
  console.log(linearSearch([1, 2, 5, 6, 108, 60, 98, 20], 20)); //-1
  
  */
