// Esercizio 1
// Esercizio 1: Creare 5 variabili contenenti un numero, scrivere un programma in modo da ottenere la somma tra questi numeri e la media.
// In console deve uscire la seguente frase: ‘La somma tra i numeri equivale a … e la media risulta...’
// let n1 = 1;
// let n2 = 2;
// let n3 = 3;
// let n4 = 4;
// let n5 = 5;

// let resultSum = n1 + n2 + n3 + n4 + n5;
// let resultMean = resultSum / 5;

// console.log(`La somma tra i numeri equivale a ${resultSum} \ne la media è ${resultMean}`);


// Esercizio 2 
// Esercizio 2:  Scrivi due variabili con l’anno corrente e l’anno di nascita, e stampa in console:
// l’età della persona, 
// quanti anni sono necessari per raggiungere i 100
// e stampi in console la frase: “Hai 26 anni e ti mancano 74 anni per compierne 100”

// let myBirthday = 1996
// let nowYear = 2023

// let myAge = nowYear - myBirthday
// console.log(`Hai ${myAge} anni e ti mancano ${100 - myAge}`)








// Esercizio 3: Scrivere un programma che dati:
// a) Un numero totale di gatti (44) 
// b) Il numero dei gatti presenti in ogni fila (6)
// Restituisca in output: 
// Il numero di file risultanti 
// indicare il numero di gatti mancanti per completare una nuova fila
// Esempio: “Ci sono 7 file di gatti e ne mancano 4 per una nuova fila, con un avanzo di 2”

// let cats = 44;
// let numberForQueue = 6;
// let catsOut = 44%6;
// let totQueue = Math.floor(cats / numberForQueue);
// let catsMissing =  numberForQueue - catsOut;

// console.log(`Ci sono ${totQueue} file di gatti e ne mancano ${catsMissing} per una nuova fila, con un avanzo di ${catsOut}`);


// Utilizzando i seguenti operandi (false, 23, NaN, ‘Ciao’, null) scegliere i giusti operatori di confronto e logici per fare in modo che il risultato sia true. Utilizzare tutti gli operandi una sola volta ciascuno.


// let operando1 = 23;
// let operando2 = 'ciao';
// let operando3 = false;
// let operando4 = null;
// let operando5 = NaN

// console.log((operando1 !== operando2) > operando3 || null ===NaN);


// Scrivi un programma che dati sette valori relativi alle temperature della settimana stabilisca la giornata più calda e quella più fredda.
// Esempio:
// Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
// “La temperatura piu’ calda e’ 31  quella piu’ fredda -6”     PROVATE A CERCARE  Math.max()  E  Math.min() che vi servono per l esercizio.

// let temperature = (10, -2, 31, 22, 15, -6, 7);

// let tempMax = Math.max(10, -2, 31, 22, 15, -6, 7);
// let tempMin = Math.min(10, -2, 31, 22, 15, -6, 7);

// console.log(`La temperatura più alta è stata di ${tempMax} gradi, quella minima di ${tempMin} gradi. `);

let numbers = [1, -2, 10, 7];
console.log('Maggiore =' + Math.max(...numbers));
console.log('Minore=' + Math.min(...numbers));


let anno = 2024;
let annoNascita = 1996
let delirio = 100;

let eta = anno - annoNascita;

console.log('Hai ' + eta + ' anni');

let nonno = delirio - eta;
console.log('Ti mancano ' + nonno + ' anni');

let numero = 245;
let numberToString = numero.toString();
console.log(numberToString.length);