 
/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

lancerJeu()

//On récupère des éléments HTML:

let inputEcriture = document.getElementById("inputEcriture")
console.log(inputEcriture)

let btnValiderMot = document.getElementById("btnValiderMot")
console.log(btnValiderMot)
            
let divZoneProposition = document.querySelector(".zoneProposition")
console.log(divZoneProposition)

let zoneScoreSpan = document.querySelector(".zoneScore span")
console.log(zoneScoreSpan)

