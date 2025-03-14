/*********************************************************************************
 *
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu.
 *
 *********************************************************************************/

lancerJeu()

//On récupère des éléments HTML:

let inputEcriture = document.getElementById("inputEcriture");

// console.log(inputEcriture);

// let btnValider = document.getElementById("btnValider");
// console.log(btnValider);

// let ZoneProposition = document.querySelector(".zoneProposition");
// console.dir(ZoneProposition);
// console.log(Object.assign({}, ZoneProposition));

let zoneScoreSpan = document.querySelector(".zoneScore span");
// console.log(zoneScoreSpan);
// console.table(divZoneProposition);

let listeInputRadio = document.querySelectorAll(".optionSource input");
// console.log(listeInputRadio);
