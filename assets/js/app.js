var telefono = new Object();

$(document).ready(function() {
    ciclos();
});


function setMarca() {
    telefono.marca = 'Huawei';
}

function setModelo() {
    telefono.modelo = 'P40';
}

function getMarca() {
    return telefono.marca
}

function getModelo() {
    return telefono.modelo
}

var x;
var y;
var z;
var r;
var m;

function setValores() {
    x = prompt("Valor de primer numero");
    y = prompt("Valor del segundo numero");
    operaciones(x, y); /*Ponemos el orden para la funcion operaciones*/
    console.log(z);
    console.log(r);
    console.log(m);
}

function operaciones(x, y) {
    z = Number(x) + Number(y);
    r = Number(x) - Number(y);
    m = Number(x) * Number(y);
    return z, r, m;
}

function logicos() {
    var f = 1;
    var e = 2;

    if (f === 1) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

function ciclos() {

    var arreglo = [50, 30, 22, 15, 8, 3, 9, 10];
    var aux = arreglo[i];
    for (var i = 0; i < arreglo.length; i++) {
        if (i < (arreglo[i])) {
            console.log(arreglo[i]);
        }
    }
}