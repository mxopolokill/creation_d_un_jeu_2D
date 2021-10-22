import {engine, render, Engine, Render, Body, Bodies} from "./matter.js";

  // Creation des murs //
    let wallUp = Bodies.rectangle(800,5 ,1600 ,10, { 
      isStatic: true,
    });
    wallUp.label = "wallUp";
    let wallLeft = Bodies.rectangle(5, 475 ,10 ,930, { 
      isStatic: true,
    });
    wallLeft.label = "wallLeft";
    let wallRight = Bodies.rectangle(1595, 475 ,10 ,930, { 
      isStatic: true,
    });
    wallRight.label = "wallRight";
    let wallBottom = Bodies.rectangle(800, 965 ,1600 ,50, { 
      isStatic: true,
    });
    wallBottom.label = "ground";


export function initScene(){

  Matter.World.add(engine.world,[wallUp,wallLeft, wallRight, wallBottom]);
}
