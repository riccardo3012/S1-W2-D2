/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 
*/
let num1 = 10;
let num2 = 5;
function N(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}
let largestNumber = N(num1, num2);
console.log("Il numero più grande è: " + largestNumber);

/* ESERCIZIO 2
    Scrivi un algoritmo che mostri "not equal" in console se un numero intero 
    fornito è diverso da 5.
  */

function different() {
  if (number !== 5) {
    console.log("not equal");
  }
}

let number = 10;
different(8);

/* ESERCIZIO 3
    Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero 
    fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo
     su un motore di ricerca)
  */

function n5(n) {
  if (n % 5 === 0) {
    console.log("divisibile per 5");
  }
}

let nx = 10;
n5(nx);

/* ESERCIZIO 4
    Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno 
    di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
  */

function n8(n1, n2) {
  if (n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 - n2 === 8) {
    console.log("Uno dei numeri è 8 o la loro somma/sottrazione è 8");
  }
}
let n1 = 4;
let n2 = 4;
n8(n1, n2);

/* ESERCIZIO 5
    Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale 
    del carrello dell'utente in una variabile "".
    C'è una promozione in corso: se il totale del carrello supera 50, 
    l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione 
    ha un costo fisso pari a 10). Crea un algoritmo che determini l'ammontare 
    totale che deve essere addebitato all'utente per il checkout.
  */

let saldo = 30;
let Total;

if (saldo > 50) {
  Total = saldo;
} else {
  Total = saldo + 10;
}
console.log("L'ammontare totale da addebitare all'utente per il checkout è:", Total);

/* ESERCIZIO 7
    Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
    Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il 
    loro valore, dal più alto al più basso. Alla fine mostra il risultato in console.*/

const a = 15;
const b = 100;
const c = 365;
if (a >= b && a >= c) {
  if (b >= c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(b, a, c);
    c;
  } else {
    console.log(b, c, a);
  }
} else {
  if (a >= b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

/* ESERCIZIO 8
    Crea un algoritmo per verificare che un valore fornito sia un numero oppure no 
    (suggerimento: cerca su un motore di ricerca "typeof").
  */

let riccardo = 2;
if (typeof riccardo === "string") {
  console.log("il valore è una stringa");
} else {
  console.log("non è una striga");
}

/* ESERCIZIO 9
    Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
    (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */

const pippo = 10;
if (pippo % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
    Modifica la logica del seguente algoritmo in modo che mostri in console il 
    messaggio corretto in ogni circostanza.*/

let val = 11;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
    Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà 
    "city", il cui valore sarà "Toronto".
  */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
      Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per
      rimuovere la proprietà "lastName".
    */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
      Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per 
      rimuovere l'ultimo elemento della proprietà "skills".
    */

delete me.skills.pop;
console.log(me);

/* ESERCIZIO 14
      Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente 
      con i numeri da 1 a 10.
    */

let mirketto = [];
mirketto.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
console.log(mirketto);

/* ESERCIZIO 15
      Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 
      10, con il valore 100.
    */

const lastIndex = mirketto.length - 1;
mirketto[lastIndex] = 100;

console.log(mirketto);
