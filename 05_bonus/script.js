/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto 
seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const ora = prompt("inserisci l'ora");


// Dichiara la funzione qui.
function saluta(nome) {
    let saluto = ("");
    if( ora < 13){
        saluto = `buongiorno ${nome}`;
    } else if(ora > 13 && ora < 17) {
        saluto = `buon pomeriggio ${nome}`;
    } else if( ora > 17){
        saluto = `buonasera ${nome}`;
    }
       return saluto;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(saluta(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.