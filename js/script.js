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
const emailElement = document.getElementById("email-validation");
const inputElement = document.getElementById("email");
const button = document.getElementById("button");

// List Mail

const registeredEmail = [
  "pasquale@gmail.com",
  "marco@gmail.com",
  "francesco@gmail.com",
];

let isValid = "";

button.addEventListener("click", function () {
  // Ask Mail

  const emailUser = inputElement.value;
  console.log(emailUser);

  // Validation

  isValid = "L'email non è valida";

  for (let i = 0; i < registeredEmail.length; i++) {
    if (emailUser === registeredEmail[i]) {
      isValid = "Benvenuto";
    }
  }

  emailElement.innerText = isValid;
});
