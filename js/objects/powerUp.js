import {
  Bodies,
  Body,
  Composite,
  engine,
  Events,
  world,
  World,
} from "../matter.js";
import { varPowerUp, powerUp } from "../actions/collision.js";
import { initPaddle, modifyPaddleWidth, paddle, propPaddle } from "./paddle.js";

export let ballSecond;
let randomForceX = [-0.005, 0.005][Math.floor(Math.random() * 2)];

export function initPowerUp() {
  let powerUpDelete = varPowerUp;

  switch (varPowerUp.namePowerUp) {
    case 1:
      Body.scale(paddle, 2, 1)
      Composite.remove(world, powerUpDelete);
      break;

    case 2:
      console.log("Ajouter un autre powerup ici");
      Composite.remove(world, powerUpDelete);
      break;

    case 3:
      ballSecond = Bodies.circle(800, 855, 10, {
        isStatic: false,
        label: "ballSecond", // ball group identifier(identifiant de groupe de balles)
        restitution: 1, // no speed loss when colliding(pas de perte de vitesse en cas de collision)
        inertia: Infinity, // no speed loss due to torque in a collision(pas de perte de vitesse due au couple en cas de collision)
        friction: 0, // perfect slide in a collision(glissade parfaite en cas de collision)
        frictionAir: 0, // no air resistance(pas de résistance à l'air)
        frictionStatic: 0, // never stop moving(n'arrête jamais de bouger)
        render: {
          fillStyle: "red",
        },
      });
      Body.applyForce(ballSecond, { x: 0, y: 0 }, { x: randomForceX, y: -0.005 });
      World.add(engine.world, [ballSecond]);
      if(ballSecond.position.y === 20 ){
        console.log("la balle 2 est bloqué en haut")
        ballSecond.velocity.y = 5;
      }
      Composite.remove(world, powerUpDelete);
      break;
  }
}
