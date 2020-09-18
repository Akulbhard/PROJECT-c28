
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	

	  
	
}


function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(760,760,10000,40);
    tree  = new Tree(650,350,400,400);
	stone = new stone(400,400,20,20);
	boy = new boy(200,200,800,800);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  drawSprites();
  tree.display();
  ground.display();
  stone.display();
  boy.display();
 
}



