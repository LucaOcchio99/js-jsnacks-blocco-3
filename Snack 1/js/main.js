/*Snack 1
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti

2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100

3. Stampare Nome, cognome, età e codice giocatore.

4. Creare un array di 10 giocatori di basket, con le regole sopra indicate

5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di 
successo per i tiri da 3 punti superiore all’80%.*/


//1
const giocatore_basket = {
     codice_giocatore : cifre_random(100, 899) + generateRandomString(3),
     nome_giocatore : 'Luca',
     cognome_giocatore : 'Occhionorelli',
     eta_giocatore : '21',
     media_punti : cifre_random(0, 50),
     successo_tiri : cifre_random(0, 100),
}
console.log(giocatore_basket)

//2
function cifre_random(min, max){
    const numero_casuale = Math.round(Math.random()*max)+min;
    return numero_casuale;
}

function generateRandomString(iLen) {
    var sRnd = '';
    var sChrs = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    for (var i = 0; i < iLen; i++) {
      var randomPoz = Math.floor(Math.random() * sChrs.length);
      sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
  }

//3 Stampare Nome, cognome, età e codice giocatore.

console.log(giocatore_basket.nome_giocatore, giocatore_basket.cognome_giocatore, giocatore_basket.eta_giocatore);



