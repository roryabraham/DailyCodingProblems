/*
This problem was asked by Google.

Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed
to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1.
Given the string ")(", you should return 2, since we must remove all of them.
*/

const countUnclosedParentheses = (string) => {
    let stack = [];
    let count = 0;
    for (const c of string) {
        if (c === "(") {
            stack.push("x");
        }
        else if (c === ")") {
            if (stack.length === 0) {
                count++;
            }
            stack.pop();
        }
    }
    return count + stack.length;
};