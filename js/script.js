console.log("JSOK");

/*
1. Creiamo una lista di email
2. Chiediamo all'utente la mail
3. Verifichiamo la mail
   - **Se** è presente
     - Gli diamo il benvenuto
   - **Altrimenti**
     - Visualizza un messaggio di errore
*/

// List Mail

const registeredEmail = [
  "pasquale@gmail.com",
  "marco@gmail.com",
  "francesco@gmail.com",
];

// Ask Mail

const emailUser = prompt("Inserisci la tua email", "marco@gmail.com").trim();
console.log(emailUser);

// Validation

let isValid = "L'email non è valida";

for (let i = 0; i < registeredEmail.length; i++) {
  if (emailUser === registeredEmail[i]) {
    isValid = "Benvenuto";
  }
}
console.log(isValid);
