/*
This problem was asked by Amazon.

Given a string s and an integer k, break up the string into multiple lines such that each line has a length of k or less.
You must break it up so that words don't break across lines.
Each line has to have the maximum possible amount of words.
If there's no way to break the text up, then return null.

You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.

For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10,
you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"].
No string in the list has a length of more than 10.
*/

const breakupString = (s, k) => {
    if (!s || !k || k <= 0) return null;

    const words = s.split(" ");
    if (words.length === 0 || words[0].length > k) return null;

    let lines = [];
    let currentLine = `${words[0]}`;
    for (let word of words.slice(1)) {
        if (word.length > k) return null; 
        if (currentLine.length + 1 + word.length > k) {
            lines.push(currentLine);
            currentLine = word;
        }
        else {
            currentLine += ` ${word}`;
        }
    }
    if (currentLine.length > 0) lines.push(currentLine);
    return lines;
}

console.log(breakupString("the quick brown fox jumps over the lazy dog", 10));
console.log(breakupString("the lord has come, HALLELUJAH", 5));