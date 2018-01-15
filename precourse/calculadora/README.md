# Calculadora JS

## GOALS

Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. 

El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 

El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.

Si el usuario introduce un solo numero, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.

Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

	Hint_ => results = [num1 + num2 = resultSum, num1-num2 = resultRest ....]

## TASK

### Paso 1

Crearemos una funcion para la suma, resta, multiplicacion y division

```js
function sum(num1,num2){

	var sum = num1 + num2;
		return sum;
	}
```

### Paso 2

Observaremos si el usuario a puesto los dos inter para realizar las operaciones 

```js
function calculator(num1,num2) {
		
	if(typeof(num2) == 'undefined'){
		square(num1);
	}

	else if(typeof(num1) == 'string' || typeof(num2) == 'string'){
		console.log('You cant do this operation!');
	}	

	else{
		array(num1,num2);
	}
}
```

## Reference

[google](www.google.es)

[Stackoverflow](www.stackoverflow.com)