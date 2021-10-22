import {engine, render, Composites, Composite, Body, Bodies, Constraint, Mouse, Events } from "../matter.js";
import { paddle } from "../objects/paddle.js";
import { ball } from "../objects/ball.js";

export function initMouse(){
    let mouse = Mouse.create(render.canvas);

    Events.on(engine, 'afterUpdate', function() {
        if (!mouse.position.x) {
          return;
        }

        Body.setPosition(paddle, {
            x: mouse.position.x,
            y: paddle.position.y
        });

        if(ball.velocity.x == 0){
            Body.setPosition(ball, {
            x: mouse.position.x,
            y: ball.position.y
        });
        }
    });
}