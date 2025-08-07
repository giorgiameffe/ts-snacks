// 📘 TypeScript – Esercizi di Ripasso

// =======================================
// TYPE ALIAS
// =======================================

// 📝 Esercizio 1
// Crea un type alias `UserID` che rappresenta un valore che può essere una stringa oppure un numero.

type UserID = string | number;

const userIdString: UserID = '3';

const userIdNumber: UserID = 3;

console.log(userIdString);
console.log(userIdNumber);


// =======================================
// INTERFACE
// =======================================

// 📝 Esercizio 2
// Definisci un’interfaccia `Product` con le seguenti proprietà:
// - `id`: number
// - `name`: string
// - `price`: number
// - `tags`: array di stringhe (facoltativo)

interface Product {
    id: number,
    name: string,
    price: number,
    tags?: string[]
}

const ipadProduct: Product = {
    id: 1,
    name: 'Ipad',
    price: 800,
    tags: ['ipad', 'apple', 'new']
}

const phoneProduct: Product = {
    id: 2,
    name: 'Samsung Phone',
    price: 600,
}

console.log(ipadProduct);
console.log(phoneProduct);

// =======================================
// ARRAY
// =======================================

// 📝 Esercizio 3.1
// Dichiara un array di numeri che rappresentano temperature in gradi Celsius.

const celsiusGrades: number[] = [23, 30, 12, 35];
console.log(celsiusGrades);


// 📝 Esercizio 3.2
// Dichiara un array di oggetti `{ name: string, score: number }` per rappresentare una classifica.

interface Player {
    name: string,
    score: number
}

const players: Player[] = [

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
]

console.log(players);


// =======================================
// TUPLE
// =======================================

// 📝 Esercizio 4.1
// Dichiara una tupla `[number, number]` per rappresentare una coordinata GPS.


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