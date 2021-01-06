const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint

var B1;

function setup(){
  createCanvas(1000,1000);
  engine=Engine.create();
world=engine.world;

  B1=new Pendulem(500,500,50,50);

}
function draw(){
background("blue");
Engine.update(engine);
B1.display();
  drawSprites();

}

function mouseDragged(){
Matter.Body.setPosition();
}

function mouseReleased(){
slingshot.fly();
}