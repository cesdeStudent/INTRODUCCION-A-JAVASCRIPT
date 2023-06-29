// alert("hola desde forma externa");

//tipos de ventanas primitivas
// -- alert();
// -- confirm();
// -- prompt();
// -- console.log();
// -- document.write();

// como declarar variables
// var, let, const

var numeroEntero = 55;
var numeroDecimal = 5.5;
var texto = "hola";
var boleano = "true";

// "\n" = salto de línea
// alert("numero: "+ numeroEntero + "\n"
// + "numerodecimal: "+ numeroDecimal + "\n"
// + "texto: "+ texto + "\n"
// + "Boleano: " + boleano);

// var numero1 = 10;
// var numero2 = 20;
// var resultado = numero1 + numero2;
// alert("la suma de "+ numero1 + " y " + numero2 + " es " +  resultado);
// console.log("la suma de "+ numero1 + " y " + numero2 + " es " +  resultado);
// document.write("la suma de "+ numero1 + " y " + numero2 + " es " +  resultado);

// // la ventaja del document.write es que se pueden colocar etiquetas html
// document.write("<h1>" +  "la suma de "+ numero1 + " y " + numero2 + " es " +  resultado + "</h1>");

// var respuesta = confirm("¿Eres mayor de edad?");
// alert("Su respuesta es: " + respuesta);
// console.log("Su respuesta es: " + respuesta);
// document.write("Su respuesta es: " + respuesta);

// var respuesta = prompt("¿Eres mayor de edad?");
// alert("Su respuesta es: " + respuesta);
// console.log("Su respuesta es: " + respuesta);
// document.write("Su respuesta es: " + respuesta);

/* 
calcular el salario de un empleado que gana X monto y descontar en salud el 5% y pension 7%
*/

// datos de entrada
var nombre = prompt("Escriba su nombre");
var salario = parseInt(prompt("Escriba su salario"));

// calculos

var salud = salario * 5/100;
var pension = salario *7/100;
var salarioApagar = salario - salud - pension;

// datos de salida
document.write("El empleado: " + nombre + "<br>");
document.write("Su salario es: " + salario + "<br>");
document.write("descuento en salud es: " + salud + "<br>");
document.write("descuento en pensión es: " + pension + "<br>");
document.write("Su salario a pagar  es: " + sueldoApagar + "<br>");