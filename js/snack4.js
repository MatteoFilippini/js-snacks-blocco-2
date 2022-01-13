/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

// CREO L'ARRAY
const num = [1, 0, 4, 9];
// CONTROLLO CHE NON SIANO NELLA POSIZIONE PARI
let sum = 0;
for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
        // SOMMO
        sum += num[i];
    }
}
// STAMPO
console.log(num);
console.log(sum);