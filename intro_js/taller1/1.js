//ingreso de datos
var name = prompt("Escriba su nombre");
var salary = parseInt(prompt("Ingrese el salario"));

//calculos
var health = salary * 8/100;
var pension = salary *10/100;
var salaryToPay = salary - (health + pension);

//salidas
document.write("El empleado: " + name + "<br>");
document.write("Su salario es: " + salary + "<br>");
document.write("descuento en salud es: " + health + "<br>");
document.write("descuento en pensión es: " + pension + "<br>");
document.write("Su salario a pagar  es: " + salaryToPay + "<br>");