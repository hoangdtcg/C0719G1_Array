let count = 0;
let numberCount;
function showResult() {
    numberCount = setInterval(countNumber, 20);
}

function countNumber() {
    if(count == 99) {
        alert("Successful !");
        clearInterval(numberCount);
    } else {
        count++;
        document.writeln(count);
    }
}