console.log("JSOK");

/*
1. Generare un numero random per l'utente
2. Generare un numero random per la CPU
3. Visualizzare il numero dell'utente e della CPU

4. **Se** il numero dell'utente è più alto

   - Visualizza un messaggio " ha vinto l'utente"

   **Se** il numero della CPU è più alto

   - Visualizzare un messaggio "ha vinto la CPU"

   **Altrimenti** è un pareggio

   - Visualizzare un messaggio "pareggio"
*/

// I generate two random numbers
const userNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, cpuNumber);

let result = "C'è stato un pareggio";

// Conditions

if (userNumber > cpuNumber) {
  result = "Ha vinto l'utente";
} else if (userNumber < cpuNumber) {
  result = "Ha vinto la CPU";
}

console.log(result);
