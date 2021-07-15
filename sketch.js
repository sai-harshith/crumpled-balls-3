

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject,engine;
var world;
var Slingshot1


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
    

	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(40,40,20);
	dustbinObj=new dustbin(1000,450);
	groundObject=new ground(600,400);
	//Create a Ground
	
	Slingshot1 = new Slingshot(	paperObject.body,{ x:200,y:100 });
	

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 
  
  paperObject.display();
  dustbinObj.display();
  groundObject.display();
  
  Slingshot1.display(); 
 
  
  
 
}
 

function mouseDragged() {
	Matter.Body.setPosition(paperObject.body,{x : mouseX, y: mouseY});
	}
	
	
	function mouseReleased() {
	Slingshot1.fly();
	}


