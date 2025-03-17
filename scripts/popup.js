/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la
 * fermeture de la popup de partage.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche la popup pour partager son score.
 */

function afficherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  popupBackground.classList.add("active");
}

/**
 * Cette fonction cache la popup pour partager son score.
 */
function cacherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  popupBackground.classList.remove("active");
}

/**
 * Cette fonction initialise les écouteurs d'événements qui concernent
 * l'affichage de la popup.
 */
function initAddEventListenerPopup() {
  let btnPartager = document.querySelector(".zonePartage button");
  let popupBackground = document.querySelector(".popupBackground");

  // Gestion de l'évènement au click du bouton Partager
  btnPartager.addEventListener("click", () => {
    afficherPopup();
  });

  // Gestion de l'évènement au click sur le popupBackground pour cacher la popup
  popupBackground.addEventListener("click", (event) => {
    // On veut cliquer uniquement sur l'extérieur de la popup pour la cacher ! sinon problème : on la ferme quand on click dessus pour remplir les champs
    if (event.target === popupBackground) {
      cacherPopup();
    }
  });
}

initAddEventListenerPopup();

// On écoute le click sur la div "popupBackground"
