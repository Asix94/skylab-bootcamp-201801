# BINGO JS

## GOALS

BINGO GAME! 🎲🎰

En esta practica aprenderemos a hacer un bingo en js

Realiza un programa que simule un Bingo.
Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse.

Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0.

El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado.

El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".
Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.


## TASK

### Paso 1

Confirmaremos el nombre del usuario de la aplicación

```js
function name(){
		
	var name = prompt("Tell me, who are you?", "");
	if (name != "") {
		console.log("Hello " + name + " , ready to play? This is your card:");
	}
}
```

### Paso 2

Crearemos todos los numeros posibles del bombo dentro de un array, para ello utilizaremos un push, donde almacenara todos los numeros dentro del array

```js
function bombos(){

		for(i=1; i<=99; i++){
			bombo.push(i);
		}

	}
```

## Reference

[google](www.google.es)

[Stackoverflow](www.stackoverflow.com)    

	

	