# 📚 Esercizi TypeScript – Tipi, Array, Tuple e OOP

Questa cartella contiene una raccolta di esercizi pensati per praticare i concetti fondamentali di **TypeScript**, tra cui type alias, interfacce, array, tuple, union types e classi con ereditarietà.

---

## 📝 Elenco Esercizi

| #  | Descrizione |
|----|-------------|
| 1  | Crea un type alias `UserID` che può essere stringa o numero |
| 2  | Definisci un’interfaccia `Product` con proprietà `id`, `name`, `price` e `tags` (facoltativo) |
| 3.1| Dichiara un array di numeri per rappresentare temperature |
| 3.2| Dichiara un array di oggetti `{ name, score }` per una classifica |
| 4.1| Dichiara una tupla `[number, number]` per coordinate GPS |
| 4.2| Dichiara una tupla `[string, number, boolean]` per rappresentare nome, età e stato attivo |
| 5  | Scrivi una funzione `printId(id)` che gestisce stringhe e numeri |
| 6.1| Crea una classe `Person` con `name`, `age` e metodo `greet()` |
| 6.2| Crea una sottoclasse `Student` che estende `Person` e aggiunge `grade` e metodo `isPassing()` |

---

## 🎯 Obiettivi didattici

- Familiarizzare con **type alias**, interfacce e union types
- Comprendere l’uso di **array e tuple** in TypeScript
- Scrivere **funzioni tipizzate**
- Apprendere la **programmazione orientata agli oggetti**: classi, ereditarietà e metodi

---

## 🛠️ Come usare questi esercizi

1. Crea una cartella `ts-exercises` (o usa quella esistente)
2. In ciascuna sottocartella (`01`, `02`…) crea un file `exercises.ts`
3. Incolla il contenuto degli esercizi al suo interno
4. Apri il file con VS Code o un qualsiasi editor TypeScript
5. Compila TypeScript in JavaScript:

```
npm run build
```

6. Esegui un esercizio specifico (ad esempio il primo):

```
npm run 1
```

⚡ Lo script `1` esegue il file compilato `dist/ts-exercises/01/exercises.js`. 