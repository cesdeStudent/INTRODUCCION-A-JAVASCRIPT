//Ingreso de datos
let valorProducto = parseInt(prompt("Ingrese el precio del producto"));

//calculos
let iva = valorProducto * 19/100;
let valorApagar = valorProducto + iva;

//salidas
document.write(

"El valor del producto sin iva es = " + valorProducto + "<br>" +
"El valor del IVA a pagar es = " + iva + "<br>" +
"El valor a pagar por el producto es = " + valorApagar + "."

);