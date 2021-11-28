var ball,leftSide,rightSide
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
   
	

	}
	ball = Bodies.circle(50,50,20,ball_options)
     

	engine = Engine.create();
	world = engine.world;
    World.add(world,ball)
	//Create the Bodies Here.
	Matter.Body.circle(body.position.x,body.position.y,radius,[ball_options],)
	World.add(ball)
	Matter.Body.applyForce(ball,ball.position.x,{x:85,y:-85})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundObj.display()
 groundObj=new ground (width/2,670,width,20)
 leftSide = new ground(1100,600,20,1120) 
 rightSide= new ground(1150,600,20,1120)	 
 
}

function keyPressed(){
	if(keyDown === UP_ARROW) {
		Matter.Body.applyForce(body,position,force)
	}
}

