alert("Vous êtes bien sur notre site !");

// on a appris à modifier une div : //
document.getElementById("madiv").innerHTML="le nouveau text";
//document.getElementById("madiv") : qui va récupérer l'emplacement de la div
//.innerHTML="le nouveau text"; qui modifie le HTML de la div

/* ALGORITHMIQUE

1 VARIABLES
Lorsqu'on va stocker ou manipuler on va avoir besoin de données 
qu'on va mettre dans des variables

2 CONDITIONS

3 BOUCLES

4 FONCTIONS
*/

/* 1 LES VARIABLES */
// VARIABLES NUMERIQUES SANS GUILLEMETS
//CREATION DE LA VARIABLE NUMERIQUE NOM CONTENANT 34
age=34;
alert(age);

// VARIABLES CHAINES DE CARATERES AVEC GUILLEMETS
//CREATION DE LA CHAINE DE CARACTERES AGE CONTENANT MELKI
nom="Melki";
alert(nom);

/* 2 LES CONDITIONS */
if (age > 17) {
    alert("Vous êtes majeur  ! ");
}

if (age < 18) {
    alert("Vous êtes mineur ! ");
}

/* 3 LES BOUCLES */
//objectif : afficher 10 fois l'alert : je suis heureux X fois !
// ON DEMARRE la variable I A 0; ON S ARRETE A 10; A CHAQUE FOIS ON INCREMENTE DE 1
/*for (i=0;i<10;i++) {
    alert("Je suis heureux !");
}*/

/*for (i=0;i<5;i++) {
    alert("Bonjour");
}*/

/* 4 LES FONCTIONS */
// SEGMENTER SON CODE
// ON VA AVOIR DU CODE QUI VA ETRE DANS UNE FONCTION

// CREATION DU CORPS DE LA FONCTION
function ma_fonction(){
    alert("je suis dans la fonction VOILA CE QU IL SE PASSE! ");
}

// L APPEL DE LA FONCTION
ma_fonction()

