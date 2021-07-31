
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,object, world;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

object= Bodies.rectangle(200,200,50,50);
World.add(world,object);
}
function draw()
{
  background(0);
  rectMode(CENTER);
  Engine.update(engine);  
  rect(object.position.x,object.position.y,50,50);
  
}
