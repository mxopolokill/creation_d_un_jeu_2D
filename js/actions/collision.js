import {
  Bodies,
  Body,
  Composite,
  engine,
  Events,
  world,
  World,
} from "../matter.js";
import { score, modifyScore, drawScore } from "../actions/score.js";
import { drawLives, lives, modifyLives } from "../actions/lives.js";
import { initPowerUp } from "../objects/powerUp.js";
import { boss, bossLife, modifyLifeBoss } from "../objects/boss.js";
import { countRowBrick, countColumnBrick } from "../objects/bricks.js";
import { sec } from "./timer.js";

//variable objet powerUp
export let powerUp = {};
const powerUpArray = [];
export let varPowerUp;
export let varPaddle;
export let endScore;

//appel pseudo
let namePlayer01 = localStorage.getItem("nom");
const getScoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];

/*=========================
        COLLISIONS
==========================*/

export function collision() {
  Events.on(engine, "collisionStart", function (event) {
    let pairs = event.pairs;

    //collision brick/ball
    if (pairs[0].bodyA.label == "ball" && pairs[0].bodyB.label == "brick") {
      modifyScore(score + 1); //modif score suite collision ball/brick
      if (pairs[0].bodyB.ispowerUp >= 9) {
        //création powerUp
        powerUp = Bodies.rectangle(
          pairs[0].bodyB.position.x,
          pairs[0].bodyB.position.y,
          40,
          20,
          {
            isStatic: false,
            label: "powerUp",
            namePowerUp: Math.floor(Math.random() * 3) + 1, // powerup aléatoire  1 à 3
            isSensor: true,
          }
        );
        Composite.add(engine.world, [powerUp]);
        powerUpArray.push(powerUp);
      }
      if (powerUp.namePowerUp == 1) {
        powerUp.render.fillStyle = "black";
      } else if (powerUp.namePowerUp == 2) {
        powerUp.render.fillStyle = "white";
      } else if (powerUp.namePowerUp == 3) {
        powerUp.render.fillStyle = "pink";
      }
      let brickDelete = pairs[0].bodyB;
      World.remove(world, brickDelete); //suppression brick
    } else if (
      pairs[0].bodyA.label == "brick" &&
      pairs[0].bodyB.label == "ballSecond"
    ) {
      modifyScore(score + 1); //modif score suite collision ball/brick
      if (pairs[0].bodyA.ispowerUp == 2) {
        //création powerUp
        powerUp = Bodies.rectangle(
          pairs[0].bodyA.position.x,
          pairs[0].bodyA.position.y,
          40,
          20,
          {
            isStatic: false,
            label: "powerUp",
            namePowerUp: Math.floor(Math.random() * 3) + 1, // powerup aléatoire  1 à 3
            isSensor: true,
          }
        );
        Composite.add(engine.world, [powerUp]);
        powerUpArray.push(powerUp);
      }
      if (powerUp.namePowerUp == 1) {
        powerUp.render.fillStyle = "black";
      } else if (powerUp.namePowerUp == 2) {
        powerUp.render.fillStyle = "white";
      } else if (powerUp.namePowerUp == 3) {
        powerUp.render.fillStyle = "pink";
      }
      let brickDelete = pairs[0].bodyA;
      World.remove(world, brickDelete); //suppression brick
    }

    //collision powerUp/paddle//
    if (pairs[0].bodyA.label == "paddle" && pairs[0].bodyB.label == "powerUp") {
      varPowerUp = pairs[0].bodyB;
      initPowerUp();
    }

    let bossAlive = true;

    //collision Ball/Boss//
    if ((pairs[0].bodyA.label == "boss" && pairs[0].bodyB.label == "ball") || (pairs[0].bodyB.label == "ballSecond" && pairs[0].bodyA.label == "boss")) {
      modifyLifeBoss(bossLife - 1);
    }
    if(bossLife == 0 ){
      bossAlive = false;
      World.remove(world, boss);
    } 
    if (score == (countRowBrick* countColumnBrick) && false == bossAlive){
      getScoreboard.push({
        nom: namePlayer01,
        score: score,
        timer: sec,
      });
      localStorage.setItem("scoreboard", JSON.stringify(getScoreboard));

      document.location.href = "gamewin.html";

    }
    
    //collision ball/bas
    if (
      (pairs[0].bodyA.label == "ground" && pairs[0].bodyB.label == "ball") ||
      (pairs[0].bodyA.label == "ground" && pairs[0].bodyB.label == "ballSecond")
    ) {
      modifyLives(lives - 1);
    }
    if (lives <= 0 || sec == 0) {
      getScoreboard.push({
        nom: namePlayer01,
        score: score,
        timer: sec,
      });
      localStorage.setItem("scoreboard", JSON.stringify(getScoreboard));

      document.location.href = "gameover.html";

      //fin du monde et message sur div dans fichier html background village
    }

  });

  //si variable score modifiée alors effacer valeurs score et relancer fonction drawscore sinon rien
  //

  //création tableau et événement pour chaque création powerUp même force vers le bas
  Events.on(engine, "beforeUpdate", function (event) {
    drawScore();
    drawLives();
    powerUpArray.forEach((item) => {
      Body.setVelocity(item, { x: 0, y: 0 });
      Body.setPosition(item, { x: item.position.x, y: item.position.y + 1 });
    });
  });
}
