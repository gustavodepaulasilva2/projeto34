
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(4000,4000);
  

  engine = Engine.create();
  world = engine.world;
  new Box
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

