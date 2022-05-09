function clear() {
    document.querySelector("#number_1").value="";
    document.querySelector("#number_2").value="";
}

function sum() {
    let a = parseFloat(document.getElementById("number_1").value);
    let b = parseFloat(document.getElementById("number_2").value);
    let c = a + b;
    let resultS = document.getElementById("result").innerText = c;
    return resultS;
}

document.getElementById("plus").onclick = function () {
sum();
clear();
document.getElementById("plus").className += "active";
}

function difference () {
    let a = parseFloat(document.getElementById("number_1").value);
    let b = parseFloat(document.getElementById("number_2").value);
    let c = a - b;
    let resultD = document.getElementById("result").innerText = c;
    return resultD
}

document.getElementById("minus").onclick = function () {
    difference();
    clear();
    document.getElementById("minus").className += "active";}

    function multiply () {
        let a = parseFloat(document.getElementById("number_1").value);
        let b = parseFloat(document.getElementById("number_2").value);
        let c = a * b;
        let resultM = document.getElementById("result").innerText = c;
        return resultM
    }
    
    document.getElementById("multiplication").onclick = function () {
        multiply();
        clear();
        document.getElementById("multiplication").className += "active";}

function quotient () {
    let a = parseFloat(document.getElementById("number_1").value);
    let b = parseFloat(document.getElementById("number_2").value);
    let c = a / b;
    let resultQ = document.getElementById("result").innerText = c;
    return resultQ
}

document.getElementById("division").onclick = function () {
    quotient();
    clear();
    document.getElementById("division").className += "active";}