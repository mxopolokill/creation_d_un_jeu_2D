// Variable pour gameover //
//variable nombre de vies
let lives = 8 ;

//nombre de vies
function drawLives() {

    document.getElementById("mylife").innerHTML = "Lives: "+lives;
}

function modifyLives(value){
    lives = value;
}

export {lives, drawLives, modifyLives}
