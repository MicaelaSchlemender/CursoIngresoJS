//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
// Si la persona tiene entre 13 y 17 es adolescente 
//a partir de los 18
function mostrar() {
	//tomo la edad  
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if (edad <13 || edad >17 )
	{
       alert ("Usted NO es adolescente");
	}
}//FIN DE LA FUNCIÓN