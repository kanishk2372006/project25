
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	dustbinObj=new dustbin(1200,650);
	ballobj=  new Ball(200,350,100)
	groundObject=new ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

 
  dustbinObj.display();
  ballobj.display();
  groundObject.display();
}
 
function keyPreseed(){
if(keyCode=== UP_ARROW){

Matter.Body.applyForce(ballobj.body,ballobj.body.position,{x:130,y:-145})


}



}
