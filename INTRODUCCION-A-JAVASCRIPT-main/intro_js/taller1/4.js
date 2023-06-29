//Ingreso de datos
let horasNormales = parseInt(prompt("Ingrese el número de horas normales trabajadas"));
let valorHoraNormal = parseInt(prompt("Ingrese el valor de la hora normal"));
let horasExtras = parseInt(prompt("Ingrese el número de horas extras trabajadas"));
let valorHoraExtra = parseInt(prompt("Ingrese el valor de la hora extra"));


//calculos
let sueldoNormal = horasNormales * valorHoraNormal;
let sueldoExtra = horasExtras * valorHoraExtra;
let sueldoMensual = sueldoNormal + sueldoExtra;

//salidas
document.write(

"Número de horas normales trabajadas = " + horasNormales + "<br>" +
"valor de la hora normal = " + valorHoraNormal + "<br>" +
"Número de horas Extras trabajadas = " + horasExtras + "<br>" +
"valor de la hora extra = " + valorHoraExtra + "<br>" +
"Sueldo mensual del trabajador es = " + sueldoMensual + "<br>"

);

// Valores oficiales en colombia:
// horas min normales: 48
// valor hora normal:4833
// valor hora extra:6041 - 8458 - 9666 - 12083 

