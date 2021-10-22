
//variables nom/score
export let namePlayer01;
let varNamePlayer = document.querySelector(".namePlayer");//récupération élément html input pour le nom
let buttonPlay = document.querySelector("#buttonPlay");//récupération élément html a pour évent click play
const getScoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];

//récupération valeur nom joueur après event click play
varNamePlayer.addEventListener("keyup",(e)=>{
    namePlayer01= varNamePlayer.value;
localStorage.setItem("nom", namePlayer01);
});



getScoreboard.sort(function(a,b) {
    return a.timer - b.timer;
});
getScoreboard.sort(function(a,b) {
    return b.score - a.score;
});



let textName = document.querySelector("#tab01");
for(let i=0;i<=11;i++) {
textName.insertAdjacentHTML('beforebegin', '<tr><td class="tabname">' +getScoreboard[i].nom +'</td><td class="tabname">' +getScoreboard[i].score +'</td><td class="tabname">' +getScoreboard[i].timer +'</td></tr>');
}



//si scorea > scoreb alors noma avant nomb





    











