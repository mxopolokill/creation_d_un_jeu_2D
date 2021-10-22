import { initMouse } from "../actions/mouse.js";
import {engine, render, Composites, Composite, Body, Bodies, Constraint, Mouse, Events } from "../matter.js";
import { ball } from "./ball.js";

  // Creation du paddle //
  export const propPaddle = {
    width : 75,
    height: 75,
}

export function modifyPaddleWidth(value){
  propPaddle.width = value;
}

  export let paddle = Bodies.rectangle(800,900,propPaddle.width, propPaddle.height,{
    isStatic: true,
    label: "paddle",
    // render: {
    //     sprite: {
    //         texture: "./img/paddle/paddle.png",
    //     }
    // }
    });

export function initPaddle(){

 initMouse();

Matter.World.add(engine.world,[paddle]);

}

console.log(propPaddle);