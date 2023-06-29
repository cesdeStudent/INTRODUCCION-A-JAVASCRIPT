//Ingreso de datos
let nota1 = Number(prompt("Ingrese el valor de la primera nota en un rango de 1 a 5"));
let nota2 = Number(prompt("Ingrese el valor de la segunda nota en un rango de 1 a 5"));
let nota3 = Number(prompt("Ingrese el valor de la tercera nota en un rango de 1 a 5"));

//calculos
let promedio = (nota1 + nota2 + nota3)/3;
let promedioFormateado = promedio.toFixed(1);

//salidas
document.write(
"la primera nota es = " + nota1 + "<br>" +
"la segunda nota es = " + nota2 + "<br>" +
"la tercera nota es = " + nota3 + "<br>" +
"para un promedio del estudiante de = " + promedioFormateado 

)