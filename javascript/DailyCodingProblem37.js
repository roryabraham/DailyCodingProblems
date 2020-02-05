/*
This problem was asked by Google.

The power set of a set is the set of all its subsets.
Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return
{{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}

You may also use a list or array to represent a set.
*/

const powerset = (set) => {
    let powset = [];
    // powerset contains 2^n elements
    for (let i=0; i < Math.pow(set.length, 2); i++) {
        let subset = [];
        let inclusion = i.toString(2).padStart(set.length, "0");
        for (let j=0; j < set.length; j++) {
            if (inclusion.charAt(j) == 1) {
                subset.push(set[j]);
            }
        }
        powset.push(subset);
    }
    return powset;
}

const test1 = [];
const test2 = [1, 2, 3];

console.log(powerset(test2));
