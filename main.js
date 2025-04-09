// ## 1. Funciones flecha

// - [ ] 1.- Convierte la siguiente función en una función flecha:

// ```
// function greetings() {
//   return "Hola";
// }
// ```

const greetings = () => {
  return "Hola"
}

const hello = greetings()


// console.log( greetings() )
console.log(hello)



// - [ ] 2.- Convierte la siguiente función en una función flecha en línea:

// ```
// function division(a, b) {
//   return a / b;
// }
// ```

const division = (a, b) => a / b;

console.log(division(9, 3));



// - [ ] 3.- Convierte la siguiente función en una función flecha:

// ```
// function myName(name) {
//   return `Mi nombre es ${name}`;
// }
// ```

const myName = (nameUser) => {
    return `Mi nombre es ${nameUser}`
}

console.log(myName('Ego'));


// - [ ] 4.- Convierte las siguientes funciones en funciones flecha:

// ```
// function test2() {
// console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
// callback();
// }
// ```

const test2 = () => console.log('Función test 2 ejecutada.');
const test1 = (callback) => callback();

test1(test2);



// ## 2. Foreach

// - Utiliza el siguiente array para resolver los próximos ejercicios:

let people = [
 { name: 'Jamiro', age: 45 },
 { name: 'Juan', age: 35 },
 { name: 'Paco', age: 34 },
 { name: 'Pepe', age: 14 },
 { name: 'Pilar', age: 24 },
 { name: 'Laura', age: 24 },
 { name: 'Jenny', edad: 10 },
]


// - [ ] 1.- Crea un array con la gente mayor de 25 años y muéstralo por consola.

const aboveTwentifive = [];

people.forEach((person) => {
    if (person.age > 25) {
        aboveTwentifive.push(person)
    }
})

console.log(aboveTwentifive)


// - [ ] 2.- Crea un array con la gente que empieza por J.

const nameStartWithJ = []; 

people.forEach((person) => {
    if (person.name.startsWith('J')) {
        nameStartWithJ.push(person);
    }
})

console.log(nameStartWithJ)



// ## 3. Map

// - [ ] 1.- Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const aboveTwentifive2 = people.map((person) => {
    if (person.age > 25) {
        return person;
    } else {
        return null;
    }
}).filter(person => person !== null);

console.log(aboveTwentifive2)


// - [ ] 2.- Crea un array con la gente que empieza por J.

const nameStartWithJ2 = people.map((person) => {
    if (person.name.startsWith('J')) {
        return person;
    } else {
        return null;
    }
}).filter((person) => person !== null);

console.log(nameStartWithJ2)


// - [ ] 3.- Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [ 4, 5, 6, 7, 8, 9, 10]

const numbersPowered = numbers.map((number) => number ** number)

console.log(numbersPowered)



// ## 4. Filter

// - [ ] 1.- Crea un segundo array que devuelva los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers2
    .filter((number) => number % 2 === 1)

console.log(oddNumbers)

// - [ ] 2.- Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

 const foodList = [
	{ name: 'Tempeh', isVeggie: true },
	{ name: 'Cheesbacon burguer', isVeggie: false },
	{ name: 'Tofu burguer', isVeggie: true },
	{ name: 'Entrecot', isVeggie: false }
]
/* 
['Que rico Tempeh me voy a comer!', 'Que rica Tofu burguer me voy a comer!']
*/

const veganFoodList = foodList
    .filter((dish) => dish.isVeggie)
    .map((dish) => `Que rico ${dish.name} me voy a comer`);

console.log(veganFoodList)



// ## 5. Reduce

// - [ ] 1.- Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numbers3 = [39, 2, 4, 25, 62];

const multipliedArray = numbers3.reduce((a, b) => a * b);

console.log(multipliedArray)





// ### Extras

// ## Map

// - [ ] 1.- Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

// ```
// const staff = [
//   {
//     name: "Pepe",
//     role: "The Boss",
//     hobbies: ["leer", "ver pelis"],
//   },
//   {
//     name: "Ana",
//     role: "becaria",
//     hobbies: ["nadar", "bailar"],
//   },
//   {
//     name: "Luis",
//     role: "programador",
//     hobbies: ["dormir", "comprar"],
//   },
//   {
//     name: "Carlos",
//     role: "secretario",
//     hobbies: ["futbol", "queso"],
//   }
// ]

// // Resultado esperado
// /*
//     [
//       'Pepe es TheBoss y le gusta leer y ver pelis',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Luis es programador y le gusta dormir y comprar',
//       'Ana es becaria y le gusta nadar y bailar',
//       'Carlos es secretario y le gusta fútbol y queso'
//     ]
//  */

// ```