// module aliases
export const Engine = Matter.Engine;
export const Render = Matter.Render;
export const World = Matter.World;
export const Events = Matter.Events;
export const Composite = Matter.Composite;
export const Composites = Matter.Composites;
export const Vertices = Matter.Vertices;
export const Body = Matter.Body;
export const Bodies = Matter.Bodies;
export const Runner = Matter.Runner;
export const Constraint = Matter.Constraint;
export const Mouse = Matter.Mouse;
export const Common = Matter.Common;
export const MouseConstraint = Matter.MouseConstraint;


export let engine = Engine.create(),
    world = engine.world;
world.gravity.x = 0;
world.gravity.y = 0;

export let render = Render.create({
  element: document.body,
  engine:engine,
  options: {
    width: 1600,
    height: 940,
    pixelRatio: 1,
    background: 'url("893246.jpg") no-repeat center',
    enabled: true,
    // showCollisions: true,
    wireframes: false,
    showAxes: false,
  },
  
});

Matter.Runner.run(engine);
Matter.Render.run(render);