import { timer } from "../actions/timer.js";
import {
  engine,
  Body,
  Bodies,
  Composite,
} from "../matter.js";
import { boss, bossLife, modifyLifeBoss } from "./boss.js";
import { paddle } from "./paddle.js";
// import { wallBottom } from "../scene.js";

// Creation de la balle //
export let ball = Bodies.circle(800, 850, 10, {
  isStatic: false,
  label: "ball",
  restitution: 1, // no speed loss when colliding
  inertia: Infinity, // no speed loss due to torque in a collision
  friction: 0, // perfect slide in a collision
  frictionAir: 0, // no air resistance
  frictionStatic: 0, // never stop moving
});


let ballLaunched = false;
let randomForceX = [-0.005, 0.005][Math.floor(Math.random() * 2)];
// export let keys = [];
export function launchBall() {
  document.addEventListener("click", function (evt) {
    if(ballLaunched == false){
    Body.applyForce(ball, { x: 0, y: 0 }, { x: randomForceX, y: -0.005 });
    ballLaunched = true;
    timer();     
    }
  });
}



export function initBall() {

  Matter.World.add(engine.world, [ball]);
  
}
