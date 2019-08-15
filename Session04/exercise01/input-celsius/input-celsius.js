let inputCelsius = null;
while (true) {
    inputCelsius = parseInt(prompt("Input celsius: "));
    if (inputCelsius < 20) {
        alert("Too small !")
    } else if (inputCelsius > 100) {
        alert("Too large !");
    } else {
        break;
    }
}