let variable = "Hello World";
let numero = 1957; //dato primitivo
let verdadero = true; // boolean
let falso = false; //boolean
let noDefinido; //any
let undef = undefined; //undefined -> puede ser un valor como tambien puede ser un tipo
let nulo = null;
const consti = "Hola Mundo!"; //esto es una constante

//JS es de tipado dinámico
console.log(variable);

/**
 * ESTE ES UN COMENTARIO DE MUCHAS LÍNEAS
 * DSDA
 */

/*
ESTA ES LA MANERA OFICIAL PARA ESCRIBIR COMENTARIOS
 */

console.log(typeof variable);
console.log(typeof numero);

let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
  nombre: "Tanjiro",
  anime: "Demon Slayer",
  edad: 16,
};

console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;
personaje["edad"] = 16;

// Arrays o Arreglo (es lo mismo) -> viene de collection o colección.

let animales = ["chanchito", "feliz"];
console.log(animales[0]);
console.log(animales.length);

// funciones
function saludar() {
  console.log("Hola Mundo");
}

saludar();

function suma() {
  return 2 + 2;
}

let resultado = sumar();
console.log(resultado);

// ARGUMENTOS 09

function sumar(a) {
  return a + 2;
}

let resultado2 = suma(5);
console.log(resultado);

// Expresiones y declaraciones
// Se llama declaration a LET y CONST -> palabras reservadas
// function  y function*
// async function
// class
// export / import

// Operadores

let X = 5;
let Y = 7;

console.log(X + Y, "adición");
console.log(X - Y, "resta");
console.log(X * Y, "multiplicación");
console.log(X / Y, "división");
console.log(X % Y, "el resto o módulo"); //lo que sobra de una división
console.log(X ** Y, "Potencia"); // Potencia

console.log(++X); // incrementa el valor en 1
console.log(X++); // Imprime X y le suma 1

let a = 5;
a = a + 5;

let c = 10;
console.log(c > 5); // arroja un boolean
console.log(c >= 5);

// OPERADORES LÓGICOS

console.log(true && true);
