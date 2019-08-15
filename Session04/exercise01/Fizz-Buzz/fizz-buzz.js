let result = document.getElementById("result");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        result.innerHTML += "FizzBuzz ";
    } else if (i % 3 == 0) {
        result.innerHTML += "Fizz ";
    } else if (i % 5 == 0) {
        result.innerHTML += "Buzz ";
    } else if (i % 10 == 0) {
        result.innerHTML += "<br>";
    } else {
        result.innerHTML += i + " ";
    }



}
