
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cPaper,binpart1,binpart2,binpart3,ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binpart1=new Dustbin(600,630,100,10);
	binpart2=new Dustbin(550,585,10,100)
	binpart3=new Dustbin(650,585,10,100);
	cPaper= new paper(300,585);
	ground=new Ground(150,650,1300,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  binpart1.display();
  binpart2.display();
  binpart3.display();
  ground.display();
  cPaper.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(cPaper.Body,cPaper.Body.position,{x:85,y:-85});
	}

}



