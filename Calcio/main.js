/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const squadre = [

    {
       nome: "Roma",

       punti: 0,

       falliSubiti: 0 
    },

    {
        nome: "Lazio",
 
        punti: 0,
 
        falliSubiti: 0
    },

    {
        nome: "Inter",
 
        punti: 0,
 
        falliSubiti: 0
 

    },
];


function Falli (arraySquadre) {

    function getRandomIntInclusive(min, max) {
        
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }

    const recap = [];

    for (let i = 0; i < arraySquadre.length; i++) {
       
        arraySquadre[i].punti = getRandomIntInclusive(1,50);
        arraySquadre[i].falliSubiti = getRandomIntInclusive(1,50);

        const {nome,falliSubiti} = arraySquadre[i];

        //console.log (nome,falliSubiti);

        recap.push({nome,falliSubiti});

    }

  return recap;

}

const risultato = Falli(squadre);

console.log(risultato);
