/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa 
con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore 
utilizzando destructuring e template literal */


//Definisco il mio array di oggetti con nome e peso//
const bicicletta = [

    {
       nome: "cityBike",

       peso: 20 
    },

    {
       nome: "mountainBike",

       peso: 30 
    },

    {
       nome: "proBike",

       peso: 8 
    }

];

//Definisco una funzione che mi gestisca il calcolo del peso minore//
function CalcoloPesoMinore (array) {
    //Utilizzo la destrutturazione dell'array
    let {peso,nome} = array[0];

    //Scorro gli elementi del mio array//
    for (let i=0; i < array.length; i++) {
        //Definisco le condizioni di calcolo
        if (array[i].peso < peso) {
            peso = array[i].peso;
            nome = array[i].nome;
        }
    }
    
    let risultato = `Il prodotto che pesa meno è ${nome} che pesa ${peso}kg`;

    return risultato; 

}

let Calc = CalcoloPesoMinore(bicicletta);
    console.log(Calc);






