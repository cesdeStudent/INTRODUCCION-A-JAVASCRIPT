//Ingreso de datos
let mujeres = parseInt(prompt("Ingrese el número de mujeres del salón de clases"));
let hombres = parseInt(prompt("Ingrese el número de hombres del salón de clases"));
//calculos
let totalEstudiantes = mujeres + hombres;
let porcentajeHombres = (hombres * 100)/totalEstudiantes;
let porcentajeMujeres = (mujeres * 100)/totalEstudiantes;

//salidas
document.write(

"En el salón de clases las mujeres son el = " + porcentajeMujeres +  "%" + "<br>" +
"y los hombres el = " + porcentajeHombres + " %" + "<br>" +
"En un total de " + totalEstudiantes + " estudiantes."

)