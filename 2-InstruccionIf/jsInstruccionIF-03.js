//Al ingresar una edad debemos informar si la persona es 
//mayor de edad, sino informar que es un menor de edad.
function mostrar()
{
	//tomo la edad  
	var edad

	edad = document.getElementById ("txtIdEdad").value;
	edad = parseInt (edad);

	if (edad > 17)
	{
       alert ("Eres mayor de edad");
    }
	else 
	{
		alert ("Eres menor de edad");
	}

	


}//FIN DE LA FUNCIÓN