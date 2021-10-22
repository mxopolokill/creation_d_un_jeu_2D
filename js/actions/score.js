//import { ctx2 } from "../board.js"; //importation de board.js

//////////////////////////////////////
/// Variable pour le score et vies ///
//////////////////////////////////////
let score = 0; // le score débute a la valeur = 0 


/*=================================
       calcul score 
==================================*/

//calcul score 
function drawScore() {
    /*ctx2.font = "bold 20px Arial"; //style écriture 
    ctx2.fillStyle = "black";//couleur écriture
    ctx2.fillText("Score: "+score, 35, 75); //texte+nbre de vie  position ,largeur de l'objet canvas,y soit (texte,x, y, largeurMax)
    */
   document.getElementById("myscore").innerHTML = "Score : "+score;

}

function modifyScore(value){
    score = value; //modification du score a la destruction d'un brique compléte 
}

export {score, drawScore, modifyScore} //exportation des éléments
