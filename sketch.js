const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld,box1,box2,Ground;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  Ground = new ground(200,390,400,10);
}

function draw() {
  background("black");
  rectMode(CENTER);
  Engine.update(myengine);
  box1.display();                                                                                                                                                                                                                                                                                                                             
  box2.display();
Ground.display();
console.log(box2.body.angle);
}
