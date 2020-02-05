function cons(a,b) {
    function pair(f) {
        return f(a,b);
    }
    return pair
}

function car(f) {
    function left(a,b) {
        return a;
    }
    return f(left);
}

function cdr(f) {
    function right(a,b) {
        return b;
    }
    return f(right);
}

console.log(car(cons(3,4)));
console.log(cdr(cons(3,4)));