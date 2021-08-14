 
 const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var ice=[];
 var maximumsnow = 100;

function preload(){
  bg = loadImage("snow3.png");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create ();
  world = engine.world;

  if(frameCount % 275 ===0){
    for (var k=0; k<maximumsnow; k++){
    ice.push(newsnow(random(0,1300), random(0.40)));
    }
  }
}

function draw() {
  background(bg);  
  Engine.update(engine);
  for(var p = 0; p< maximumsnow; p++){
    ice[p].display();}
  drawSprites();
}