"use strict";
// 📘 TypeScript – Esercizi di Ripasso
const userIdString = '3';
const userIdNumber = 3;
console.log(userIdString);
console.log(userIdNumber);
const ipadProduct = {
    id: 1,
    name: 'Ipad',
    price: 800,
    tags: ['ipad', 'apple', 'new']
};
const phoneProduct = {
    id: 2,
    name: 'Samsung Phone',
    price: 600,
};
console.log(ipadProduct);
console.log(phoneProduct);
// =======================================
// ARRAY
// =======================================
// 📝 Esercizio 3.1
// Dichiara un array di numeri che rappresentano temperature in gradi Celsius.
const celsiusGrades = [23, 30, 12, 35];
console.log(celsiusGrades);
const players = [
    {
        name: 'Vittorio',
        score: 50
    },
    {
        name: 'Laura',
        score: 74.3
    },
    {
        name: 'Celeste',
        score: 80
    }
];
console.log(players);
// =======================================
// TUPLE
// =======================================
// 📝 Esercizio 4.1
// Dichiara una tupla `[number, number]` per rappresentare una coordinata GPS.
const coordinate = [23, 9];
console.log(coordinate);
// 📝 Esercizio 4.2
// Dichiara una tupla `[string, number, boolean]` che rappresenta rispettivamente: nome, età, e stato attivo.
// =======================================
// UNION TYPES
// =======================================
// 📝 Esercizio 5
// Scrivi una funzione `printId(id)` che accetta una stringa oppure un numero.
// - Se è una stringa, stampala in maiuscolo.
// - Se è un numero, stampa "ID: " seguito dal numero.
// =======================================
// 6. OOP – Classi & Ereditarietà
// =======================================
// 📝 Esercizio 6.1
// Crea una classe `Person` con:
// - proprietà: `name` (string), `age` (number)
// - metodo: `greet()` → stampa `Ciao, sono {name}`
// 📝 Esercizio 6.2
// Crea una sottoclasse `Student` che estende `Person` e aggiunge:
// - proprietà: `grade` (number)
// - metodo: `isPassing()` → restituisce `true` se `grade >= 60`
