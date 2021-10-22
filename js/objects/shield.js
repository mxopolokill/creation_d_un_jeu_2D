import { Common,engine, render, Events, Body, Bodies, Runner } from "../matter.js";

export let shield = Bodies.rectangle(200, 400, 150, 20, {
  isStatic: true,
  label: "shield",
  render: {
    fillStyle: "blue",
    sprite: {
      texture: "./img/shields/shields.png",
    }
  },
});

export let shield2 = Bodies.rectangle(1403, 400, 150, 20, {
  isStatic: true,
  label: "shield",
  render: {
    fillStyle: "blue",
    sprite: {
      texture: "./img/shields/shields.png",
    }
  },
});

export function initShield() {
  
  Events.on(engine, "beforeUpdate", function (event) {
    // make bodyA move up and down
    // body is static so must manually update velocity for friction to work
    var py = 230 * Math.sin(engine.timing.timestamp * 0.002);
    Body.setPosition(shield, { x: py - shield.position.x, y: 400 });

    Body.setPosition(shield2, { x: py - shield2.position.x, y: 400 });
  });

  Matter.Runner.run(engine);
  Matter.Render.run(render);
  Matter.World.add(engine.world, [shield, shield2]);
}
