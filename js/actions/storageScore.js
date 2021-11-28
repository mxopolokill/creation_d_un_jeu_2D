
//variables nom/score
export let namePlayer01;


let varNamePlayer = document.querySelector(".namePlayer");//récupération élément html input pour le nom
let buttonPlay = document.querySelector("#buttonPlay");//récupération élément html a pour évent click play
let getScoreboard = JSON.parse(localStorage.getItem("Scores"));

//récupération valeur nom joueur après event click play
varNamePlayer.addEventListener("keyup",(e)=>{
    namePlayer01 = varNamePlayer.value;
localStorage.setItem("nom", namePlayer01);
});

/*
    fetch(url, {
      mode: 'cors'
    })
      .then((response) =>
      {console.log(response);  
      response.json()})
     
        .then((data) => {

          console.log(data);

*/






   ////////////////////////////////////////////////////////////////////////////
  //                        récuperation Classement BDD    "GET"            //
 //                                                                        //
////////////////////////////////////////////////////////////////////////////


let textName = document.querySelector("#tab01");


let UrlAPI = `http://127.0.0.1:8000/api/Classement?TOKEN=T2RE132201465140261546546548464`;


let aPromise = fetch(UrlAPI);


aPromise

.then(function(response){
  console.log(response);
  if (!response){
    throw new Error("HTTP error, status =" + response.status);
  }
  var myJSON_promise = response.json();
  return myJSON_promise;
})

.then(function (myJSON){
  myJSON.forEach((user) =>{

    textName.innerHTML+= 
    `<tr>
        <td>${user.pseudo} </td>
        <td> ${user.score}</td>
    </tr>`;


  })
 

});




















    











