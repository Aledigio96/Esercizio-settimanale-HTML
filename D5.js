/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log(pets);
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets.shift());
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.licensePlate = "dom70re770";
  console.log(car);
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const bolide = {
  brand: "Lamborghini",
  model: "Urus",
  colore: "yellow",
  trims: ["titanium,", "sport"],
  licensePlate: "dom70re770",
};
cars.push(bolide);
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  justTrims.push(car.trims[0]);
  console.log(justTrims);
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < length.cars; i++) {
  const car = cars[i];
  if (car.color[0] === "b") {
    console.log("Frizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const posizionilettere = [];
for (let i = 0; i < length.charactersArray; i++) {
  const lettera = charactersArray[i];
  switch (lettera) {
    case "a":
      posizionilettere.push(1);
      break;

    case "b":
      posizionilettere.push(2);
      break;

    case "c":
      posizionilettere.push(3);
      break;

    case "d":
      posizionilettere.push(4);
      break;

    case "e":
      posizionilettere.push(5);
      break;

    case "f":
      posizionilettere.push(6);
      break;

    case "g":
      posizionilettere.push(7);
      break;

    case "h":
      posizionilettere.push(8);
      break;

    case "i":
      posizionilettere.push(9);
      break;

    case "l":
      posizionilettere.push(10);
      break;

    case "m":
      posizionilettere.push(11);
      break;

    case "n":
      posizionilettere.push(12);
      break;

    case "o":
      posizionilettere.push(13);
      break;

    case "p":
      posizionilettere.push(14);
      break;

    case "q":
      posizionilettere.push(15);
      break;

    case "r":
      posizionilettere.push(16);
      break;

    case "s":
      posizionilettere.push(17);
      break;

    case "t":
      posizionilettere.push(18);
      break;

    case "u":
      posizionilettere.push(19);
      break;

    case "v":
      posizionilettere.push(20);
      break;

    case "z":
      posizionilettere.push(21);
      break;
  }
  console.log(posizionilettere);
}
