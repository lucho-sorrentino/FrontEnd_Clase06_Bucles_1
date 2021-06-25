// for (inicializador; condición de salida, expresión final) {
//     código a ejecutar
// }

// for (i=0; i<5; i++) {                                        //Ciclo for
//     console.log("Iteración número: " + i);
// }

// let i = 0                                                    //Ciclo while
// while (i<5) {
//     console.log("Iteración número: " + i);
//     i = i+1
// }

// El ciclo do ... while, es similar pero la condición de corte se evalúa al final del ciclo, lo cual permite que el código se ejecute al menos la primera vez.
// let i = 0
// do {
//     console.log("Iteración número: " + i);
//     i = i + 1
// } while (i<5)



//          ################# EJERCICIOS DE BUCLES 1 #################

// ********** EJERCICIO 0 ********** 
// Agregar en el ejercicio de home banking la posibilidad de seguir operando hasta que el usuario decida salir.

// ******** PENDIENTE!!! ********


// ********** EJERCICIO 1 ********** 
// Mostrar los primeros 10 números naturales. (1,2,3,4,5,6,7,8,9,10).

// for (i=0; i<11; i++){
//     console.log(i);
// }




// ********** EJERCICIO 2 ********** 
// Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.

// let total = 0;
// let numUser = 0;
// for (i=0; i<5; i++) {
//     numUser = parseInt(prompt("Ingrese 5 números para ver la suma de los mismos:"));
//     total = total + numUser;
// }
// alert("La suma de todos los número es: " + total);





// ********** EJERCICIO 3 ********** 
// Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
 
// let total = 0;
// let numUSer = 0;
// let i = 0;
// let cantDatos = parseInt(prompt("¿Cuántos números desea sumar?"));
// while (i<cantDatos) {
//     console.log("cantidad de iteraciones: " + i);
//     numUser = parseInt(prompt("Ingrese un número."));
//     i = i + 1;
//     console.log("cantidad de iteraciones: " + i);
//     total = total + numUser;
// }
// alert("La suma de todos los número es: " + total);

// let total = 0;
// let numUser = 0;
// let cantDatos = parseInt(prompt("¿Cuántos números desea sumar?"));
// for (i=0; i<cantDatos; i++) {
//     numUser = parseInt(prompt("Ingrese un número:"));
//     total = total + numUser;
// }
// alert("La suma de todos los número es: " + total);






// ********** EJERCICIO 4 ********** 
// Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.

// let total = 0;
// let numUser;
// while (numUser !== 0) {
//     numUser = parseInt(prompt("Ingrese los números que desea sumar. Presione 0 para finalizar:"));
//     console.log(numUser);
//     total = total + numUser;
// }
// alert("La suma de todos los número es: " + total);




// ********** EJERCICIO 5 ********** 
// Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.

// let total = 0;
// let numUser;
// let contador = 0;
// while (numUser !== 0) {
//     numUser = parseInt(prompt("Ingrese los números cuyo promedio desea conocer. Presione 0 para finalizar:"));
//     console.log(numUser);
//     total = total + numUser;
//     contador++;
//     console.log(contador);
// }
// alert("El promedio de los números ingresados es: " + total/(contador-1));





// ********** EJERCICIO 6 ********** 
// Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido.

// let contador = 0;
// let numUser = parseInt(prompt("Ingrese un número:"));
// while (contador < numUser) {
    // contador++
    // console.log(contador);
// }


// RESOLUCION FLOR:
// let numUser = parseInt(prompt("Ingrese un número:"));
// for (i=1; i<=numUser; i++) {
//     console.log(i);
// }



// ********** EJERCICIO 7 ********** 
// Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8 ????? --> Ver resolución 11:16 clase 7). Aceptar solo enteros. 
// let inicio = parseInt(prompt("Ingrese un numero"));
// let numUser = parseInt(prompt("Ingrese otro número"));
// while (inicio<=numUser) {
//     console.log(inicio);
//     inicio++    
// }

// TAMBIEN:
// let inicio = parseInt(prompt("Ingrese un número"));
// let numUser = parseInt(prompt("Ingrese otro número"));
// for (i = inicio; i<=numUser; i++) {
//     console.log(i);
// }




// ********** EJERCICIO 8 ********** 
// Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.

// let referencia = 0;
// let numUser;
// // let cantDatos = parseInt(prompt("Indique la cantidad de numeros que va a cargar. El objetivo es mostrar en un alerta cuál es el mayor de todos ellos"));
// for (i=0;i<cantDatos;i++) {
    // numUser = parseInt(prompt("Ingrese un número"));
    // if (numUser>referencia) {
        // referencia=numUser;
    // }
// }
// alert("El número mayor es: " + referencia);




// ********** EJERCICIO 9 ********** 
// Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.

// let numUser1 = parseInt(prompt("Ingrese un número"));
// let numUser2;
// let referencia;
// let flag = true;
// while (flag) {
    // numUser2 = prompt("Ingrese otro/s numero/s para saber cuál de todos es el menor. Luego, presione cualquier letra para ver el resultado");
    // if (isNaN(numUser2)) {
        // flag = false;
    //  } else {
        // numUser2 = parseInt(numUser2);        
        // if (numUser2<numUser1) {
            // referencia=numUser2;
        // }   
    // }
// }
// alert("El número menor es: " + referencia)




// ********** EJERCICIO 10 ********** 
// Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)

// let referencia = "";
// let numUser = parseInt(prompt("Ingrese un número"));
// for (i=0; i<numUser; i++) {
    // referencia = referencia + "*";
// }
// alert(referencia);

 

// ********** EJERCICIO 11 ********** 
// Realizar un programa que pida la base y el exponente y calcule la potencia. 

// potencia = 1;
// let base = parseInt(prompt("Ingrese el número que se usará como base para calcular la potencia:"));
// let exponente = parseInt(prompt("Ingrese el número que se usará como exponente para calcular la potencia:"));
// for (i=0; i<exponente; i++) {
//     potencia = potencia * base;
// }
// alert("El resultado es " + potencia);






// ********** EJERCICIO 12 **********
// Realizar un programa que pida un número y calcule su factorial. (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )

// let factorial = 1;
// let num = parseInt(prompt("Ingrese un número para calcular su factorial:"));
// factorial = factorial * num;
// console.log(factorial);
// console.log(num);
// for (i=1; i<num; i++) {
//     factorial = factorial * i;   
// }
// alert(factorial);





// ********** EJERCICIO 13 **********
// Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)






// ********** EJERCICIO 14 **********
// Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
// H
// O
// L
// A



// ********** EJERCICIO 15 **********
// Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas. 






// ********** EJERCICIO 16 **********
// Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados





            


                // ################# BONUS-Desafíos Matemáticos #################

                // ********** EJERCICIO 1 **********
// Agregar al ejercicio 5 una validación de que solo se acepte números del 1 al 10. Si ingresa un número no válido, volver a solicitar el dato. 







// ********** EJERCICIO 2 **********
// Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). Cuando se introducen tres números consecutivos dice “gracias” y termina. Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo números indefinidamente. 






// ********** EJERCICIO 3 **********
// Realizar un programa que pida dos números y diga su máximo común divisor. 
// Notas sobre el Máximo Común Divisor: 
// - Es el máximo número por el cuál se puede dividir un número dejando resto 0.
// - No puede ser mayor al valor de la mitad del menor número o sí mismo.
//  (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).
//  (Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). (Podemos probar: 1,2,3,4,10).







// ********** EJERCICIO 4 **********
// Solicitar al usuario que ingrese números. Mostrar los primeros tres multiplicados por 1, luego los próximos tres multiplicados por 2 y así sucesivamente. Cortar cuando el usuario ingrese un número mayor a 100. En cada iteración se debe mostrar la salida. Ejemplo:
// Ingresa 1 > muestra 1 
// Ingresa 8 > muestra 8
// Ingresa 3 > Muestra 3
// ingresa 4 > Muestra 8
// Ingresa 9 > Muestra 18
// Ingresa 50 > Muestra 100
// Ingresa 7 > Muestra 21
// ingresa 10 > Muestra 30






// ********** EJERCICIO 5 **********
// Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos y mostrarlo.





// ********** EJERCICIO 6 **********
// Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia de Fibonacci. 
