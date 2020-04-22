//"Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)
//Chiedere all'utente la sua email
var email_utente = prompt('Qual è la tua email?', 'punkis@yahoo.com');

console.log(email_utente);

//Fare un array con mail:
var listaemail = [
    'georgia@hotmail.com' , 'abcdefg@gmail.com' , 'cynthia@libero.it' , 'mariorossi@alice.it' , 'giorgio@unibo.it', 'info@pam.it' , 'client@amazon.com' , 'fulano@tiscali.it', 'francesco@pm.me' ,    'boser@me.com' ,
    'hstiles@yahoo.com', 'animats@live.com', 'trygstad@hotmail.com' , 'garyjb@msn.com' ,
    'punkis@yahoo.com' , 'blixem@live.com' ,
    'jsmith@me.com' , 'ilyaz@yahoo.ca' ,
    'syncnine@yahoo.ca' , 'preneel@aol.com' ,
    'fhirsch@yahoo.ca'
];

console.log(listaemail);

var email_trovata = false;

//verificare ogni elemento dell'array
for (var i = 0; i < listaemail.length ; i++) {
    // estraggo le mail dell array
    var email = listaemail[i];
    console.log('email iscritta = ' + email);
    // verificare email dell'utente con ogni elemento dell'array
    if (email_utente == email) {
        //ricordare di aver trovato la email
        email_trovata = true;
        console.log(' email trovata');

    } else {
        console.log('email diversa');
    }
}

// dopo aver verificato TUTTI gli elementi: messaggio all'utente
//valutare il contenuto
if (email_trovata == true){
    console.log('Sei in lista');
    document.writeln('Sei iscritto con l\'email: ' + email_utente);
} else {
    console.log('Non sei in lista');
    document.writeln('Non sei iscritto con l\'email: ' + email_utente);
}
