//Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

//Chiedere all'utente un numero tra 1 e 6
var human_number = prompt('Scegli un numero tra 1 e 6' , '5');

console.log(human_number);

//Estrarre un numero casuale tra 1 e 6
var pc_number = (Math.floor(Math.random() * 6) + 1 );

console.log(pc_number);

//Verificare chi ha il numero più alto
if (human_number > pc_number) {
    console.log('Il numero  ' + human_number + ' che hai scelto è il più alto: hai vinto!');
    document.writeln('Il numero  ' + human_number + ' che hai scelto è il più alto: hai vinto!');
} else if (human_number == pc_number) {
    console.log('Avete scelto lo stesso numero: pareggio!');
    document.writeln('Avete scelto lo stesso numero: pareggio!');
} else {
    console.log('Il numero ' + pc_number + ' scelto dal pc è più alto:  hai perso!');
    document.writeln('Il numero ' + pc_number + ' scelto dal pc è più alto: hai perso!');
}
