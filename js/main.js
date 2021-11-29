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

}

main();