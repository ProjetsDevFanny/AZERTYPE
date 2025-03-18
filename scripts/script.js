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

let afficherResultat = (score, nbPropositions) => {
  let zoneScoreSpan = document.querySelector(".zoneScore span");
  zoneScoreSpan.textContent = `${score} / ${nbPropositions}`;
};

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier,
 * dans la zone "zoneProposition"
 * @param {string} listePropositions : la proposition à afficher
 */

function afficherProposition(proposition) {
  let divZoneProposition = document.querySelector(".zoneProposition");
  divZoneProposition.textContent = proposition;
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */

function lancerJeu() {
  // Initialisation
  let score = 0;
  let i = 0; //Compteur de propositions affichés
  let listePropositions = listeMots;

  let btnValider = document.getElementById("btnValider");
  let inputEcriture = document.getElementById("inputEcriture");

  afficherProposition(listePropositions[i]); // On affiche le 1er mot au début

  // Gestion de l'évènement au click sur le bouton valider
  btnValider.addEventListener("click", () => {
    if (inputEcriture.value === listePropositions[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    inputEcriture.value = "";
    if (listePropositions[i] === undefined) {
      afficherProposition("Fin du jeu");
      btnValider.disabled = true;
    } else {
      afficherProposition(listePropositions[i]);
    }
  });

  // Gestion de l'évènement "change" sur les boutons radios
  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  // console.log(listeBtnRadio); // Vérifie que les éléments sont bien récupérés

  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
      if (event.target.value === "1") {
        listePropositions = listeMots;
      } else {
        listePropositions = listePhrases;
      }
      // On modifie l'affichage en direct
      afficherProposition(listePropositions[i]);
    });
  }

  let form = document.querySelector("form");

  // btnEnvoyerMail.addEventListener("submit", (event) => {
  //   event.preventDefault();
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const baliseNom = document.getElementById("nom");
    const nom = baliseNom.value.trim();
    // const regexNom = new RegExp(); // Synthaxe si la regex est dynamique (avec plusieurs variables)

    console.log(validerNom(nom));

    const baliseEmail = document.getElementById("email");
    const email = baliseEmail.value.trim();

    console.log(validerEmail(email));

    if (validerNom(nom) === true && validerEmail(email) === true) {
      let scoreEmail = `${score} / ${i}`;
      afficherEmail(nom, email, scoreEmail);
    } else {
      alert(
        "Veuillez rentrez un nom et un email valide svp (au moins 2 caractères pour le nom)"
      );
    }
  });

  afficherResultat(score, i);
}

// POPUP FORMULAIRE:

/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */
function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`;
  location.href = mailto;
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom
 * @throws {Error}
 */

function validerNom(nom) {
  const regexNom = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9' -]{2,}$/;
  return regexNom.test(nom);
}

// autre écriture :
// function validerNom(nom) {
//   if (nom.length >= 2) {
//     return true;
//   }
//   return false;
// };

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format.
 * @param {string} email
 * @throws {Error}
 */
function validerEmail(email) {
  const regexEmail = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i;
  return regexEmail.test(email);
}

// autre écriture :
// function validerEmail(email) {
//   let regerxEmail = new RegExp ("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
//   if(regerxEmail.text(email)) {
//     return true
//   }
//   return false
// }

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

let sujet = "";
let message = "";
