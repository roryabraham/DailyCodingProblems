/*
This problem was asked by Two Sigma.

Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, 
implement a function rand5() that returns an integer from 1 to 5 (inclusive).
*/

const rand7 = () => {
    return Math.floor(Math.random() * 7) + 1;
}

const rand5 = () => {
    return rand7() * (5/7);
}

for(let i=0; i < 100; i++) {
    console.log(rand5());
}