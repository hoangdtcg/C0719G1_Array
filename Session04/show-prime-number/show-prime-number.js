function showResult() {
    let printNumber = parseInt(document.getElementById("print-prime-number").value);
    let arrPrimeNumber = [];
    for (let i = 2; i <= printNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            arrPrimeNumber.push(i);
        }
    }
    document.getElementById("result").innerHTML = arrPrimeNumber.toString();
}