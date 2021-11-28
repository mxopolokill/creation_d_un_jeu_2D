import {initScene} from "./scene.js";
import {initPaddle} from "./objects/paddle.js";
import {initBall, launchBall} from "./objects/ball.js";
import {initBrick} from "./objects/bricks.js";
import { initShield } from "./objects/shield.js";
import { initBoss } from "./objects/boss.js";
import {collision} from "./actions/collision.js";
import {drawScore} from "../js/actions/score.js";
import {drawLives} from "../js/actions/lives.js";
import { timer } from "./actions/timer.js";

import {score} from "./actions/score.js";





function main(){

  initScene();
  initBrick();
  collision();
  initPaddle();
  launchBall();
  initBall();
  initBoss();
  initShield();
  drawScore();
  drawLives();


  let data = {
    "pseudo": "JAIMEPASTONPSEUDO",
    "score": score 
  }
  console.log(data);

  fetch('http://127.0.0.1:8000/api/add_Scores?TOKEN=T2RE132201465140261546546548464', {
  method: "POST",

  body: JSON.stringify(data),
  
  headers: {"Content-type": "application/json",
             "Accept": "application/json"
}

}).then(response => response.json())
console.log(data); 
}

main();