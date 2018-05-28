"use strict";

var a = +prompt("Введите a", "");
var b = +prompt("Введите b", "");
var c = +prompt("Введите c", "");

function calcD() {
    var d;
    d = (b*b - 4*a*c);
    if(d >= 0){
        var res1 = (-b - d/d)/(2*a);
        var res2 = (-b + d/d)/(2*a);
        alert(res1);
        alert(res2);
    }
    else {
        alert("D < 0");
    }
}

calcD();



