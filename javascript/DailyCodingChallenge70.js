/*
This problem was asked by Microsoft.

A number is considered perfect if its digits sum up to exactly 10.
Given a positive integer n, return the n-th perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.
*/

const isPerfect = (num) => {
    str = num.toString();
    sum = 0;
    for(let i=0; i < str.length; i++) {
        sum += parseInt(str.charAt(i));
    }
    return (sum === 10); 
};

const perfectNums = [19];

const nthPerfect = (n) => {
    // handle junk cases
    if (n <= 0) {
        console.error(`Error: n must be greater than or equal to 0, but was given ${n}.`);
        return null;
    }
    // handle cases we've already computed
    else if(perfectNums.length >= n && perfectNums[n-1] != null){
        return perfectNums[n-1];
    }
    // find next perfect num
    else {
        // determine starting point (highest perfect num lower than nth perfect num)
        let index = n-2;
        while(!perfectNums[index]) {
            index--;
        }

        for(let i=perfectNums[index] + 1; ;i++) {
            if(isPerfect(i)) {
                perfectNums.splice(++index, 0, i);
                if(index+1 === n) return i;
            }
        }
    }
};
