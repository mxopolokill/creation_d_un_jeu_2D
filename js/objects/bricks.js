import { World, world, Bodies, Composite, engine, Events } from '../matter.js';


//variables 1 brick
let widthBrick = 75; //largeur brique
let heightBrick = 20; //hauteur brique
let posXBrick = 50; //position x init brick - position ligne(gauche)
let posYbrick = 200; //position y init brick - position colonne(haut)

//variable tableau briques
export let countRowBrick = 16; //nombre de colonnes
export let countColumnBrick = 6; //nombre de lignes
let padding = 25; //goulotte espace entre briques
//position brique dans tableau
let tabBricks = [];
for(let rowB=0; rowB<countRowBrick; rowB++) {
  tabBricks[rowB] = [];
  for(let colB=0; colB<countColumnBrick; colB++) {
    tabBricks[rowB][colB] = { x: 0, y: 0 };
  }
}

let brick = {};

//création tableau briques
export function initBrick(){
        for(let colB=0; colB<countColumnBrick; colB++) {   //itération colonne tableau briques
        for(let rowB=0; rowB<countRowBrick; rowB++) { 
            let brickX = (rowB*(widthBrick + padding)+posXBrick); //position colonne et espace gauche
            let brickY = (colB*(heightBrick + (padding / 2 ))+posYbrick); //position ligne et espace haut
            tabBricks[rowB][colB].x = brickX;
            tabBricks[rowB][colB].y = brickY;
            brick = Bodies.rectangle(brickX,brickY,widthBrick,heightBrick, { 
              isStatic: true,
              label: "brick",
              ispowerUp :Math.floor(Math.random()*12) +1, //powerup aléatoire 1 à 12:pas de powerup 13 à 15:powerUp
              render: {
                sprite: {
                    texture: "./img/bricks/ham1.png",
                }
              }
            });

            Composite.add(engine.world,[brick]);
        }
    }

};
