function searchSubString(text: string, term: string) {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < term.length; j++) {
      if (text[i + j] !== term[j]) break;
      if (j === term.length - 1) counter++;
    }
  }
  return counter > 0 ? counter : -1;
}

console.log(searchSubString("bazoom buz biz boom bazoom", "baz")); //2
