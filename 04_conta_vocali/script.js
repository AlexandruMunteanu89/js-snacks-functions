/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali(stringa){
    let quantiVocali = 0;
    const listaVocali = ['a', 'e', 'i', 'o', 'u'];
   for (let index = 0; index < stringa.length; index++) {
    if (listaVocali.includes(stringa.charAt(index))){
        quantiVocali++;
    }
}
return quantiVocali;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(vocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)