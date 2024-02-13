// RETO 1
// Escribe una función que devuelva el último elemento de un array. Además, debe tener 
// otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números 
// empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como 
// parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe 
// devolverme solo el 5.

// let array = [1, 2, 3, 4, 5];
// let numero = 3;

// (numero != 0) ? console.log(array.slice(numero-1, array.length)) : console.log(array.slice(-1))



// RETO 2 
// Escribe una función que, dado un array de números, devuelva una string con todos 
// esos números e inserte guiones entre los números pares. Es decir, dado el array [0, 2, 
// 3, 4, 6, 7, 8], me devolvería “0 2 3 4-6 7 8”

// let array = [0, 2, 4, 6, 7, 8, 10]
// let nuevaArray = []


// for (let i = 0; i < array.length; i++) {

//     if ((array[i] % 2 === 0) && (array[i + 1] % 2 === 0) && (i != 0)) {

//         nuevaArray.push(array[i])
//         nuevaArray.push("-")
//     } else {

//         nuevaArray.push(array[i])
//         nuevaArray.push(" ")
//     }
// }
// console.log(nuevaArray.join(" "))




//RETO 3
// Dado un array con elementos repetidos, determina qué elemento es el más frecuente 
// y cuántas veces se ha repetido


// let array = [1,2,5,4,8,5,1,2,4,5,8,5,4,1,2,1,1,2,1];
// let contador = {};

// for (let i = 0 ; i<array.length ; i++){
//     const elemento = array[i];

//     if(contador[elemento]){
//         contador[elemento]++
//     }else{
//         contador[elemento] = 1
//     }
// }
// console.log(contador)


//RETO 4 
// Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y 
// todas sus minúsculas a mayúsculas y devuelva una nueva string.(“Hola” devolvería 
// “hOLA”)

// const change = (item) => {

//     let nuevaArray = [];
//     let arrayString = Array.from(item)

//     arrayString.forEach(element => {

//         if (element === element.toUpperCase()) {

//             nuevaArray.push(element.toLowerCase())
//         } else

//             nuevaArray.push(element.toUpperCase())
//     });

//     let stringFinal = nuevaArray.join("")

//     return stringFinal;
// }

// let prueba = change("EL perro DE san ROQUE no TIENE rabo")

// console.log(prueba)



// RETO 5
// Crea una función que, dado el siguiente array: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 
//     28, 14], [3, 10, 26, 7]] saque por consola cada uno de sus arrays interiores separados por 
//     indicadores con el número de fila, es decir:


// let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]


// for (let i = 0; i <= array.length; i++) {

//     console.log("FILA",(i+1).toString())
//     console.log(array.flat().slice(i,i+1).join(" "))
//     console.log(array.flat().slice(i+1,i+2).join(" "))
//     console.log(array.flat().slice(i+2,i+3).join(" "))
//     console.log(array.flat().slice(i+3,i+4).join(" "))

// }



// RETO 6
// Escribe una función que devuelva los años bisiestos en cierto rango de años

// const anyoBisiesto = (anyoMax,anyoMin) => { 

// let array = []    
// for (let i = anyoMin; i <= anyoMax; i++) {

//     if ((i % 4 === 0) && (i % 100 !== 0)) {
//         // array.push(i)
//         console.log(i)
//     } else if ((i % 4 === 0) && (i % 100 === 0) && (i % 400 === 0)) {
//         // array.push(i)
//         console.log(i)
//     }
// }
// }
// anyoBisiesto(2024,1904)
// // let prueba = anyoBisiesto(2024,1904)
// // console.log(prueba)



// RETO 7 

// Crea una función que, dados un array y uno de sus elementos, elimine ese elemento del 
// array

// let array = ["casa","coche","arbol","banco","moto"]


// const borra = (array) => {
// // for(const element of array){

// //     if(element ==="arbol"){
// //         continue;

// //     }
// //     console.log(element)
// // }

// array.splice(2,1)
// // console.log(array)
// return array;
// }

// let prueba = borra( ["casa","coche","arbol","banco","moto"])

// console.log(prueba)


// RETO 8 
// Crea una función que, dados dos arrays, devuelva un único array con ambos arrays 
// concatenados pero que elimine los elementos repetidos de los mismos.

// let array1 = [1, 5, 4, 2, 6, 5, 4, 2, 1, 1, 1, 5, 4, 2, 3, 3, 3, 3, 3, 3, 3, 3]
// let array2 = [1, 3, 4, 5, 8, 9, 8, 9, 4, 5, 4, 3, 3, 3, 3, 3, 3, 3, 3]
// let nuevoArray1 = []
// let nuevoArray2 = []
// let arrayFinal = []

// let contador1 = {};
// let contador2 = {};
// let contador3 = {};


// for (let i = 0; i < array1.length; i++) {
//     const elemento = array1[i];

//     if (contador1[elemento]) {
//         contador1[elemento]++
//     } else {
//         contador1[elemento] = 1
//     }
// }
// console.log(contador1)
// for (let i = 0; i < array2.length; i++) {
//     const elemento = array2[i];

//     if (contador2[elemento]) {
//         contador2[elemento]++
//     } else {
//         contador2[elemento] = 1
//     }
// }
// console.log(contador2)

// let claves1 = Object.keys(contador1)
// let claves2 = Object.keys(contador2)

// for (let i = 1; i < claves1.length; i++) {
//     let flag = 0;

//     for (let j = 1; j < claves2.length; j++) {
//         if ((claves1[i]) === (claves2[j])) {

//             flag++;
//         }
//     }
//     if(flag<1){
//         console.log("Hola")
//         nuevoArray1.push(claves1[i])
//     }

// }

// for (let i = 1; i < claves2.length; i++) {
//     let flag = 0;

//     for (let j = 1; j < claves1.length; j++) {
//         if ((claves2[i]) === (claves1[j])) {

//             flag++;
//         }
//     }
//     if(flag<1){
//         console.log("Hola")
//         nuevoArray2.push(claves2[i])
//     }

// }


// arrayFinal = nuevoArray1.concat(nuevoArray2)

// console.log(arrayFinal)



//RETO 9
// Crea una función que determine si un array contiene cierto elemento, pasando ambos 
// como argumentos a la misma

// const numeroIgual = (array, numero) => {

//     array.forEach(element => {

//         if (element === numero) {

//             console.log("Si que lo contiene")
//             return true;
//         }
//     });
// }

// let prueba = numeroIgual(["casa", "cohce", "moto", "arbol"], "casa")
// console.log(prueba)



// RETO 10
// Escribe una función que rellene un array con un determinado número de elementos y 
// pasa ambas cosas por parámetro. Es decir, la ejecución de rellenar(3, 4) sería [4, 4, 4]

// const rellena = (cantidad, argumento) => {

//     let array = [];

//     for(let i=0;i<cantidad;i++){

//         array.push(argumento)
//     }
// return array
// }


// let prueba = rellena (5, "casa")
// console.log(prueba)



// RETO 11
// Escribe una función para intercambiar las posiciones de dos elementos en un array.

// const intercambio = (array1, array2) => {
//     let array1Nueva = []
//     let array2Nueva = []

//     console.log(array1.length)


//     for (let i = array1.length-1; i >= 0; i--) {
//         array2Nueva.push(array1[i])

//     }
//     for (let i = array2.length-1; i >= 0; i--) {
//         array1Nueva.push(array2[i])

//     }
//     console.log(array2Nueva)
//     console.log(array1Nueva)

// }


// intercambio([1, 2, 5, 4, 2, 1], [9, 8, 9, 8, 9, 8])




//RETO 12
// Escribe una función que genere un array de números y pásale por parámetro el número inicial 
// y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo 
// deseado.

// const generaArray = (inicial,largo) => {
// let array = []

//     for(let i = inicial; i<=largo; i++){

//         array.push(i)
//     }

// return array;
// }

// let prueba = generaArray(7,15)
// console.log(prueba)


// RETO 13
// Escribe una función que, al pasarle un array como argumento, determine qué elementos de 
// ese array son números y devuelva la suma de los mismos.


// const sumaArray = (array) => {

//     let total = 0;

//     for (let i = 0; i < array.length; i++) {

//         if (Number.isFinite(array[i])  === true) {

//             total += parseInt(array[i])

//         }
//     }
//     return total;
// }

// let sum = sumaArray([1, 2, 5, 4, "asd", "asd", 5, 1])
// console.log(sum)



//RETO 14

// Escribe una función que determine la palabra más larga de una string


// const palabraMayor = (array) => {
//     let mayor = 0;
//     let final = 0;
//     for (let i = 0; i < array.length; i++) {

//         for (let j = 0; j < array[i].length; j++) {

//             mayor = array[i].length

//             if (final < mayor) {
//                 final = mayor;

//             }
//         }
//     }
//     return final;
// }

// let prueba = palabraMayor(["hola", "cosa", "television", "arbol", "pizarra"])
// console.log(prueba)



// RETO 15 
// Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el 
// resultado


// const cuentaVocales = (string) => {
//     let mayor = 0;
//     let final = 0;
//     let arrayVocales = ["a","e","i","o","u"]
//     let arrayString = [];
//     let vocales = 0;
//     for (let i = 0; i < string.length; i++) {

//         arrayString.push(string[i])


//         for (let j = 0 ; j< arrayVocales.length;j++){

//             if(arrayString[i] === arrayVocales[j])
//                 vocales++;
//         }
//     }

// return vocales;
// }

// let prueba = cuentaVocales("casa")
// console.log(prueba)



// RETO 16

// Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad 
// de caracteres que quieres que tenga la contraseña.


// const generaContrasenya = (numero) => {
//     let contrasenya = "";
//     for(let i = 0; i<= numero; i++){

//         contrasenya = contrasenya + Math.floor(Math.random()*10)

//     }

// return contrasenya;
// }

// let resutlado = generaContrasenya(5)
// console.log(resutlado)




//RETO 17

// Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola 
// cada segundo y minuto entre ambas


// const minutosSegundos = () => {


//     for (let i = 58; i <= 59; i++) {
//         let iString = i.toString()
//         for (let j = 0; j <= 59; j++) {
//             let jString = j.toString()
//             console.log("23 :",iString,":",jString)
//         }

//     }
// console.log("00 : 00 : 00")
// }

// minutosSegundos()




// RETO 18 
// Escribe una función que compruebe si un objeto tiene determinada propiedad (pasando como 
// parámetro el objeto y la propiedad en cuestión)


// const compruebaObjeto = (objeto, propiedad) => {

//     console.log(objeto[propiedad])

// }

// compruebaObjeto({ nombre: "Fernando", edad: 33, ciudad: "Requena" }, "ciudad")




// RETO 19
// Escribe una función que sume todos sus argumentos, independientemente de cuántos sean


// const contarArgumentos = (...args) => {

//     let sumaTotal = 0;

//     for (let i = 0; i < args.length; i++) {

//         sumaTotal = sumaTotal + args[i]
//     }
//     return sumaTotal;
// }

// let resutlado = contarArgumentos(45, 5, 8, 54, 9, 3, 79, 65, 1)
// console.log(resutlado)



// RETO 20
// Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar 
// cualquier cantidad de notas como parámetro


// const contarArgumentos = (...args) => {
//     let arrayNotas = [];
//     let sumaTotal = 0;
//     let flag = 0
//     for (let i = 0; i < args.length; i++) {
//         if (args[i] < 5) {

//             console.log("suspendido")

//             break;
//         }
//         flag++;
//     }

//     if (flag === args.length)
//         console.log("aprobado")
// }

// contarArgumentos(5, 5, 8, 5, 6, 7, 8, 9, 8, 7, 6, 5)
// contarArgumentos(5, 5, 8, 5, 7, 3, 6, 8, 5, 4, 7, 8, 5, 9, 5)




// RETO 21
// Escribe una función que reciba un array de números como argumento y saque la diferencia 
// entre el número más alto y el más bajo del mismo. Utiliza el operador …


// const contarArgumentos = (array) => {
//     let mayor = 0;
//     let menor = array[1];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < menor) {

//             menor = array[i]

//         }
//         if (array[i] > mayor) {

//             mayor = array[i]

//         }
//     }

// console.log(mayor-menor)
// }

// contarArgumentos([5, 5, 8, 5, 7, 2, 6, 8, 5, 4, 7, 8, 5, 9, 5])



// RETO 22
// Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos 
// tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección 
// y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo 
// en que cada objeto contiene toda la información de cada persona.



// let arrayFinal = []

// let array1 = [{
//     nombre: "Carlos",
//     apellido: "Perez",
//     edad: "20"
// },
// {
//     nombre: "Paco",
//     apellido: "Navarro",
//     edad: "25"
// },
// {
//     nombre: "Antonio",
//     apellido: "Martinez",
//     edad: "30"
// }]

// console.log(array1)


// let array2 = [{
//     ciudad: "Valencia",
//     telefono: "654879231"
// },
// {
//     ciudad: "Alicante",
//     telefono: "658951423"
// },
// {
//     ciudad: "Castellon",
//     telefono: "685749878"
// }]
// console.log(array2)



// for (let i = 0; i < array1.length; i++) {

//     arrayFinal.push(Object.assign({}, array1[i], array2[i]))

// }
// console.log(arrayFinal)




//RETO 23
// Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los
// objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto
// menos la edad. Hazlo utilizando el operador ...


// let arrayFinal = []
// let objetoFinal = []

// let array1 = [{
//     nombre: "Carlos",
//     apellido: "Perez",
//     edad: "20"
// },
// {
//     nombre: "Paco",
//     apellido: "Navarro",
//     edad: "25"
// },
// {
//     nombre: "Antonio",
//     apellido: "Martinez",
//     edad: "30"
// }]

// let array2 = [{
//     ciudad: "Valencia",
//     telefono: "654879231"
// },
// {
//     ciudad: "Alicante",
//     telefono: "658951423"
// },
// {
//     ciudad: "Castellon",
//     telefono: "685749878"
// }]


// for (let i = 0; i < array1.length; i++) {

//     arrayFinal.push(Object.assign({}, array1[i], array2[i]))

// }


// for(let i = 0; i<arrayFinal.length; i++){

//     const { edad, ...nuevoObjeto } = arrayFinal[i];

//     objetoFinal.push(nuevoObjeto)
// }

// console.log(objetoFinal);



// RETO 24

// Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"], devuelve otro en que la 
// primera letra de cada uno sea mayúscula y el resto minúsculas

// let array = ["mara", "pAblo", "juan", "MARCOS"]
// let flag = 0
// let nuevoNombre = ""
// for (let i = 0; i < array.length; i++) {


//     for (let j = 0; j < array[i].length; j++) {

//         if (flag === 0) {

//              nuevoNombre += (array[i].slice(j, j + 1)).toUpperCase()

//             flag++;
//         } else {

//              nuevoNombre += (array[i].slice(j, j + 1)).toLowerCase()

//         }
//     }

//     console.log(nuevoNombre)
//     flag = 0;
//     nuevoNombre = "";
// }



// RETO 25
// Crea un array con únicamente los nombres de los siguientes objetos
// Además, saca un array únicamente con los nombres de los mayores de 30


// let personas = [
//     {
//         nombre: "Mara",
//         edad: 30
//     },
//     {
//         nombre: "Pablo",
//         edad: 35
//     },
//     {
//         nombre: "Juan",
//         edad: 26
//     },
//     {
//         nombre: "Marta", edad: 56
//     },
//     {
//         nombre: "Rodrigo",
//         edad: 31
//     },
// ];

// let objetoFinal = []

// for (let i = 0; i < personas.length; i++) {

//     const { edad, ...nuevoObjeto } = personas[i];

//     objetoFinal.push(nuevoObjeto)

// }

// console.log(objetoFinal);

// let objetoViejos = []
// for (let i = 0; i < personas.length; i++) {

//     if( personas[i].edad > 30){

//         objetoViejos.push(personas[i])
//     }

// }

// console.log(objetoViejos);



// RETO 26
// Dado un array de números, crea una función que sume solo los pares


// const sumaPares = (array) => {
//     let resultado = 0;
//     for (let i = 0; i < array.length; i++) {

//         if((array[i] % 2) === 0){
//             resultado += array[i]
//         }
//     }
//     console.log(resultado)
// }
// sumaPares([2, 5, 4, 8, 4, 6, 2, 5, 1, 4, 3, 2, 4, 4, 2, 6])



// RETO 27
// Dado un nombre completo (en string), obtén sus iniciales y sácalas también en una string


// let nombreCompleto = "paco navarro martinez"
// let iniciales = "";
// let flag = 0;



// for (let i = 0; i < nombreCompleto.length; i++) {

//     if (flag === 0) {
//         iniciales += nombreCompleto[0].toUpperCase()
//         flag++
//     }

//     if (nombreCompleto[i] === " ") {
//         iniciales += nombreCompleto[i + 1].toUpperCase()
//     }

// }
// console.log(iniciales)




// RETO 28 

// Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9

// let suma = 0
// let superdotados = []
// let estudiantes = [
//     {
//         nombre: 'Mara',
//         notas: [10, 7, 8, 8, 9]
//     },
//     {
//         nombre: 'David',
//         notas: [6, 2, 5, 10, 7]
//     },
//     {
//         nombre: 'Marcos',
//         notas: [3, 5, 2, 8, 5]
//     },
//     {
//         nombre: 'Pablo',
//         notas: [10, 10, 9, 8, 9]
//     },
// ];


// for (let i = 0; i < estudiantes.length; i++) {
//     suma = 0;


//     for (let k = 0; k < estudiantes[i].notas.length; k++) {

//         suma += estudiantes[i].notas[k]
//     }

//     if ((suma / (estudiantes[i].notas.length)) >= 8)
//         superdotados.push(estudiantes[i])
// }

// console.log(superdotados)


