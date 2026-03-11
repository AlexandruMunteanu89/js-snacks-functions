/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array
 contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function ritornaParolaIniziaCon(nomi, iniziale){
    const nomiSelezionati = [];
    for (let index = 0; index < nomi.length; index++) {
        if(nomi[index][0].toLowerCase() === iniziale.toLowerCase()){
            nomiSelezionati.push(nomi[index]);
        }
    }
    return nomiSelezionati;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(ritornaParolaIniziaCon(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]