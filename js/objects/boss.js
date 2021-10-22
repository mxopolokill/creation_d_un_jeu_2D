import { engine, render, Events, Body, Bodies, Runner, Composite, world } from "../matter.js";

export let boss = Bodies.circle(805, 85, 75,{
  isStatic: true,
  label: "boss",
  render: {
    fillStyle: "red",
    sprite: {
      texture: "./img/boss/boss.png",
      xScale: 2,
      yScale: 2
    }
  },
});
export let bossLife = 10;

export function modifyLifeBoss(value){
    bossLife = value;
}

export function initBoss() {

    Events.on(engine, "beforeUpdate", function (event) {
        // make bodyA move up and down
        // body is static so must manually update velocity for friction to work
        var py = 1425 * Math.sin(engine.timing.timestamp * 0.0007);
        Body.setPosition(boss, { x: py - boss.position.x, y: 85 });
      });

  Matter.World.add(engine.world, [boss]);
}
