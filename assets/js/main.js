/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

const askMail = prompt('Inserisci la tua email')
const mailList = ['matteo.polonio@gmail.com', 'cicciopasticcio@gmail.com', 'asdrubalefinecchi@gmail.com']

console.log(askMail);
console.log(mailList);

if (askMail == mailList[0]) {
    console.log('Email verificata!');
} else {
    console.log('spiacente ma la tua email non è presente');
}