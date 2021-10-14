/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/
const askMail = prompt('Inserisci la tua email');
const mailList = ['matteo.polonio@gmail.com', 'cicciopasticcio@gmail.com', 'asdrubalefinecchi@gmail.com'];


if (mailList.indexOf(askMail) >= 0) {
    document.querySelector('.result').innerHTML = ('Email verificata! Accesso consentito');

} else {
    document.querySelector('.result').innerHTML = ('Spiacente ma la tua email non è valida');

}
