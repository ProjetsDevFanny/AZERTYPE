/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

let score = 0;

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */

let afficherResultat = (score, nbMotsProposes) => {
  prompt(`Votre score est de: ${score} / ${nbMotsProposes}`);
};

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier,
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */

let afficheProposition = (listePropositions) => {
  for (let i = 0; i < listePropositions.length; i++) {
    let proposition = prompt(`Tapez la proposition: ${listePropositions[i]}`);

    if (proposition === listePropositions[i]) {
      score++;
    }
  }
  afficherResultat(score, listePropositions.length);
};

/**
 * Cette fonction demande à l'utilisateur s'il veut jouer avec des phrases ou des mots"
 * @param {string} choixUtilisateur : le choix choisi
 */

let choisirPhrasesOuMots = () => {
  let choixUtilisateur = prompt(
    "Voulez-vous des phrases ou des mots ? tapez votre souhait svp"
  );
  while (choixUtilisateur !== "mots" && choixUtilisateur !== "phrases") {
    choixUtilisateur = prompt(
      "Voulez-vous des phrases ou des mots ? tapez votre souhait svp"
    );
  }
  // return choixUtilisateur;
  if (choixUtilisateur === "mots") {
    afficheProposition(listeMots);
  } else {
    afficheProposition(listePhrases);
  }
};

choisirPhrasesOuMots();

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

// Gestion de l'événement click sur le bouton "valider"

// Gestion de l'événement change sur les boutons radios.

// Gestion de l'événement submit sur le formulaire de partage.
