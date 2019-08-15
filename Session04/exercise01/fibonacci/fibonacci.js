let fib0 = 0;
let fib1 = 1;
let fib2 = 1;

for(let i = 2 ; i < 20 ; i++) {
    fib0 = fib1;
    fib1 = fib2;
    fib2 = fib0 + fib1;
    document.writeln(fib2);
    // if(fib2 % 5 == 0) {
    //     document.writeln(fib2);
    // }
}
