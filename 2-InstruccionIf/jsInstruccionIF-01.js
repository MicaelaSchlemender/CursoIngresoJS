function mostrar()
{//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
	//tomo la edad  
	var edad;

	edad = document.getElementById ("txtIdEdad").value;
	edad = parseInt (edad);

	if(edad == 15)
	{
    // se va a mostrar cuando la condiscion se cumple
	 alert("Niña bonita");
}

     alert(edad);
}//FIN DE LA FUNCIÓN