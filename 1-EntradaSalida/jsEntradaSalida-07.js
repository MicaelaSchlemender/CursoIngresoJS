/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
    var numeroDos;
    var resultado;

    var operador

    numeroUno = parseInt(txtIdNumeroUno.value);
    numeroDos = parseInt(txtIdNumeroDos.value);
    operador = ("La Suma es: ");
    resultado = numeroUno + numeroDos;
    alert (operador + resultado);


}

function restar()
{
	var numeroUno;
    var numeroDos;
    var resultado;

    var operador

    numeroUno = parseInt(txtIdNumeroUno.value);
    numeroDos = parseInt(txtIdNumeroDos.value);
    operador = ("La Resta es: ");
    resultado = numeroUno - numeroDos;
    alert (operador + resultado);

}

function multiplicar()
{ 
	var numeroUno;
    var numeroDos;
    var resultado;

    var operador

    numeroUno = parseInt(txtIdNumeroUno.value);
    numeroDos = parseInt(txtIdNumeroDos.value);
    operador = ("La Multiplicación es: ");
    resultado = numeroUno * numeroDos;
    alert (operador + resultado);

}

function dividir()
{
	var numeroUno;
    var numeroDos;
    var resultado;

    var operador

    numeroUno = parseInt(txtIdNumeroUno.value);
    numeroDos = parseInt(txtIdNumeroDos.value);
    operador = ("La división es: ");
    resultado = numeroUno / numeroDos;
    alert (operador + resultado);

}

