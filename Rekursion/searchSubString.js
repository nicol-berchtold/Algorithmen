function searchSubString(text, term) {
    var counter = 0;
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < term.length; j++) {
            if (text[i + j] !== term[j])
                break;
            if (j === term.length - 1)
                counter++;
        }
    }
    return counter > 0 ? counter : -1;
}
console.log(searchSubString("bazoom buz biz boom bazoom", "baz")); //2
