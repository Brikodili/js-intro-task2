"use strict";

function calcD(a, b, c) {
    var d, x1, x2;

    d = (b * b - 4 * a * c);
    x1 = (-b - (d / d)) / (2 * a);
    x2 = (-b + (d / d)) / (2 * a);

    if (d > 0) {
        console.log(x1, x2);
    } else {
        console.log("d < 0");
    }
}
calcD(1, 2, 1);

