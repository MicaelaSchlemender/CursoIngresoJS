//Al ingresar una edad debemos informar 
//si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
function mostrar()
{
	//tomo la edad  
	var edad;
	
	edad = document.getElementById ("txtIdEdad").value;
	edad = parseInt (edad);

	if (edad < 18 && edad > 12)
	{
		alert ("Usted es adolescente");
	}


}//FIN DE LA FUNCIÓN