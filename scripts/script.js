/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */

let afficherResultat = (score, nbMotsProposes) => {
  zoneScoreSpan.textContent = `${score} / ${nbMotsProposes}`;
};

/**
 * Cette fonction demande à l'utilisateur s'il veut jouer avec des phrases ou des mots"
 * @param {string} choix : le choix choisi
 */

// let choisirPhrasesOuMots = () => {
//   let choix = prompt(
//     "Voulez-vous des phrases ou des mots ? tapez votre souhait svp"
//   );
//   while (choix !== "mots" && choix !== "phrases") {
//     choix = prompt(
//       "Voulez-vous des phrases ou des mots ? tapez votre souhait svp"
//     );
//   }
//   return choix;
// };

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier,
 * dans la zone "zoneProposition"
 * @param {string} listePropositions : la proposition à afficher
 */

// let lancerBoucleDeJeu = (listePropositions) => {
//   let score = 0;
//   for (let i = 0; i < listePropositions.length; i++) {
//     let proposition = prompt(`Tapez la proposition: ${listePropositions[i]}`);

//     if (proposition === listePropositions[i]) {
//       score++;
//     }
//   }
//   return score;
// };

// Cette fonction affiche une proposition, que le joueur devra recopier,
//  * dans la zone "zoneProposition"
//  * @param {string} listePropositions : la proposition à afficher
//  */
let i = 0;

function afficherProposition(proposition) {
  let inputEcriture = document.getElementById("inputEcriture");
  let divZoneProposition = document.querySelector(".zoneProposition");
  if (i < listeMots.length) {
    divZoneProposition.textContent = proposition;
    i++;
  } else {
    proposition = divZoneProposition.textContent = "Fin du jeu";
    btnValider.disabled = true;
  }
  inputEcriture.value = "";
  return proposition;
}

// POPUP FORMULAIRE:

/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom
 * @throws {Error}
 */

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format.
 * @param {string} email
 * @throws {Error}
 */

/**
 * Cette fonction affiche le message d'erreur passé en paramètre.
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs.
 * @param {string} message
 */

/**
 * Cette fonction permet de récupérer les informations dans le formulaire
 * de la popup de partage et d'appeler l'affichage de l'email avec les bons paramètres.
 * @param {string} scoreEmail
 */

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */

function lancerJeu() {
  // Initialisation
  // let choix = choisirPhrasesOuMots();
  // let nbPropositions = 0;
  let i = 0; //Compteur de propositions affichés
  let score = 0;

  let btnValider = document.getElementById("btnValider");
  let inputEcriture = document.getElementById("inputEcriture");

  afficherProposition(listeMots[i]); // On affiche le 1er mot au début

  btnValider.addEventListener("click", () => {
    if (listeMots[i] === inputEcriture.value) {
      score++;
      afficherResultat(score, listeMots.length);
    }
    i++;
    afficherProposition(listeMots[i]);
  });
}




// if (choix === "mots") {
//   score = lancerBoucleDeJeu(listeMots);
//   nbPropositions = listeMots.length;
// } else {
//   score = lancerBoucleDeJeu(listePhrases);
//   nbPropositions = listePhrases.length;
// }

// afficherResultat(score, nbPropositions);

// lancerJeu();//

// Gestion de l'événement click sur le bouton "valider"

// Gestion de l'événement change sur les boutons radios.

// Gestion de l'événement submit sur le formulaire de partage.
