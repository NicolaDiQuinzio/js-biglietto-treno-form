/*Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo due caselle di input e almeno un bottone per inviare i dati in pagina, in cui l’utente potrà inserire i dati e poi visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

function calcolaPrezzo() {
  /* I define the variables*/
  const name = document.getElementById("name").value;
  const km = document.getElementById("km").value;
  const age = document.getElementById("age").value;
  /*calc the price*/
  let price = km * 0.21;

  if (age < 18) {
    price *= 0.8; /*discount 20%*/
  } else if (age >= 65) {
    /*discount 40%*/
    price *= 0.6;
  }
  /* stamp in output the results*/
  const output = document.getElementById("output");
  output.innerHTML += "<p>Il tuo Nome " + name + " nome</p>";
  output.innerHTML = "<p>Hai percorso " + km + " km.</p>";
  output.innerHTML += "<p>La tua età è di " + age + " anni.</p>";
  output.innerHTML +=
    "<p>Il prezzo del tuo biglietto è di " + price.toFixed(2) + " €.</p>";
}
