function pow(x, n) {
    let result = x ** n;
    return result;
}

let x = prompt('X?');
let n = prompt('N?');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive number`);
} else {
    alert( pow(x ,n));
}