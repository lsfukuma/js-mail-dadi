//"Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)
//Chiedere all'utente la sua email
var mail_utente = prompt('Qual è la tua email?', 'punkis@yahoo.com');

console.log(mail_utente);

//Fare un array con mail:
var listamail = [
    'georgia@hotmail.com' , 'abcdefg@gmail.com' , 'cynthia@libero.it' , 'mariorossi@alice.it' , 'giorgio@unibo.it', 'info@pam.it' , 'client@amazon.com' , 'fulano@tiscali.it', 'francesco@pm.me' ,    'boser@me.com' ,
    'hstiles@yahoo.com', 'animats@live.com', 'trygstad@hotmail.com' , 'garyjb@msn.com' ,
    'punkis@yahoo.com' , 'blixem@live.com' ,
    'jsmith@me.com' , 'ilyaz@yahoo.ca' ,
    'syncnine@yahoo.ca' , 'preneel@aol.com' ,
    'fhirsch@yahoo.ca'
];

console.log(listamail);

//Estrarre le mail dell'array
for (var i = 0; i < listamail.length ; i++) {
    // estraggo le mail dell array
    var mail = listamail[i];
    console.log('email iscritto = ' + mail);
    if (mail_utente == mail) {
    console.log(' Sei in lista');
    document.writeln('Sei iscritto con la mail: ' + mail );
    }
}
