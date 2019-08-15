let x = 0;
let arr = Array();

function addElementToArray() {
    arr[x] = document.getElementById("txtValue").value;
    alert("Element: " + arr[x] + " added at index: " + x);
    x++;
    document.getElementById("txtValue").value = "";
}

function displayArray() {
    let e = "<hr>";
    for(let i = 0 ; i < arr.length ; i++) {
        e += "Element " + i + " = " + arr[i] + "<br>";
    }
    document.getElementById("result").innerHTML = e;
}