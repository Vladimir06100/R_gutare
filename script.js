// CORRECTION ATELIER N°14

//  AJOUT DU LOGO AIR GUITAR
// RÉCUPÉRER L'ELEMENT IMAGE DEPUIS LE DOM
let image = document.querySelector(".logo");
// AJOUTER UN ATTRIBUT SRC AVEC LE LIEN DE MON IMAGE
image.src = "./images/Logo.png";

// MODIFICATION DE LA NAV BAR
/**************************************************************************************** */
//  PENSER W GUITAR EN ESPRIT R'GUITAR
let element = document.querySelector(
	"li.menu-item:nth-child(1) > a:nth-child(1) "
);
//  Modification du texte de ma balise
element.innerText = "L'esprit R'Guitar";

// NOS CAMIONS A NOS GRATTES MODIFICATION
/**************************************************************************************** */
let element1 = document.querySelector(
	"li.menu-item:nth-child(2) > a:nth-child(1) "
);
// Modification du texte
element1.innerText = "Nos grattes";
/**************************************************************************************** */
// CHANGEMENT DE TEXTE POUR "VOTRE TEXTE EST FAUX"
// Récupère l'element depuis le DOM
let element2 = document.querySelector("#topHeadline");

// Modifier le texte de l'element 2

element2.innerText = "Votre meilleur riff mérite";
/**************************************************************************************** */
/**
 * AJOUT D'UN PARAGRAPHE
 */
/**************************************************************************************** */
// Récupère le parent depuis le DOM
let parentParagraphe = document.querySelector("#philosophy > p:nth-child(2)");
// On crée l'enfant (un paragraphe)
let enfantParagraphe = document.createElement("p");
// On donne une valeur à cet enfant
enfantParagraphe.innerText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi et in, molestias aspernatur doloremque aliquid asperiores velit maxime quaerat. Aliquam, natus labore. Repellendus voluptates dicta officiis magnam voluptas! Dolorem? ";

// FAIRE APPARAÎTRE L'ENFANT DANS LE PARENT
parentParagraphe.appendChild(enfantParagraphe);
/**************************************************************************************** */
// CHANGEMENT DE STYLE DU TITRE "Notre philosophie en 3 points"
let redTitle = document.querySelector("#philosophy > h2:nth-child(3)");

// Changement de couleur pour mon redTitle
redTitle.style.color = "#b14949";
/**************************************************************************************** */
// RAJOUTER UN LI AU PARENT UL
// Récupère le parent depuis le DOM (ul)
let ul = document.querySelector("#philosophy > ul:nth-child(4)");
// Création de l'enfant (li)
let li = document.createElement("li");
// Ajout d'un innerTexte à notre enfant (LI)
li.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

// Apparition de l'enfant LI dans le parent UL
ul.appendChild(li);
